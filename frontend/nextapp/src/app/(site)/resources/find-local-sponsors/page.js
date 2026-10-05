import Link from "next/link";
import ContentPage from "@/components/content-page/ContentPage";

export const metadata = {
  title: "Find Local Sponsors for Your School",
  description:
    "How to find local business sponsors for your school fundraiser: who to ask, what to say, and what sponsors get. A practical outreach playbook for PTA groups.",
  alternates: { canonical: "/resources/find-local-sponsors" },
};

export default function FindSponsors() {
  return (
    <ContentPage
      kicker="Playbook for PTA groups and teachers"
      title="How to find local business sponsors for your school"
      lede="Local businesses want to support neighborhood schools — they just need to be asked, clearly and with something real in return. Here's the outreach playbook that works."
      ctaLabel="guide-find-sponsors"
    >
      <h2>Start with businesses that already know your families</h2>
      <p>
        The best prospects are the places your families already frequent: the
        pizza shop near campus, the dentist on the corner, the youth-sports
        league sponsor banners you see every weekend. They advertise to your
        exact neighborhood already — a school fundraiser just gives them a
        warmer way to do it.
      </p>
      <ul>
        <li>Restaurants and cafes within a mile of the school</li>
        <li>Dentists, orthodontists, pediatricians, and eye doctors</li>
        <li>Real estate agents who farm the neighborhood</li>
        <li>Auto shops, salons, and family-owned retail</li>
        <li>Employers of your students&apos; parents (ask the PTA!)</li>
      </ul>

      <h2>What to say: the 30-second pitch</h2>
      <p>
        Keep it concrete and short. Lead with what&apos;s in it for them, not
        with the ask:
      </p>
      <blockquote
        style={{
          borderLeft: "4px solid #12b886",
          paddingLeft: "1rem",
          fontStyle: "italic",
        }}
      >
        &ldquo;Our students made a coloring book from their own drawings, and
        we&apos;re looking for five local sponsors at $10 each. Your logo goes
        on the sponsor page printed in every copy — it&apos;ll be in hundreds
        of Valley homes. Can we put you down?&rdquo;
      </blockquote>
      <p>
        Notice the ingredients: a specific number of spots (scarcity), a tiny
        price (no-brainer), and a tangible deliverable (logo in a real book).
        Vague asks get vague answers.
      </p>

      <h2>Make the yes easy</h2>
      <ul>
        <li>
          <strong>Bring a one-pager</strong>, not a packet. One page: what it
          is, what they get, what it costs, where to sign up.
        </li>
        <li>
          <strong>Let them pay on the spot.</strong> A link they can open on
          their phone beats a form they&apos;ll &ldquo;get to later.&rdquo; Our{" "}
          <Link href="/sponsor">sponsor page</Link> takes two minutes through
          PayPal.
        </li>
        <li>
          <strong>Name a deadline.</strong> &ldquo;We&apos;re printing on the
          15th&rdquo; moves decisions that &ldquo;whenever&rdquo; never will.
        </li>
      </ul>

      <h2>Follow up like you mean it</h2>
      <p>
        After the book prints, deliver what you promised loudly: tag sponsors
        in social posts, thank them at the school event, and send a photo of
        kids holding the book with their logo in it. Sponsors who feel seen
        become <em>annual</em> sponsors — and they tell the business next door.
      </p>

      <h2>The shortcut: send them here</h2>
      <p>
        Don&apos;t want to run outreach yourself? Point local businesses
        straight at <Link href="/sponsor">susieqsbooks.org/sponsor</Link>,
        where they can pick a classroom book, add their logo, and pay in about
        two minutes. Every $10 spot is one more page of the book funded.
      </p>
    </ContentPage>
  );
}
