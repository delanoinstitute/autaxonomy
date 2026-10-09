import type { Metadata } from "next";
import "./globals.css";
import { serif, sans, mono } from "./fonts";
import { SITE, NAV } from "@/content/site";
import SiteHeader from "@/components/SiteHeader";
import LeftNav from "@/components/LeftNav";
import Infobox from "@/components/Infobox";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | ${SITE.role}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  alternates: { canonical: "/" },
  openGraph: {
    siteName: SITE.name,
    title: `${SITE.name} | ${SITE.role}`,
    description: SITE.description,
    url: SITE.url,
    type: "profile",
    locale: "en_US",
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: `${SITE.name}: ${SITE.tagline}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | ${SITE.role}`,
    description: SITE.description,
    images: [SITE.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

// Structured data for the person the whole site describes; one block, on
// every page, so a search result can show who this is without guessing.
const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  url: SITE.url,
  jobTitle: SITE.role,
  description: SITE.tagline,
  email: `mailto:${SITE.email}`,
  image: `${SITE.url}/carousel/portrait.jpg`,
  sameAs: [SITE.linkedin, SITE.youtube],
  knowsAbout: ["Functional Taxonomy", "Benchmark Apprenticeship", "personal transformation", "learning design"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>
        {/* Without JavaScript the taxonomy tables can't be toggled, so show every
            row and hide the chevrons. Declared in Tailwind's base layer: its
            [hidden] rule is !important there, and only a more specific rule in
            the same layer can override it. */}
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              "<style>@layer base{.wiki-article tr[hidden]{display:table-row!important}}.wiki-article .stat-chevron{display:none}</style>",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD) }}
        />
        <a href="#main" className="skip-link">
          Skip to content
        </a>

        <SiteHeader />

        <div className="mx-auto grid max-w-326 grid-cols-1 gap-0 px-0 sm:px-4 lg:grid-cols-[11rem_minmax(0,1fr)_21rem] lg:gap-6">
          {/* Left rail: global Pages navigation (desktop only) */}
          <div className="hidden border-r border-rule px-3 py-5 lg:block">
            <div className="sticky-rail sticky top-[calc(var(--header-h)+0.5rem)] max-h-[calc(100dvh-var(--header-h)-1.5rem)] overflow-y-auto overscroll-contain">
              <LeftNav />
            </div>
          </div>

          {/* Center: the article */}
          <main
            id="main"
            tabIndex={-1}
            className="min-w-0 bg-paper px-5 py-5 outline-hidden sm:px-7"
          >
            <article className="wiki-article">{children}</article>
          </main>

          {/* Right rail: the infobox (desktop only; mobile copy is inline) */}
          <div className="hidden py-5 lg:block">
            <div className="sticky-rail sticky top-[calc(var(--header-h)+0.5rem)] max-h-[calc(100dvh-var(--header-h)-1.5rem)] overflow-y-auto overscroll-contain">
              <Infobox priority />
            </div>
          </div>
        </div>

        {/* Footer: one hairline, two clusters — identity left, destinations
            right. Contact funnels through the About page's offer taxonomy
            rather than exposing a raw mailto (also keeps the address off
            scrapers). LinkedIn and YouTube are the only external profiles. */}
        <footer className="mx-auto max-w-326 px-5 py-8 text-xs text-muted sm:px-7">
          <div className="flex flex-col gap-2 border-t border-rule pt-4 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {SITE.name} · {SITE.tagline}
            </p>
            <nav aria-label="Footer">
              <ul className="flex flex-wrap gap-x-4 gap-y-1">
                <li>
                  <a href="/#lorenzo" className="wikilink">
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener"
                    className="wikilink"
                  >
                    Resume
                  </a>
                </li>
                <li>
                  <a href={`mailto:${SITE.email}`} className="wikilink">
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtube.com/@LorenzoDelano"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wikilink"
                  >
                    YouTube
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/lorenzo-delano-7b6143364/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wikilink"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </footer>

        {/* No-JS fallback navigation */}
        <noscript>
          <nav aria-label="Pages" className="mx-auto max-w-326 px-5 pb-8 text-sm">
            <ul className="flex flex-wrap gap-x-4 gap-y-1">
              {NAV.map((p) => (
                <li key={p.href}>
                  <a href={p.href} className="wikilink">
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </noscript>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
