import Link from "next/link";
import ContentPage from "@/components/content-page/ContentPage";
import FlierBuilder from "@/components/flier-builder/FlierBuilder";

export const metadata = {
  title: "Start With Your Class",
  description:
    "Teachers: get your classroom's coloring book going in four steps. Name your classroom, print the flier with its QR code, and families handle the rest.",
  alternates: { canonical: "/teachers" },
};

const STEPS = [
  {
    title: "Name your classroom",
    body: "Pick your school, your grade, and your name below. Thirty seconds, no account, no approval - your classroom page exists the moment you make it.",
  },
  {
    title: "Print your flier",
    body: "The flier has a QR code that goes straight to your classroom page. Pin it by the door, send it home in backpacks, or email the link.",
  },
  {
    title: "Kids draw, families upload",
    body: "Students draw on plain paper. A parent snaps a photo and uploads it from their phone - first name only, about two minutes.",
  },
  {
    title: "Sponsors fund the book",
    body: "Local businesses cover the printing, the book gets made, and your class does it again next year. Every year gets its own page.",
  },
];

export default function TeachersPage() {
  return (
    <ContentPage
      kicker="For teachers"
      title="Your class can start today"
      lede="Four steps, nothing to install, nothing to buy, nobody's permission needed. The flier below does the explaining for you."
      ctaLabel="teachers"
    >
      <ol>
        {STEPS.map((step, index) => (
          <li key={step.title}>
            <h3>
              {index + 1}. {step.title}
            </h3>
            <p>{step.body}</p>
          </li>
        ))}
      </ol>

      <h2>Make your classroom flier</h2>
      <p>
        Fill this in and you get a printable flier with a QR code for your
        exact classroom. Parents scan it and land on your class page with the
        upload form already filled in.
      </p>
      <FlierBuilder />

      <h2>Already have a classroom page?</h2>
      <p>
        Find your school&apos;s past books - every class and year is listed,{" "}
        <Link href="/locations">browse the locations hub</Link> or ask us to{" "}
        <Link href="/add-school">add your school</Link>.
      </p>
    </ContentPage>
  );
}
