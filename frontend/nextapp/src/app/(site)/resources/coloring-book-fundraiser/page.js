import Link from "next/link";
import ContentPage from "@/components/content-page/ContentPage";
import JsonLd from "@/components/JsonLd";
import pageStyles from "@/components/content-page/content-page.module.css";

export const metadata = {
  title: "Coloring Book Fundraiser for Schools - Fundraising Coloring Books",
  description:
    "Looking for a catalog fundraiser for my school? Students draw the art, sponsors cover printing, and the school pays nothing while keeping the proceeds.",
  alternates: { canonical: "/resources/coloring-book-fundraiser" },
};

// Single source for the visible FAQ and the FAQPage JSON-LD below, so the
// structured data always matches the page content (a Google requirement).
const FAQS = [
  {
    question: "How much does a coloring book fundraiser cost the school?",
    answer:
      "Nothing. Local business sponsors fund each book in exchange for their name and logo on the sponsor page. The school's only investment is classroom drawing time.",
  },
  {
    question: "How long does it take to make the book?",
    answer:
      "Most classrooms finish drawing and uploading within one to two weeks. We trace every drawing into a clean coloring-book page and assemble the book, then sponsors fund the print run.",
  },
  {
    question: "What ages can participate?",
    answer:
      "The project is designed for 8th grade and younger. Any drawing works — there is no wrong way to draw, and every student's art is included.",
  },
  {
    question: "How do schools sell the finished coloring books?",
    answer:
      "Schools typically sell copies at events, through the front office, or as take-home fundraisers. Because sponsors covered printing, nearly every dollar raised stays with the school.",
  },
  {
    question: "Is student information kept private?",
    answer:
      "Yes. Drawings are uploaded with a first name only (and even that is optional). There are no student accounts and no contact information is collected from children.",
  },
  {
    question: "When is the best time of year for a coloring book fundraiser?",
    answer:
      "Fall is the biggest window: September through November, when schools run book fairs and fall festivals. A coloring book pairs naturally with either. The second window is February and March, around Read Across America and Michigan's March is Reading Month. Start drawing about a month before the event where you want finished books.",
  },
  {
    question: "How much money can a school raise?",
    answer:
      "It depends on how many copies sell and the price your school sets. Because sponsors already paid for printing, the school keeps nearly everything it takes in, and families are buying a book their own child helped create, which is a much easier yes than a catalog of products.",
  },
  {
    question: "How is this different from a school book fair?",
    answer:
      "A book fair sells other publishers' books and the school keeps a percentage. In a coloring book fundraiser the book is your students' own art, local sponsors cover the printing, and the school keeps nearly all of the proceeds. Many schools run both: the fair for reading material, the coloring book for fundraising.",
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

export default function ColoringBookFundraiserGuide() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <ContentPage
        kicker="Guide for teachers and PTA groups"
        title="Coloring book fundraiser: turn student art into funds"
        lede="The fundraiser where the product makes itself. Your students draw, their drawings become a real printed coloring book, local sponsors cover every cost, and your school keeps the proceeds."
        ctaLabel="guide-coloring-book-fundraiser"
      >
        <h2>What is a coloring book fundraiser?</h2>
        <p>
          A coloring book fundraiser turns children&apos;s artwork into a
          product families actually want. Instead of selling candy or wrapping
          paper, each student contributes a drawing. Those drawings are traced
          into clean coloring-book pages, printed as a book starring the
          class&apos;s own art, and sold to raise money for the school.
        </p>
        <p>
          With Susie Q&apos;s Books, the model goes one step further:{" "}
          <strong>local business sponsors fund the entire print run</strong> in
          exchange for their logo on the book&apos;s sponsor page. The school
          pays nothing, and nearly every dollar raised stays with the school.
        </p>

        <h2>How it works, step by step</h2>
        <ol>
          <li>
            <strong>Draw.</strong> Students sketch on regular paper with markers
            or crayons during class or art time. No special supplies, no
            artistic bar to clear.
          </li>
          <li>
            <strong>Upload.</strong> Photograph each drawing and{" "}
            <Link href="/drawings">upload it here</Link> — about two minutes
            per drawing, first name only.
          </li>
          <li>
            <strong>We build the book.</strong> Every drawing is traced into a
            bold black-outline coloring page, just like a store-bought coloring
            book, but starring your students.
          </li>
          <li>
            <strong>Sponsors fund it.</strong> Local businesses{" "}
            <Link href="/sponsor">sponsor the book</Link> for $10 a spot; their
            logo is printed in every copy.
          </li>
          <li>
            <strong>Your school fundraises.</strong> Sell the books at events,
            from the office, or as take-home sales. Copies also go into comfort
            bags for children in crisis.
          </li>
        </ol>

        <h2>Why it beats traditional school fundraisers</h2>
        <ul>
          <li>
            <strong>Zero cost to families.</strong> Nobody is pressured to buy
            overpriced cookie dough.
          </li>
          <li>
            <strong>Every child participates.</strong> No selling quotas and no
            wrong way to draw — including kids who can&apos;t sell.
          </li>
          <li>
            <strong>It&apos;s a keepsake, not clutter.</strong> Grandparents buy
            three copies. Families keep them for years.
          </li>
          <li>
            <strong>Built-in community goodwill.</strong> Local sponsors get
            their logo in front of every family, and the school gets a free
            fundraiser.
          </li>
        </ul>

        <h2>When to run a coloring book fundraiser</h2>
        <p>
          Timing decides how easy this is. <strong>Fall (September to
          November)</strong> is peak fundraiser season: schools are already
          running book fairs and fall festivals, and a student-made coloring
          book slots into either as the keepsake families take home. That is
          the rhythm our{" "}
          <Link href="/locations/phoenix">Phoenix-area schools</Link> follow.
        </p>
        <p>
          The second window is <strong>February and March</strong>, built
          around Read Across America and, in Michigan, March is Reading
          Month, when schools run reading challenges and book fairs. Our{" "}
          <Link href="/locations/michigan">Michigan schools</Link> draw in
          January and February so books are ready for March. Either way,
          start about a month ahead: classrooms need one to two weeks to
          draw and upload, and the rest is production.
        </p>

        <h2>Coloring book fundraisers by state</h2>
        <p>
          Interest is coming in from schools well beyond Phoenix and
          Michigan. If you are planning ahead, start with your state page:
        </p>
        <ul>
          <li>
            <Link href="/locations/rhode-island">
              Coloring book fundraiser in Rhode Island
            </Link>
          </li>
          <li>
            <Link href="/locations/arizona">
              Coloring book fundraiser in Arizona
            </Link>
          </li>
          <li>
            <Link href="/locations/california">
              Coloring book fundraiser in California
            </Link>
          </li>
          <li>
            <Link href="/locations/colorado">
              Coloring book fundraiser in Colorado
            </Link>
          </li>
          <li>
            <Link href="/locations/connecticut">
              Coloring book fundraiser in Connecticut
            </Link>
          </li>
        </ul>

        <h2>Tips for a great classroom book</h2>
        <ul>
          <li>
            <strong>Go bold.</strong> Thick markers trace into cleaner coloring
            pages than faint pencil.
          </li>
          <li>
            <strong>One drawing per page.</strong> Give each artist their moment
            — kids flip straight to their own page first.
          </li>
          <li>
            <strong>Photograph flat in daylight.</strong> Two minutes of care
            per photo makes a visibly better book.
          </li>
          <li>
            <strong>Let kids sign with first names.</strong> Seeing their name
            in a real book is the moment they remember.
          </li>
        </ul>

        <h2>Frequently asked questions</h2>
        <div className={pageStyles.faq}>
          {FAQS.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>

        <h2>Compare with other ideas</h2>
        <p>
          Weighing options for your next fundraiser? See how the coloring book
          stacks up in our roundup of{" "}
          <Link href="/resources/school-fundraiser-ideas">
            no-cost school fundraiser ideas
          </Link>
          .
        </p>
      </ContentPage>
    </>
  );
}
