// Classroom URL helpers for the teacher onboarding flow.
//
// A "classroom" is a school + grade + school year. Drawings already store
// school and grade as plain strings and created_on as a timestamp, so the
// backend (/api/school_summary/) matches on these slugs against those
// columns - no new tables, no migrations. slugify here MUST match
// backend/suzie_api/api/views.py slugify_name exactly.
export function slugify(value) {
  return (value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function schoolSlug(school) {
  return slugify(school);
}

export function gradeSlug(grade) {
  return slugify(grade);
}

// /classrooms/<school>/<grade>/<year>, e.g.
// /classrooms/smoky-row-elementary/2nd-grade/2026
export function classroomPath(school, grade, year) {
  return `/classrooms/${schoolSlug(school)}/${gradeSlug(grade)}/${year}`;
}

export function classroomFlierPath(school, grade, year) {
  return `/flier${classroomPath(school, grade, year)}`;
}

export function schoolPath(school) {
  return `/schools/${schoolSlug(school)}`;
}

// Absolute URL for QR codes and sharing. Pass window.location.origin.
export function absoluteClassroomUrl(origin, school, grade, year) {
  return `${origin}${classroomPath(school, grade, year)}`;
}

export function currentSchoolYear() {
  return new Date().getFullYear();
}
