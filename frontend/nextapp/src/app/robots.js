export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/dashboard"],
      },
    ],
    sitemap: "https://www.susieqsbooks.org/sitemap.xml",
  };
}
