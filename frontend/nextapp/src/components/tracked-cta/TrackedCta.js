"use client";

import Link from "next/link";
import { trackCtaClick } from "@/lib/analytics";

/**
 * A link that reports its clicks to GA4 as `cta_click` events.
 * Page views are tracked automatically by the GoogleAnalytics component;
 * this covers the conversion signal: which calls-to-action get used.
 */
export default function TrackedCta({ label, href, className, children }) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => trackCtaClick(label)}
    >
      {children}
    </Link>
  );
}
