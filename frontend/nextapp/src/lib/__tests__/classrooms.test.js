import { describe, expect, it } from "vitest";
import {
  slugify,
  schoolSlug,
  gradeSlug,
  classroomPath,
  classroomFlierPath,
  schoolPath,
  absoluteClassroomUrl,
} from "../classrooms";

// slugify must match backend/suzie_api/api/views.py slugify_name exactly:
// lowercase, non-alphanumeric runs -> single hyphen, trim edge hyphens.
describe("slugify (backend parity)", () => {
  const cases = [
    ["Smoky Row Elementary", "smoky-row-elementary"],
    ["2nd Grade", "2nd-grade"],
    ["Pre-K", "pre-k"],
    ["St. Mary's School", "st-mary-s-school"],
    ["  Desert  Sun  ", "desert-sun"],
    ["", ""],
  ];
  for (const [input, expected] of cases) {
    it(`slugifies ${JSON.stringify(input)} -> ${expected}`, () => {
      expect(slugify(input)).toBe(expected);
    });
  }
});

describe("classroom URLs", () => {
  it("builds the classroom path", () => {
    expect(classroomPath("Smoky Row Elementary", "2nd Grade", 2026)).toBe(
      "/classrooms/smoky-row-elementary/2nd-grade/2026"
    );
  });

  it("builds the flier path under /flier", () => {
    expect(classroomFlierPath("Smoky Row Elementary", "2nd Grade", 2026)).toBe(
      "/flier/classrooms/smoky-row-elementary/2nd-grade/2026"
    );
  });

  it("builds the school archive path", () => {
    expect(schoolPath("Smoky Row Elementary")).toBe(
      "/schools/smoky-row-elementary"
    );
  });

  it("builds absolute URLs for QR codes", () => {
    expect(
      absoluteClassroomUrl(
        "https://www.susieqsbooks.org",
        "Smoky Row Elementary",
        "2nd Grade",
        2026
      )
    ).toBe(
      "https://www.susieqsbooks.org/classrooms/smoky-row-elementary/2nd-grade/2026"
    );
  });

  it("schoolSlug and gradeSlug are plain slugify", () => {
    expect(schoolSlug("A B")).toBe("a-b");
    expect(gradeSlug("Kindergarten")).toBe("kindergarten");
  });
});
