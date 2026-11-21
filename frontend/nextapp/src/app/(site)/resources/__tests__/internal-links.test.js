import { describe, it, expect } from "vitest";
import { render, screen } from "@/test-utils/render";
import FundraiserIdeas from "../school-fundraiser-ideas/page";
import ResourcesIndex from "../page";
import ColoringBookFundraiserGuide from "../coloring-book-fundraiser/page";

const STATE_LINKS = [
  ["Maryland", "/locations/maryland"],
  ["Connecticut", "/locations/connecticut"],
  ["Texas", "/locations/texas"],
];

describe("internal links to state pages", () => {
  it.each([
    ["fundraiser ideas guide", FundraiserIdeas],
    ["resources hub", ResourcesIndex],
  ])("%s links to the top state pages", (name, Page) => {
    render(<Page />);
    for (const [state, href] of STATE_LINKS) {
      const links = screen.getAllByRole("link", {
        name: new RegExp(`coloring book fundraiser in ${state}`, "i"),
      });
      expect(links.length).toBeGreaterThan(0);
      for (const link of links) {
        expect(link).toHaveAttribute("href", href);
      }
    }
  });

  it("coloring book guide lists Maryland in its by-state list", () => {
    render(<ColoringBookFundraiserGuide />);
    const links = screen.getAllByRole("link", {
      name: /coloring book fundraiser in maryland/i,
    });
    expect(links.length).toBe(1);
    expect(links[0]).toHaveAttribute("href", "/locations/maryland");
  });
});
