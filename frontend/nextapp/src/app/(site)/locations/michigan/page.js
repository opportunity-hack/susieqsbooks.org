import Link from "next/link";
import ContentPage from "@/components/content-page/ContentPage";

export const metadata = {
  title: "Michigan Schools Coloring Book Fundraiser",
  description:
    "A free coloring book fundraiser for Warren and Sterling Heights classrooms. Student drawings become a printed book, funded by local sponsors.",
  alternates: { canonical: "/locations/michigan" },
};

export default function MichiganPage() {
  return (
    <ContentPage
      kicker="Warren & Sterling Heights, Michigan"
      title="Where the first coloring books were made"
      lede="Susie Q's Books started here. Our founding classrooms in Warren and Sterling Heights turned their students' drawings into the first printed books — and proved that kids' art can fund a school and comfort a child in crisis at the same time."
      ctaLabel="locations-michigan"
    >
      <h2>How Michigan classrooms join</h2>
      <ol>
        <li>
          <strong>Draw in class.</strong> Regular paper, markers or crayons —
          every student&apos;s art belongs in the book.
        </li>
        <li>
          <strong>Upload photos</strong> of the drawings{" "}
          <Link href="/drawings">here</Link> — about two minutes each, first
          name only, no accounts.
        </li>
        <li>
          <strong>We build the book</strong>, tracing each drawing into a clean
          coloring-book page.
        </li>
        <li>
          <strong>Local sponsors cover the cost</strong> — Macomb County
          businesses <Link href="/sponsor">sponsor the book</Link> for the
          logo on its sponsor page.
        </li>
        <li>
          <strong>Your school fundraises</strong> with the finished book, and
          copies join Susie Q&apos;s Kids comfort bags for children facing a
          crisis.
        </li>
      </ol>

      <h2>Rooted in the community</h2>
      <p>
        Susie Q&apos;s Kids is a Michigan nonprofit, and the Books project grew
        out of its comfort-bag mission: every coloring book made here is also
        tucked into a bag with crayons, a soft bear, a warm blanket, and a
        journal for a child going through a hard time.{" "}
        <a
          href="https://susieqskids.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about Susie Q&apos;s Kids
        </a>
        .
      </p>

      <h2>Bring it to your school</h2>
      <p>
        Teaching in Warren, Sterling Heights, or nearby?{" "}
        <Link href="/add-school">Add your school</Link> and we&apos;ll set up
        your classroom&apos;s book. It&apos;s free — sponsors fund everything.
      </p>
    </ContentPage>
  );
}
