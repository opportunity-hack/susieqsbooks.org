import SiteHeader from "@/components/site-header/SiteHeader";
import SiteFooter from "@/components/site-footer/SiteFooter";

export default function SiteLayout({ children }) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main-content">{children}</main>
      <SiteFooter />
    </>
  );
}
