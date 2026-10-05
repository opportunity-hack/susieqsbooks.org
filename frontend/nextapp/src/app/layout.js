import { Inter, Fredoka } from "next/font/google";
import "@mantine/core/styles.css";
import "@mantine/dropzone/styles.css";
import "./globals.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { GoogleAnalytics } from "@next/third-parties/google";
import { theme } from "@/theme";
import JsonLd from "@/components/JsonLd";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const fredoka = Fredoka({ subsets: ["latin"], variable: "--font-fredoka" });

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata = {
  metadataBase: new URL("https://www.susieqsbooks.org"),
  title: {
    default: "Susie Q's Books – Turn Kids' Drawings into a Real Coloring Book",
    template: "%s | Susie Q's Books",
  },
  description:
    "A free classroom fundraiser: students' drawings become a printed coloring book, local sponsors cover the cost, and every book comforts a child in need.",
  themeColor: "#12b886",
  openGraph: {
    type: "website",
    siteName: "Susie Q's Books",
    locale: "en_US",
    url: "/",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Susie Q's Books – turn kids' drawings into a real coloring book",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Susie Q's Books – Turn Kids' Drawings into a Real Coloring Book",
    description:
      "A free classroom fundraiser: students' drawings become a printed coloring book, local sponsors cover the cost, and every book comforts a child in need.",
    images: ["/opengraph-image"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Susie Q's Books",
  url: "https://www.susieqsbooks.org",
  parentOrganization: {
    "@type": "NGO",
    name: "Susie Q's Kids",
    url: "https://susieqskids.org",
    // Public record: IRS Form 990, SUSIE QS KIDS INC.
    taxID: "83-2545476",
    nonprofitStatus: "NonprofitType",
  },
  description:
    "Susie Q's Books turns kids' drawings into printed coloring books that raise funds for schools and comfort children in crisis.",
  areaServed: [
    { "@type": "City", name: "Warren", address: { "@type": "PostalAddress", addressRegion: "MI" } },
    { "@type": "City", name: "Sterling Heights", address: { "@type": "PostalAddress", addressRegion: "MI" } },
    { "@type": "City", name: "Phoenix", address: { "@type": "PostalAddress", addressRegion: "AZ" } },
    { "@type": "City", name: "Mesa", address: { "@type": "PostalAddress", addressRegion: "AZ" } },
    { "@type": "City", name: "Chandler", address: { "@type": "PostalAddress", addressRegion: "AZ" } },
    { "@type": "City", name: "Gilbert", address: { "@type": "PostalAddress", addressRegion: "AZ" } },
    { "@type": "City", name: "Scottsdale", address: { "@type": "PostalAddress", addressRegion: "AZ" } },
    { "@type": "City", name: "Tempe", address: { "@type": "PostalAddress", addressRegion: "AZ" } },
    { "@type": "City", name: "Glendale", address: { "@type": "PostalAddress", addressRegion: "AZ" } },
    { "@type": "City", name: "Peoria", address: { "@type": "PostalAddress", addressRegion: "AZ" } },
  ],
  sameAs: ["https://susieqskids.org"],
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Susie Q's Books",
  url: "https://www.susieqsbooks.org",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${fredoka.variable}`}>
      <head>
        <ColorSchemeScript />
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={webSiteJsonLd} />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
