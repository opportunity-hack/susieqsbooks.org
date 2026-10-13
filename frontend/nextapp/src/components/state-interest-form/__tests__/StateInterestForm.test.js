import { describe, it, expect, vi, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@/test-utils/render";
import StateInterestForm from "@/components/state-interest-form/StateInterestForm";

const requestSchool = vi.fn();
vi.mock("@/lib/api", () => ({
  requestSchool: (...args) => requestSchool(...args),
}));

const trackSchoolRequestSubmitted = vi.fn();
vi.mock("@/lib/analytics", () => ({
  trackSchoolRequestSubmitted: (...args) =>
    trackSchoolRequestSubmitted(...args),
}));

const TEXAS = { slug: "texas", name: "Texas", abbr: "TX" };

async function fillForm() {
  await userEvent.type(
    screen.getByPlaceholderText("First and last name"),
    "Pat Teacher",
  );
  await userEvent.type(
    screen.getByPlaceholderText("you@example.org"),
    "pat@school.org",
  );
  await userEvent.type(
    screen.getByPlaceholderText("e.g. Desert Sun Elementary"),
    "Desert Sun Elementary",
  );
  await userEvent.type(screen.getByPlaceholderText("e.g. Surprise"), "Austin");
}

describe("StateInterestForm", () => {
  beforeEach(() => {
    requestSchool.mockClear();
    trackSchoolRequestSubmitted.mockClear();
    requestSchool.mockResolvedValue({ success: true });
  });

  it("asks for four things only: name, email, school, city", () => {
    render(<StateInterestForm state={TEXAS} />);
    expect(screen.getByLabelText(/your name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/your email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/school name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/city/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Count us in" }),
    ).toBeInTheDocument();
  });

  it("submits to the school-request endpoint with the state preset and the variant marker", async () => {
    render(<StateInterestForm state={TEXAS} />);
    await fillForm();
    await userEvent.click(screen.getByRole("button", { name: "Count us in" }));

    expect(requestSchool).toHaveBeenCalledWith(
      expect.objectContaining({
        name: "Pat Teacher",
        email: "pat@school.org",
        school_name: "Desert Sun Elementary",
        city: "Austin",
        state: "Texas",
        message: expect.stringContaining("variant B"),
      }),
    );
    expect(trackSchoolRequestSubmitted).toHaveBeenCalledWith({
      school: "Desert Sun Elementary",
      state: "Texas",
    });
    expect(await screen.findByText("You are in!")).toBeInTheDocument();
  });

  it("sends Washington, D.C. for the District of Columbia, matching the add-school form", async () => {
    render(
      <StateInterestForm
        state={{ slug: "district-of-columbia", name: "District of Columbia", abbr: "DC" }}
      />,
    );
    await fillForm();
    await userEvent.click(screen.getByRole("button", { name: "Count us in" }));
    expect(requestSchool).toHaveBeenCalledWith(
      expect.objectContaining({ state: "Washington, D.C." }),
    );
  });

  it("shows a plain error when the request fails", async () => {
    requestSchool.mockRejectedValue(new Error("boom"));
    render(<StateInterestForm state={TEXAS} />);
    await fillForm();
    await userEvent.click(screen.getByRole("button", { name: "Count us in" }));
    expect(
      await screen.findByText(/something went wrong/i),
    ).toBeInTheDocument();
  });
});
