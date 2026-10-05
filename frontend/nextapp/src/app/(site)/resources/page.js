import Link from "next/link";
import ContentPage from "@/components/content-page/ContentPage";
import pageStyles from "@/components/content-page/content-page.module.css";

export const metadata = {
  title: "Fundraising Resources for Schools",
  description:
    "Free guides for teachers and PTA groups: run a coloring book fundraiser, find local sponsors, and compare no-cost school fundraiser ideas.",
  alternates: { canonical: "/resources" },
};

const ARTICLES = [
  {
    href: "/resources/coloring-book-fundraiser",
    title: "Coloring Book Fundraiser: Turn Student Art into Funds",
    blurb:
      "The complete guide — how a classroom's drawings become a printed coloring book that raises money and costs the school nothing.",
  },
  {
    href: "/resources/school-fundraiser-ideas",
    title: "12 No-Cost School Fundraiser Ideas Teachers Love",
    blurb:
      "Fundraisers that don't ask families to buy wrapping paper: from art-based projects to read-a-thons, ranked by effort and return.",
  },
  {
    href: "/resources/find-local-sponsors",
    title: "How to Find Local Business Sponsors for Your School",
    blurb:
      "A practical outreach playbook: who to ask, what to say, and what sponsors actually get for $10.",
  },
];

export default function ResourcesIndex() {
  return (
    <ContentPage
      kicker="Resources"
      title="Fundraising resources for schools"
      lede="Free, practical guides for teachers, PTA/PTO groups, and school staff — written from running real classroom fundraisers, not from a marketing department."
      ctaLabel="resources-index"
    >
      <div className={pageStyles.cardGrid}>
        {ARTICLES.map((article) => (
          <div key={article.href} className={pageStyles.card}>
            <h3>
              <Link href={article.href}>{article.title}</Link>
            </h3>
            <p>{article.blurb}</p>
          </div>
        ))}
      </div>

      <h2>New here?</h2>
      <p>
        <Link href="/">Susie Q&apos;s Books</Link> is a free classroom project
        from the nonprofit Susie Q&apos;s Kids: students&apos; drawings become a
        printed coloring book, local sponsors cover the cost, and every book
        raises funds for the school <em>and</em> comforts a child in crisis.
        Start with the{" "}
        <Link href="/resources/coloring-book-fundraiser">
          coloring book fundraiser guide
        </Link>
        .
      </p>
    </ContentPage>
  );
}
