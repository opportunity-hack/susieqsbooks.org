"use client";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button, Group, Text } from "@mantine/core";
import ContentPage from "@/components/content-page/ContentPage";
import { getSchoolSummary } from "@/lib/api";
import { classroomFlierPath } from "@/lib/classrooms";

// One classroom's page: the QR code on the printed flier lands here.
// school/grade/year are URL slugs; the backend matches them against the
// plain-text school and grade stored on drawings (no new tables).
export default function ClassroomPage() {
  const { school, grade, year } = useParams();
  const searchParams = useSearchParams();
  const teacher = (searchParams.get("teacher") || "").trim();
  const [data, setData] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    getSchoolSummary({ school, grade, year })
      .then((res) => setData(res.data))
      .catch(() => setFailed(true));
  }, [school, grade, year]);

  const flier = `${classroomFlierPath(school, grade, year)}${
    teacher ? `?teacher=${encodeURIComponent(teacher)}` : ""
  }`;

  const title = data?.school
    ? `${data.school} - ${data.grade} (${data.year})`
    : "Classroom";
  const uploadHref = data?.school
    ? `/drawings?school=${encodeURIComponent(data.school)}&grade=${encodeURIComponent(data.grade)}`
    : "/drawings";

  return (
    <ContentPage
      kicker={teacher ? `${teacher}'s class` : "Classroom"}
      title={title}
      lede={
        data
          ? `${data.drawing_count} drawing${data.drawing_count === 1 ? "" : "s"} uploaded so far. Scan, snap, upload - it takes about two minutes.`
          : "Upload a drawing for this classroom."
      }
      ctaLabel="classroom"
    >
      <Group gap="sm" mb="lg" wrap="wrap">
        <Button component={Link} href={uploadHref} size="lg">
          Upload a drawing
        </Button>
        <Button component={Link} href={flier} size="lg" variant="outline" color="dark">
          Print flier
        </Button>
      </Group>

      {failed && (
        <Text c="dimmed">
          The live classroom counts are not available right now - the upload
          form above works fine, and counts will show here shortly.
        </Text>
      )}

      {data && data.books.length > 0 && (
        <>
          <h2>This classroom&apos;s books</h2>
          <ul>
            {data.books.map((book) => (
              <li key={book.id}>
                <strong>{book.name || `Book ${book.id}`}</strong>
                {book.is_published ? " - published" : " - in progress"}
              </li>
            ))}
          </ul>
        </>
      )}

      {data && data.drawings.length > 0 && (
        <>
          <h2>Drawings so far ({data.drawing_count})</h2>
          <ul>
            {data.drawings.map((drawing) => (
              <li key={drawing.id}>
                {drawing.url ? (
                  <img
                    src={drawing.url}
                    alt={drawing.subject || "Student drawing"}
                    style={{ maxWidth: 220, height: "auto", display: "block" }}
                    loading="lazy"
                  />
                ) : null}
                <Text size="sm" c="dimmed">
                  {drawing.subject || "Untitled"}
                  {drawing.created_by ? ` by ${drawing.created_by}` : ""}
                </Text>
              </li>
            ))}
          </ul>
        </>
      )}

      {data && data.school && (
        <p>
          <Link href={`/schools/${school}`}>See all of {data.school}&apos;s books</Link>
        </p>
      )}
    </ContentPage>
  );
}
