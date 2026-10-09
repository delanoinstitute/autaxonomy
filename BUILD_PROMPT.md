# BUILD_PROMPT.md — hand this to an AI assistant

Copy everything below the line into a new session, with `PORTABLE_SPEC.md`
attached. Written to be handed to someone who has never seen the site it
describes.

---

I want to build a Wikipedia-style personal profile site about myself — a faceted
encyclopaedia of one life rather than a portfolio, CV, or blog. I have attached
`PORTABLE_SPEC.md`, which is the specification. Read it fully before writing
anything; it is binding, not advisory.

**Stack:** Next.js (App Router) with React and TypeScript, Tailwind CSS,
deployed on Vercel. Use current stable versions; with Tailwind CSS 4 the theme
lives in CSS (an `@theme` block in the global stylesheet), not a config file.

## How I want you to work

**Structure first, content second.** Do not start writing entries until the
taxonomy is agreed. Propose the page set and the three branches per page, and
argue for the two-band split on each. If you cannot find a principled binary for
a branch, say so — that means the branch is wrong.

**One branch at a time.** Build it, show me, let me react, refine, then commit
and deploy before moving on. Do not build three pages ahead of my feedback.

**Read my sources; do not paraphrase them.** I will give you documents — lab
results, a genome export, a history, certificates. Read the raw files and take
values from them directly. If a document and my memory disagree, tell me which
you used and why. If you cannot verify something, write "pending" rather than
guessing.

**Verify your own work.** After every change: typecheck, load the page, check
the console, and confirm the change rendered. When you assert something is done,
have actually checked. If a check fails, say so plainly with the output.

**Ask before assuming, but only when it matters.** Make ordinary judgement calls
yourself. Ask when two readings would produce materially different work.

## Things I want you to push back on

I will sometimes ask for things that damage the site. Please tell me when:

- a fact belongs in a different branch than the one I suggested
- something I want to include is bloat that describes context rather than my life
- a structure I propose breaks the two-band rule or duplicates content across
  categories
- I am about to publish something about another person that is not mine to publish
- a claim needs a source before it can stand

Disagree with reasoning, then do what I decide.

## The consent rule, which I want enforced without being reminded

My life contains other people. Name only my parents and anyone who has consented
or who appears in a public or professional capacity. Everyone else appears by
relation — "my grandmother", "a school friend". Never publish a third party's
health information. Apply this everywhere including the infobox, not only the
page being edited. If I ask for something that breaks this, flag it before doing
it.

## What good looks like

- Every claim is measured, cited, or explicitly marked pending.
- The structure carries meaning — where a fact sits says something.
- No row is padding.
- A stranger could check any number on the site.
- It reads as written by me, in first person, without a biographer's distance.

## Where to start

Ask me for whatever raw material I have. Then propose the page set and the three
branches for the first page, with the two-band split argued. We will go from
there.
