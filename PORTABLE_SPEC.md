# PORTABLE_SPEC.md — how to build a personal wiki like this one

A specification for building a Wikipedia-style personal profile site. Written so
someone else's site can be built from it without seeing this one's content. Pair
it with `BUILD_PROMPT.md`, which is the instruction to hand an AI assistant.

The idea: **a person, classified.** Not a portfolio, not a CV, not a blog. A
faceted encyclopaedia of one life, where every claim is either measured or
labelled as unmeasured, and the structure is the argument.

---

## 1. What makes it work

Three commitments. Break any of them and it becomes a personal website like any
other.

**Structure is the argument.** The taxonomy is not a container for content, it
*is* the content. Where a fact sits says something the fact alone does not.

**Verifiable beats impressive.** Read numbers from raw sources and cite them.
Say "pending" rather than guessing. A page that admits what it does not know is
more credible than one that does not.

**Consent is not yours to give.** Your life contains other people. You may
publish yourself; you may not publish them.

---

## 2. Structure

### The page, then three levels, strictly

1. **Page** — one domain of the person. Six to eight total (this site runs
   eight, in two navigation groups of four).
2. **Branch** — `<h2>` section with a parenthetical gloss. **Exactly three per
   page.**
3. **Band** — the coloured header inside a table. **Exactly two per branch.**
   This is the rule most likely to be broken and the one that keeps the site
   coherent. Bands split on a *principled binary* — individual against social,
   given against chosen, body against world. If a third band seems necessary,
   the binary is wrong, not the rule. Three branches × two bands gives six
   bands per page; tint them in spectrum order down the page (red, orange,
   yellow, green, blue, violet), so hue marks position and never emphasis.
4. **Category** — the grey subheader. **Variable**, one to four, following the
   data rather than a quota.

### Suggested page set

Two navigation groups of four: **Constitution** (the inputs: where you came
from, who you are, how you live) and **Capital** (what those produce).

| Group | Page | Three branches (gloss) |
|---|---|---|
| Constitution | About | *Your name* (Introduction), Website (Guide), Contact (Offers) |
| Constitution | Story | Inheritance (Identity), Development (Timeline), Emergence (Agency) |
| Constitution | Nature | Intellect (Cognition), Character (Affect), Drive (Conation) |
| Constitution | Lifestyle | Activity (Habits), Time (Routines), Space (Resources) |
| Capital | Health | Integrity (Structure), Balance (Homeostasis), Capacity (Performance) |
| Capital | Knowledge | Works (Production), Skills (Practice), Education (Theory) |
| Capital | Wealth | Security (Protection), Efficiency (Leverage), Growth (Allocation) |
| Capital | Network | Care (Support), Collaboration (Exchange), Contribution (Service) |

Adapt the names, keep the shape. (Nature was first called Identity; the
word moved to the Story page's Inheritance branch, and the page kept the
given half of nature against nurture.)

### The Story page is the spine

Three branches on a single question — *when did this become true?*

- **Inheritance** — true at the instant of birth; no response was possible.
  Bands: biological (what came down a germline) against social (what came with a
  birth certificate).
- **Development** — administered over time; a response was possible but the
  terms were not yours. Chronological entries grouped into life stages.
- **Emergence** — chosen against what the first two would predict. Bands:
  dispositions (what you elected to be) against decisions (what you elected to
  do). (This spec once split each into demonstrated and declared; this site
  now runs one category per band.)

That discriminator resolves nearly every placement question. Citizenship is
inheritance. Religion of upbringing is development — it was administered over
years and you answered it. Changing your name at twenty-one is emergence.

---

## 3. Row forms

**Grouped facets** — for reference-style content.
`Facet (detail), facet (detail), and facet (detail)`
Label carries a count that **must equal the number of items**. Machine-checkable.

**Faceted prose** — for chronology. A factual paragraph of roughly fifty words,
with Ranganathan's facets named inline once each: `(Space)`, `(Matter)`,
`(Energy)`. Time is the chronology itself; Personality is the paragraph. Do not
add a facet for agency — grammatical voice already carries it. "A car accident
cost her a finger" and "I trained gymnastics" need no labels to be told apart.

**Argued prose** — for anything making a case rather than recording one. No word
ceiling. State what the choice cost or contradicted.

Every category opens with an **unlabelled italic first-person lead**, one line.

---

## 4. References

One or two blocks per page, each glossed by its kind — `References (Data)`,
`References (Guidelines)`, `References (Evidence)`. Sections within them run
**guidelines → data → evidence**, ordered to match the taxonomy above them:

- **Guidelines** — the public standard you measure against (WHO, a national
  body, a published protocol).
- **Data** — the instrument that produced your number (the lab, the survey, the
  device, the raw export).
- **Evidence** — the studies establishing that the guideline matters.

Label them as sentences: "My data derived from tests performed under load."

This is what separates the format from a CV. Anyone can claim a number. This
shows the standard, the instrument, and the science, and lets a reader check
all three.

---

## 5. Voice

**First person throughout the article body.** You are writing about yourself; do
not adopt a biographer's distance.

**The infobox is the exception** — a record card, not a voice. Bare stated facts
or third person.

Present tense for standing facts, past for the record, and **mark intent as
intent** so a plan is never mistaken for a fact.

---

## 6. Sourcing and consent — the binding part

**Read from raw sources.** If you have a genome export, read the genotype from
it and cite the rsIDs. If you have lab results, cite the lab and the date. Do
not transcribe a number from memory or from a summary — on this site, doing so
surfaced a genetic result recorded as its opposite.

**Report facts, not judgements.** "A report was made" is a record. "The report
was mistaken" is an argument, and belongs elsewhere if anywhere.

**Say pending.** An honest gap is an asset. A confident guess is a liability.

**Consent rules, non-negotiable:**

- Name only those who have consented, plus parents, whose names are ordinarily
  public already.
- Every other relative appears by **relation** — "my maternal grandmother" —
  never by name, and never with a birth date.
- People acting in a **public or professional capacity** may be named and linked:
  a teacher who taught publicly, a performer under their own name, a business
  partner with a website.
- **Never publish a third party's health information**, including a relative's
  psychiatric history, without their consent. A clinical family history is
  valuable to a physician and belongs in a private document you hand them, not
  on a public page.
- Apply this **site-wide**, including the infobox — not only the page you are
  editing.

---

## 7. Technical shape

Next.js (App Router) with React and TypeScript, and Tailwind CSS; use current
stable versions (Next.js 16, React 19, Tailwind CSS 4 at the time of writing).
With Tailwind 4 there is no JavaScript config: design tokens are CSS variables
in the global stylesheet, mapped to utilities in an `@theme` block. Pages carry
no request-time data, so they prerender as static HTML; old-URL redirects and
security headers live in `next.config`, which a pure static export would drop.
Deploy on Vercel; push to `main` deploys.

Three columns: left navigation (grouped), centre article, right infobox. The
infobox renders twice — a desktop rail and a mobile disclosure.

Content lives in typed data structures, not in JSX prose, so it can be
validated. One `StatTableData` per branch:

```
{ title, groups: [ { domain, label, hue?, rows: [ { category, metrics: [...] } ] } ] }
```

A group is a band; `hue` is its spectrum tint. A metric is
`[term, value, supportive?, tooltip?, href?, sub?]`. Values may be strings or
arrays of nodes when they contain links.

**Checks before every commit:**

- exactly two `domain:` keys per table
- numeric row parentheticals match their item counts
- no unconsented private names
- typecheck clean
- production build in an **isolated copy** — building in place while a dev
  server runs corrupts it, since both share the build directory

---

## 8. What to avoid

- **Bloat.** Every row must earn its place. Ambient context that describes the
  era rather than the life gets cut.
- **Commentary in the record.** Keep the timeline factual; argue in the branch
  built for arguing.
- **Padding a facet.** If a category has nothing for a facet, omit it. The
  absence is information.
- **Restating the label.** If the row is called "Genotype", the value does not
  need the word "genotype".
- **Linking outward first.** If your own site documents something more fully,
  link there.
