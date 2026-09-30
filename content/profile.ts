// The infobox data — the right-column profile that sits beside the article,
// like the summary box on a Wikipedia biography. Organized into four lenses
// mirroring the site's arc from given to chosen: Sociological (the givens) →
// Professional (the doing) → Psychological (the mind) → Personal (the pages,
// one line each). Group headings carry a page-name link into the page holding
// the full record. Financial/economic data beyond the one-line Wealth status
// is intentionally excluded from the public site.

export type InfoboxValue = {
  text: string;
  href?: string; // optional external link or internal route
  note?: string; // optional tooltip/reference text
  italic?: boolean; // render as an elegant serif-italic quote
};

export type InfoboxRow = {
  label: string;
  labelHref?: string; // link the label itself (e.g. Skills → /knowledge#skills)
  values: InfoboxValue[];
};

export type InfoboxGroup = {
  heading: string;
  headingLink?: { text: string; href: string }; // "(Story)" beside the heading
  headingNote?: string; // unlinked heading suffix, e.g. "(Pages)"
  rows: InfoboxRow[];
};

/** Age computed from the birthdate so it never goes stale. */
export function ageFrom(dobISO: string): number {
  const dob = new Date(dobISO);
  const now = new Date();
  let age = now.getFullYear() - dob.getFullYear();
  const monthDelta = now.getMonth() - dob.getMonth();
  if (monthDelta < 0 || (monthDelta === 0 && now.getDate() < dob.getDate())) {
    age--;
  }
  return age;
}

const DOB = "1987-12-07";
const AGE = ageFrom(DOB);

export const PROFILE = {
  name: "Lorenzo Delano",
  dob: DOB,
};

// Portrait carousel — Delano across contexts. Each shown in a fixed 4:3 box
// (object-cover); objectPosition frames the crop per image.
export type CarouselImage = {
  src: string;
  alt: string;
  context: string; // what the photo shows, e.g. "Speaking"
  location: string;
  year: string;
  photographer?: string; // credit line, when known
  objectPosition?: string;
};

// Eight photos, one per page, in page order; each page opens the carousel on
// its own and the carousel stays freely flippable after landing. Semantic
// pairing: About = the portrait; Story = the oldest photo; Nature = coaching
// a family (psychology in the room); Lifestyle = the gym as a way of life;
// Health = the body itself; Knowledge = producing published works; Wealth =
// the business stage; Network = beside a mentor.
export const PAGE_PORTRAIT: Record<string, number> = {
  "/": 0, // portrait (Joburg 2020)
  "/story": 1, // with his mother (home video, Krugersdorp 1990)
  "/nature": 2, // training workshop (Barcelona 2017)
  "/lifestyle": 3, // gym coaching (Italy 2018)
  "/health": 4, // CPET on the Cosmed cart (SSISA 2022)
  "/knowledge": 5, // clapperboard shoot (Colorado 2019)
  "/wealth": 6, // panel stage (Dubai 2025)
  "/network": 7, // with John Demartini (Cape Town 2024)
};

export const CAROUSEL: CarouselImage[] = [
  {
    src: "/carousel/portrait.jpg",
    alt: "Studio portrait of Lorenzo Delano, arms crossed",
    context: "Portrait",
    location: "Joburg",
    year: "2020",
    photographer: "Paul Samuels",
    objectPosition: "50% 32%",
  },
  {
    src: "/carousel/family.jpg",
    alt: "Delano as a small boy with his mother, a home-video still",
    context: "Family",
    location: "Krugersdorp",
    year: "1990",
    objectPosition: "58% 45%",
  },
  {
    src: "/carousel/training.jpg",
    alt: "Delano leading a training workshop around a table",
    context: "Workshop",
    location: "Barcelona",
    year: "2017",
    photographer: "Paulius Staniunas",
    objectPosition: "50% 45%",
  },
  {
    src: "/carousel/coaching.jpg",
    alt: "Delano coaching a group in a gym",
    context: "Workshop",
    location: "Italy",
    year: "2018",
    photographer: "Mardo Männimägi",
    objectPosition: "72% 48%",
  },
  {
    src: "/carousel/cpet.jpg",
    alt: "Delano on a cycle ergometer wearing a CPET mask, beside the Cosmed metabolic cart",
    context: "CPET",
    location: "SSISA",
    year: "2022",
    objectPosition: "42% 45%",
  },
  {
    src: "/carousel/production.jpg",
    alt: "Delano directing a MasterClass film shoot, holding a clapperboard",
    context: "Production",
    location: "Colorado",
    year: "2019",
    objectPosition: "64% 38%",
  },
  {
    src: "/carousel/promotion.jpg",
    alt: "Delano gesturing while speaking on a panel stage in Dubai",
    context: "Promotion",
    location: "Dubai",
    year: "2025",
    photographer: "Mardo Männimägi",
    objectPosition: "35% 50%",
  },
  {
    src: "/carousel/network.jpg",
    alt: "Delano standing with Dr. John Demartini and a colleague in a hotel corridor",
    context: "Network",
    location: "Cape Town",
    year: "2024",
    photographer: "Paul Samuels",
    objectPosition: "78% 50%",
  },
];

export const INFOBOX: InfoboxGroup[] = [
  {
    // The givens — birth, body, blood, culture, tongue; the legal row closes
    // (same shape as Professional's status pair). The full record is Story.
    heading: "Sociological",
    headingLink: { text: "Story", href: "/story" },
    rows: [
      {
        label: "Born",
        values: [
          { text: "Lorenzo Delano" },
          { text: `7 December 1987 (age ${AGE})` },
          { text: "Krugersdorp, South Africa" },
        ],
      },
      {
        label: "Phenotype",
        values: [
          { text: "Blue eyes and brown hair" },
          { text: "Average height (176 cm)" },
        ],
      },
      { label: "Ancestry", values: [{ text: "Western European (Dutch)" }] },
      { label: "Ethnicity", values: [{ text: "Afrikaner" }] },
      { label: "Language", values: [{ text: "Afrikaans; English; Mandarin" }] },
      { label: "Citizenship", values: [{ text: "South African" }] },
    ],
  },
  {
    // The doing — occupation up top, then the Knowledge trio in the page's
    // own order (Works > Skills > Education, linked into their sections),
    // closing on the status pair.
    heading: "Professional",
    headingLink: { text: "Knowledge", href: "/knowledge" },
    rows: [
      {
        // The single designation — the method he IS (classify by function,
        // test on self, publish). The three trades it feeds (designer,
        // producer, coach) stay legible in the Skills row below.
        label: "Occupation",
        values: [{ text: "Applied taxonomist" }],
      },
      {
        // Trade > subject > medium — the industries he serves, in the
        // site's plain vocabulary (no GICS; it shelves securities).
        label: "Industry",
        values: [{ text: "Education, health, and tech" }],
      },
      {
        label: "Works",
        labelHref: "/knowledge#works",
        values: [
          { text: "Design methodologies" },
          { text: "Published designs" },
        ],
      },
      {
        label: "Skills",
        labelHref: "/knowledge#skills",
        values: [
          { text: "Knowledge organization" },
          { text: "Pedagogy" },
          { text: "Production" },
        ],
      },
      {
        label: "Education",
        labelHref: "/knowledge#education",
        values: [
          { text: "Self-directed (since age 13)" },
          { text: "Certified coach and designer" },
          { text: "Mandarin distinction" },
        ],
      },
      {
        label: "Residency",
        values: [{ text: "United States (since 2026)" }],
      },
    ],
  },
  {
    // The mind — the Nature page's headline outputs, one composite per row.
    heading: "Psychological",
    headingLink: { text: "Nature", href: "/nature" },
    // Intelligence leads the group — full-scale RIOT result, wired the same
    // day as the Nature page's battery (August 2026).
    rows: [
      { label: "Intelligence", values: [{ text: "RIOT: Full-scale IQ 112" }] },
      { label: "Worldview", values: [{ text: "Enlightenment humanist" }] },
      {
        label: "Personality",
        values: [{ text: "HEXACO: Disciplined, honest, and curious" }],
      },
      {
        label: "Values",
        values: [{ text: "PVQ: Autonomy, achievement, and universal-care" }],
      },
      {
        label: "Beliefs",
        values: [{ text: "PWB: Good, safe, and improving" }],
      },
      {
        label: "Interests",
        values: [{ text: "RIASEC: Investigative, artistic, and social" }],
      },
    ],
  },
  {
    // The pages — one status line per remaining page, labels linked; the
    // infobox doubles as the site index.
    heading: "Personal",
    headingNote: "Pages",
    rows: [
      {
        label: "About",
        labelHref: "/",
        values: [{ text: "Every claim referenced" }],
      },
      {
        label: "Lifestyle",
        labelHref: "/lifestyle",
        values: [{ text: "12 habits, all 24 hours" }],
      },
      {
        label: "Health",
        labelHref: "/health",
        values: [{ text: "Elite VO₂max, optimal labs" }],
      },
      {
        label: "Wealth",
        labelHref: "/wealth",
        values: [{ text: "Debt-free, top-tier credit" }],
      },
      {
        label: "Network",
        labelHref: "/network",
        values: [{ text: "Each seat benchmarked" }],
      },
    ],
  },
];
