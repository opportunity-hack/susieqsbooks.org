import Link from "next/link";
import ContentPage from "@/components/content-page/ContentPage";
import JsonLd from "@/components/JsonLd";
import pageStyles from "@/components/content-page/content-page.module.css";

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

// Single source for the visible FAQ and the FAQPage JSON-LD below, so the
// structured data always matches the page content (a Google requirement).
const FAQS = [
  {
    question: "What school fundraisers have no upfront cost?",
    answer:
      "The ones on this list: a coloring book fundraiser (local sponsors pay for printing), a read-a-thon (pledges only), restaurant give-back nights, and used book sales all start at zero dollars. Avoid anything that asks the school to buy inventory before it sells.",
  },
  {
    question: "What is the best time of year for a school fundraiser?",
    answer:
      "Fall, September through November, is the biggest window: back-to-school energy, book fairs, and fall festivals are already on the calendar. A second window opens in February and March around Read Across America and March is Reading Month. Whichever you pick, start planning about a month ahead.",
  },
  {
    question: "How can a school fundraise without selling products to families?",
    answer:
      "Use sponsors or pledges instead of products. In a coloring book fundraiser, local businesses fund the book and families buy a keepsake their own child made. Read-a-thons and fun runs run on pledges. Restaurant nights turn a regular dinner out into a donation.",
  },
  {
    question: "Which fundraisers take the least volunteer effort?",
    answer:
      "The low-effort tier of this list: a coloring book fundraiser, restaurant give-back nights, and spirit wear pre-orders. They need coordination, not an army. Save the high-effort events, like a community yard sale, for years when your PTA bench is deep.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function FundraiserIdeas() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
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

      <h2>Frequently asked questions</h2>
      <div className={pageStyles.faq}>
        {FAQS.map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
      </ContentPage>
    </>
  );
}
