# DESIGN_SPEC.md — lorenzodelano.com

**One authoritative design + editorial standard.** This document supersedes ad-hoc decisions in the current build. It defines how the site looks, reads, behaves, and responds, so a team can build against it without further questions. Where a rule and existing code or copy disagree, **the rule wins — change the code/copy.**

The brief in one line: a Wikipedia-style personal profile that wins the trust of US employers, partners, and investors. The register is **credible, encyclopedic, understated-premium** — a trustworthy reference, never a flashy portfolio. The target visitor is a first-time professional scanning *"who is this, and should I engage them?"* and must answer *"who is this?"* in one screen and *"should I engage?"* in three.

**Hard constraints:** Next.js App Router + Tailwind, statically rendered on Vercel, mobile-first, fast (no layout shift), fonts via `next/font`, accessibility **WCAG 2.2 AA minimum** (verified with axe-core zero-violations + one keyboard/VoiceOver pass per page).

**Conventions in this doc:** all colors are CSS custom properties (`--token`) mapped to Tailwind utilities by the `@theme` block in `app/globals.css`; **never write a raw hex inline.** All spacing is on a 4px grid named in rem. All type sizes are tokens.

---

## 1. Typography

### 1.1 Families

A two-family system replaces Georgia (bitmap-era, no optical sizing) and the system-ui stack (uncontrollable cross-platform rendering).

| Role | Family | Why |
|---|---|---|
| Wordmark, H1–H3, infobox name, timeline year/era | **Newsreader** (variable serif, `opsz` 6–72; wght 500/600 + 400 italic) | Commissioned for on-screen long-form reading; optical-size axis sharpens display sizes and lifts x-height at text sizes. Carries the editorial "reference work" register. |
| Body, lead, captions, infobox labels/values, all nav/chrome, buttons, footer, **H4/dt** | **Inter** (variable grotesque; wght 400/500/600) | Tall x-height, open apertures, tuned for UI legibility at 14–16px; tabular figures + slashed zero available. |
| Mono tokens (IDs, hashes, code-like strings) | **JetBrains Mono** (400 only) | Disambiguates `0/O`, `1/l/I`; scoped narrowly. |

Both primary faces load via `next/font/google` (self-hosted, metrics inlined → **zero CLS**). **`font-optical-sizing: auto` — never `none`.** No weight ≥ 700 anywhere; the 600 cut carries all emphasis to hold the understated-premium register. *(Rejected on the record: Source Serif 4 — reads too sans-like on headings; Lora — no optical axis; Georgia — the current default-feeling face.)*

> **H4 and `dt` are the one deliberate cross-over:** at 17px a bold serif reads heavy and odd, while a bold **Inter** reads cleanly as a UI label. Set H4/dt in Inter 600.

### 1.2 Scale — base 16px, Minor Third (1.20)

Base rises from 15px → **16px (`1rem`)**. Tokens are CSS custom properties; **fluid `clamp()` applies only to H1/H2/H3 and the lead** (the `vw` term). Body and all UI text stay at fixed rem sizes so measure and rhythm are deterministic.

| Token | px (desktop) | Fluid clamp (mobile → desktop) | Family / weight | line-height | tracking | Role |
|---|---|---|---|---|---|---|
| `--fs-h1` | 36 | `clamp(1.75rem, 1.30rem + 2.25vw, 2.25rem)` | Newsreader 500 | 1.15 | `-0.01em` | Page title; 1px `--rule` bottom rule |
| `--fs-h2` | 26 | `clamp(1.375rem, 1.18rem + 0.95vw, 1.625rem)` | Newsreader 500 | 1.2 | `-0.005em` | Section; `border-bottom:1px var(--rule)` |
| `--fs-h3` | 20 | `clamp(1.125rem, 1.05rem + 0.40vw, 1.25rem)` | Newsreader 600 | 1.25 | `0` | Sub-section; also timeline era title |
| `--fs-h4` | 17 | static | **Inter 600** | 1.3 | `-0.005em` | Minor heading / `dt` |
| `--fs-lead` | 18 | `clamp(1.0625rem, 1.02rem + 0.22vw, 1.125rem)` | Inter 400 | 1.55 | `0` | Lead (third-person; not italic) |
| `--fs-body` | 16 | static | Inter 400 | **1.65** | `0` | Default body |
| `--fs-sm` | 14 | static | Inter 400/500 | 1.3–1.45 | `0` | Captions, infobox labels, nav |
| `--fs-xs` | 13 | static | Inter 400 | 1.4–1.5 | `0` | References, credits, footer, "(age N)" |
| `--fs-wordmark` | 18 | static | Newsreader 600 | 1.1 | `-0.005em` | Header wordmark |

**13px is the floor — nothing smaller.** Body 16px / line-height 1.65 satisfies WCAG 1.4.8; rem + rem-based clamp floors satisfy 1.4.4 (resize to 200%).

### 1.3 Measure

Cap continuous prose at **`max-width: 68ch`** on `.wiki-article` (≈ the 66-char sweet spot inside the 45–75 band). Keep the cap even when the infobox is absent (timeline, mobile) so lines never exceed the legible band. Infobox values (~36–40 cpl) are label/value fragments, not continuous prose, so the lower bound does not apply.

### 1.4 Tabular figures

Apply `font-variant-numeric: tabular-nums` to **every aligning/tabulating number**: infobox numeric values, timeline year (Newsreader, `tabular-nums lining-nums`) and "(age N)", references, and status figures. Inter's proportional figures stay for prose.

---

## 2. Color

Near-monochrome; a single teal accent does structural work only. All ratios are measured against the named background; the requirement is the WCAG AA threshold met.

| Token | Hex | Role | Contrast | Req |
|---|---|---|---|---|
| `--text` | `#1B1C1D` | Body & headings | 17:1 on paper | AAA |
| `--muted` | `#5A5F66` | Captions, metadata, dates | 6.4:1 paper / 6.0:1 subtle | AA |
| `--muted-2` | `#5B6168` | The fix for the failing `#72777d`: gloss, "(age N)", tooltip dotted underline | 6.3:1 paper / 5.9:1 subtle | AA |
| `--link` | `#3366CC` | Links (default) | 5.4:1 on paper | AA |
| `--link-hover` | `#2A4B8D` | Hover/active (darken) + underline | 8.9:1 on paper | AAA |
| `--link-visited` | `#795CB2` | Visited (enabled globally) | 5.3:1 on paper | AA |
| `--link-red` | `#BA0000` | Unwritten/placeholder links, 404 | 6.6:1 on paper | AA |
| `--accent` | `#0B5E57` | Active section pill fill, wordmark ring, accent text | 7.6:1 reverse / on paper | AAA |
| `--focus` | `#0B57D0` | Focus ring (distinct from link) | 8:1 on paper | non-text ≥3 |
| `--surface-paper` | `#FFFFFF` | Article canvas | — | — |
| `--surface-app` | `#F4F5F6` | App background behind paper | — | — |
| `--surface-subtle` | `#F6F7F9` | Infobox body, table-head fill, code | — | — |
| `--surface-band` | `#EAECEF` | Infobox bands / title bar | — | — |
| `--border-strong` | `#A8ADB4` | Infobox frame, data-table cells | decorative | exempt |
| `--rule` | `#C8CCD1` | Default rules, H2 underline, dividers | decorative | exempt |
| `--rule-soft` | `#E6E8EB` | Hairline row separators | decorative | exempt |
| `--mark` | `#FEF6E7` | `:target` citation highlight | — | — |

**Resolved conflicts:**
- **Accent promoted `#0F6E66` → `#0B5E57`.** White-on-accent active pills now clear AA *and* AAA at no visual cost. (Keep `#0F6E66` only as an optional `--accent-light` for decorative fills > 24px, never for text.)
- **Link stays `#3366CC`** (Wikipedia idiom, already AA at 5.4:1; the whole link taxonomy is built on it). Hover/active darkens to `#2A4B8D` and **adds an underline** — the underline is the *interaction* cue, not the resting cue, and keyboard users get it via `:focus-visible`.
- **Focus ring is `#0B57D0`** (8:1, deliberately distinct from link blue), not the link color.
- **`#72777d` is removed everywhere** — it fails AA at 4.28:1 on the infobox surface. Its three uses (LeftNav gloss, Timeline "(age N)", infobox dotted underline) move to `--muted-2 #5B6168`. **No `#72777d` may remain in the tree** (acceptance gate).
- Borders are **decorative** (carry no information color-coded), so sub-3:1 ratios are compliant. Any bordered control whose *state* must be perceivable (focus, active) uses `--focus` / `--accent`, which clear 3:1.

---

## 3. Spacing & layout

### 3.1 Spacing scale (4 / 8 grid, rem-named)

Anchor vertical rhythm on **`space-4` (16px)**. Paragraph margin `0.75rem`. Column gutter **`space-6` (24px)**. No arbitrary px in layout. The default Tailwind scale already matches; use it.

| px | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 40 | 48 | 64 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| use | icon gap | cell padding | tab padding | **rhythm unit** | H3 top | gutter / H2-side | H2 top | block sep | page top | footer | page bottom |

### 3.2 Responsive layout — the structural answer

Mobile-first; author at the 360px base, add complexity upward. **Tailwind default breakpoints only** (`sm` 640, `md` 768, `lg` 1024, `xl` 1280). This reverses today's desktop-first build that hides the nav and infobox below `lg`.

```
base (phone):   [ sticky top bar: hamburger | wordmark | Contact ]
                [ H1 + hatnote ] [ lead ] [ <details> Quick-facts infobox ] [ SectionNav ] [ body ]
md (≥768):      article  |  infobox (320px)
lg (≥1024):     Pages rail (176px) | article | infobox (320px)
```

- **`lg` grid:** `lg:grid lg:grid-cols-[11rem_minmax(0,1fr)_20rem] lg:gap-6`; `min-w-0` on the article cell (stops long URLs/tables blowing out the track); container `mx-auto max-w-[88rem]`.
- **Below `lg`** the left-rail column is omitted from the grid (LeftNav renders only inside the drawer).
- **3-col → 2-col at `lg`** (the global rail is least scan-critical for a reader landing mid-article, so it appears last); **2-col → 1-col at `md`** (a 320px box + readable article needs ~768px). No custom breakpoints.

### 3.3 Borders, radii, elevation

- **One border weight: 1px, everywhere.** Emphasis comes from *value* (`--border-strong` / `--rule` / `--rule-soft`), never thickness. No 2px rules. This is the single biggest premium-vs-default lever.
- **Radii — square by default.** `0` for infobox frame, tables, article, header (a reference document is square). `2px` section-nav pills / chips / code; `4px` buttons / mobile sheet / focus-visible offset; `full` only the "LD" monogram. **The infobox stays square** — rounding it would read as a marketing card.
- **Flat-first elevation.** `shadow: none` default — article, infobox, header, rail are separated by borders + `backdrop-blur` (`bg-white/95 backdrop-blur`), never shadow. One token `--shadow-overlay: 0 1px 2px rgba(27,28,29,.04), 0 8px 24px rgba(27,28,29,.12)` reserved for genuinely floating layers (drawer, tooltip). Never shadow in-flow content; never shadow the sticky header.

---

## 4. Components

### 4.1 Three navigation surfaces — one job each (never duplicate a job)

| Surface | Job | Desktop | Mobile (< lg) |
|---|---|---|---|
| **SiteHeader** (sticky, `z-30`, 52px desktop / 48px mobile) | Identity + escape hatch | wordmark left, Contact right | hamburger + wordmark + Contact |
| **Primary "Pages" nav** | Move between the 4 pages | left rail 176px, sticky | **slide-in drawer** from hamburger |
| **SectionNav** | Jump within the page | sticky horizontal strip under H1 | **horizontal scroll-snap strip** |
| **Infobox** | Summarize the person | right rail 320px, sticky | **inline after the lead**, `<details>` |

Header is **always visible** (no hide-on-scroll — reappearing chrome is disorienting on a reference read) and carries a **skip-to-content link** as the first focusable element. Raise header to `z-30` so it wins over SectionNav (`z-20`); tooltips/drawer sit above both.

### 4.2 Mobile drawer (launch blocker)

Left slide-in dialog: `width min(80vw, 320px)`, `z-50`, opaque `--surface-paper`, scrim `rgba(27,28,29,.40) z-40`. Trigger is a **44×44** hamburger (`aria-expanded`, `aria-controls`, `aria-label="Open navigation"`), visible only `< lg`. Contents: the Pages list **with glosses** *plus* the current page's section anchors (so phones can jump within a page too). **A11y:** focus moves in on open; focus-trapped; `Esc` closes and **returns focus to the trigger**; scrim-tap closes; background `inert`; body scroll locked; respects `prefers-reduced-motion` (instant, no slide). Ship a `<noscript>` inline Pages list so no-JS phones still navigate. *(Not a bottom sheet — that's for contextual actions, not primary nav.)*

### 4.3 Infobox card

Looks like an encyclopedia data panel, not a profile widget.

- **Frame:** 1px `--border-strong`, **square**, `--surface-subtle` body, no shadow.
- **Title bar:** `--surface-band`, centered, Newsreader 600 / 19px, `--text`.
- **Portrait:** full-width (`next/image`, explicit `width=700 height=933` → no CLS, `sizes="(min-width:1024px) 320px, 12rem"`); caption beneath in `--fs-xs` `--muted`. On mobile cap at `max-w-[12rem] mx-auto`. If the asset 404s, show a neutral `--surface-band` initials placeholder, never a broken-image icon.
- **Group headings** (Personal / Cultural / Biological / Legal): `--surface-band`; **the system's only all-caps** — Inter 13px / 600 / `+0.04em` / `uppercase`. `scope="colgroup"`.
- **Rows:** label `th` 34% width, Inter 600, sentence case ("Known for"), `scope="row"`; value `td` Inter 400, `tabular-nums` on numbers, `overflow-wrap:anywhere`. Separators `--rule-soft`. **Omit any empty row entirely** — no em-dash/"N/A" placeholder.
- **Table** gets `<caption className="sr-only">Profile summary of Lorenzo Delano</caption>`.
- **Mobile:** wrapped in native `<details><summary>Quick facts</summary>` — **open on Introduction, collapsed on inner pages** (free keyboard/AT support, zero JS, no CLS). Render the component **once**, repositioned by breakpoint (prefer grid `order`); if duplication is unavoidable, exactly one `priority` image per breakpoint.

### 4.4 SectionNav

- **Desktop:** sticky under the header (`top` = header height), `border-y:1px var(--rule)`, `bg-white/95 backdrop-blur`, no shadow. Pills: default `--link` text; hover light tint; **active `bg-accent` white text + `font-medium` + `aria-current="true"`** (state never by color alone).
- **Mobile:** single-row `flex flex-nowrap overflow-x-auto snap-x snap-mandatory` with a right-edge mask fade; `sm:flex-wrap sm:overflow-visible` restores wrapping. On active/route change, `activeEl.scrollIntoView({inline:"center", block:"nearest"})` (honoring reduced-motion) so the active pill is never off-screen.
- **Scroll-spy:** exactly one active item — the last section whose heading top has crossed the sticky chrome. Render nothing when a page has 0 sections.

### 4.5 Timeline & tables

- **Timeline** (`dl`/`dt`/`dd`, `border-l-2` rail): already reflows correctly — **keep stacked on mobile**, only `pl-3 sm:pl-4`. Year in Newsreader 600 + `tabular-nums lining-nums`; "(age N)" Inter `--fs-xs` `--muted-2`. Era titles reuse H3. The embedding page must open with an `<h2>` so the era `<h3>`s don't skip a level.
- **Key tables:** wrap any multi-column table in `<div className="overflow-x-auto -mx-5 px-5 sm:mx-0 sm:px-0">` with `min-w-[36rem]`; phone font ~0.86rem. Prefer `<dl>` for simple label/value pairs.

### 4.6 Links (the core trust signal)

- **Internal:** Next `<Link>`, same tab, prefetched, no glyph. **External:** new tab, `rel="noopener noreferrer"`, persistent decorative `↗` (`::after`, `aria-hidden`) + an `sr-only` "(opens in a new tab)" hint — the visible trust boundary between "inside the record" and "leaving to a third party". Never open internal nav in a new tab. `mailto:` is chrome (no glyph, no new tab).
- **States:** default `--link` no underline; **hover/focus underline** + `text-underline-offset:2px`; `:focus-visible` ring; `:active` `--link-hover`; **`:visited` `--link-visited` enabled globally** (a real orientation cue for returning visitors). Link text always names the destination — never "click here".

### 4.7 Visual signaling standard (binding)

One contract across every page: **color says whether it navigates; underline
style says what hover reveals; the arrow says it leaves the site.** Signal the
behavior, never the artifact type.

| Signal | Meaning | Hover | Click |
|---|---|---|---|
| **Bold**, text color | Structural heading / primary term | nothing | nothing |
| Dotted underline + help cursor | Definition available | text tooltip | nothing |
| **Bold + dotted underline** | Primary term carrying a description (e.g. Profile) | text tooltip | nothing |
| Blue text (`--link` / `.cardlink`) | Navigable — page or artifact | **preview card** (image + caption) where an artifact exists | opens it (internal page, or artifact **lightbox**) |
| Blue + `↗` | External URL | (card optional) | new tab, off-site |
| Superscript `[n]` | Citation | gloss (enhancement) | jumps to References |

Rules: never a blue solid underline on a non-navigating element (false-link);
dotted always means "hover for text"; supportive terms stay italic regardless
of signal; credential/artifact terms use `.cardlink` (hover = preview card,
click = lightbox with caption, `Esc`/backdrop closes, `role=dialog`).

---

## 5. Interaction & UX

- **Focus (mandatory, never optional):** `:where(a,button,[tabindex],summary,[role=button]):focus-visible { outline:2px solid var(--focus); outline-offset:2px; border-radius:2px }` and `:focus:not(:focus-visible){outline:none}`. On the teal active pill, override to a **white ring** (`outline-color:#fff; outline-offset:-2px`) for ≥3:1. Clears WCAG 2.4.7, 2.4.13, 1.4.11. **Never `outline:none` without a compliant replacement.**
- **Sticky-offset chain — derive from ONE source.** Header height, SectionNav `top`, the scroll-spy offset constant, and `scroll-padding-top` must all agree. Desktop stack ≈ 52 + 40 + buffer; mobile stack ≈ 48 + 40 + buffer. Drive SectionNav `top` off a `--header-h` var; set `scroll-padding-top: 6rem` base with `@media (min-width:1024px){ html{ scroll-padding-top:7rem } }`; **drop the magic `7rem`-only and `140` constants.** This satisfies 2.4.11 (focus not obscured) and prevents the "anchor jump hides the heading" bug.
- **Tooltips & citations (WCAG 1.4.13):** open on hover **and** focus; **dismissable with `Esc`** without moving the pointer; **persistent** via a hover bridge (pointer can move onto the tooltip) — the current `onMouseLeave`-only close fails this. The infobox gloss trigger must become a focusable `<button>`/`tabindex=0 role=button` with `aria-describedby` on the focusable element. Under `@media (hover:none)`, triggers are **tap-to-toggle**. Every `[n]` is *also* a real anchor to `#cite-note-{id}` — the tooltip is enhancement, the anchor is the contract; `:target` rows flash `--mark`.
- **Self-link anchors** on every H2/H3 (a `#` revealed on hover/focus, `--muted` → `--link`, padded to a 24px target) so any section is citable/deep-linkable.
- **Motion:** transitions ≤ 150ms `ease-out`, color/background only; honor `@media (prefers-reduced-motion: reduce)` by disabling `scroll-behavior:smooth`, the drawer slide, and pill transitions.
- **Edge/empty states degrade honestly:** empty infobox row → omit (no placeholder); 0 sections → no SectionNav; missing portrait → initials placeholder; long URLs wrap (`overflow-wrap:anywhere`); a redlink-styled `404`; with JS off, anchors/nav/infobox still work and the `<noscript>` Pages list shows.

---

## 6. Accessibility (WCAG 2.2 AA — acceptance gate)

1. **Landmarks (one each, labelled):** `<header>`, `<nav aria-label="Site navigation">`, `<main id="main" tabIndex={-1}>`, SectionNav `<nav aria-label="Sections on this page">`, infobox `<aside aria-label="Profile summary">`, `<footer>`, plus the **skip link** as first focusable element. Do not add redundant `role=navigation/main/banner/contentinfo`.
2. **Headings:** one `<h1>` per page; never skip `h2`→`h4`.
3. **Contrast:** no text below 4.5:1; **no `#72777d` left in the tree**; `--muted-2` only at ≥13px.
4. **Focus:** every focusable element shows the ≥2px / ≥3:1 ring (§5); tabbing to an in-page anchor lands fully below the sticky chrome.
5. **Targets:** ≥24×24px everywhere; **≥44×44px** on coarse pointers for the hamburger, drawer items, SectionNav pills, and the header Contact action (inline prose links use the 2.5.8 inline exception).
6. **Keyboard:** full traversal with no trap — skip link → header → drawer (open/trap/`Esc`/restore) → nav → SectionNav → article links → tooltips (open via Tab, close via `Esc`) → footer.
7. **Color never sole cue:** active nav = bold + `aria-current`; active pill = fill + weight + `aria-current`; links = color + hover/focus underline.
8. **State via `aria-current`** (not `aria-selected`); ARIA only where native semantics fall short.
9. **Verify:** axe-core / Lighthouse a11y = 100 with zero violations on all four routes + one manual keyboard/VoiceOver pass, in CI, before merge.

---

## 7. Responsive / mobile verification matrix

Test at **360, 390, 768, 1024, 1280px**. On each: (a) nav reachable, (b) infobox reachable, (c) no horizontal page scroll (1.4.10 reflow to 320px), (d) anchor jumps land below both sticky bars, (e) all tap targets ≥44px, (f) `prefers-reduced-motion` disables the drawer/scroll animation, (g) one `priority` image and a correct `sizes` per breakpoint (no CLS, no oversized source).

---

## 8. Editorial style (binding house standard)

### 8.1 Voice & person — the headline decision

**First person is primary. It is the default for everything in the article body.** The site is written by its subject and reads that way: leads, section intros, table leads, and every row value speak as "I". This replaces the earlier third-person-backbone rule, which the site outgrew — by August 2026 the body copy ran roughly 290 first-person tokens against a handful of third-person ones, all of them in two pages that had not been rewritten yet.

- **First person = the whole article.** Page leads, section intros, italic table leads, row values, reference-section labels ("My data derived from…"). Use "I", "me", "my".
- **Third person / impersonal = the infobox only.** The infobox is a record card, not a voice. It may read as bare stated facts ("Born · 7 December 1987 · Krugersdorp") or, where a sentence is unavoidable, third person. Nothing else on the site uses "he" or "Delano" as a subject.
- **Data and definitions stay impersonal in either register.** Metric values, universal statements, and citations carry no voice — voice attaches to interpretation, never to numbers.
- **Tense:** present for standing facts and dispositions; past for the record; present or future for stated intent, and mark it as intent so a plan is never mistaken for a fact.
- **Imperative** only in nav and UI microcopy ("Contact", "Skip to content") and the contact CTA.

**Outstanding at the time of writing:** `/` (home) and `/wealth` are still third person and need converting. They are the last two.

### 8.2 Spelling, capitalization, punctuation

- **US spelling** (`-ize`, `-or`, `-er`) throughout — e.g. color, behavior, organize, center, hemoglobin; never British forms. "program" for every named product/program (never "programme").
- **Sentence case everywhere** except proper nouns and the wordmark — H1–H4, infobox group headings and labels, SectionNav chips, buttons. "Known for", never "Known For". Brand casing exact: Mindvalley, CrossFit, YouTube, SaaS, NLP, 10X, 10X Quest.
- **Oxford comma always.** Dashes: hyphen for compounds; **en dash `–`** (unspaced) for numeric/date ranges; **em dash `—`** (spaced) for prose breaks. "South African" takes **no** hyphen.
- **Middot `·`** is restricted to **one job**: an inline series separator inside infobox values / compact metadata ("Bruce Lee · Ken Wilber · David Deutsch", one space each side). Banned in running prose (use Oxford commas), as a bullet, as a label→value separator, and for joining distinct *facts* (the Born row must split into rows or a sentence). Schedule lists use semicolons.
- **Curly quotes/apostrophes only**; true primes `5′9″` (U+2032/U+2033), never ASCII. Logical (British) punctuation placement.

### 8.3 Numbers, dates, times, units

- **Dates:** one rendered format **`D Month YYYY`** ("7 December 1987") — no ordinals, no abbreviation, no comma. Abolish "7 Dec 1987". ISO is for data attributes only.
- **Times:** lowercase, no periods, closed ("11pm", "4:30pm"); en-dash ranges ("11pm–7am").
- **Numbers:** spell out zero–nine in prose, numerals 10+; numerals always with units/ages/percent/money; comma thousands ("90,000+"); `×` multiplier ("10X", "5×/week"); `~` or "roughly" (not both).
- **Units:** metric primary, imperial in parentheses; **space between number and unit** ("1.76 m", "72 kg"), **no space before `%`**, real sub/superscripts (`VO₂max`, `kg/m²`). **Standardize height to `1.76 m` in both the infobox and the Physical table** (fix bare "176 cm"). Wrap unit pairs with `&nbsp;` so they never break.
- **Acronyms:** spell out on first use then acronym alone; full caps, no periods; "US" not "U.S.". Company forms exact: "Eudaemonia, Inc.", "Erfaring (Pty) Ltd".
- **Canonical nomenclature** (one spelling each): learning-systems designer, 10X, single-set-to-failure, self-mastery, Mindvalley, CrossFit, taxonomical; the six domains in fixed order — *train, eat, finance, learn, mind, plan*.

### 8.4 Do / Don't

| Do | Don't |
|---|---|
| "I design taxonomies…" (1st person body) | "Delano designs taxonomies…" (3rd person outside the infobox) |
| "How I can help you" + "reach out" | "I can help" mixed with "He is best known" |
| "7 December 1987" | "7 Dec 1987", "Dec 7, 1987", "12/7/1987" |
| "1.76 m (5′9″)" sitewide | "1.76m", "176 cm" alongside "1.76 m" |
| "72 kg (158 lb)", "8.2%", "90,000+" | "72kg", "158 lbs", "8.2 %", "over 90000" |
| "designer, practitioner, and teacher" | dropping the Oxford comma |
| "1987–2000", "11pm–7am" (en dash) | "1987 - 2000", "1987—2000" |
| "Bruce Lee · Ken Wilber · David Deutsch" | "Lorenzo Roos · 7 Dec 1987 · Krugersdorp" (facts via ·) |
| curly "it's", "Delano's"; "South African" | straight quotes; "South-African" |
| sentence-case "Known for", "Creative works" | "Known For", "Creative Works" |
| "the US", "US employers"; "5×/week", "10X" | "the U.S.", "USA"; "5x/week", "10x" |
| "my maternal grandmother" (relation) | naming a living relative without consent |
| exactly 2 bands per branch | 3 bands "because the content needed it" |
| "Genotype (4)" with 4 items | a count that does not match its value |


---

## 9. Taxonomy standard (binding — the site's spine)

The site is a faceted classification of one person. Every page is an application of the same structure, and deviations are defects rather than variations.

### 9.1 The three levels

1. **Branch** — an `<h2>` section with a parenthetical gloss: `Inheritance (Identity)`. **Exactly three per page** (Wealth is the outstanding exception, with one).
2. **Band** — the green header row inside a table, `domain` in the data. **Exactly two per branch. This is non-negotiable and has been broken twice; check it before writing any table.** Verify by counting `domain:` keys in each `StatTableData` — the count must be 2.
3. **Category** — the grey header row, `category` in the data. **Variable with the data**, typically 1–4 per band. The live range is `[2,1] [3,1] [4,1] [3,2] [3,3] [2,2]`.

### 9.2 Rows

- **Label + parenthetical**: either a count of the items in the value (`Genotype (4)`) or a qualifier (`Early childhood (age 0–6)`, `1997 (age 10)`). **A numeric parenthetical must equal the item count in the value** — this is machine-checkable and has caught real errors.
- **Grouped-facet form** (Lifestyle, Inheritance): `Facet (detail), facet (detail), and facet (detail)`. Oxford comma; semicolons for sub-detail inside a parenthesis.
- **Faceted-prose form** (Story → Development): a short factual paragraph, ~50 words, with Ranganathan facets named inline once each — `(Space)`, `(Matter)`, `(Energy)`. Time is the chronology; Personality is the paragraph. Prose carries agency through grammatical voice, which is why no separate "responses" facet is needed.
- **Argued form** (Story → Emergence): longer prose that makes a case rather than recording one. No word ceiling. Each entry states what the choice cost or contradicted.
- **Leads**: every category opens with an unlabelled italic first-person claim, one line.

### 9.3 References

Two blocks per page, both using the `References` component, titled by what they hold — `(Personal)` / `(Social)`, or `(Data)` / `(Evidence)`, or `(Guidelines)`. Sections within run **guidelines → data → evidence**, ordered to match the taxonomy above them. Labels are sentences: "My data derived from…", "Public evidence of…".

### 9.4 Sourcing and consent (binding)

- **Read values from raw sources, don't assert them.** Genotype comes from the raw export and cites its rsIDs; ancestry from the composition report. This caught a live error: APOE was recorded as ε4/ε4 and the raw data says ε3/ε3.
- **Report facts, not judgements.** A social-services report *was made*; whether it was mistaken is not a record.
- **Third-party consent.** Only **mother and father** may be named. Every other relative is stated by relation. People acting in a **public or professional capacity** may be named and linked (a teacher, a performer, a business partner with a site); everyone else is a role. Psychiatric history of relatives is withheld. This applies site-wide including the infobox, not only the page being edited.
- **Link into the wiki before linking out.** A mention with a fuller record elsewhere on the site links there; external links are for things the site does not itself document.

### 9.5 Machine checks (run before every commit)

- Every `StatTableData` has exactly 2 `domain:` keys.
- Every numeric row parenthetical equals the item count in its value.
- No unconsented private names in any page file.
- `npx tsc --noEmit` clean; production build in an isolated copy, never in place while the dev server is running.
