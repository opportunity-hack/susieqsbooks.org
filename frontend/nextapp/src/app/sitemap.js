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
  ];
}
