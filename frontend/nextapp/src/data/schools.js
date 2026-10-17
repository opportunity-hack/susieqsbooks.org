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
  // Researched Oct 2026: schools with public book-fair / read-a-thon /
  // student-publishing evidence (see src/data/prospects.js). The picker also
  // searches the full NCES school index via /api/schools, so any public
  // elementary school in these states can be picked even if it is not below.
  {
    group: "Texas",
    items: [
      "Parker Elementary",
      "McKamy Elementary",
      "Heritage Rose Elementary",
      "Red Oak Elementary",
      "Samuel Walker Houston Elementary",
      "Basswood Elementary",
    ],
  },
  {
    group: "Florida",
    items: [
      "Grady Elementary",
      "Robert L. Stevenson Elementary",
      "Mamie Agnes Jones Elementary",
      "Discovery Elementary",
      "Deerwood Elementary",
      "Tangelo Park Elementary",
      "Bellalago Charter Academy",
      "Sheridan Park Elementary",
      "Sullivan Partnership Elementary",
    ],
  },
  {
    group: "Illinois",
    items: [
      "Western Avenue Elementary",
      "Edward J. Tobin Elementary",
      "Walt Disney Magnet Elementary",
      "A.N. Pritzker Elementary",
      "Henking Elementary",
      "Naper Elementary",
      "Spring Grove Elementary",
      "Ravinia Elementary",
    ],
  },
  {
    group: "Ohio",
    items: [
      "Summit Academy Elementary – Columbus",
      "Hyde Park School",
      "Avon East Elementary",
      "Pickerington Elementary",
      "Independence Primary School",
      "Knollwood Elementary",
      "Urbana Elementary",
      "Whitehouse Primary",
      "Endeavor Elementary",
      "Denison Elementary",
    ],
  },
  {
    group: "Georgia",
    items: [
      "Morningside Elementary",
      "Virginia-Highland Elementary",
      "E. Rivers Elementary",
      "Fifth Avenue Upper Elementary",
      "Bleckley Primary School",
      "Green Acres Elementary",
    ],
  },
  {
    group: "North Carolina",
    items: [
      "Farmington Woods Magnet Elementary",
      "Weatherstone Elementary",
      "Pleasant Grove Elementary",
      "Mills Park Elementary",
      "Rogers Lane Elementary",
      "Green Hope Elementary",
      "Green Elementary",
      "Billingsville-Cotswold Elementary",
      "Norris S. Childers Elementary",
      "Mint Hill Elementary",
    ],
  },
  {
    group: "Indiana",
    items: [
      "Smoky Row Elementary",
      "Cherry Tree Elementary",
      "College Wood Elementary",
      "South Central Elementary",
      "Washington Elementary",
      "Flint Lake Elementary",
    ],
  },
];

export const SCHOOL_NOT_LISTED = "My school isn't listed";
