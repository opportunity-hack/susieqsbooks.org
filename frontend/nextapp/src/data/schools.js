// School/district choices for the upload form. The backend stores school as a
// plain string, so expanding coverage is just adding entries here.
// Michigan entries are the founding schools and must keep their exact names —
// existing drawings in the database reference these strings.
// Named schools added in Oct 2026 come from the prospect research in
// src/data/prospects.js (schools with a public record of book fairs,
// read-a-thons, or student publishing) — keep the two lists in sync.
export const SCHOOL_GROUPS = [
  {
    group: "Macomb County, Michigan",
    items: [
      "Maurice M. Wilde Elementary School",
      "Margaret I. Susick Elementary School",
      "John H. Siersma Elementary School",
      "Pearl O. Lean Elementary School",
      "Pinewood Elementary School",
      "Briarwood Elementary School",
      "Great Oaks Academy",
      "Michigan Mathematics and Science Academy (MMSA)",
      "Plumbrook Elementary School",
      "Messmore Elementary School",
      "DeKeyser Elementary School",
      "Schwarzkoff Elementary School",
      "Oakbrook Elementary School",
      "Beck Elementary School",
      "Masonic Heights Elementary School",
      "Violet Elementary School",
      "Rodgers Elementary School",
    ],
  },
  {
    group: "Phoenix",
    items: [
      "Madison Elementary School District (Phoenix)",
      "Washington Elementary School District (Phoenix)",
      "Osborn School District (Phoenix)",
      "Creighton School District (Phoenix)",
      "Roosevelt School District (Phoenix)",
      "Paradise Valley Unified School District (Phoenix)",
    ],
  },
  {
    group: "East Valley — Mesa, Chandler, Gilbert, Tempe",
    items: [
      "Mesa Public Schools (Mesa)",
      "Chandler Unified School District (Chandler)",
      "Gilbert Public Schools (Gilbert)",
      "Higley Unified School District (Gilbert)",
      "Kyrene School District (Tempe & Chandler)",
      "Tempe Elementary School District (Tempe)",
      "Broadmor Elementary School",
      "Kyrene Traditional Academy",
      "Kyrene de la Mariposa",
      "Mesquite Elementary School",
      "EDUPRIZE Schools",
    ],
  },
  {
    group: "Scottsdale",
    items: ["Scottsdale Unified School District (Scottsdale)"],
  },
  {
    group: "West Valley — Glendale, Peoria, Surprise, Goodyear",
    items: [
      "Glendale Elementary School District (Glendale)",
      "Deer Valley Unified School District (Phoenix & Glendale)",
      "Peoria Unified School District (Peoria)",
      "Archway Trivium",
      "Canyon Ridge School",
    ],
  },
];

export const SCHOOL_NOT_LISTED = "My school isn't listed";
