"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Text } from "@mantine/core";
import ContentPage from "@/components/content-page/ContentPage";
import { getSchoolSummary } from "@/lib/api";
import { gradeSlug, classroomPath } from "@/lib/classrooms";
import { gradeSortIndex } from "@/data/grades";

// A school's archive: every class and school year, most recent year first.
// Data comes from the public /api/school_summary/ rollup of drawings.
export default function SchoolArchivePage() {
  const { school } = useParams();
  const [data, setData] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    getSchoolSummary({ school })
      .then((res) => setData(res.data))
      .catch(() => setFailed(true));
  }, [school]);

  const classes = (data?.classes || []).slice().sort(
    (a, b) => gradeSortIndex(a.grade === "No grade listed" ? null : a.grade) -
      gradeSortIndex(b.grade === "No grade listed" ? null : b.grade)
  );

  return (
    <ContentPage
      kicker="School archive"
      title={data?.school ? `${data.school}'s coloring books` : "School"}
      lede="Every class and school year, with the most recent first. Classes do this every year - find yours below."
      ctaLabel="school-archive"
    >
      {failed && (
        <Text c="dimmed">
          The archive is not available right now. Please check back shortly.
        </Text>
      )}

      {data && !data.school && (
        <p>
          We have not seen any drawings from this school yet.{" "}
          <Link href="/teachers">Start your class here</Link> - it takes about
          thirty seconds.
        </p>
      )}

      {classes.map((cls) => (
        <div key={cls.grade}>
          <h2>{cls.grade}</h2>
          <ul>
            {cls.years.map((entry) => (
              <li key={entry.year ?? "unknown"}>
                <strong>{entry.year ?? "Year unknown"}</strong> -{" "}
                {entry.drawing_count} drawing{entry.drawing_count === 1 ? "" : "s"}
                {entry.books.length > 0 && (
                  <>
                    {" "}- book:{" "}
                    {entry.books
                      .map((book) => book.name || `Book ${book.id}`)
                      .join(", ")}
                  </>
                )}{" "}
                <Link
                  href={classroomPath(data.school, cls.grade, entry.year)}
                >
                  Classroom page
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {data?.school && (
        <p>
          <Link href="/teachers">Teach here? Start your classroom</Link>
        </p>
      )}
    </ContentPage>
  );
}
