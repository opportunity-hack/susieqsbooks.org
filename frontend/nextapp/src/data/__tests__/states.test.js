import { describe, it, expect } from "vitest";
import {
  STATES,
  FEELER_STATES,
  DEDICATED_STATE_SLUGS,
  REGIONS,
  getStateBySlug,
  statesByRegion,
} from "@/data/states";

describe("STATES data", () => {
  it("covers all 50 states plus DC", () => {
    expect(STATES).toHaveLength(51);
    expect(STATES.filter((s) => s.abbr === "DC")).toHaveLength(1);
  });

  it("has unique slugs and abbreviations", () => {
    expect(new Set(STATES.map((s) => s.slug)).size).toBe(STATES.length);
    expect(new Set(STATES.map((s) => s.abbr)).size).toBe(STATES.length);
  });

  it("gives every state a region and at least one metro", () => {
    for (const state of STATES) {
      expect(REGIONS).toContain(state.region);
      expect(state.metros.length).toBeGreaterThan(0);
    }
  });

  it("uses URL-safe slugs", () => {
    for (const state of STATES) {
      expect(state.slug).toMatch(/^[a-z-]+$/);
    }
  });
});

describe("FEELER_STATES", () => {
  it("excludes states with a dedicated page", () => {
    for (const slug of DEDICATED_STATE_SLUGS) {
      expect(FEELER_STATES.some((s) => s.slug === slug)).toBe(false);
    }
    // Michigan has /locations/michigan already; it must never be generated.
    expect(getStateBySlug("michigan")).toBeNull();
  });

  it("includes the other 49 states plus DC", () => {
    expect(FEELER_STATES).toHaveLength(50);
    expect(getStateBySlug("texas")?.name).toBe("Texas");
    expect(getStateBySlug("district-of-columbia")?.abbr).toBe("DC");
  });
});

describe("statesByRegion", () => {
  it("partitions every state exactly once", () => {
    const total = REGIONS.reduce(
      (sum, region) => sum + statesByRegion(region).length,
      0,
    );
    expect(total).toBe(STATES.length);
  });
});
