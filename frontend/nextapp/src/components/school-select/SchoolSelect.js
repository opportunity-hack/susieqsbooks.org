"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { Select, Text, TextInput } from "@mantine/core";
import { SCHOOL_GROUPS, SCHOOL_NOT_LISTED } from "@/data/schools";
import { trackSchoolNotListed } from "@/lib/analytics";

const somewhereElse = {
  group: "Somewhere else?",
  items: [SCHOOL_NOT_LISTED],
};
const curatedData = [...SCHOOL_GROUPS, somewhereElse];

// Emits a single school string to the parent: either a listed school/district
// or whatever the family types in the escape hatch.
//
// The dropdown starts with the curated groups (partner schools, districts,
// and the researched book-fair schools). Typing 2+ characters searches the
// full NCES index for the nine covered states via /api/schools, so any
// public elementary school there can be picked even if it is not curated.
export default function SchoolSelect({ onChange, error, size = "lg" }) {
  const [choice, setChoice] = useState(null);
  const [customSchool, setCustomSchool] = useState("");
  const [data, setData] = useState(curatedData);
  const requestRef = useRef(0);
  const timerRef = useRef(null);

  const handleSearchChange = (term) => {
    const q = (term || "").trim();
    if (timerRef.current) window.clearTimeout(timerRef.current);
    if (q.length < 2) {
      requestRef.current += 1;
      setData(curatedData);
      return;
    }
    timerRef.current = window.setTimeout(() => {
      const id = ++requestRef.current;
      fetch(`/api/schools?q=${encodeURIComponent(q)}`)
        .then((res) => res.json())
        .then(({ groups }) => {
          if (requestRef.current !== id) return;
          setData([...(groups || []), somewhereElse]);
        })
        .catch(() => {
          if (requestRef.current === id) setData(curatedData);
        });
    }, 250);
  };

  const handleChoice = (value) => {
    setChoice(value);
    if (value === SCHOOL_NOT_LISTED) {
      trackSchoolNotListed("");
      onChange(customSchool.trim());
    } else {
      onChange(value ?? "");
    }
  };

  const handleCustomSchool = (event) => {
    const value = event.currentTarget.value;
    setCustomSchool(value);
    onChange(value.trim());
  };

  return (
    <>
      <Select
        label="School"
        description="Start typing your school's name - the list covers public elementary schools across AZ, MI, TX, FL, IL, OH, GA, NC, and IN."
        placeholder="Pick your school"
        size={size}
        radius="md"
        searchable
        nothingFoundMessage={`Can't find it? Choose "${SCHOOL_NOT_LISTED}"`}
        data={data}
        value={choice}
        onChange={handleChoice}
        onSearchChange={handleSearchChange}
        error={choice === SCHOOL_NOT_LISTED ? undefined : error}
        checkIconPosition="right"
      />
      {choice === SCHOOL_NOT_LISTED && (
        <>
          <TextInput
            label="Your school and city"
            description="We use this to plan where Susie Q's Books goes next"
            placeholder="e.g. Desert Sun Elementary, Surprise, AZ"
            size={size}
            radius="md"
            value={customSchool}
            onChange={handleCustomSchool}
            error={error}
            mt="xs"
          />
          <Text size="sm" c="dimmed" mt={6}>
            Want your school to join for real?{" "}
            <Link href="/add-school">Ask us to add it</Link> — it&apos;s free.
          </Text>
        </>
      )}
    </>
  );
}
