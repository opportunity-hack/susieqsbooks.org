import Link from "next/link";
import ContentPage from "@/components/content-page/ContentPage";
import pageStyles from "@/components/content-page/content-page.module.css";
import { REGIONS, statesByRegion } from "@/data/states";
import { getProspects, PROSPECT_STATE_NOTES } from "@/data/prospects";

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

      <h2>Schools we are inviting in more states</h2>
      <p>
        We researched schools in seven more states that already run book
        fairs, read-a-thons, or student book projects, and we are inviting
        them for their next fair season. Every public elementary school in
        these states (plus Arizona and Michigan) is also in the upload form
        now, so any teacher there can start a book for their classroom.
      </p>
      {Object.values(PROSPECT_STATE_NOTES).map((note) => {
        const schools = getProspects(note.slug).filter((p) => p.inForm);
        return (
          <div key={note.slug}>
            <h3>
              <Link href={`/locations/${note.slug}`}>{note.state}</Link>
            </h3>
            <p>
              {note.season} {note.pitch}
            </p>
            <ul>
              {schools.map((p) => (
                <li key={p.name}>
                  <strong>{p.name}</strong> ({p.city}) - next window:{" "}
                  {p.window}
                </li>
              ))}
            </ul>
          </div>
        );
      })}

      <h2>Browse by state</h2>
      <p>
        Every state has a page, including the ones we have not reached yet.
        Visits and school signups on those pages tell us where demand is
        real, and that ranking decides where we expand next.
      </p>
      {REGIONS.map((region) => (
        <div key={region}>
          <h3>{region}</h3>
          <p>
            {statesByRegion(region).map((state, i) => (
              <span key={state.slug}>
                {i > 0 && " · "}
                <Link href={`/locations/${state.slug}`}>{state.name}</Link>
              </span>
            ))}
          </p>
        </div>
      ))}
    </ContentPage>
  );
}
