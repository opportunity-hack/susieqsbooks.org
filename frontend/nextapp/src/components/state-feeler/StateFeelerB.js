import Link from "next/link";
import styles from "@/components/content-page/content-page.module.css";
import StateInterestForm from "@/components/state-interest-form/StateInterestForm";

/**
 * Variant B for state feeler pages (A/B test against the standard
 * ContentPage layout). Built for the demographic: teachers and parents
 * reading on a phone between other things. Short sentences, plain words,
 * three steps, one short form. The offer leads; the "we are new here"
 * note sits right above the form so expectations stay honest.
 */
export default function StateFeelerB({ state }) {
  const metros = state.metros.join(", ");

  return (
    <article className={styles.page}>
      <header className={styles.hero}>
        <p className={styles.kicker}>Free school fundraiser · {state.name}</p>
        <h1 className={styles.title}>
          A free coloring book fundraiser for {state.name} schools
        </h1>
        <p className={styles.lede}>
          Your students draw the pictures. We turn them into a real coloring
          book. Local businesses pay for the printing, and your school
          raises money selling the book.
        </p>
      </header>

      <div className={styles.body}>
        <h2>How it works</h2>
        <ol>
          <li>
            <strong>Kids draw.</strong> Each student draws one picture in
            class, on plain paper.
          </li>
          <li>
            <strong>You send photos.</strong> Snap a photo of each drawing
            and upload it. It takes about two minutes per drawing.
          </li>
          <li>
            <strong>You get your book.</strong> We print a coloring book
            with all your students&apos; art. Your school sells it and
            keeps the money it raises.
          </li>
        </ol>
        <p>
          It costs your school nothing. Local sponsors pay for the
          printing. Extra copies go to kids in hospitals and shelters in
          comfort bags, so your students&apos; art cheers up kids who need
          it most.
        </p>

        <h2>Who can join</h2>
        <p>
          Any elementary school in {state.name}. Most schools start in{" "}
          {metros}, but your town does not need to be on that list. If your
          school wants in, that is what counts.
        </p>

        <h2>Tell us your school wants in</h2>
        <p>
          We are new in {state.name}, and schools are signing up now. When
          enough {state.name} schools join, we start printing there. Fill
          this out and we will email you when your school can start.
        </p>
        <StateInterestForm state={state} />

        <p>
          Run a business in {state.name}? Sponsors make the books free.{" "}
          <Link href="/sponsor">See how sponsoring works</Link> or read{" "}
          <Link href="/resources/find-local-sponsors">
            how local sponsorship works
          </Link>
          .
        </p>
      </div>
    </article>
  );
}
