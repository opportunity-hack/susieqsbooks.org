import Link from "next/link";
import ContentPage from "@/components/content-page/ContentPage";

export const metadata = {
  title: "12 No-Cost School Fundraiser Ideas",
  description:
    "12 school fundraiser ideas that cost nothing up front: coloring book fundraisers, read-a-thons, art shows and more. Ranked by effort for teachers and PTA groups.",
  alternates: { canonical: "/resources/school-fundraiser-ideas" },
};

const IDEAS = [
  {
    title: "Coloring book fundraiser",
    body: "Students contribute drawings, which become a printed coloring book funded by local sponsors. Zero cost to the school, every child participates, and families get a keepsake instead of clutter.",
    link: { href: "/resources/coloring-book-fundraiser", label: "How it works" },
    effort: "Low",
  },
  {
    title: "Read-a-thon",
    body: "Students gather pledges per book or per reading hour. It promotes literacy, needs no inventory, and runs entirely on enthusiasm.",
    effort: "Low",
  },
  {
    title: "Student art show and silent auction",
    body: "Frame classroom art and auction it to parents. Grandparents are famously unable to resist bidding on their grandchild's masterpiece.",
    effort: "Medium",
  },
  {
    title: "Talent show night",
    body: "Charge a small admission and sell concessions. The acts are free; the memories are priceless; the PTA keeps the door money.",
    effort: "Medium",
  },
  {
    title: "Restaurant give-back nights",
    body: "Local restaurants donate a share of one evening's sales. Zero planning beyond a flyer — just pick a popular spot and spread the word.",
    effort: "Low",
  },
  {
    title: "Used book sale",
    body: "Collect donated books and sell them for a dollar or two. Clears shelves at home, stocks shelves at school, funds the library.",
    effort: "Low",
  },
  {
    title: "Fun run or walk-a-thon",
    body: "Pledges per lap. Healthy, photogenic, and a community event — though it needs volunteers for the route.",
    effort: "Medium",
  },
  {
    title: "Parents' night out",
    body: "Teachers and volunteers run an evening of supervised games and movies while parents get a date night. Charge per child.",
    effort: "Medium",
  },
  {
    title: "School garden plant sale",
    body: "Start seedlings in science class, sell the starters in spring. Educational twice over.",
    effort: "Medium",
  },
  {
    title: "Trivia night for grown-ups",
    body: "Teams pay to enter, local businesses donate prizes. Adults-only events tend to raise more per attendee.",
    effort: "Medium",
  },
  {
    title: "Spirit wear pre-orders",
    body: "No inventory risk: collect orders first, print exactly what's sold. A small margin on every shirt adds up across a whole school.",
    effort: "Low",
  },
  {
    title: "Community yard sale",
    body: "One Saturday, one parking lot, donated goods. The school keeps table fees, the neighborhood declutters.",
    effort: "High",
  },
];

export default function FundraiserIdeas() {
  return (
    <ContentPage
      kicker="For teachers and PTA groups"
      title="12 no-cost school fundraiser ideas"
      lede="Fundraisers that don't ask families to buy wrapping paper. Every idea below costs nothing up front — ranked by how much effort it asks of your volunteers."
      ctaLabel="guide-fundraiser-ideas"
    >
      <ol>
        {IDEAS.map((idea, index) => (
          <li key={idea.title}>
            <h3>
              {index + 1}. {idea.title}{" "}
              <span
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "#0b6b4f",
                }}
              >
                · {idea.effort} effort
              </span>
            </h3>
            <p>
              {idea.body}{" "}
              {idea.link && (
                <Link href={idea.link.href}>{idea.link.label}</Link>
              )}
            </p>
          </li>
        ))}
      </ol>

      <h2>How to choose</h2>
      <p>
        Short on volunteers? Pick from the low-effort tier — the{" "}
        <Link href="/resources/coloring-book-fundraiser">
          coloring book fundraiser
        </Link>{" "}
        and restaurant nights need almost no coordination. Got an energetic PTA?
        The medium-effort events (talent show, art auction, trivia night) raise
        more per attendee and double as community builders.
      </p>
      <p>
        Whatever you choose, start with what your families will actually enjoy.
        The best fundraiser is the one people look forward to next year.
      </p>
    </ContentPage>
  );
}
