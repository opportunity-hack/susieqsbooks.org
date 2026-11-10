import { describe, it, expect } from "vitest";
import { metadata as coloringBookMetadata } from "../coloring-book-fundraiser/page";
import { metadata as ideasMetadata } from "../school-fundraiser-ideas/page";

describe("resource guide metadata", () => {
  it.each([
    ["coloring-book-fundraiser", coloringBookMetadata],
    ["school-fundraiser-ideas", ideasMetadata],
  ])("%s keeps its description within SERP length", (slug, meta) => {
    expect(meta.description.length).toBeLessThanOrEqual(155);
    expect(meta.alternates.canonical).toBe(`/resources/${slug}`);
  });

  it("ends each description with a direct call to action", () => {
    expect(coloringBookMetadata.description).toMatch(
      /start your book today\.$/i,
    );
    expect(ideasMetadata.description).toMatch(/pick one and start\.$/i);
  });
});
