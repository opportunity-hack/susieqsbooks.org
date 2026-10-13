import { describe, it, expect } from "vitest";
import sitemap from "@/app/sitemap";
import { FEELER_STATES } from "@/data/states";

describe("sitemap", () => {
  const entries = sitemap();
  const urls = entries.map((e) => e.url);

  it("lists every feeler state page exactly once", () => {
    for (const state of FEELER_STATES) {
      const url = `https://www.susieqsbooks.org/locations/${state.slug}`;
      expect(urls.filter((u) => u === url)).toHaveLength(1);
    }
  });

  it("keeps the dedicated Michigan page and does not duplicate it", () => {
    expect(
      urls.filter((u) => u === "https://www.susieqsbooks.org/locations/michigan"),
    ).toHaveLength(1);
  });

  it("stays on the www host with a lastModified on every entry", () => {
    for (const entry of entries) {
      expect(entry.url.startsWith("https://www.susieqsbooks.org")).toBe(true);
      expect(entry.lastModified).toBeInstanceOf(Date);
    }
  });

  it("totals 61 URLs (11 core + 50 feeler states)", () => {
    expect(entries).toHaveLength(61);
  });
});
