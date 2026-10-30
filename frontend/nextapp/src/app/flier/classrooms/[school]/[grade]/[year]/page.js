"use client";
import { useEffect, useMemo, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { Button } from "@mantine/core";
import { getSchoolSummary } from "@/lib/api";
import { absoluteClassroomUrl } from "@/lib/classrooms";
import styles from "./page.module.css";

// Printable flier for one classroom. Teachers print this and send it home:
// the QR code goes straight to the classroom page with the upload form.
export default function ClassroomFlierPage() {
  const { school, grade, year } = useParams();
  const searchParams = useSearchParams();
  const teacher = (searchParams.get("teacher") || "").trim();
  const [data, setData] = useState(null);

  useEffect(() => {
    getSchoolSummary({ school, grade, year })
      .then((res) => setData(res.data))
      .catch(() => setData({ school: null }));
  }, [school, grade, year]);

  const displaySchool =
    data?.school || school.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  const displayGrade =
    data?.grade || grade.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  const classroomUrl = useMemo(() => {
    if (typeof window === "undefined") return "";
    const name = data?.school || displaySchool;
    const grd = data?.grade || displayGrade;
    return absoluteClassroomUrl(window.location.origin, name, grd, year);
  }, [data, displaySchool, displayGrade, year]);

  const qrSrc = classroomUrl
    ? `/api/qr?text=${encodeURIComponent(classroomUrl)}`
    : null;

  return (
    <div className={styles.flier}>
      <div className={styles.actions}>
        <Button onClick={() => window.print()} size="lg">
          Print this flier
        </Button>
        <p className={styles.hint}>
          Print it, pin it by the classroom door, or send it home in backpacks.
        </p>
      </div>

      <h1 className={styles.headline}>Our class is making a coloring book!</h1>
      <p className={styles.classLine}>
        {displaySchool} - {displayGrade}
        {teacher ? ` - ${teacher}'s class` : ""} ({year})
      </p>

      <h2 className={styles.sectionTitle}>Families: three quick steps</h2>
      <ol className={styles.steps}>
        <li>
          <strong>Scan the code</strong> with your phone camera - or visit the
          link below.
        </li>
        <li>
          <strong>Photograph your child&apos;s drawing</strong> - plain paper,
          good light, about two minutes.
        </li>
        <li>
          <strong>Upload it</strong> - first name only, no account needed.
        </li>
      </ol>

      {qrSrc && (
        <div className={styles.qrBlock}>
          <img src={qrSrc} alt="QR code linking to the classroom page" className={styles.qr} />
          <p className={styles.url}>{classroomUrl}</p>
        </div>
      )}

      <p className={styles.footer}>
        Every drawing becomes a real printed coloring-book page. Local sponsors
        cover the printing, so the book is free for the school - and every book
        sold raises funds for the school and comforts a child in need.
        {teacher ? ` Questions? Ask ${teacher}.` : ""}
      </p>
    </div>
  );
}
