import Link from "next/link";
import ContentPage from "@/components/content-page/ContentPage";
import JsonLd from "@/components/JsonLd";
import pageStyles from "@/components/content-page/content-page.module.css";

export const metadata = {
  title:
    "School Fundraiser Ideas That Cost Nothing: Auctions, Yearbooks & Coloring Book Fundraisers",
  description:
    "School fundraiser ideas that cost nothing up front: no-cost auctions, yearbook and coloring book fundraisers, read-a-thons and more, ranked by effort.",
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
  {
    question: "What are some no cost school auction ideas?",
    answer:
      "Auction only donated items: gift cards and experiences from local businesses, teacher time such as tutoring or lunch with a favorite teacher, priority perks like the principal's parking spot, and framed student art. Because nothing is bought, every bid is profit. Pair the auction with an existing event so the venue and the crowd are already there.",
  },
  {
    question: "What are good fundraising ideas for a school yearbook?",
    answer:
      "Sell sponsor ads to local businesses to cover the printing, take pre-orders so you print only what is sold, and run a cover art contest to build demand. A student art book raises money the same way at classroom scale: sponsors fund the printing and families buy a keepsake their own child helped make.",
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

      <h2>No cost school auction ideas</h2>
      <p>
        An auction only raises money if the items are donated, and donated is
        exactly what makes it free. Ask local businesses for gift cards,
        services, and experiences rather than merchandise you would have to
        buy. The lots that reliably outperform their value are the personal
        ones: an afternoon of tutoring from a favorite teacher, the
        principal&apos;s parking spot for a month, front-row seats at the
        school play, and framed student art - grandparents bid on that last
        one like it is a gallery opening. Run the auction alongside an event
        that already draws a crowd, like a fall festival or talent show, so
        you are not paying for a room or promotion. Free online bidding tools
        stretch it across a week and let relatives in other states join in.
      </p>
      <p>
        Planning one at your school?{" "}
        <Link href="/add-school">Tell us about your school</Link> - it is
        also how schools join the coloring book list.
      </p>

      <h2>Fundraising ideas for yearbook</h2>
      <p>
        A yearbook is already a keepsake families budget for, which makes it
        a natural fundraiser. Sell advertising pages to local businesses -
        the same sponsor model that funds our coloring books - and the
        yearbook can pay for itself before a single copy sells. Pre-orders do
        the rest: collect payment in the fall, print exactly what is sold,
        and keep the margin. A cover art contest doubles as promotion,
        because every entrant&apos;s family suddenly cares about the book. At
        classroom scale, a book of student art works the same way: sponsors
        cover printing, students supply the content, and families buy the
        keepsake. That is the model behind our{" "}
        <Link href="/resources/coloring-book-fundraiser">
          coloring book fundraiser
        </Link>
        .
      </p>

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
      <p>
        These ideas travel well, too. See what is starting with{" "}
        <Link href="/locations/district-of-columbia">
          school fundraisers in Washington, DC
        </Link>
        , one of the newest areas on our map.
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
