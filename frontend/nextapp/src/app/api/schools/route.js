import { NextResponse } from "next/server";
import index from "@/data/schools-index.json";
import { searchSchools } from "@/lib/schoolSearch";

// School picker search over the full NCES index (20k+ schools in the nine
// covered states). The curated list in SchoolSelect is only the starting
// view; typing two or more characters searches everything via this route.
export function GET(request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q") || "";
  const parsed = parseInt(searchParams.get("limit") || "40", 10);
  const limit = Number.isFinite(parsed) ? Math.min(Math.max(parsed, 1), 60) : 40;
  const groups = searchSchools(index, q, limit);
  return NextResponse.json(
    { groups },
    { headers: { "Cache-Control": "public, max-age=3600" } },
  );
}
