import { describe, it, expect } from "vitest";
import { render, screen } from "@/test-utils/render";
import StateFeelerPage, {
  generateMetadata,
  generateStaticParams,
} from "../page";
import { FEELER_STATES } from "@/data/states";

describe("state feeler page metadata", () => {
  it("generates one static param per feeler state", () => {
    const params = generateStaticParams();
    expect(params).toHaveLength(FEELER_STATES.length);
    expect(params.map((p) => p.state)).toContain("texas");
    expect(params.map((p) => p.state)).not.toContain("michigan");
  });

  it("keeps every description within SERP length and canonical on the state path", async () => {
    for (const state of FEELER_STATES) {
      const meta = await generateMetadata({ params: { state: state.slug } });
      expect(meta.title).toContain(state.name);
      expect(meta.description.length).toBeLessThanOrEqual(160);
      expect(meta.alternates.canonical).toBe(`/locations/${state.slug}`);
    }
  });

  it("returns empty metadata for unknown slugs", async () => {
    expect(await generateMetadata({ params: { state: "narnia" } })).toEqual({});
  });
});

describe("variant rendering", () => {
  it("renders the simple offer-first page with the form for variant B states (Texas)", () => {
    render(<StateFeelerPage params={{ state: "texas" }} />);
    expect(
      screen.getByRole("heading", {
        name: /free coloring book fundraiser for texas schools/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Count us in" }),
    ).toBeInTheDocument();
  });

  it("renders the standard waitlist page for variant A states (Florida)", () => {
    render(<StateFeelerPage params={{ state: "florida" }} />);
    expect(
      screen.getByRole("heading", { name: /bring susie q's books to florida/i }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Count us in" }),
    ).not.toBeInTheDocument();
  });
});
