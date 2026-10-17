import { describe, it, expect } from "vitest";
import { PROSPECTS, PROSPECT_STATE_NOTES, getProspects } from "@/data/prospects";
import { SCHOOL_GROUPS } from "@/data/schools";

const ALL_SCHOOL_ITEMS = SCHOOL_GROUPS.flatMap((group) => group.items);

describe("PROSPECTS data", () => {
  it("covers the researched Phoenix and Michigan schools plus the Tucson lead", () => {
    expect(getProspects("phoenix")).toHaveLength(7);
    expect(getProspects("michigan")).toHaveLength(10);
    expect(getProspects("expansion")).toHaveLength(1);
  });

  it("covers the seven expansion states researched in Oct 2026", () => {
    expect(getProspects("texas")).toHaveLength(6);
    expect(getProspects("florida")).toHaveLength(9);
    expect(getProspects("illinois")).toHaveLength(8);
    expect(getProspects("ohio")).toHaveLength(10);
    expect(getProspects("georgia")).toHaveLength(7);
    expect(getProspects("north-carolina")).toHaveLength(10);
    expect(getProspects("indiana")).toHaveLength(6);
    expect(PROSPECTS).toHaveLength(74);
  });

  it("has pitch notes for exactly the seven expansion states", () => {
    expect(Object.keys(PROSPECT_STATE_NOTES).sort()).toEqual([
      "florida",
      "georgia",
      "illinois",
      "indiana",
      "north-carolina",
      "ohio",
      "texas",
    ]);
    for (const note of Object.values(PROSPECT_STATE_NOTES)) {
      expect(note.pitch.length).toBeGreaterThan(0);
      expect(note.season.length).toBeGreaterThan(0);
      expect(getProspects(note.slug).length).toBeGreaterThan(0);
    }
  });

  it("gives every prospect a window, evidence, and an https source", () => {
    for (const prospect of PROSPECTS) {
      expect(prospect.window.length).toBeGreaterThan(0);
      expect(prospect.blurb.length).toBeGreaterThan(0);
      expect(prospect.evidence.length).toBeGreaterThan(0);
      expect(prospect.source).toMatch(/^https:\/\//);
      expect(typeof prospect.verified).toBe("boolean");
    }
  });

  it("keeps names unique", () => {
    const keys = PROSPECTS.map((p) => `${p.name}|${p.city}`);
    expect(new Set(keys).size).toBe(PROSPECTS.length);
  });

  it("keeps in-form prospects in sync with the school picker", () => {
    for (const prospect of PROSPECTS) {
      if (prospect.inForm) {
        expect(ALL_SCHOOL_ITEMS).toContain(prospect.name);
      }
    }
    // The Tucson lead shares its name with the Gilbert school in the picker;
    // it stays out of the form because Tucson is not a service area yet.
    const tucson = PROSPECTS.find((p) => p.city === "Tucson");
    expect(tucson.inForm).toBe(false);
    expect(tucson.area).toBe("expansion");
  });

  it("marks Siersma as the existing partner school", () => {
    const siersma = PROSPECTS.find((p) => p.name.includes("Siersma"));
    expect(siersma.partner).toBe(true);
    expect(siersma.inForm).toBe(true);
  });
});
