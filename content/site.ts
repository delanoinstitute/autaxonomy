// Global site metadata and navigation structure.
// Navigation is grouped into two sections of four pages: Constitution (the
// inputs — who he is, where he came from, what he is made of, how he lives) and
// Capital (what those produce — health, knowledge, wealth, network). Each page's children are its
// in-page sections (introduction, three branches, references), rendered as a
// table of contents under the active page in the left nav.
//
// CANONICAL NOMENCLATURE (house style — see DESIGN_SPEC.md §8). One spelling each:
//   learning-systems designer · 10X · single-set-to-failure · self-mastery ·
//   Mindvalley · CrossFit · taxonomical · the six domains, in fixed order:
//   train, eat, finance, learn, mind, plan.
// Voice: principled HYBRID. Third person is the default backbone (the record:
// infobox, home lead, bio, timeline, education, experience). First person for
// the personal layer (identity, health self-assessment, purpose, CTA). Switch
// by section, never mid-paragraph. US spelling; sentence case; Oxford comma.

import type { Metadata } from "next";

export const SITE = {
  name: "Lorenzo Delano",
  role: "Applied Taxonomist",
  tagline: "Designing the technologies of personal transformation",
  description:
    "Lorenzo Delano, applied taxonomist: the Wikipedia-style record of one life, every claim measured and referenced. Mind, health, knowledge, wealth, and network, mapped.",
  url: "https://lorenzodelano.com",
  email: "lorenzo@lorenzodelano.com",
  linkedin: "https://www.linkedin.com/in/lorenzo-delano-7b6143364/",
  youtube: "https://youtube.com/@LorenzoDelano",
  ogImage: "/brand/og-1200x630.png",
};

// Per-page metadata: the title takes the root template ("Page | Lorenzo
// Delano"), the description is the page's own claim in ≤160 characters, and
// the canonical URL keeps search engines on the bare path.
export function pageMeta(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: `${title} | ${SITE.name}`, description, url: path },
  };
}

// kind "refs" marks the References entry — the apparatus, set apart from the
// three content branches in the table of contents.
export type NavSection = { label: string; anchor: string; kind?: "refs" };
export type NavPage = {
  label: string;
  href: string;
  sections: NavSection[];
};
export type NavGroup = { title: string; pages: NavPage[] };

export const NAV_GROUPS: NavGroup[] = [
  {
    title: "Constitution",
    pages: [
      {
        label: "About",
        href: "/",
        sections: [
          { label: "Introduction", anchor: "introduction" },
          { label: "Lorenzo", anchor: "lorenzo" },
          { label: "Website", anchor: "website" },
          { label: "Contact", anchor: "contact" },
          { label: "References", anchor: "references", kind: "refs" },
        ],
      },
      {
        label: "Story",
        href: "/story",
        sections: [
          { label: "Introduction", anchor: "introduction" },
          { label: "Inheritance", anchor: "inheritance" },
          { label: "Development", anchor: "development" },
          { label: "Emergence", anchor: "emergence" },
          { label: "References", anchor: "references", kind: "refs" },
        ],
      },
      {
        label: "Nature",
        href: "/nature",
        sections: [
          { label: "Introduction", anchor: "introduction" },
          { label: "Intellect", anchor: "intellect" },
          { label: "Character", anchor: "character" },
          { label: "Drive", anchor: "drive" },
          { label: "References", anchor: "references", kind: "refs" },
        ],
      },
      {
        label: "Lifestyle",
        href: "/lifestyle",
        sections: [
          { label: "Introduction", anchor: "introduction" },
          { label: "Activity", anchor: "activity" },
          { label: "Time", anchor: "time" },
          { label: "Space", anchor: "space" },
          { label: "References", anchor: "references", kind: "refs" },
        ],
      },
    ],
  },
  {
    title: "Capital",
    pages: [
      {
        label: "Health",
        href: "/health",
        sections: [
          { label: "Introduction", anchor: "introduction" },
          { label: "Integrity", anchor: "integrity" },
          { label: "Balance", anchor: "balance" },
          { label: "Capacity", anchor: "capacity" },
          { label: "References", anchor: "references", kind: "refs" },
        ],
      },
      {
        label: "Knowledge",
        href: "/knowledge",
        sections: [
          { label: "Introduction", anchor: "introduction" },
          { label: "Works", anchor: "works" },
          { label: "Skills", anchor: "skills" },
          { label: "Education", anchor: "education" },
          { label: "References", anchor: "references", kind: "refs" },
        ],
      },
      {
        label: "Wealth",
        href: "/wealth",
        sections: [
          { label: "Introduction", anchor: "introduction" },
          { label: "Security", anchor: "security" },
          { label: "Efficiency", anchor: "efficiency" },
          { label: "Growth", anchor: "growth" },
          { label: "References", anchor: "references", kind: "refs" },
        ],
      },
      {
        label: "Network",
        href: "/network",
        sections: [
          { label: "Introduction", anchor: "introduction" },
          { label: "Care", anchor: "care" },
          { label: "Collaboration", anchor: "collaboration" },
          { label: "Contribution", anchor: "contribution" },
          { label: "References", anchor: "references", kind: "refs" },
        ],
      },
    ],
  },
];

// Flattened list for the sitemap and the no-JS footer fallback.
export const NAV: NavPage[] = NAV_GROUPS.flatMap((g) => g.pages);
