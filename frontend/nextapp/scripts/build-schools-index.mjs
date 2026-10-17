#!/usr/bin/env node
/**
 * Builds src/data/schools-index.json from the NCES CCD school directory.
 *
 * Greg's ask (Oct 16, 2026): add ALL schools in the states Susie Q's covers,
 * not just the researched prospects, for the halo effect - any teacher in
 * those states should find their school in the upload form's picker.
 *
 * Source: NCES Common Core of Data, Public Elementary/Secondary School
 * Universe Survey, Directory file, 2024-25 v.2a (file id 6110):
 *   https://nces.ed.gov/ccd/Data/zip/ccd_sch_029_2425_w_1a_073025.zip
 * Download it into ../data/ (gitignored) and run:
 *   node scripts/build-schools-index.mjs
 *
 * Scope: public schools (incl. charters) that are operating and serve at
 * least one of grades 1-5, in AZ, MI, TX, FL, IL, OH, GA, NC, IN.
 * Researched prospects (src/data/prospects.js) are matched onto the index:
 * matched entries keep the prospect's exact picker string as their value so
 * existing school names in the database never change.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { PROSPECTS } from "../src/data/prospects.js";

const here = dirname(fileURLToPath(import.meta.url));
const appRoot = join(here, "..");
const CSV_PATH = join(appRoot, "data", "ccd_sch_029_2425_w_1a_073025.csv");
const OUT_PATH = join(appRoot, "src", "data", "schools-index.json");

const STATES = ["AZ", "MI", "TX", "FL", "IL", "OH", "GA", "NC", "IN"];
const OPERATING = new Set(["Open", "New", "Reopened", "Added"]);
const AREA_STATE = {
  phoenix: "AZ",
  michigan: "MI",
  texas: "TX",
  florida: "FL",
  illinois: "IL",
  ohio: "OH",
  georgia: "GA",
  "north-carolina": "NC",
  indiana: "IN",
  expansion: "AZ",
};

// Minimal RFC 4180 parser: the CCD directory file quotes fields that contain
// commas and has no embedded newlines, which this validates as it goes.
function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (inQuotes) {
      if (ch === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += ch;
      }
    } else if (ch === '"') {
      inQuotes = true;
    } else if (ch === ",") {
      row.push(field);
      field = "";
    } else if (ch === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else if (ch !== "\r") {
      field += ch;
    }
  }
  if (field !== "" || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

const SMALL_WORDS = new Set(["of", "the", "and", "at", "de", "la"]);
function titleCase(raw) {
  const s = String(raw || "").trim();
  if (!s) return s;
  // NCES mixes cases by state; only normalize when the value is all-caps.
  if (s !== s.toUpperCase()) return s;
  return s
    .toLowerCase()
    .split(/(\s+|[-/])/)
    .map((part, i) => {
      if (/^\s+$/.test(part) || part === "-" || part === "/") return part;
      if (i > 0 && SMALL_WORDS.has(part)) return part;
      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join("")
    .replace(/\bMc([a-z])/, (_, c) => "Mc" + c.toUpperCase())
    .replace(/\bMac([a-z])/, (_, c) => "Mac" + c.toUpperCase())
    // Several states abbreviate in NCES ("PARKER EL", "Beck Centennial Elem
    // School"); expand the level words so names read like schools say them.
    .replace(/\sEl$/, " Elementary")
    .replace(/\sElem(\s|$)/, " Elementary$1");
}

function normalize(name) {
  return String(name || "")
    .toLowerCase()
    .replace(/[.,'’\-–/()]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
function normalizeLoose(name) {
  return normalize(name)
    .replace(/\b(elementary|elem|el|school|schools|academy|learning|magnet)\b/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
function tokenSet(name) {
  return new Set(normalizeLoose(name).split(" ").filter(Boolean));
}
function isSubset(a, b) {
  for (const t of a) if (!b.has(t)) return false;
  return a.size > 0;
}

const text = readFileSync(CSV_PATH, "utf8").replace(/^﻿/, "");
const rows = parseCsv(text);
const header = rows[0];
const col = Object.fromEntries(header.map((h, i) => [h, i]));
const cell = (r, name) => (r[col[name]] || "").trim();

const byKey = new Map();
for (const r of rows.slice(1)) {
  const st = cell(r, "LSTATE");
  if (!STATES.includes(st)) continue;
  if (!OPERATING.has(cell(r, "SY_STATUS_TEXT"))) continue;
  const servesElementary = ["G_1_OFFERED", "G_2_OFFERED", "G_3_OFFERED", "G_4_OFFERED", "G_5_OFFERED"].some(
    (g) => cell(r, g) === "Yes",
  );
  if (!servesElementary) continue;
  const n = titleCase(cell(r, "SCH_NAME"));
  const c = titleCase(cell(r, "LCITY"));
  if (!n || !c) continue;
  const key = `${normalize(n)}|${normalize(c)}|${st}`;
  if (!byKey.has(key)) byKey.set(key, { n, c, s: st });
}

// Match researched prospects onto the index so they rank first in search and
// keep their exact picker string as the submitted value.
const unmatched = [];
for (const p of PROSPECTS.filter((x) => x.inForm)) {
  const st = AREA_STATE[p.area];
  if (!st) continue;
  const cityNorm = normalize(p.city.replace(/ area$/, ""));
  const inState = [...byKey.values()].filter((e) => e.s === st);
  const inCity = inState.filter((e) => normalize(e.c) === cityNorm);
  // Prefer a same-city match in every pass: common names (Parker, Washington)
  // exist in many cities per state and must not grab the wrong school.
  const exactKey =
    inCity.find((e) => normalize(e.n) === normalize(p.name)) ||
    inState.find((e) => normalize(e.n) === normalize(p.name));
  const looseKey =
    exactKey ||
    inCity.find((e) => normalizeLoose(e.n) === normalizeLoose(p.name)) ||
    inState.find((e) => normalizeLoose(e.n) === normalizeLoose(p.name));
  // Third pass: token-subset either way (handles "John H. Siersma" vs
  // "Siersma", "Walt Disney" vs "Disney"), guarded by city so generic names
  // cannot grab the wrong school.
  const subsetKey =
    looseKey ||
    inCity.find((e) => {
      const a = tokenSet(e.n);
      const b = tokenSet(p.name);
      return isSubset(a, b) || isSubset(b, a);
    });
  if (subsetKey) {
    subsetKey.p = 1;
    subsetKey.v = p.name;
  } else {
    const entry = {
      n: p.name,
      c: p.city.replace(/ area$/, ""),
      s: st,
      p: 1,
      v: p.name,
    };
    byKey.set(`${normalize(entry.n)}|${normalize(entry.c)}|${st}`, entry);
    unmatched.push(`${p.name} (${p.city}, ${st})`);
  }
}

const schools = [...byKey.values()].sort(
  (a, b) => a.s.localeCompare(b.s) || a.n.localeCompare(b.n) || a.c.localeCompare(b.c),
);
const counts = {};
for (const s of schools) counts[s.s] = (counts[s.s] || 0) + 1;

const out = {
  meta: {
    source: "NCES CCD School Directory 2024-25 v.2a (file 6110), plus researched prospects from src/data/prospects.js",
    scope: "Operating public schools (incl. charters) serving at least one of grades 1-5",
    generated: "2026-10-16",
    counts,
    total: schools.length,
  },
  schools,
};
writeFileSync(OUT_PATH, JSON.stringify(out));
console.log("Wrote", OUT_PATH);
console.log("Total schools:", schools.length);
console.log("Counts by state:", counts);
console.log("Prospects matched or appended; appended-only (not in NCES under that name):");
for (const u of unmatched) console.log("  -", u);
