import Link from "next/link";
import { notFound } from "next/navigation";
import ContentPage from "@/components/content-page/ContentPage";
import { FEELER_STATES, getStateBySlug } from "@/data/states";

// One static page per state we do not serve yet. These are demand probes:
// they rank for "<state> school fundraiser" searches, and GA4 page views
// plus `cta_click` events labeled `locations-<slug>` tell us which states
// to expand into first. Michigan is excluded (dedicated page exists).
export function generateStaticParams() {
  return FEELER_STATES.map((state) => ({ state: state.slug }));
}

export async function generateMetadata({ params }) {
  const state = getStateBySlug(params.state);
  if (!state) return {};
  return {
    title: `${state.name} School Coloring Book Fundraiser`,
    description:
      `Bring a free coloring book fundraiser to ${state.name} schools. ` +
      `Student drawings become a printed book, funded by local sponsors. ` +
      `Add your school.`,
    alternates: { canonical: `/locations/${state.slug}` },
  };
}

export default function StateFeelerPage({ params }) {
  const state = getStateBySlug(params.state);
  if (!state) notFound();

  const isArizona = state.slug === "arizona";
  const metros = state.metros.join(", ");

  return (
    <ContentPage
      kicker={`Now exploring · ${state.name}`}
      title={`Bring Susie Q's Books to ${state.name}`}
      lede={`We are not in ${state.name} classrooms yet. We choose new states based on interest from teachers and sponsors there, and this page is how ${state.name} gets on the list.`}
      ctaLabel={`locations-${state.slug}`}
    >
      {isArizona && (
        <>
          <h2>Already live in metro Phoenix</h2>
          <p>
            Arizona is one of our two active states: classrooms across the
            Valley are making books now. See the{" "}
            <Link href="/locations/phoenix">Phoenix-area page</Link> for
            participating districts, or read on to bring the project to the
            rest of Arizona.
          </p>
        </>
      )}

      <h2>How it works when we arrive</h2>
      <ol>
        <li>
          <strong>Students draw in class.</strong> Regular paper, markers or
          crayons. Every student&apos;s art belongs in the book.
        </li>
        <li>
          <strong>Teachers upload photos</strong> of the drawings, about two
          minutes each, first names only, no accounts.
        </li>
        <li>
          <strong>We build the book</strong>, tracing each drawing into a
          clean coloring-book page.
        </li>
        <li>
          <strong>Local sponsors cover the cost.</strong> {state.name}{" "}
          businesses sponsor the book and get their logo on its sponsor
          page.
        </li>
        <li>
          <strong>The school fundraises with the finished book</strong>, and
          copies join Susie Q&apos;s Kids comfort bags for children facing a
          crisis.
        </li>
      </ol>

      <h2>Where in {state.name} we would start</h2>
      <p>
        Most new areas open with a handful of classrooms in one metro, then
        grow school by school. In {state.name}, the natural starting points
        are {metros}. A school anywhere in the state can join the list,
        though: the first classrooms to sign up in any area shape where we
        launch.
      </p>

      <h2>Two ways to move {state.name} up the list</h2>
      <p>
        <strong>Teach in {state.name}?</strong>{" "}
        <Link href="/add-school">Add your school</Link>. School signups are
        the strongest signal we track, and early schools in a new state get
        set up first when it opens.
      </p>
      <p>
        <strong>Run a {state.name} business?</strong> Every book is paid for
        by local sponsors before a single copy prints. Read{" "}
        <Link href="/resources/find-local-sponsors">
          how local sponsorship works
        </Link>{" "}
        or go straight to the <Link href="/sponsor">sponsor page</Link>.
        Sponsor interest in a state pulls its launch date forward.
      </p>

      <h2>While you wait</h2>
      <p>
        The full playbook is public: the{" "}
        <Link href="/resources/coloring-book-fundraiser">
          coloring book fundraiser guide
        </Link>{" "}
        explains the model end to end, and{" "}
        <Link href="/resources/school-fundraiser-ideas">
          school fundraiser ideas
        </Link>{" "}
        covers fundraisers your PTA can run this semester with no outside
        help. See everywhere we work on the{" "}
        <Link href="/locations">locations page</Link>.
      </p>
    </ContentPage>
  );
}
