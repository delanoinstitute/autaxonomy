# DESIGN_SPEC.md — lorenzodelano.com

**One authoritative design + editorial standard.** This document supersedes ad-hoc decisions in the current build. It defines how the site looks, reads, behaves, and responds, so a team can build against it without further questions. Where a rule and existing code or copy disagree, **the rule wins — change the code/copy.**

The brief in one line: a Wikipedia-style personal profile that wins the trust of US employers, partners, and investors. The register is **credible, encyclopedic, understated-premium** — a trustworthy reference, never a flashy portfolio. The target visitor is a first-time professional scanning *"who is this, and should I engage them?"* and must answer *"who is this?"* in one screen and *"should I engage?"* in three.

**Hard constraints:** Next.js 16 App Router + React 19 + Tailwind CSS 4, statically rendered on Vercel, mobile-first, fast (no layout shift), fonts via `next/font`, accessibility **WCAG 2.2 AA minimum** (verified with axe-core zero-violations + one keyboard/VoiceOver pass per page).

**Conventions in this doc:** all colors are CSS custom properties (`--token`) in `:root` of `app/globals.css`, mapped to Tailwind utilities by the `@theme inline` block in the same file (there is no `tailwind.config` — it was retired in the Tailwind 4 upgrade). Tailwind's utilities are imported **unlayered**, so the site's own rules win or lose by specificity and source order exactly as they did under v3. Three v3 behaviours are restored in the `@layer base` block: the default border colour (`#e5e7eb`), the pointer cursor on buttons, and normal (not tabular) digits in buttons and form controls (v4's `font: inherit` would otherwise pull `tabular-nums` into tooltip labels). **Never write a raw hex inline.** All spacing is on a 4px grid named in rem. All type sizes are tokens.

---

## 1. Typography

### 1.1 Families

A two-family system replaces Georgia (bitmap-era, no optical sizing) and the system-ui stack (uncontrollable cross-platform rendering).

| Role | Family | Why |
|---|---|---|
| Wordmark + tagline, H1–H3, page hook, infobox name | **Newsreader** (variable serif, `opsz` 6–72; wght 500/600 + 400 italic) | Commissioned for on-screen long-form reading; optical-size axis sharpens display sizes and lifts x-height at text sizes. Carries the editorial "reference work" register. |
| Body, lead, captions, infobox labels/values, all nav/chrome, buttons, footer, **H4/dt** | **Inter** (variable grotesque; wght 400/500/600) | Tall x-height, open apertures, tuned for UI legibility at 14–16px; tabular figures + slashed zero available. |
| Mono tokens (IDs, hashes, code-like strings) | **JetBrains Mono** (400 only) | Disambiguates `0/O`, `1/l/I`; scoped narrowly. |

Both primary faces load via `next/font/google` (self-hosted, metrics inlined → **zero CLS**). **`font-optical-sizing: auto` — never `none`.** No weight ≥ 700 anywhere; the 600 cut carries all emphasis to hold the understated-premium register. *(Rejected on the record: Source Serif 4 — reads too sans-like on headings; Lora — no optical axis; Georgia — the old default-feeling face, now only a fallback in the font stack.)*

> **H4 and `dt` are the one deliberate cross-over:** at 17px a bold serif reads heavy and odd, while a bold **Inter** reads cleanly as a UI label. Set H4/dt in Inter 600.

### 1.2 Scale — base 16px, Minor Third (1.20)

Base rises from 15px → **16px (`1rem`)**. Tokens are CSS custom properties; **fluid `clamp()` applies only to H1/H2/H3 and the lead** (the `vw` term). Body and all UI text stay at fixed rem sizes so measure and rhythm are deterministic.

| Token | px (desktop) | Fluid clamp (mobile → desktop) | Family / weight | line-height | tracking | Role |
|---|---|---|---|---|---|---|
| `--fs-h1` | 36 | `clamp(1.75rem, 1.30rem + 2.25vw, 2.25rem)` | Newsreader 500 | 1.15 | `-0.01em` | Page title; followed by the 1px `--rule` title rule (`hr.title-rule`) |
| `--fs-h2` | 26 | `clamp(1.375rem, 1.18rem + 0.95vw, 1.625rem)` | Newsreader 500 | 1.2 | `-0.005em` | Branch heading. The `border-bottom:1px var(--rule)` underline is dropped inside `.zoned` (all eight pages), where the zone rules carry separation. Also sizes the `.page-hook` (lh 1.3) |
| `--fs-h3` | 20 | `clamp(1.125rem, 1.05rem + 0.40vw, 1.25rem)` | Newsreader 600 | 1.25 | `0` | Sub-section |
| `--fs-h4` | 17 | static | **Inter 600** | 1.3 | `-0.005em` | Minor heading / `dt` |
| `--fs-lead` | 18 | `clamp(1.0625rem, 1.02rem + 0.22vw, 1.125rem)` | Inter 400 | 1.55 | `0` | `.page-promise` subheadline (`--muted`; first person; not italic). The older `.lead` class is still styled but no page uses it |
| `--fs-body` | 16 | static | Inter 400 | **1.65** | `0` | Default body |
| `--fs-sm` | 14 | static | Inter 400/500 | 1.3–1.45 | `0` | Captions, infobox labels, nav |
| `--fs-xs` | 13 | static | Inter 400 | 1.4–1.5 | `0` | References, credits, footer, "(age N)" |
| `--fs-wordmark` | 18 | static | Newsreader 600, uppercase | 24px | `0.02em` | Header wordmark below `lg`. At `lg` the header sets the tagline lockup instead (BRAND_SPEC §1.3): name 22.15px / `0.055em`, italic tagline 13px (the lockup was scaled up 2% on 2026-10-09 so the tagline meets the 13px floor) |

**13px is the floor — nothing smaller.** Body 16px / line-height 1.65 satisfies WCAG 1.4.8; rem + rem-based clamp floors satisfy 1.4.4 (resize to 200%). *Met everywhere since 2026-10-09: the header tagline (was 12.75px) and the carousel photo credit (was `0.7rem`) were raised to 13px.*

### 1.3 Measure

Cap continuous prose at **`max-width: 68ch`** on `.wiki-article` (≈ the 66-char sweet spot inside the 45–75 band; also exposed as the `max-w-article` utility). Keep the cap even when the infobox is absent (mobile) so lines never exceed the legible band. Infobox values (~36–40 cpl) are label/value fragments, not continuous prose, so the lower bound does not apply.

### 1.4 Tabular figures

Apply `font-variant-numeric: tabular-nums` to **every aligning/tabulating number**: infobox values, taxonomy-table cells (`.stat-table td`), the numbered metric lists inside taxonomy rows (`.references-list`), and status figures. (The References component's own list does not yet set it.) Inter's proportional figures stay for prose. *(The timeline year and "(age N)" were also covered until the Timeline component was retired.)*

---

## 2. Color

Near-monochrome chrome in ink and greys; the **ROYGBIV band tints are the site's only color system**, and they do hierarchical work (order), not decoration. All ratios are measured against the named background (WCAG relative-luminance formula, recomputed 2026-10); the requirement is the WCAG AA threshold met.

| Token | Hex | Role | Contrast | Req |
|---|---|---|---|---|
| `--text` | `#1B1C1D` | Body & headings | 17.1:1 on paper | AAA |
| `--muted` | `#5A5F66` | Captions, metadata, dates | 6.4:1 paper / 6.0:1 subtle | AA |
| `--muted-2` | `#5B6168` | The fix for the failing `#72777d`: references tag, photo credit, tooltip dotted underline | 6.3:1 paper / 5.8:1 subtle | AA |
| `--link` | `#3366CC` | Links (default) | 5.4:1 on paper | AA |
| `--link-hover` | `#2A4B8D` | Active (darken); hover adds the underline | 8.4:1 on paper | AAA |
| `--link-red` | `#BA0000` | Unwritten/placeholder links (`a.red`) — styled, no current markup uses it | 6.8:1 on paper | AA |
| `--accent` | `#1B1C1D` | Ink brand accent: brand-symbol rules, active carousel dot, "Email Lorenzo" chip hover fill (white text) | 17.1:1 on paper; white on accent 17.1:1 | AAA |
| `--accent-light` | `#3A3D3F` | Optional lighter ink (mapped to a utility; currently unused) | 10.9:1 on paper | AAA |
| `--accent-soft` | `#E8EAED` | Neutral band — any unhued taxonomy band and `.stat-group` header rows | `--text` 14.2:1 on it | AAA |
| `--band-red` | `#ECCCC9` | ROYGBIV band tint 1 | `--text` 11.4:1 on it | AAA |
| `--band-orange` | `#F0D9C0` | Band tint 2 | `--text` 12.5:1 | AAA |
| `--band-yellow` | `#EFE3B8` | Band tint 3 | `--text` 13.3:1 | AAA |
| `--band-green` | `#C8E0C4` | Band tint 4 | `--text` 12.1:1 | AAA |
| `--band-blue` | `#C8DAEE` | Band tint 5 | `--text` 12.0:1 | AAA |
| `--band-violet` | `#D9CFE8` | Band tint 6 | `--text` 11.4:1 | AAA |
| `--focus` | `#0B57D0` | Focus ring (distinct from link) | 6.4:1 on paper | non-text ≥3 |
| `--surface-paper` | `#FFFFFF` | Article canvas | — | — |
| `--surface-app` | `#F4F5F6` | App background behind paper | — | — |
| `--surface-subtle` | `#F6F7F9` | Infobox body, table-head fill, code | — | — |
| `--surface-band` | `#EAECEF` | Infobox bands / title bar | — | — |
| `--border-strong` | `#A8ADB4` | Infobox frame, data-table cells | decorative | exempt |
| `--rule` | `#C8CCD1` | Default rules, H2 underline, dividers | decorative | exempt |
| `--rule-soft` | `#E6E8EB` | Hairline row separators | decorative | exempt |
| `--mark` | `#FEF6E7` | Highlights a reference when a link lands on it (`#ref-…`, `:target`) | — | — |

**Resolved conflicts:**
- **Accent is ink `#1B1C1D`.** The accent was teal (`#0F6E66`, promoted to `#0B5E57` for AAA white-on-pill text, with `#C9DED8` bands) until 2026-08-29; it retired to ink so the identity marks stay neutral and the ROYGBIV spectrum is the only hue on the page. `--accent-light` is now `#3A3D3F`.
- **Band tints run in hierarchical hue order** — red → orange → yellow → green → blue → violet down a page's six bands (set per band by `hue` in the `StatTableData`; `--accent-soft` when unhued). The tints share `--accent-soft`'s lightness so the spectrum reads as order, and `--text` clears AAA on every tint. `--muted` does **not** clear AA on the red or violet tints (4.3:1) and only just clears it on green and blue (4.5–4.6:1) — keep band labels in `--text`.
- **Link stays `#3366CC`** (Wikipedia idiom, already AA at 5.4:1; the whole link taxonomy is built on it). Hover/active darkens to `#2A4B8D` and **adds an underline** — the underline is the *interaction* cue, not the resting cue, and keyboard users get it via `:focus-visible`.
- **Focus ring is `#0B57D0`** (6.4:1 on paper, deliberately distinct from link blue), not the link color.
- **`#72777d` is removed everywhere** — it fails AA at 4.28:1 on the infobox surface. Its uses moved to `--muted-2 #5B6168` (the LeftNav gloss and Timeline "(age N)" it once served are themselves retired). **No `#72777d` may remain in the tree** (acceptance gate; currently clean).
- Borders are **decorative** (carry no information color-coded), so sub-3:1 ratios are compliant. Any bordered control whose *state* must be perceivable (focus, active) uses `--focus` / `--accent`, which clear 3:1.

---

## 3. Spacing & layout

### 3.1 Spacing scale (4 / 8 grid, rem-named)

Anchor vertical rhythm on **`space-4` (16px)**. Paragraph margin `0.75rem`. Column gutter **`space-6` (24px)**. No arbitrary px in layout. The default Tailwind scale already matches; use it.

| px | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 40 | 48 | 64 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| use | icon gap | cell padding | tab padding | **rhythm unit** | H3 top | gutter / H2-side | H2 top | block sep | page top | footer | page bottom |

### 3.2 Responsive layout — the structural answer

Mobile-first; author at the 360px base, add complexity upward. **Tailwind default breakpoints only** (`sm` 640, `md` 768, `lg` 1024, `xl` 1280). Below `lg` the Pages nav lives in the drawer and the infobox renders inline, so nothing is hidden from phones.

```
base (phone):   [ sticky header: hamburger | symbol + wordmark | Email Lorenzo ]
                [ H1 ] [ title rule ] [ <details> Quick facts infobox ]
                [ hook · promise · intro ] [ zone rule ] [ 3 branches ] [ zone rule ] [ References ]
lg (≥1024):     Pages rail (176px) | article | infobox (336px)
```

- **Grid:** `grid grid-cols-1 lg:grid-cols-[11rem_minmax(0,1fr)_21rem] lg:gap-6`; `min-w-0` on the article cell (stops long URLs/tables blowing out the track); container `mx-auto max-w-326` (81.5rem / 1304px), `sm:px-4`.
- **Below `lg`** both rail columns are `hidden` (LeftNav renders only inside the drawer; the infobox renders inline via `MobileInfobox`).
- **3-col → 1-col at `lg`.** There is no intermediate 2-col `md` layout: tablets get the phone column with the inline Quick facts. No custom breakpoints. *(The earlier spec called for article | infobox at `md`; the current build does not have it.)*
- Both rails are sticky at `top: calc(var(--header-h) + 0.5rem)` and scroll internally (`.sticky-rail`) when taller than the viewport.

### 3.3 Borders, radii, elevation

- **One border weight: 1px, everywhere.** Emphasis comes from *value* (`--border-strong` / `--rule` / `--rule-soft`), never thickness. No 2px rules. This is the single biggest premium-vs-default lever.
- **Radii — square by default.** `0` for infobox frame, tables, article, header, and the brand symbol (a reference document is square). `2px` the focus-visible ring; `4px` (Tailwind 4 `rounded-sm`) the "Email Lorenzo" chip, tooltip, lightbox, drawer links, skip link; `full` only the carousel's arrow buttons and dots. **The infobox stays square** — rounding it would read as a marketing card. *(The "LD" monogram that this rule once named is gone; the brand mark is now the square Ranked Table symbol, BRAND_SPEC §1.1.)*
- **Flat-first elevation.** `shadow: none` default — article, infobox, header, rail are separated by borders, never shadow. The sticky header is **transparent with a backdrop blur** (`border-b border-rule backdrop-blur-sm`, no background fill). One token `--shadow-overlay: 0 1px 2px rgba(27,28,29,.04), 0 8px 24px rgba(27,28,29,.12)` reserved for genuinely floating layers (drawer, tooltip, lightbox). Never shadow in-flow content; never shadow the sticky header.

---

## 4. Components

### 4.1 Navigation surfaces — one job each (never duplicate a job)

| Surface | Job | Desktop | Mobile (< lg) |
|---|---|---|---|
| **SiteHeader** (sticky, `z-30`, height `--header-h`: 56px mobile / 68px at `lg`) | Identity + escape hatch | brand symbol + wordmark + tagline left, **"Email Lorenzo"** chip far right | hamburger + symbol + wordmark (never wraps) + chip that yields to fit: "Email Lorenzo" ≥400px, "Email" 360–399px, envelope icon below 360px; accessible name always "Email Lorenzo" |
| **Primary "Pages" nav** | Move between the 8 pages | left rail 176px, sticky | **slide-in drawer** from hamburger |
| ~~**SectionNav**~~ | *Retired.* | — | — |
| **Infobox** | Summarize the person | right rail 336px, sticky | **inline under the title rule**, `<details>` "Quick facts" |

**Pages:** eight, in a 4 + 4 nav from `NAV_GROUPS` in `content/site.ts` — **Constitution:** About (`/`), Story, Nature, Lifestyle; **Capital:** Health, Knowledge, Wealth, Network. (Identity was renamed Nature, `/nature`.) Group titles are Inter 13px / 600 / uppercase / `+0.04em` in `--muted`; the active page is `font-semibold` `--text` with `aria-current="page"`, the rest are `wikilink`s. No glosses.

**SectionNav is retired.** The horizontal in-page strip was removed once every taxonomy band loaded collapsed: the pages became short enough to scan, so the H1 and one title rule carry the head (`PageHeading`). A left-nav table of contents under the active page was tried and also withdrawn. In-page movement now runs through the intro paragraph's links to each branch (six of eight pages; About links only `#contact`, Network none) and hash links (`#branch` / `#branch:category`, which open the matching bands — see §4.5). Leftover `.section-nav` CSS in `globals.css` is dead.

Header is **always visible** (no hide-on-scroll — reappearing chrome is disorienting on a reference read) and a **skip-to-content link** precedes it as the first focusable element. Header sits at `z-30`; the drawer scrim (`z-40`), drawer (`z-50`), tooltips (`z-50`), and lightbox (`z-70`) sit above it.

### 4.2 Mobile drawer (launch blocker)

Left slide-in dialog (`role="dialog"`, `aria-modal`, portaled to `body`): `width min(80vw, 320px)`, `z-50`, opaque `--surface-paper`, `--shadow-overlay`, scrim `rgba(27,28,29,.40) z-40`. Trigger is a **44×44** hamburger (`aria-expanded`, `aria-controls`, `aria-label="Open navigation"`), visible only `< lg`. Contents: a "Navigation" title bar with a 44×44 close button, then the Pages list in its Constitution / Capital groups, each item ≥44px tall, the active page on a `--surface-band` fill. *(Glosses and per-page section anchors were in the earlier spec; the drawer carries neither now.)* **A11y:** focus moves in on open; focus-trapped; `Esc` closes and **returns focus to the trigger**; scrim-tap closes; body scroll locked; the drawer itself is `inert` while closed; respects `prefers-reduced-motion` (the global reduced-motion rule makes the 150ms slide instant). The page behind is **not** made `inert` while open (the focus trap stands in). A `<noscript>` Pages list in the layout keeps no-JS phones navigable. *(Not a bottom sheet — that's for contextual actions, not primary nav.)*

### 4.3 Infobox card

Looks like an encyclopedia data panel, not a profile widget.

- **Frame:** 1px `--border-strong`, **square**, `--surface-subtle` body, no shadow. The rail copy is `<aside aria-label="Profile summary">`.
- **Title bar:** `--surface-band`, centered, Newsreader 600 / 19px, `--text`.
- **Portrait carousel** (`PortraitCarousel`): a square (`aspect-square`) box, `next/image` with `fill` (the fixed box prevents CLS), `sizes="(min-width: 1024px) 480px, 100vw"`. Each page lands on its own photo (`PAGE_PORTRAIT`); manual only — prev/next arrows, dots, ←/→ keys, swipe; 150ms crossfade. Caption beneath ("Delano in YEAR (PLACE)") in `--fs-xs` `--muted`, credit line in `--muted-2`. On mobile cap at `max-w-[16rem] mx-auto`. The box has a `--surface-band` fill behind the image; there is no initials placeholder.
- **Group headings** (Sociological / Professional / Psychological / Personal): each is a native `<details>` whose `<summary>` is the heading — `--surface-band`, centered, Inter 13px / 600 / italic / `+0.04em` / `uppercase`, with a chevron. **Professional opens by default** (the employer wants the work before the birth record); the rest start collapsed.
- **Rows:** a `<dl>` grid — label `dt` 34% width, Inter 600, sentence case ("Known for"); value `dd` Inter 400, `tabular-nums`, `overflow-wrap:anywhere`. Separators `--rule-soft`. **Omit any empty row entirely** — no em-dash/"N/A" placeholder. *(The earlier `<table>` with `scope` attributes and an sr-only caption was replaced by the `<dl>`.)*
- **Mobile:** wrapped in native `<details><summary>Quick facts</summary>` (`MobileInfobox`, rendered by `PageHeading` under the title rule) — **open on About (`/`), collapsed on inner pages** (free keyboard/AT support, zero JS, no CLS). The component renders **twice** (desktop rail + inline mobile copy, each hidden at the other breakpoint); only the rail copy sets `priority` on its image, and the embedded mobile copy drops the `<aside>` landmark.

### 4.4 SectionNav — retired

*Retired (see §4.1).* It was a sticky horizontal pill strip under the H1 with scroll-spy (active pill in teal `bg-accent`, white text, `aria-current`), a scroll-snap strip on phones. No component renders it; the `PageHeading` title rule stands in its place. If in-page navigation returns, it must reuse `--header-h` for its sticky `top` and the §5 offset chain.

### 4.5 Page anatomy & taxonomy tables

- **Page anatomy (all eight pages, `.zoned`):** `PageHeading` (H1 + title rule + mobile Quick facts) → the intro trio (`.page-hook` headline that sells the page, `.page-promise` subheadline that inventories it, one paragraph that explains how to read it) → zone rule → three branches (`<h2>` + one intro paragraph + a `NestedTable`) → zone rule → References. All page prose lives in the intro and branch paragraphs; the tables run bare.
- **`NestedTable`** (every taxonomy branch): a two-level row accordion with no left column. **Band row** = tinted header (`data-hue` → `--band-*`, else `--accent-soft`), italic Title Case 15px label with its gloss and an item count; **category row** = `--surface-subtle`, italic label, parentheticals unbolded; **content row** = the italic first-person lead over a numbered `--muted` metric list. Everything **loads collapsed** to the band titles; each level opens by choice (`aria-expanded` disclosure buttons, chevrons). Collapsed rows stay in the DOM (`hidden`) for find-in-page and crawlers. **Without JavaScript** the toggles can't work, so a `<noscript>` style in `app/layout.tsx` shows every row and hides the chevrons (declared in Tailwind's base layer, the only place it can beat the `!important` `[hidden]` rule). Arriving by `#branch` opens that branch's bands and first category; `#branch:category` opens the named category and scrolls to the branch.
- **`StatTable`** (two-column DOMAIN | metrics form) remains in the codebase and supplies the shared data types, but no page currently renders it.
- **Overflow:** wrap tables in `<div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">`; `.stat-table` sets `min-width: 33rem` (the nested form resets it to `0`). Prefer `<dl>` for simple label/value pairs.
- **Timeline — retired.** The `<Timeline>` component was deleted when Story moved to `NestedTable`; its era data is kept unrendered in `content/timeline.tsx` as source material for Story → Development.

### 4.6 Links (the core trust signal)

- **Internal:** Next `<Link>`, same tab, prefetched, no glyph. **External:** new tab, `rel="noopener noreferrer"`, persistent decorative `↗` (`::after`, `aria-hidden`) + an `sr-only` "(opens in a new tab)" hint — the visible trust boundary between "inside the record" and "leaving to a third party". Never open internal nav in a new tab. `mailto:` is chrome (no glyph, no new tab).
- **States:** default `--link` no underline; **hover/focus underline** + `text-underline-offset:2px`; `:focus-visible` ring; `:active` `--link-hover`; **No visited-link colour** (dropped 2026-10-09: on a small site of eight pages it adds a second link colour without helping orientation). Link text always names the destination — never "click here".

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
| Superscript `[n]` | Citation (styled as `.ref-mark`; no page currently uses inline citations) | gloss (enhancement) | jumps to References |

Rules: never a blue solid underline on a non-navigating element (false-link);
dotted always means "hover for text"; supportive terms stay italic regardless
of signal; credential/artifact terms use `.cardlink` (hover = preview card,
click = lightbox with caption, `Esc`/backdrop closes, `role=dialog`).

---

## 5. Interaction & UX

- **Focus (mandatory, never optional):** `:where(a,button,[tabindex],summary,[role=button]):focus-visible { outline:2px solid var(--focus); outline-offset:2px; border-radius:2px }` and `:focus:not(:focus-visible){outline:none}` (the live selector also includes `input`). *(A white-ring override for the teal active pill retired with the SectionNav.)* Clears WCAG 2.4.7, 2.4.13, 1.4.11. **Never `outline:none` without a compliant replacement.**
- **Sticky-offset chain — derive from ONE source.** Header height, every sticky `top`, and `scroll-padding-top` must all agree. `--header-h` is **56px** (68px at `lg`) and sets the header's height and both rails' `top: calc(var(--header-h) + 0.5rem)`; `scroll-padding-top: 6rem` base with `@media (min-width:1024px){ html{ scroll-padding-top:7rem } }` clears the header with buffer. With the SectionNav retired, the header is the only sticky bar. This satisfies 2.4.11 (focus not obscured) and prevents the "anchor jump hides the heading" bug.
- **Tooltips & citations (WCAG 1.4.13)** — implemented in `Tooltip`: open on hover **and** focus; **dismissable with `Esc`** without moving the pointer; **persistent** via a hover bridge (a 120ms close delay, and the bubble keeps itself open on hover). Plain glosses are focusable `<button>` triggers (dotted underline) with `aria-describedby`; link triggers (`interactive`) add no extra tab stop. On touch, a tap toggles; an outside tap or any scroll closes. The bubble is portaled with fixed positioning so table overflow can't clip it, flipping above the trigger when there's no room below. Every `[n]` must *also* be a real anchor to its reference — the tooltip is enhancement, the anchor is the contract; `:target` rows flash `--mark`. *(Reference items carry `id="ref-{id}"`; the `:target` highlight is written for `.references-list`, a class the References component does not use, so it does not currently fire there.)*
- **Self-link anchors** on every H2/H3 (a `#` revealed on hover/focus, `--muted` → `--link`, padded to a 24px target) so any section is citable/deep-linkable — *not yet implemented; branch `<h2>`s carry `id`s, so deep links work, but there is no visible `#`.*
- **Motion:** transitions ≤ 150ms `ease-out`, color/background/transform only; honor `@media (prefers-reduced-motion: reduce)` — a global rule cuts every animation and transition to ~0 and sets `scroll-behavior:auto` (smooth scroll is only enabled under `no-preference`). *(The carousel crossfade was brought down from 300ms to 150ms on 2026-10-09.)*
- **Edge/empty states degrade honestly:** empty infobox row → omit (no placeholder); empty infobox group → omit; missing portrait → the `--surface-band` box fill; long URLs wrap (`overflow-wrap:anywhere`); the 404 is titled "This page has not been written" and links back to About; with JS off, anchors/nav/infobox still work and the `<noscript>` Pages list shows and every taxonomy row is shown open, chevrons hidden (see `NestedTable`).

---

## 6. Accessibility (WCAG 2.2 AA — acceptance gate)

1. **Landmarks (one each, labelled):** `<header>`, `<nav aria-label="Site navigation">` (left rail), `<main id="main" tabIndex={-1}>`, infobox `<aside aria-label="Profile summary">`, `<footer>` with `<nav aria-label="Footer">` (About, Resume, Email, YouTube, LinkedIn), plus the **skip link** as first focusable element. The drawer is a `role="dialog"` labelled "Site navigation" containing `<nav aria-label="Pages">`. *(The SectionNav landmark retired with the component.)* Do not add redundant `role=navigation/main/banner/contentinfo`.
2. **Headings:** one `<h1>` per page; never skip `h2`→`h4`.
3. **Contrast:** no text below 4.5:1; **no `#72777d` left in the tree**; `--muted-2` only at ≥13px.
4. **Focus:** every focusable element shows the ≥2px / ≥3:1 ring (§5); tabbing to an in-page anchor lands fully below the sticky chrome.
5. **Targets:** ≥24×24px everywhere; **≥44×44px** on coarse pointers for the hamburger, drawer items, and the header "Email Lorenzo" chip (inline prose links use the 2.5.8 inline exception). *(The chip stays visually 30px tall; an invisible `::before` extends its hit area 10px above and below and 4px to each side, giving 48px.)*
6. **Keyboard:** full traversal with no trap — skip link → header → drawer (open/trap/`Esc`/restore) → nav → article links and band toggles → tooltips (open via Tab, close via `Esc`) → infobox → footer.
7. **Color never sole cue:** active nav = bold + `aria-current="page"`; band/category state = chevron rotation + `aria-expanded`; links = color + hover/focus underline.
8. **State via `aria-current`** (not `aria-selected`) for navigation; ARIA only where native semantics fall short. *(The carousel dots use the tab pattern, `role="tab"` + `aria-selected`, which is the correct exception.)*
9. **Verify:** axe-core / Lighthouse a11y = 100 with zero violations on all eight routes (plus the 404) + one manual keyboard/VoiceOver pass, in CI, before merge. *(No CI a11y job exists in the repo yet.)*

---

## 7. Responsive / mobile verification matrix

Test at **360, 390, 768, 1024, 1280px**. On each: (a) nav reachable, (b) infobox reachable, (c) no horizontal page scroll (1.4.10 reflow to 320px), (d) anchor jumps land below the sticky header, (e) all tap targets ≥44px, (f) `prefers-reduced-motion` disables the drawer/scroll animation, (g) one `priority` image and a correct `sizes` per breakpoint (no CLS, no oversized source).

---

## 8. Editorial style (binding house standard)

### 8.1 Voice & person — the headline decision

**First person is primary. It is the default for everything in the article body.** The site is written by its subject and reads that way: leads, section intros, table leads, and every row value speak as "I". This replaces the earlier third-person-backbone rule, which the site outgrew — by August 2026 the body copy ran roughly 290 first-person tokens against a handful of third-person ones, all of them in two pages that had not been rewritten yet.

- **First person = the whole article.** Page leads, section intros, italic table leads, row values, reference-section labels ("My data derived from…"). Use "I", "me", "my".
- **Third person / impersonal = the infobox only.** The infobox is a record card, not a voice. It may read as bare stated facts ("Born · 7 December 1987 · Krugersdorp") or, where a sentence is unavoidable, third person. Nothing else on the site uses "he" or "Delano" as a subject.
- **Data and definitions stay impersonal in either register.** Metric values, universal statements, and citations carry no voice — voice attaches to interpretation, never to numbers.
- **Tense:** present for standing facts and dispositions; past for the record; present or future for stated intent, and mark it as intent so a plan is never mistaken for a fact.
- **Imperative** only in nav and UI microcopy ("Skip to content", "Email Lorenzo") and the contact CTA.

**Conversion complete (as of 2026-10):** `/` (About) and `/wealth`, the last two third-person pages, now read in first person. Third person survives only in metadata (page `<meta>` descriptions, the Person JSON-LD) and the carousel captions ("Delano in …"), which act as record-card text. *(Note: the voice comment at the top of `content/site.ts` still describes the retired third-person-backbone rule.)*

### 8.2 Spelling, capitalization, punctuation

- **US spelling** (`-ize`, `-or`, `-er`) throughout — e.g. color, behavior, organize, center, hemoglobin; never British forms. "program" for every named product/program (never "programme").
- **Sentence case everywhere** except proper nouns and the wordmark — H1–H4, infobox group headings and labels, buttons. **Exception, by rule:** taxonomy band names are Title Case italic ("Professional Experience", "Guided Education"). A band names a domain, the way a proper noun does, and the capitals separate it from the sentence-case category rows beneath. "Known for", never "Known For". Brand casing exact: Mindvalley, CrossFit, YouTube, SaaS, NLP, 10X, 10X Quest.
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

1. **Branch** — an `<h2>` section with a parenthetical gloss (`.heading-paren`): `Inheritance (Identity)`. **Exactly three per page** — all eight pages now comply (Wealth, once the exception with one, has Security, Efficiency, and Growth).
2. **Band** — the tinted header row inside a `NestedTable`, `domain` in the data. Bands take the ROYGBIV tints in order down the page (`hue` in the data; two bands × three branches = six hues per page). *(Bands were a single green/teal tint before the spectrum.)* **Exactly two per branch. This is non-negotiable and has been broken twice; check it before writing any table.** Verify by counting `domain:` keys in each `StatTableData` — the count must be 2. (All 24 live tables pass as of 2026-10; Knowledge's data lives in `content/knowledge.tsx`.)
3. **Category** — the grey header row, `category` in the data. **Variable with the data**, 1–4 per band on the live site (e.g. Network runs `[1,4] [1,3] [1,2]`; Health `[3,1] [3,1] [4,1]`).

### 9.2 Rows

- **Label + parenthetical**: either a count of the items in the value (`Genotype (4)`) or a qualifier (`Early childhood (age 0–6)`, `1997 (age 10)`). **A numeric parenthetical must equal the item count in the value** — this is machine-checkable and has caught real errors.
- **Grouped-facet form** (Lifestyle, Inheritance): `Facet (detail), facet (detail), and facet (detail)`. Oxford comma; semicolons for sub-detail inside a parenthesis.
- **Faceted-prose form** (Story → Development): a short factual paragraph, ~50 words, with Ranganathan facets named inline once each — `(Space)`, `(Matter)`, `(Energy)`. Time is the chronology; Personality is the paragraph. Prose carries agency through grammatical voice, which is why no separate "responses" facet is needed.
- **Argued form** (Story → Emergence): longer prose that makes a case rather than recording one. No word ceiling. Each entry states what the choice cost or contradicted.
- **Leads**: every category opens with an unlabelled italic first-person claim, one line.

### 9.3 References

One or two blocks per page, each using the `References` component, titled by what they hold — `(Personal)` / `(Social)` (Lifestyle), `(Data)` / `(Evidence)` (Nature), `(Data)` / `(Guidelines)` (Health, Wealth, Network), `(Data)` / `(Media)` (Story). About and Knowledge carry a single `(Evidence)` block: their evidence is one kind, so a second block would be empty. Sections within run **guidelines → data → evidence**, ordered to match the taxonomy above them. Labels are sentences: "My data derived from…", "Public evidence of…".

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
