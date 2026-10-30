import { FEELER_STATES } from "@/data/states";

export default function sitemap() {
  const base = "https://www.susieqsbooks.org";
  const lastModified = new Date();
  return [
    { url: `${base}/`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    {
      url: `${base}/drawings`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/sponsor`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${base}/add-school`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/teachers`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/locations`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/locations/phoenix`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/locations/michigan`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/resources`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${base}/resources/coloring-book-fundraiser`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/resources/school-fundraiser-ideas`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/resources/find-local-sponsors`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // State feeler pages: one per state we do not serve yet. Their traffic
    // and CTA clicks in GA4 decide where we expand next.
    ...FEELER_STATES.map((state) => ({
      url: `${base}/locations/${state.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    })),
  ];
}
