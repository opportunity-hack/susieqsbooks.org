import Link from "next/link";
import ContentPage from "@/components/content-page/ContentPage";
import pageStyles from "@/components/content-page/content-page.module.css";

export const metadata = {
  title: "Where We Work",
  description:
    "Susie Q's Books partners with classrooms across metro Phoenix and in Warren and Sterling Heights, Michigan. See if your school can join.",
  alternates: { canonical: "/locations" },
};

export default function LocationsIndex() {
  return (
    <ContentPage
      kicker="Service areas"
      title="Where Susie Q's Books works"
      lede="We partner directly with classrooms, so every book is rooted in a real school community. Here are the areas we're actively serving — and how yours gets on the map."
      ctaLabel="locations-index"
    >
      <div className={pageStyles.cardGrid}>
        <div className={pageStyles.card}>
          <h3>Metro Phoenix, Arizona</h3>
          <p>
            Classrooms across the Valley — Scottsdale, Mesa, Chandler, Gilbert,
            Tempe, Glendale, and Peoria. Local businesses sponsor every book.
          </p>
          <p>
            <Link href="/locations/phoenix">Phoenix-area details</Link>
          </p>
        </div>
        <div className={pageStyles.card}>
          <h3>Warren &amp; Sterling Heights, Michigan</h3>
          <p>
            Our founding schools. This is where the first classroom coloring
            books were made — and where the comfort-bag mission began.
          </p>
          <p>
            <Link href="/locations/michigan">Michigan details</Link>
          </p>
        </div>
      </div>

      <h2>Not in one of these areas?</h2>
      <p>
        Join anyway. Pick <strong>&ldquo;My school isn&apos;t listed&rdquo;</strong>{" "}
        when you upload, or{" "}
        <Link href="/add-school">tell us about your school</Link> — that&apos;s
        exactly how we decide where to grow next. New areas open as soon as a
        few classrooms and a local sponsor are ready.
      </p>
    </ContentPage>
  );
}
