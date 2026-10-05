import Link from "next/link";
import ContentPage from "@/components/content-page/ContentPage";

export const metadata = {
  title: "Phoenix Schools Coloring Book Fundraiser",
  description:
    "A free coloring book fundraiser for Phoenix-area classrooms. Students' drawings become a printed book, funded by local sponsors. Now enrolling Scottsdale, Mesa & more.",
  alternates: { canonical: "/locations/phoenix" },
};

const CITIES = [
  "Scottsdale",
  "Mesa",
  "Chandler",
  "Gilbert",
  "Tempe",
  "Glendale",
  "Peoria",
  "Phoenix",
];

export default function PhoenixPage() {
  return (
    <ContentPage
      kicker="Metro Phoenix, Arizona"
      title="A coloring book fundraiser for Phoenix-area schools"
      lede="Your students draw. We turn every drawing into a real coloring-book page. Local Valley businesses cover the printing — so your school gets a fundraiser that costs nothing and means everything."
      ctaLabel="locations-phoenix"
    >
      <h2>How Phoenix classrooms join</h2>
      <ol>
        <li>
          <strong>Draw in class.</strong> Students sketch on regular paper with
          markers or crayons — no special supplies, no wrong answers.
        </li>
        <li>
          <strong>Upload photos.</strong> You or the kids photograph each
          drawing and <Link href="/drawings">upload it here</Link> — about two
          minutes per drawing, first name only.
        </li>
        <li>
          <strong>We build the book.</strong> Every drawing is traced into a
          clean coloring-book page starring your students&apos; own art.
        </li>
        <li>
          <strong>Local sponsors fund it.</strong> Valley businesses{" "}
          <Link href="/sponsor">sponsor the book</Link> in exchange for their
          logo on the sponsor page — your school pays nothing.
        </li>
        <li>
          <strong>Your school fundraises.</strong> Sell or share the finished
          book, and copies also go into comfort bags for children in crisis.
        </li>
      </ol>

      <h2>Cities we serve in the Valley</h2>
      <p>
        We&apos;re enrolling classrooms across {CITIES.slice(0, -1).join(", ")},
        and {CITIES[CITIES.length - 1]}. If your school isn&apos;t listed when
        you upload, pick <strong>&ldquo;My school isn&apos;t listed&rdquo;</strong>{" "}
        — that&apos;s how new campuses open here.
      </p>

      <h2>For Phoenix-area businesses</h2>
      <p>
        Sponsor a classroom book for $10 a spot and your logo is printed in
        every copy — seen by families across the Valley. It&apos;s local
        goodwill with your name literally in children&apos;s hands.{" "}
        <Link href="/sponsor">See open books to sponsor</Link>.
      </p>

      <h2>For PTA and PTO groups</h2>
      <p>
        Looking for a fundraiser that isn&apos;t another candy sale? This one
        runs on art your students already make, needs no volunteers handling
        money, and leaves every family with a keepsake.{" "}
        <Link href="/resources/school-fundraiser-ideas">
          Compare it with other no-cost fundraiser ideas
        </Link>
        .
      </p>
    </ContentPage>
  );
}
