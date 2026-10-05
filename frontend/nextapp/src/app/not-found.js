import Link from "next/link";
import styles from "./not-found.module.css";

export const metadata = {
  title: "Page Not Found",
  description:
    "That page doesn't exist — but the coloring book project does. Find classrooms, sponsor a book, or upload a drawing.",
};

export default function NotFound() {
  return (
    <div className={styles.wrap}>
      <p className={styles.kicker}>404</p>
      <h1 className={styles.title}>This page went off to color outside the lines.</h1>
      <p className={styles.body}>
        The page you&apos;re looking for doesn&apos;t exist, but the good stuff
        is one click away.
      </p>
      <nav className={styles.links} aria-label="Not found">
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/drawings" className={styles.link}>
          Upload a drawing
        </Link>
        <Link href="/sponsor" className={styles.link}>
          Sponsor a book
        </Link>
        <Link href="/add-school" className={styles.link}>
          Add your school
        </Link>
      </nav>
    </div>
  );
}
