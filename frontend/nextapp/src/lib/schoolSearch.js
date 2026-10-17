// Search over the full NCES school index (src/data/schools-index.json).
// Pure function so it can be unit-tested without Next.js.

export const SCHOOL_STATE_NAMES = {
  AZ: "Arizona",
  MI: "Michigan",
  TX: "Texas",
  FL: "Florida",
  IL: "Illinois",
  OH: "Ohio",
  GA: "Georgia",
  NC: "North Carolina",
  IN: "Indiana",
};

function normalize(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[.,'’\-–/()]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// Returns Mantine Select groups: [{ group: "Texas", items: [{value, label}] }].
// Researched prospect schools (p: 1 in the index) rank first and keep their
// exact curated picker string as the value; every other school submits as
// "Name (City, ST)" so same-named schools stay distinguishable.
export function searchSchools(index, query, limit = 40) {
  const tokens = normalize(query).split(" ").filter(Boolean);
  if (tokens.length === 0 || tokens.join("").length < 2) return [];

  const scored = [];
  for (const school of index.schools) {
    const stateName = SCHOOL_STATE_NAMES[school.s] || school.s;
    const haystack = normalize(`${school.n} ${school.c} ${stateName}`);
    if (!tokens.every((t) => haystack.includes(t))) continue;
    const name = normalize(school.n);
    let score = 0;
    if (school.p) score += 100;
    if (name.startsWith(tokens[0])) score += 10;
    if (tokens.every((t) => name.includes(t))) score += 5;
    score -= school.n.length / 1000;
    scored.push({ school, score });
  }
  scored.sort(
    (a, b) => b.score - a.score || a.school.n.localeCompare(b.school.n),
  );

  const groups = [];
  const byState = new Map();
  for (const { school } of scored.slice(0, limit)) {
    const groupName = SCHOOL_STATE_NAMES[school.s] || school.s;
    if (!byState.has(groupName)) {
      const group = { group: groupName, items: [] };
      byState.set(groupName, group);
      groups.push(group);
    }
    byState.get(groupName).items.push({
      value: school.v ?? `${school.n} (${school.c}, ${school.s})`,
      label: school.p
        ? `${school.n} — ${school.c}, ${school.s} · book-fair school`
        : `${school.n} — ${school.c}, ${school.s}`,
    });
  }
  return groups;
}
