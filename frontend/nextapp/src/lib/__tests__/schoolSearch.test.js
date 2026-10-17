import { describe, it, expect } from "vitest";
import { searchSchools } from "@/lib/schoolSearch";
import index from "@/data/schools-index.json";

describe("searchSchools over the real NCES index", () => {
  it("finds a researched prospect and keeps its exact picker string", () => {
    const groups = searchSchools(index, "smoky row");
    const items = groups.flatMap((g) => g.items);
    expect(items[0].value).toBe("Smoky Row Elementary");
    expect(items[0].label).toContain("book-fair school");
    expect(groups[0].group).toBe("Indiana");
  });

  it("finds ordinary schools that were never researched", () => {
    const groups = searchSchools(index, "lincoln", 60);
    const items = groups.flatMap((g) => g.items);
    expect(items.length).toBeGreaterThan(10);
    // Unresearched schools submit as "Name (City, ST)" for disambiguation.
    expect(items.some((i) => /\(.+,\s[A-Z]{2}\)$/.test(i.value))).toBe(true);
  });

  it("matches on city tokens as well as name tokens", () => {
    const groups = searchSchools(index, "smoky carmel", 60);
    const items = groups.flatMap((g) => g.items);
    expect(items).toHaveLength(1);
    expect(items[0].label).toContain("Carmel, IN");
  });

  it("respects the limit and ignores tiny queries", () => {
    const groups = searchSchools(index, "elementary", 10);
    expect(groups.flatMap((g) => g.items)).toHaveLength(10);
    expect(searchSchools(index, "a")).toEqual([]);
    expect(searchSchools(index, "")).toEqual([]);
  });

  it("covers all nine states with plausible counts", () => {
    expect(index.meta.total).toBeGreaterThan(19000);
    for (const st of ["AZ", "MI", "TX", "FL", "IL", "OH", "GA", "NC", "IN"]) {
      expect(index.meta.counts[st]).toBeGreaterThan(1000);
    }
  });
});
