# BRAND SPEC — Lorenzo Delano

Global brand identity for everything Lorenzo produces: website, favicon,
letterhead, email, stamps, slides, documents, taxonomies, video titles.
Not Autaxonomy-specific; Autaxonomy is the site, one surface of the brand.

Companion documents: `DESIGN_SPEC.md` (site typography and layout),
`KNOWLEDGE_SPEC.md` (taxonomy content structure). This document governs
identity; those govern implementation.

Status: v0.4 (2026-10-10). v0.3 (2026-09-04) ratified the symbol (the
Ranked Table, §1.1: a ruled 3×3 with the three ranks in its header row,
replacing the LD cell of v0.1 and the diagonal of v0.2; no initials in any
mark), the inks with their contrast ratios (§2.2) and the tagline lockup
as the complete logo (§1.3). v0.4 adds the taxonomy-document standard: the
legend triad (§2.3a), the Docs anatomy, links, labels, hyphens and running
foot (§4), and the asset inventory (§6.1). Every v0.3 deliverable is
built. v0.5 (2026-10-26) aligns the colour principle and §4 with Taxonomy
(Spec): hue encodes sequence and kind, value encodes hierarchy (§0, §2);
the body is named by the taxonomy's type; supporting tables keep the full
anatomy; the footer name is muted. Version this document at each
ratification and rebuild the guide PDF with
`Brand/Guide (Source)/build_guide.py`.

---

## 0. Thesis

**The brand is the taxonomy.** Lorenzo is an applied taxonomist; his
signature artifact is the tabled taxonomy, whose atom is the cell. Grids
change shape (3×3 classic, 3×2 on the site, facets > matrix > other in the
template) — the cell is invariant. The identity is built from that atom.

Three principles, in rank order:

1. **Structure over ornament.** Every element earns its place by function.
2. **Color sequences; it never decorates.** Hue encodes position on the
   spectrum (kind and order), always in spectrum order; it reads as rank
   only where the sequence is a progression (start at red, graduate to
   violet). Value, the grey ladder, encodes hierarchy. Emphasis is done
   with weight and italics, not color.
3. **Specificity over hype.** The voice states, measures, and cites.

Permitted rule-bends (the "uniquely me" allowances): the parenthetical
gloss as a typographic device; uppercase serif wordmark (encyclopedic,
not corporate); a red seal as a signature mark.

---

## 1. Marks

Three interchangeable forms, one system: symbol, wordmark, lockups. Any
form may stand alone. No initials anywhere in the marks: the wordmark
names, the symbol means.

### 1.1 The Symbol: the Ranked Table (emblem)

A square ruled into nine equal cells, with the three ranks filling the
header row, left to right, in spectrum order: red, green, violet. It is
the matrix's own column bar, and it encodes three of the six taxonomy
elements in one shape: *tabled* (the rules), *3×3* (the matrix),
*triadic* (three ranked cells). A table with its header: the symbol is
the artifact, not an abstraction of it.

- Geometry: square. Rule = side ÷ 30 (1 px minimum); inner rules equal
  the border; cells equal. No rounding, no ornament (a table, not a
  badge; the former LD header circle is retired).
- **Primary**: ink rules, paper cells, triad header. Every size,
  including the 16 px favicon (4 px cells stay legible).
- **Monochrome**: ink rules, paper cells, ink header: one tone, an ink
  band over six paper cells. Wherever color is unavailable or forbidden:
  embossing, engraving, single-color print, stamps.
- **On ink**: paper rules, ink cells; the header keeps the triad (the
  hues survive on dark grounds) or goes paper for the monochrome form.
- **Seal**: rules and header in `red-ink`, paper cells (§1.4).
- Minimum size: 16 px. Clear space: one grid cell (side ÷ 3) on all
  sides.
- The three hues are legitimate here only because they mark sequence
  (columns one to three, as in every matrix). They are never reordered,
  never spread below the header, never graded.
- Retired candidates, for the record (canvas board "Record"): the LD
  monogram cell (v0.1: initials); the diagonal (v0.2: a pattern the table
  never shows, dice-like in monochrome); "ld" pixel tiles (the filled bowl
  erases the d; three tones in monochrome; initials again); nine separated
  squares (cells without rules; collapses at 16 px; two tones in
  monochrome).
- **Triad row**: the same three ranks flattened into one row of small
  squares (red, green, violet) beside a URL or running foot. A device,
  never a substitute for the symbol.

### 1.2 The Wordmark

**LORENZO DELANO** in Newsreader, semibold, uppercase, tracking 0.02em
(site header on mobile) to 0.055em (site header on desktop, large/print,
as on the resume). Optical size
axis on (`opsz`). One line; never stacked except in the vertical lockup
(§1.3). Ink on paper; paper on ink or on a solid rank hue.

Secondary wordmark: product names (**3Squared**, **MSP**, **TimeWell** and
the rest) and the site's name, **Autaxonomy**, set the same way, never
larger than the primary wordmark when both appear.

### 1.3 Lockups

- **Horizontal** (default): symbol side = 1.43× the wordmark's font size
  (about twice its cap height), centered on the cap height, gap = half a
  symbol side, wordmark right. Site header on mobile: 26 px symbol
  centered on the wordmark's cap height.
- **Vertical**: symbol side = 4× the wordmark's font size, centered above
  it, gap = one font size; for square avatars and stamps.
- **Gloss lockup**: wordmark followed by a parenthetical gloss in
  Newsreader italic, regular weight, sentence case:
  `LORENZO DELANO (Applied Taxonomist)` · `LORENZO DELANO (Autaxonomy)`.
  The gloss names the context of use, exactly as glosses name branches on
  the site. This is the brand's one deliberate rule-bend and its most
  recognizable device.
- **Tagline lockup** (the complete logo; `public/brand/lockup-tagline.svg`
  and `-on-ink.svg`): symbol, wordmark, and the tagline beneath in
  Newsreader italic, *Designing the technologies of personal
  transformation*, all in ink, no gloss. Proportions in units of the
  wordmark size N: tagline 0.587 N; tagline baseline 0.7614 N below the
  wordmark baseline; symbol side 1.613 N, its top on the wordmark's cap
  line and its bottom on the tagline's lowest descender; gap between
  symbol and text = half a side. Set with line-height 1, the cap line is
  0.02 N below the wordmark's box top and the tagline's box starts 1.065 N
  below it. Standard on the desktop site header (35.72 px symbol in a 68 px
  header, so N = 22.15 px and the tagline is exactly the 13 px text floor;
  was a 35 px symbol, N = 21.7, until 2026-10-09; mobile drops the tagline for the horizontal
  lockup), the LinkedIn banner (N = 64), the YouTube channel art (N = 92
  in the 1546 × 423 safe area), and the Open Graph
  image (`public/brand/og-1200x630.png`, with the URL beneath). Ratified
  2026-09-04.

### 1.4 The Seal (secondary mark)

The symbol in solid `red-ink` (rules and header red, cells paper), used
as a stamp: signatures, certificate corners, document footers, the 404
page. Square, never rotated, and reads as a chop. Optional tertiary
variant for personal (non-commercial) use: a solid red cell carrying the
character 龍 or Lorenzo's Chinese name in seal script — the dragon's
place in the system, earned by the Mandarin distinction, kept off the
professional surfaces. Never combined with the wordmark in the same
lockup; the seal signs, the wordmark names.

### 1.5 Don'ts

No rounded symbol. No gradients. No drop shadows. No rotation. No
shuffled ranks (the header is always red, green, violet from the left).
No fills below the header. No hue on the wordmark. No initials in any
mark. No dragon on the primary emblem. Never more than one seal per
surface.

---

## 2. Color

### 2.1 Neutrals (the paper and the ink)

| Token | Value | Use |
| --- | --- | --- |
| `ink` | `#1b1c1d` | Text, rules on white, solid cell, title bands |
| `ink-2` | `#3a3d3f` | Secondary solid surfaces |
| `muted` | `#5a5f66` | Secondary text, glosses in UI |
| `rule` | `#c8ccd1` | Table rules, cell borders |
| `rule-soft` | `#e6e8eb` | Interior hairlines |
| `band-neutral` | `#e8eaed` | Bands outside a sequence (infobox headers) |
| `surface` | `#f4f5f6` | App ground |
| `paper` | `#ffffff` | Page, cell fill |
| `mark` | `#fef6e7` | Highlight only |

On the site (`app/globals.css`) the brand accent is ink: `--accent` is
`ink` and `--accent-light` is `ink-2`, so the identity marks (symbol
rules, active nav pill, carousel dot) stay neutral and the spectrum is the
only color system; `--accent-soft` is `band-neutral`. The earlier teal
accent is retired (values kept in a code comment).

### 2.2 The spectrum palette (six stops, spectrum order)

Every sequenced structure colors its steps in this order, first step red.
Hue marks where an item sits in the sequence and what kind it is; it marks
hierarchy only when the sequence is itself a progression. Hierarchy proper
is carried by value: the grey ladder (§4).
Tints are the site's band tokens, `--band-red` … `--band-violet`
(backgrounds, ink text on them): every page's six bands (three branches ×
two bands) take stops 1–6 down the page. Inks are the saturated counterparts for marks, lines, and text on
paper. Ratified 2026-09-04 against WCAG contrast: every ink clears AA
(≥ 4.5:1) on paper, which also clears paper text on the ink (the ratio is
symmetric), and the neutral ink clears every tint by a wide margin.

| Stop | Hue | Tint (bg) | Ink (fg) | Ink on paper | Neutral ink on tint | Ink on own tint |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | red | `#ecccc9` | `#ba0000` | 6.80 | 11.42 | 4.55 |
| 2 | orange | `#f0d9c0` | `#b45309` | 5.02 | 12.51 | 3.68 |
| 3 | yellow | `#efe3b8` | `#7a5c00` | 6.25 | 13.29 | 4.87 |
| 4 | green | `#c8e0c4` | `#2e7d32` | 5.13 | 12.12 | 3.64 |
| 5 | blue | `#c8daee` | `#3366cc` | 5.37 | 11.96 | 3.76 |
| 6 | violet | `#d9cfe8` | `#5e35b1` | 8.02 | 11.41 | 5.36 |

The last column governs one rule: a stop's ink on its own tint (orange,
green, blue fall between 3:1 and 4.5:1) is permitted only for large or
bold text and for rules and fills, never for body text. Tables never need
it: keywords in their hue sit on paper, and tinted bands carry neutral ink.
Blue stays identical to the site's link color on purpose.

Functional colors that live outside the sequence: `link #3366cc` (also blue ink),
`focus #0b57d0`,
`danger = red-ink` (the site's `--link-red`).

### 2.3 The identity triad

For identity surfaces (banner, letterhead accents, slide title bars,
three-level structures), the palette compresses to three stops spanning
the spectrum: **red · green · violet** — stops 1, 4, 6: the beginning,
middle, and end of every page; the arc from given to chosen.

### 2.3a The legend triad (taxonomy legends)

A taxonomy's FACETS row has three columns with three jobs (§4): the left
column names the **groups** (the matrix columns), the middle column the
**rows** (the matrix bands), and the right column is the **legend**: the
categories that keywords inside the cells are colour-coded by. Groups and
rows share the identity triad (red · green · violet, in order). The legend
gets its own triad so a keyword's legend colour can never be mistaken for
a group or row:

| Legend position | Hue | Ink | Tint | On paper | Timing (Budget) example |
| --- | --- | --- | --- | --- | --- |
| 1 | ochre | `#7a5c00` (the yellow ink) | `#efe3b8` | 6.25 | Maintenance |
| 2 | blue | `#3366cc` (the blue ink) | `#c8daee` | 5.37 | Development |
| 3 | magenta | `#ad1457` | `#edcbda` | 6.97 | Leisure |

Legend tints fill cells that belong to one legend category (Training
(Schedule)'s Mobilise · Stabilise · Perform steps). The magenta tint matches
the red and violet tints' lightness; neutral ink on it is 11.5.

It follows the same order rule: red → green → violet runs round the hue
wheel, and ochre → blue → magenta continues in the same direction.
Ratified 2026-10-09 on measured distinctness: the weakest pair is
ΔE2000 36.6 apart for typical vision and 15.2 under simulated
deuteranopia, protanopia and tritanopia, and at least 18.0 from every
triad hue. The red/orange/gold legend it replaces measured 14.8, 1.9 and
0 (its red was the group red). The brand's in-between stops (orange ·
yellow · blue) were rejected as a legend: orange and red read as one
colour (1.9) to red-green colour-blind readers. Magenta is a legend-only
ink; it never marks a group or a row.

**Legacy documents.** Older taxonomies used red · green · **blue** as the
identity triad. Blue in a legacy document's groups or rows means the third
stop, so it becomes violet; blue is now reserved for legend position 2
(and links on screen).

### 2.4 Rules

1. Hue count = stop count. Six stops → ROYGBV. Three → red/green/violet.
   Two → red/violet (the ends). One → ink only.
2. Spectrum order is sequence order, top-down or left-to-right; it reads
   as hierarchy only when the sequence is a progression. Hierarchy itself
   is value: the grey ladder. Never shuffle hues for aesthetics.
3. Text on tints is ink. Text on inks is paper. Never tint-on-tint.
4. Hue is never used for emphasis, decoration, mood, or "brand splash."
   The one exception is the seal.
5. Neutrals carry ≥ 80% of any surface; hue is the legend, not the page.
6. A hue means one thing everywhere in a document: a group hue is never a
   legend hue, and a legend keyword keeps its hue wherever it appears.

---

## 3. Typography

| Role | Face | Weights | Notes |
| --- | --- | --- | --- |
| Display, headings, wordmark | **Newsreader** (variable, `opsz`) | 600 (semibold), 400 italic | Encyclopedic register; italics for leads, glosses, taglines |
| Body, UI, tables, letters | **Inter** | 400, 500, 600 | 14–16 px UI; 9.4–11 pt print |
| Data, IDs, code, hashes | **JetBrains Mono** | 400 | Disambiguates 0/O, 1/l/I |

Google Docs (taxonomies, plans): band headings (paper text on ink) take
Newsreader; body stays Arial, the face the documents were laid out in, so
no line re-wraps. Inter replaces Arial only in documents built new outside
Docs.

Scale (site tokens): h1 1.75–2.25 rem · h2 1.375–1.625 rem · h3 1.125–1.25
rem · lead 1.06–1.125 rem · body 1 rem · small 0.875 rem · xs 0.8125 rem
(floor) · wordmark 1.125 rem. Print (resume): body 9.4 pt, h2 10.5 pt
italic semibold, h1 21 pt uppercase 0.055em tracking.

Devices:
- **The gloss**: `Label (gloss)` — label bold (or bold italic in
  taxonomies), gloss regular in parentheses, sentence case. Names the
  function of the label. Used in headings, lockups, table cells, slide
  titles.
- **Uppercase serif** for titles and bands; sentence case everywhere else.
- **No trailing periods** on labels, cells, or list rows; full sentences
  in prose only.

---

## 4. The Taxonomy Table (the brand's core artifact)

The tabled taxonomy is the brand's signature deliverable; its anatomy is
constant even as its grid changes. The full standard (54 principles, the
17 types, every term defined) is **Taxonomy (Spec)**, Works/3Squared in
Drive, brand 3Squared; the Systems repo's `/taxonomy` skill applies it.
This section keeps the identity-level rules.

Structure: **Title band → FACETS → BODY → PRACTICE → PROPOSITIONS →
PRINCIPLES**. Each table is a complete knowledge unit, titled
`Subject (Type)` with the type from Taxonomy (Map). FACETS names the
three groups (left column), three rows (middle) and three legend
categories (right); the BODY is named for the type's function: MATRIX by
default (groups crossed with rows), or GLOSSARY, INDEX, LOG, FORM or
CHECKLIST when items vary on one axis; PRACTICE gives the
steps; PROPOSITIONS defines the nine facets; PRINCIPLES states the five
laws that always hold. FACETS and MATRIX are the reference (one page where
possible); the last three sections are the one-off education, mapping to
procedural, propositional and participatory knowing (the MATRIX carries
the perspectival). Grid shape follows the
taxonomy's function: 3×3 (classic), 3×2 (the site's page anatomy), n×m as
the domain demands. The cell is the constant.

Anatomy, top-down:
1. **Title band**: `ink` fill, paper text, uppercase Newsreader, glossed:
   `TAXONOMY (TYPE)`.
2. **Section bands**: `ink-2` fill, paper text, uppercase Newsreader bold
   italic: `FACETS`, `MATRIX`, `PRACTICE`, `PROPOSITIONS`, `PRINCIPLES`.
3. **Sub-section headers** (a full-width grey row inside a section): a
   count, a unit and a noun, glossed with what the section builds:
   PRACTICE `5-Step Setup (Mastery)` (the noun varies: Setup, Design,
   Selection, Assessment), PROPOSITIONS `9-Facet Definitions
   (Understanding)`, PRINCIPLES `5-Law Canon (Wisdom)`. `rule`
   (`#c8ccd1`) fill, ink bold; darker than column headers so they read as
   the head of the rows beneath.
4. **Column headers**: `band-neutral` fill, ink bold, glossed:
   `Learning (Plan)`. In FACETS the gloss names the column's role, so the
   reader knows how to read the matrix: `Subject (Groups)` ·
   `Subject (Rows)` · `Subject (Legend)`, e.g. `Tactics (Groups)` ·
   `Spaces (Rows)` · `Skills (Legend)`. PROPOSITIONS' headings repeat
   them word for word, in the same order. PRINCIPLES is one row: the
   table's type (`Schedule (Laws)`, `Program (Laws)`), then five
   `Law (gloss): statement; implication` bullets, each within three lines.
   Labels take a gloss, never a count: Practice steps read
   `1) Orient (Overview)`. A count appears only where it tells the reader
   something they can't see, e.g. `Map (30)` (benchmarks) inside a bullet;
   the fixed counts live once, in the sub-headers (5-Step, 9-Facet, 5-Law). Row labels in a left column take `surface`. The grey
   ladder, darkest to lightest: ink-2 band → rule sub-header →
   band-neutral column header → surface label → paper.
5. **Group bars** (the matrix's column headers): the identity triad's
   inks, red · green · violet, paper text in Newsreader.
6. **Row bands**: the identity triad's tints in order (red, green, violet
   tint); rows outside a sequence take the rule grey.
7. **Cells**: paper, 1 unit border (Google Docs tables use black
   `#000000` 1 pt borders, the one exception to `rule`: they print
   crisper), bullets; every cell opens with a bold italic subtitle,
   glossed; nested lists indent once, the parent bullet underlined and its
   nested lines italic. Keywords take their legend ink
   (§2.3a), group and row words the identity triad; a cell that belongs to
   one legend category takes that legend's tint. Body text is ink.
8. **Label column**: when the matrix's left column holds labels (routine
   titles, equipment items) rather than content, the labels are ink: the
   band above already carries the row.
9. **Leads**: unlabelled italic first row of a category, first person,
   one line.

**Supporting tables**: a lower-order table that serves one main table.
- **Placement:** directly below the table it supports, starting on a new
  page (e.g. `Setup (Checklist)` under Producing (Spec)).
- **Heading:** the title band itself is Heading 4 with the main band's look
  (Newsreader 14, bold, paper on ink, centred); main bands are Heading 3, so
  the outline ranks it without an extra heading paragraph.
- **Sections:** the full anatomy. Every table is a complete knowledge unit,
  so a supporting table keeps its own PRACTICE, PROPOSITIONS and
  PRINCIPLES.
- **Types:** any of the 17 on Taxonomy (Map) (Register, List, Index,
  Glossary, Budget, Schedule, Checklist, Routine, Form, Spec, Map, Plan,
  Program, Assessment, Model, Portfolio, Log).
- **Checklist links:** the code links to the item's best tutorial, `(guide)`
  to the official guide; an item repeated on a second device links its
  guide only.

**Words:** compound nouns stay open ("stability drills", not
"stability-drills"); hyphens stay for pairs (flex-extend, hip-knee,
Balance-row), modifiers before a noun (full-range reps, single-leg hold),
prefixes (anti-, de-, non-) and established words (warm-up, pull-up).

**Links (Docs):** ink, underlined. Never link blue: in a taxonomy, blue is
legend position 2, so a blue link reads as a category. The underline is the
cue. A link that is also a legend keyword keeps its legend colour. On the
site, links stay `#3366cc`: no taxonomy legend competes with them there.

**Running foot (Docs):** one centred line inside the bottom margin, so it
never moves a page break: triad row · **LORENZO DELANO** (Newsreader 9 pt
bold, `muted` like the rest, so it reads as a signature, not data; A/B
tested 2026-10-24) · lorenzodelano.com (lowercase) · © year · DOCUMENT
NAME, in Arial 8 pt `muted`. A client's copy (filed in Commissions/<Client>) adds *Designed for
<Client>* (name in italics), optionally followed by Confidential; masters in
Works and personal documents never name a client. A long line drops the
document name, which the title band already shows.

**Producing a taxonomy in Docs:**
- **New:** copy `Admin/Taxonomy (Template)` in Google Drive (every heading
  and bullet a placeholder in final formatting) into the project's folder,
  then rename it; set the footer title to the new name.
- **Existing:** run the brand pass on it. Audit the document's old colours
  first: most legacy documents share one role map (red-family groups and
  rows, red/orange/gold legend), but some swap roles (Archive (Register):
  red is a group, pink/gold/blue the legend) and take an override.
- **Scripts** (in `Brand/`, run from the standalone Apps Script project
  "Docs Brand Pass", which opens any document by ID): `Docs Brand Pass`
  (colours, fills, band font, sub-headers, links, label column, running
  foot; settings `CLIENT`, `CONFIDENTIAL`, `LABELS`, `OVERRIDE`),
  `Docs Hyphen Pass` (opens listed compound nouns), `Docs Template Pass`
  (turns a copy into a template) and `Docs Runner` (the IDs and entry
  points). Text edits are typed inside the run they replace, so inherited
  formatting survives.
- **Verify** every pass: the PDF export keeps the same pages and the same
  lines per page; every text colour and fill is a brand token.

Digital tables follow `DESIGN_SPEC.md`; printed/Docs tables follow this
section with the same tokens.

---

## 5. Voice

First person. US English. Specificity over hype: numbers, instruments,
dates, receipts. Colons lead lists and elaborations; parentheses hold
asides; semicolons balance; em dashes only where nothing else does the
job (structural separators, glossary term—definition). No exclamation
marks. Every claim links to its evidence.

---

## 6. Applications

| Surface | Form | Spec |
| --- | --- | --- |
| Favicon / app icons | Primary symbol | SVG favicon (`app/icon.svg`), 180 (`app/apple-icon.png`), 192 and 512 (web manifest) on paper |
| Site header | Tagline lockup (desktop, 35.72 px symbol); horizontal lockup (mobile, 26 px symbol) | Live; replaced the LD circle |
| 404 page | Seal, 40 px, closing the page | Live (`app/not-found.tsx`, `BrandSymbol variant="seal"`) |
| Open Graph / link previews (1200×630) | Tagline lockup, URL beneath | Paper ground; `public/brand/og-1200x630.png` |
| Brand avatars (institution accounts) | Primary symbol | `Social/Profile (Avatar).png`, 1200 px square, paper ground, clear space one grid cell; no wordmark |
| Personal profile photo | Square headshot | `Photos/Headshot (Square).jpg`; the same photo across every personal account |
| Press kit | Headshots and press photos | `Photos/`, with photographer credits in `Photos/Credits.md` |
| LinkedIn banner (1584×396) | Tagline lockup (N = 64), no gloss, no triad row, no URL | Paper ground; lockup centered right of the left 420 px kept clear for the photo |
| YouTube channel art (2560×1440) | Tagline lockup (N = 92) in the 1546×423 safe area | Paper ground; no gloss, card, triad bar, or URL |
| YouTube watermark (150) | Primary symbol (paper or on-ink) | Whole video |
| Letterhead | Gloss lockup top-left | Contact top-right in Inter xs; seal beside the signature; running foot with triad row |
| Email signature | Primary symbol 48 px (96 px source served from the site), rule, gloss lockup + tagline + links | Links in site blue only |
| Resume | Existing type system; symbol may sit beside the name | Closing line unchanged |
| Cover letters (table) | Title band per §4 | Conformant |
| Slides | Title master: ink title band with glossed title, triad bar beneath; symbol + wordmark in the foot | Body Inter; data JetBrains Mono. Google Slides taxonomies are not yet branded: the slide approach is redesigned with the next project |
| Stamp / seal | Red symbol (or 龍 personal variant) | Physical: 20–25 mm square |
| Video titles / thumbnails | Wordmark on paper or ink; single spectrum hue as accent bar | Never a hued background |
| Documents / taxonomies (Docs) | §4 anatomy | `Admin/Taxonomy (Template)` for new ones; the Docs scripts for existing ones (§4) |

### 6.1 Where the assets live

- **Marks** (one master each, in the site repo's `public/brand/`):
  `symbol.svg`, `symbol-mono.svg`, `symbol-on-ink.svg`,
  `symbol-on-ink-mono.svg`, `seal.svg`, `wordmark.svg` (Newsreader 600 at
  opsz 72, outlined, tracking 0.055em), `lockup-horizontal.svg`,
  `lockup-vertical.svg`, `lockup-tagline.svg`, `lockup-tagline-on-ink.svg`;
  PNGs `symbol-96.png` (email signature), `symbol-192.png` and
  `symbol-512.png` (web manifest), `seal-96.png`, `triad-row-96x24.png`,
  `og-1200x630.png`; favicons `app/icon.svg` (16-unit grid, so the rule is
  1 px at 16 px) and `app/apple-icon.png`. On the site the symbol is drawn
  by `components/BrandSymbol.tsx` from the same construction.
- **Brand kit** (`~/Developer/Artifacts/Brand/`, a git repository; files
  named `Subject (Type)`, git keeps the history, so no version numbers):
  `Brand (Guide).pdf` (this document, printed), `Letterhead (Template).docx`,
  `Slides (Template).pptx`, `Email Signature (Template).html`; `Social/`
  (avatar, LinkedIn banner and `@2x`, YouTube channel art and watermarks;
  `Social (Legacy)/` keeps superseded banners); `Photos/` (official
  headshots and press photos, exported from the originals in Apple Photos);
  the four Docs scripts (§4); `Guide (Source)/` (builds the guide PDF).
  The kit holds no copies of the marks.
- **Google Drive**: `Admin/Taxonomy (Template)`, the master for new
  taxonomies. **Apple Photos**: the photo originals (Profile album and the
  Categories albums).
