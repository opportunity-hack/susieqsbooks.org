"use client";
import { useState } from "react";
import Link from "next/link";
import { Button, Select, TextInput, NumberInput, Text, Group } from "@mantine/core";
import SchoolSelect from "@/components/school-select/SchoolSelect";
import { GRADES } from "@/data/grades";
import {
  classroomPath,
  classroomFlierPath,
  currentSchoolYear,
} from "@/lib/classrooms";

// Teacher-facing form: name a classroom -> get its page + printable flier.
// No login, no backend writes; the classroom page reads public drawing data.
export default function FlierBuilder() {
  const [school, setSchool] = useState("");
  const [grade, setGrade] = useState(null);
  const [teacher, setTeacher] = useState("");
  const [year, setYear] = useState(currentSchoolYear());
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  const build = () => {
    if (!school.trim()) return setError("Pick your school first.");
    if (!grade) return setError("Pick your grade.");
    if (!year || year < 2020 || year > 2100) return setError("Enter a valid year.");
    setError("");
    setResult({ school: school.trim(), grade, teacher: teacher.trim(), year });
  };

  if (result) {
    const page = classroomPath(result.school, result.grade, result.year);
    const flier = `${classroomFlierPath(result.school, result.grade, result.year)}${
      result.teacher ? `?teacher=${encodeURIComponent(result.teacher)}` : ""
    }`;
    const copy = async () => {
      try {
        await navigator.clipboard.writeText(`${window.location.origin}${page}`);
      } catch {
        // clipboard unavailable; the link below is selectable
      }
    };
    return (
      <div>
        <Text fw={600} size="lg" mb="xs">
          Your classroom is ready: {result.school}, {result.grade} ({result.year})
        </Text>
        <Group gap="sm" mb="md" wrap="wrap">
          <Button component={Link} href={page}>
            Open classroom page
          </Button>
          <Button component={Link} href={flier} variant="outline" color="dark">
            Print flier
          </Button>
          <Button variant="subtle" onClick={copy}>
            Copy link
          </Button>
        </Group>
        <Button variant="subtle" color="gray" size="sm" onClick={() => setResult(null)}>
          Make another flier
        </Button>
      </div>
    );
  }

  return (
    <div>
      <SchoolSelect onChange={setSchool} />
      <Select
        label="Grade"
        placeholder="Pick your grade"
        size="lg"
        radius="md"
        data={GRADES}
        value={grade}
        onChange={setGrade}
        mt="md"
      />
      <TextInput
        label="Your name (optional)"
        description="Printed on the flier so families know whose class this is"
        placeholder="e.g. Ms. Rivera"
        size="lg"
        radius="md"
        value={teacher}
        onChange={(event) => setTeacher(event.currentTarget.value)}
        mt="md"
      />
      <NumberInput
        label="School year"
        size="lg"
        radius="md"
        value={year}
        onChange={setYear}
        min={2020}
        max={2100}
        mt="md"
      />
      {error && (
        <Text c="red" mt="sm">
          {error}
        </Text>
      )}
      <Button size="lg" mt="md" onClick={build}>
        Make my classroom page
      </Button>
    </div>
  );
}
