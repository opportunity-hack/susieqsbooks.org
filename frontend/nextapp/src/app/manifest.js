export default function manifest() {
  return {
    name: "Susie Q's Books – Turn Kids' Drawings into a Real Coloring Book",
    short_name: "Susie Q's Books",
    description:
      "A free classroom fundraiser: students' drawings become a printed coloring book, funded by local sponsors.",
    start_url: "/",
    display: "standalone",
    background_color: "#fffbf3",
    theme_color: "#12b886",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
