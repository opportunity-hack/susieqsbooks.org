import TrackedCta from "@/components/tracked-cta/TrackedCta";
import styles from "./content-page.module.css";

/**
 * Shared layout for SEO content pages (locations + resources).
 * Keeps one H1 per page, a consistent lede, and a tracked CTA band so every
 * landing page reports its conversions to GA4 the same way.
 */
export default function ContentPage({
  kicker,
  title,
  lede,
  ctaLabel = "content-page",
  children,
}) {
  return (
    <article className={styles.page}>
      <header className={styles.hero}>
        {kicker && <p className={styles.kicker}>{kicker}</p>}
        <h1 className={styles.title}>{title}</h1>
        {lede && <p className={styles.lede}>{lede}</p>}
      </header>

      <div className={styles.body}>{children}</div>

      <section className={styles.ctaBand} aria-label="Get started">
        <h2 className={styles.ctaTitle}>Bring it to your school — free</h2>
        <p className={styles.ctaBody}>
          The project costs your school nothing. Local sponsors cover every
          book, and your students&apos; art does the rest.
        </p>
        <div className={styles.ctaRow}>
          <TrackedCta
            label={`${ctaLabel}:start-with-your-class`}
            href="/drawings"
            className={styles.primaryCta}
          >
            Start with your class
          </TrackedCta>
          <TrackedCta
            label={`${ctaLabel}:add-your-school`}
            href="/add-school"
            className={styles.secondaryCta}
          >
            Add your school
          </TrackedCta>
        </div>
      </section>
    </article>
  );
}
