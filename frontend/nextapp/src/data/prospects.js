// School prospects for outreach, from public-source research done
// Oct 16-17, 2026: every school here has a public record (school, district,
// PTA, or publisher pages) of book fairs, read-a-thons, student publishing,
// or similar book-based fundraising. Full research notes are in the repo PR
// that introduced this file.
//
// Fields:
// - name: must match the entry in src/data/schools.js when inForm is true.
// - window: the school's next fundraising window within roughly six months
//   of the research date, inferred from its own historical pattern.
// - blurb: public, one-line summary shown on the location pages.
// - evidence: the historical record the window is inferred from.
// - source: the public page the evidence came from.
// - verified: true when the source was opened and read directly during
//   research; false when it rests on a search-index capture.
// - partner: already a Susie Q's Books school.
// - inForm: listed in the upload/add-school form school picker.
export const PROSPECTS = [
  // Metro Phoenix, Arizona. Book fundraisers cluster here in fall
  // (September-November), with a smaller February window.
  {
    name: "Broadmor Elementary School",
    city: "Tempe",
    district: "Tempe Elementary School District",
    area: "phoenix",
    window: "November 2026",
    blurb:
      "Ran a read-a-thon and book fair in September, with a Fall Festival on November 7.",
    evidence:
      "Read-A-Thon via 99Pledges plus a Book Fair, PTA posts dated Sep 16-21, 2026; Fall Festival announced for Nov 7, 2026.",
    source:
      "https://www.govern1.com/US/Tempe/177550508967709/Broadmor-Elementary-PTA",
    verified: true,
    inForm: true,
  },
  {
    name: "Mesquite Elementary School",
    city: "Gilbert",
    district: "Gilbert Public Schools",
    area: "phoenix",
    window: "November 2026",
    blurb:
      "Fall fundraiser and book fair in September, Fall Festival on November 6.",
    evidence:
      "ParentSquare calendar: Fall Fundraiser Kick Off Sep 10, Book Fair Sep 16-26, Fall Festival Nov 6 (2026-27 school year).",
    source: "https://www.parentsquare.com/schools/49645/rss_widget",
    verified: false,
    inForm: true,
  },
  {
    name: "Kyrene Traditional Academy",
    city: "Chandler",
    district: "Kyrene School District",
    area: "phoenix",
    window: "November 2026 and February 2027",
    blurb:
      "PTO book fair November 9-13 at the Fall Festival, and a second book fair every February.",
    evidence:
      "Burbio listing: Book Fair Nov 9-13 alongside the Fall Festival; principal message recruiting volunteers for a February Book Fair.",
    source:
      "https://www.burbio.com/states/Arizona/Chandler/kyrene-traditional-academy-72962887-f01e-4f1c-bf38-b2f2bdbc6965",
    verified: false,
    inForm: true,
  },
  {
    name: "EDUPRIZE Schools",
    city: "Gilbert",
    district: "Charter (PreK-8)",
    area: "phoenix",
    window: "November 2026",
    blurb:
      "Fall Fest fundraiser in late October, a Literature Day Parade, and a November book fair.",
    evidence:
      "2026 newsletter: Fall Fest Oct 23, Bitty Book Battle Oct 28, Literature Day Parade Oct 30; Nov 2024 newsletter lists a Scholastic Book Fair.",
    source:
      "https://www.eduprize.com/wp-content/uploads/2026/10/Gilbert-Newsletter-9.25.26.pdf",
    verified: false,
    inForm: true,
  },
  {
    name: "Archway Trivium",
    city: "Goodyear",
    district: "Great Hearts Academies",
    area: "phoenix",
    window: "November 2026",
    blurb: "Annual read-a-thon in October and a book fair each November.",
    evidence:
      "Great Hearts flyer: Reada-thon Oct 4-13 and Paper Pie Book Fair Nov 5-8 (2024).",
    source:
      "https://archwaytrivium.greatheartsamerica.org/wp-content/uploads/sites/14/2024/09/Book-Fair-2024.pdf",
    verified: false,
    inForm: true,
  },
  {
    name: "Kyrene de la Mariposa",
    city: "Tempe",
    district: "Kyrene School District",
    area: "phoenix",
    window: "Spring 2027 (book fair runs each October)",
    blurb: "Family book fair paired with Trunk or Treat every October.",
    evidence:
      "School post dated Sep 25, 2025 announcing a Family Book Fair with Trunk or Treat on Oct 24, 2025.",
    source: "https://www.findglocal.com/US/Tempe/658982927612853/Kyrene-de-la-Mariposa",
    verified: false,
    inForm: true,
  },
  {
    name: "Canyon Ridge School",
    city: "Surprise",
    district: "Dysart Unified School District",
    area: "phoenix",
    window: "Any term (publishing runs all year)",
    blurb: "Students published in a real book five years running.",
    evidence:
      "Dysart USD: Canyon Ridge students published in the Veterans Heritage Project book Since You Asked, a fifth consecutive year.",
    source:
      "https://dysart.org/mainsite/pages/canyon-ridge-school/1856/canyon-ridge-students-become-published-authors",
    verified: true,
    inForm: true,
  },
  // Macomb County, Michigan. Book fundraisers cluster here in March
  // (Michigan's March is Reading Month), with a secondary October window.
  {
    name: "Plumbrook Elementary School",
    city: "Sterling Heights",
    district: "Utica Community Schools",
    area: "michigan",
    window: "March 2027",
    blurb:
      "Scholastic Book Fair every March during Reading Month, and a student published in the district's Kaleidoscope.",
    evidence:
      "Newsletter: Book Fair Mar 10-14, 2025 during March is Reading Month; a Plumbrook student named in the 2025-2026 Kaleidoscope.",
    source: "https://secure.smore.com/n/7pj54-community-news",
    verified: false,
    inForm: true,
  },
  {
    name: "Messmore Elementary School",
    city: "Sterling Heights",
    district: "Utica Community Schools",
    area: "michigan",
    window: "March 2027",
    blurb:
      "March is Reading Month program every year, and a student published in Kaleidoscope.",
    evidence:
      "Messmore Messenger (2024-25): Reading Month kickoff Mar 3 with weekly reading slips; a Messmore student named in the 2025-2026 Kaleidoscope.",
    source: "https://secure.smore.com/n/jv1aqs",
    verified: false,
    inForm: true,
  },
  {
    name: "Oakbrook Elementary School",
    city: "Sterling Heights",
    district: "Utica Community Schools",
    area: "michigan",
    window: "March 2027",
    blurb:
      "Family-engagement plan names March is Reading Month and a book fair; a student published in Kaleidoscope.",
    evidence:
      "School family-engagement plan lists March is Reading Month and the Scholastic Book Fair; an Oakbrook student named in the 2025-2026 Kaleidoscope.",
    source:
      "https://oakbrook.uticak12.org/families-community/parent-and-family-engagement-plan",
    verified: false,
    inForm: true,
  },
  {
    name: "DeKeyser Elementary School",
    city: "Sterling Heights",
    district: "Utica Community Schools",
    area: "michigan",
    window: "2026-27 school year",
    blurb: "A student published in the 2025-26 Kaleidoscope district anthology.",
    evidence:
      "Utica Community Schools article naming a DeKeyser student among those published in the 2025-2026 Kaleidoscope.",
    source: "https://www.uticak12.org/Page/3072",
    verified: false,
    inForm: true,
  },
  {
    name: "Schwarzkoff Elementary School",
    city: "Sterling Heights",
    district: "Utica Community Schools",
    area: "michigan",
    window: "2026-27 school year",
    blurb: "A student published in the 2025-26 Kaleidoscope district anthology.",
    evidence:
      "Utica Community Schools article naming a Schwarzkoff student among those published in the 2025-2026 Kaleidoscope.",
    source: "https://www.uticak12.org/Page/3072",
    verified: false,
    inForm: true,
  },
  {
    name: "Beck Elementary School",
    city: "Shelby Township",
    district: "Utica Community Schools",
    area: "michigan",
    window: "March 2027",
    blurb: "Promotes a March is Reading Month challenge.",
    evidence:
      "School homepage promotes a March is Reading Month challenge alongside Oct 2026 calendar items.",
    source: "https://beck.uticak12.org/",
    verified: false,
    inForm: true,
  },
  {
    name: "Masonic Heights Elementary School",
    city: "St. Clair Shores",
    district: "Lake Shore Public Schools",
    area: "michigan",
    window: "March 2027 (also runs an October fair)",
    blurb: "Book fairs in October and March; the proceeds stock the library.",
    evidence:
      "Scholastic Book Fair Oct 14-18, 2024 with proceeds to the library; district eNews lists March book fairs for Lake Shore elementaries.",
    source:
      "https://docs.google.com/document/d/1GDsy22ifLv5TVm4Sw4GIEzi3nNOlti9O/mobilebasic",
    verified: false,
    inForm: true,
  },
  {
    name: "Violet Elementary School",
    city: "St. Clair Shores",
    district: "Lake Shore Public Schools",
    area: "michigan",
    window: "March 2027",
    blurb:
      "Runs the One Book, One School program since 2017, with March book fairs.",
    evidence:
      "One Book, One School coordinated at Violet since 2017 (every K-5 family received the shared book); Scholastic Book Fairs Mar 18-22 for Lake Shore elementaries.",
    source: "https://secure.smore.com/tyu8s",
    verified: false,
    inForm: true,
  },
  {
    name: "Rodgers Elementary School",
    city: "St. Clair Shores",
    district: "Lake Shore Public Schools",
    area: "michigan",
    window: "March 2027",
    blurb: "March Scholastic Book Fairs with the other Lake Shore elementaries.",
    evidence:
      "District eNews names Rodgers in a second round of Scholastic Book Fairs, Mar 16-20.",
    source: "https://app.smore.com/n/16rwf-shorian-nation-enews",
    verified: false,
    inForm: true,
  },
  {
    name: "John H. Siersma Elementary School",
    city: "Warren",
    district: "Warren Consolidated Schools",
    area: "michigan",
    window: "Book fairs through the year",
    blurb:
      "Already one of our founding schools; its families also buy books through a Literati book-fair store.",
    evidence:
      "Literati book-fair store for Siersma Elementary: purchases benefit the school and earn new books for classrooms.",
    source:
      "https://literati.com/store/wishlists/siersma-wishlist?school=siersma-elementary-school-warren-mi",
    verified: false,
    partner: true,
    inForm: true,
  },
  // Expansion lead outside the current service areas: researched and kept
  // here for the day a Tucson area opens. Not in the school picker.
  {
    name: "Mesquite Elementary School",
    city: "Tucson",
    district: "Tucson area",
    area: "expansion",
    window: "Spring (publishing celebration each April)",
    blurb:
      "26 classes wrote, illustrated, and published their own books with Studentreasures.",
    evidence:
      "Studentreasures news release, Apr 11, 2025: 26 Mesquite Elementary (Tucson) classrooms published books and advanced to the National Book Challenge.",
    source:
      "https://studentreasures.com/wp-content/uploads/2025/04/News-Release-18-Million-Author-Celebration.pdf",
    verified: true,
    inForm: false,
  },
];

export function getProspects(area) {
  return PROSPECTS.filter((prospect) => prospect.area === area);
}
