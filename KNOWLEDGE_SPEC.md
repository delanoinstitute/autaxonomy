# Knowledge page — taxonomy specification

Design spec for the `/knowledge` page: a tripartite framework housing
**education, skills, and works** as one integrated record — both a timeline
(when I studied, performed, created what) and a status (what I know, can do,
have made). Follows the site taxonomy standard shared by all eight pages
(Nature, formerly Identity, and Health set it): 3 branches, each with
exactly 2 bands, each band holding a variable number of categories. Rendered
as a two-level row accordion (`NestedTable`: colored band rows over gray
category rows, no left column), each category opening with an unlabelled
italic first-person lead over its entries; tooltips carry credential images
and detail; a References section closes the page. (The original layout —
left column = view, right column = disclosing methodology, labelled PROFILE
composite lines — was retired in July 2026; see "Current page" below.)

Sections 1–3 are the July 2026 research and reasoning record and are kept
as written; sections 4–5 record the decisions, with notes where the build
diverged. The "Current page" section is the authoritative description of
what `/knowledge` renders now.

Longer-term ambition (superstudents project): a knowledge framework elegant
enough to replace the university taxonomy (humanities/sciences,
pure/applied). This page is the demonstration — the framework applied to one
person.

---

## Current page (as built, October 2026)

Code: `app/knowledge/page.tsx` (prose, order) and `content/knowledge.tsx`
(tables, references). Nav: Knowledge sits in the Capital group (Health,
Knowledge, Wealth, Network), beside Constitution (About, Story, Nature,
Lifestyle) — a 4+4 nav of eight pages.

Intro: hook ("Your knowledge picks the problems you get to solve."),
promise (works = what you've made, skills = what you can do, education =
what you know), and one paragraph linking the three branches.

Branches render **evidence first** — Works, Skills, Education (reordered
2026-07-16) — each `h2` with a parenthetical gloss, a lead naming its two
bands as a given/chosen pair, then the table:

| Branch (gloss) | Band 1 → categories | Band 2 → categories |
|---|---|---|
| **Works** (Production) | **Professional Experience** → First jobs (part-time employee); Employment (full-time employee); Partnerships (full-time co-operator); Self-employment (independent operator) | **Personal Works** → Methodologies (design principles); Designs (original contributions) |
| **Skills** (Practice) | **Technical Skills** → Structural (knowledge and system design); Material (content and spatial design) | **Interpersonal Skills** → Pedagogical (teaching and training); Commercial (selling and negotiating); Directorial (profiling and orchestration) |
| **Education** (Theory) | **Guided Education** → Formal (in-person schooling); Non-formal (in-person training) | **Independent Learning** → Non-formal (remote schooling); Informal (remote training) |

Band-pair framing in the branch leads: employment (given) / authorship
(chosen); technical (trained) / interpersonal (earned); schooling (issued) /
curriculum (chosen). Category format is **Kind (scope)**. Each category
opens with one italic first-person lead ("I …"); rows are bold label →
value (role/subject, place, duration, years, age), with credential images
and role detail in tooltips.

References — titled **References (Evidence)** — hold only the page's own
evidence, in three first-person sections: samples of skills caught in
action; access to published co-creations; feedback from clients and
students. The theoretical sources in section 6 are not cited on the page.

---

## 1. Research survey (July 2026)

Three research sweeps: philosophical/cognitive, library science/academia,
integral/multi-axis. Key findings, by what each contributes:

### The spine — Aristotle (Nicomachean Ethics VI)

The only surveyed framework with a native, first-class **making** category.
Two interlocking triads: activities and their intellectual virtues.

| Activity | Virtue | English | Page branch |
|---|---|---|---|
| Theoria (contemplation) | Episteme (+ sophia, nous) | Knowing | Education |
| Praxis (action) | Phronesis | Doing | Skills |
| Poiesis (production) | Techne | Making | Works |

Poiesis is defined precisely by having an **external end — the made thing**
(praxis is its own end). Caveat honestly held: Aristotle's praxis is
ethical-political action, narrower than modern "skills"; we take the
structure, defining the middle leg with Ryle/Vervaeke's broader procedural
scope. Source: SEP, "Episteme and Techne".

### The know/do boundary — Ryle, Vervaeke

- Ryle (1949): knowing-that vs knowing-how are different **kinds**, not
  levels (the regress argument). License for Education and Skills as
  separate branches.
- Vervaeke's 4P (propositional, procedural, perspectival, participatory):
  same cut with cognitive-science grounding (semantic vs procedural memory).
  Perspectival/participatory are person-transforming, never
  product-producing — they enrich the Knowing/Doing legs but supply no works
  category. Used as annotation vocabulary, not structure.

### Sub-structure for Knowing — Bloom revised (Anderson & Krathwohl 2001)

Knowledge Dimension: factual, conceptual, procedural, metacognitive —
usable inside the Knowing branch. "Create" promoted to the apex of the
cognitive hierarchy: institutional legitimacy for treating works as the
highest evidence of knowledge (the page's core argument).

### The connective tissue — Polanyi, SECI

- Polanyi: tacit/explicit — why skills resist documentation while education
  and works are codified.
- Nonaka's SECI names the arrows between branches: **internalization**
  (education → skill), **externalization** (skill → works). Narrative use
  only — its empirical support is weak (Gourlay).

### The classification method — Ranganathan, LCC, ESCO

- **Facets beat trees** (Colon Classification, PMEST): don't enumerate
  boxes; define orthogonal dimensions and synthesize. Mono-hierarchies
  (Dewey) leave interdisciplinary work homeless.
- **Literary warrant** (LCC): let the actual holdings (my real education,
  skills, works) determine leaf categories; facets provide the principled
  superstructure.
- **Graph over tree** (ESCO): relate items — this work exercised these
  skills, which embody this education — rather than filing each once.
  Implemented as cross-links between entries.

### The anti-university argument — Stokes, Biglan, OECD

- **Stokes, Pasteur's Quadrant (1997)**: pure/applied is two orthogonal axes
  (understanding-seeking × use-inspiration) collapsed into one line; the
  collapse erases the most productive quadrant (Pasteur: both). The general
  move — when a traditional dichotomy fails, uncross its axes.
- **Biglan (1973)**: classify by epistemic character (hard/soft = paradigm
  consensus), not prestige or subject.
- OECD Fields of Science already abandons pure/applied at the top level —
  the institutions have half-conceded.

### The validation principle — Wilber's IMP

Integral Methodological Pluralism: knowledge domains are **methods that
disclose** phenomena, not filing bins. Each sub-branch's right column names
its methodology and evidence type. This is the same enactment logic as
Health (Biochemistry/Blood) and Nature (Inventory/HEXACO) had at the time.
(The right-column methodology display was later retired site-wide; the
principle now lives in what each page cites as evidence.)

### The MECE verdict on the original 2-axis intuition

Proposed grid: [individual/social] × [cognitive/psychomotor/psychosocial].
Finding: **not orthogonal** — "psychosocial" as a column contains the
sociality that the row axis already carries (collaboration becomes both a
row and a column value). Fix: sociality lives on ONE axis only. The
individual/social axis is retained — as the recurring sub-branch split
(section 2), where it does real work without collision.

Rejected as top-level structure: Gardner's multiple intelligences
(psychometrically weak — measured intelligences intercorrelate; a
vocabulary, not a structure); AQAL quadrants raw (classify perspectives, so
one artifact legitimately lives in all four — good philosophy, awkward
taxonomy; jargon-heavy for a public page).

### The division-of-labor advantage (site architecture)

Gaps the stress-test found in any knowledge grid — affect/values, physical
constitution — are already housed elsewhere on this site: values and beliefs
on Nature, the body on Health. Knowledge does not need a heart or health
column. Bloom's three domains are distributed across the site: cognitive →
Knowledge, affective → Nature, psychomotor → Health (capacity) + Knowledge
(embodied skill as competence).

---

## 2. The model — Knowing / Doing / Making × individual/social

Three branches (Aristotle's activities), each split by the **locus axis**
(individual ↔ social) — the original two-axis intuition, orthogonalized:

| Branch | Individual sub-branch | Social sub-branch |
|---|---|---|
| **Knowing** (theoria → episteme) | Self-directed study (autodidaxy) | Transmitted instruction (schooling, mentors) |
| **Doing** (praxis → phronesis) | Technical skill (body, tools, symbols) | Interpersonal skill (coaching, teaching, leading) |
| **Making** (poiesis → techne) | Authored works (solo artifacts) | Produced works (collaborative artifacts) |

The locus axis appears in a different guise per branch — transmission mode,
exercise mode, authorship mode — which is exactly how a good facet behaves
(Ranganathan): one dimension, many manifestations.

As built, the locus split became each branch's two bands, renamed:
Knowing → Independent Learning / Guided Education; Doing → Technical
Skills / Interpersonal Skills; Making → Personal Works / Professional
Experience (the social band is listed first on the page for Education and
Works).

Validation methodology per branch (proposed as right-column bands, IMP
move; the right column was retired with the row accordion on 2026-07-13,
and evidence now sits in credential tooltips and the References section):

- Knowing → **credentials & curricula** (transcripts; the library/curriculum
  actually completed)
- Doing → **demonstrable performance** (what can be performed on demand;
  testimony for interpersonal skill)
- Making → **the artifact itself** (portfolio — the work is its own
  evidence)

Evidence strength deliberately ascends: claims → demonstrations → artifacts.
Works are the strongest evidence (Bloom's Create at the apex).

Site parallels:

| Page | Triad (page order) | Mnemonic |
|---|---|---|
| Nature | Intellect / Character / Drive | head / heart / gut |
| Health | Integrity / Balance / Capacity | build / rest / load |
| Knowledge | Works / Skills / Education (Making / Doing / Knowing) | production / practice / theory |

Surface language stays plain: the branches are Works / Skills / Education,
glossed (Production) / (Practice) / (Theory), and the page promise defines
them as what you've made / can do / know. Greek terms
(theoria/praxis/poiesis, episteme/phronesis/techne) were planned for
tooltips and intros, per the site's de-jargoning standard (cf. Funk
labels); since 2026-07-16 they no longer appear on the page and live only
in this spec.

## 3. Replacing the university taxonomy (the argument)

The framework's polemical payload, kept implicit on the page:

1. Pure vs applied dissolves: every branch spans understanding ↔ use
   (Stokes). A method authored (Making) is simultaneously theory embodied.
2. Humanities vs sciences dissolves: branches classify by **activity and
   evidence**, not subject prestige. Subjects are facet *tags* on entries
   (literary warrant), not the structure.
3. The university privileges Knowing-social (transmitted instruction,
   credentialed) — one cell of six. This page weights all six, and orders
   evidence artifacts-first.

## 4. Decisions (resolved July 2026)

1. Branch surface names: **Education (theory), Skills (practice), Works
   (production)** — mapping directly onto the pre-existing pages; the
   knowing/doing/making triad and Greek terms live in intros and tooltips.
   *Since 2026-07-16 the page runs Works, Skills, Education (evidence
   first), and the Greek terms are off the page (see section 2).*
2. Doing sub-branches: **Technical / Interpersonal** — kept, as the bands
   Technical Skills / Interpersonal Skills.
3. Methods, Models, and Writing survive as entry groupings inside
   **Authored** (all solo artifacts); course-production credits go under
   **Produced** (collaborative artifacts). Tables start sparse — filled as
   cataloged. *Superseded (July 2026): the Works bands are Professional
   Experience (First jobs, Employment, Partnerships, Self-employment) and
   Personal Works (Methodologies, Designs); course productions appear as
   Designs rows and as References co-creations.*
4. Entries carry inline **period tags** (years/decades), Schwartz-tag style.
   *As built: Education and Works rows end in duration, years, and age
   (Skills rows carry no dates),
   e.g. "3 years, 1994–1996 (age 6–8)".*
5. **/knowledge replaces** /education, /skills, /works (301 redirects; nav
   entries removed; Experience page's Creative section absorbed). The
   site-level past/present/future grouping will need revision afterward —
   deferred until the individual pages settle. *Done: the three routes and
   /experience redirect into /knowledge anchors; the site-level grouping
   became the 4+4 Constitution / Capital nav.*

## 5a. Per-branch validation taxonomies (supersedes 5, July 2026)

The uniform facet vocabulary was demoted after one page-iteration: forcing
one grid across theory, practice, and production made the categories
abstract (Education degenerated to "Creative" twice). The uniformity now
lives one level up — every category answers the same question, "how do I
know that I know?", with a branch-appropriate answer. Category format
stays **Kind (validated how)**:

- **Education** — the Coombs/UNESCO registers: Formal (examined
  instruction) → standardized tests; Non-formal (certified study) →
  certificates, self-sought; Informal (open inquiry) → the problem
  yields (Dewey's warranted assertibility; Pasteur quadrant).
- **Skills** — by the medium the skill acts on: Symbolic (structural
  design), Somatic (movement mastery), Relational (live transmission),
  Organisational (project orchestration). Enactment lives in the bands:
  Demonstrations (performance assessment), Testimony (social
  epistemology's knowledge source + client acceptance).
- **Works** — engineering's validation/verification split: Originals
  (proven in use — efficacy, it works or it doesn't) vs Commissions
  (delivered to standard — acceptance).

The page-wide evidence ladder still ascends: tests → certificates →
solved problems → demonstrations → testimony → working artifacts →
accepted deliveries. Reference added: Coombs & Ahmed (1974). Holland
moved back to Nature only (RIASEC no longer drives surface categories;
the facet table below is retained as background vocabulary/tags).

*Where the build went next (July 2026):*

- *Education kept the Coombs registers but crossed them with delivery
  (in-person / remote) on 2026-07-09, under the bands Guided Education and
  Independent Learning — see "Current page".*
- *Skills: the medium categories and the Demonstrations / Testimony bands
  were replaced on 2026-07-15 by a 2×2 reclassification — Technical Skills
  (Structural, Material) and Interpersonal Skills (Pedagogical, Directorial;
  Commercial added 2026-07-16). Testimony moved to the References section.*
- *Works: Originals / Commissions became Personal Works (Methodologies,
  Designs) and Professional Experience (employment history by contract
  type).*
- *Category format moved from "Kind (validated how)" to "Kind (scope)".
  Coombs & Ahmed, like the other theoretical sources, left the page's
  references on 2026-07-16.*

## 5b. Activity facets (background vocabulary; superseded as row structure)

Each cluster's left-column category reads **Facet (dominant function)** —
the structural what, then the functional output — e.g. "Creative
(socialized literacy)" for formal schooling.

Six facets, a derived vocabulary anchored in Holland's RIASEC (credited in
the references; RIASEC itself classifies interests and stays on the
Nature page — this is an activity vocabulary built from it):

| Facet | RIASEC anchor | Scope |
|---|---|---|
| Mechanical | R | manual/tool tasks — working with things |
| Physical | (body) | psychomotor mastery — gross (athletic) and fine (instrumental, expressive) |
| Creative | I + A (mental) | mind-work — analysis, design, symbolic expression |
| Social | S | direct service and transmission to persons |
| Organisational | E | leading groups, projects, businesses |
| Administrative | C | information upkeep and routine task management |

Rules: one facet per cluster (file by dominant faculty — piano → Physical
(fine), composing → Creative); the same activity carries the same facet
everywhere; embodied artistry belongs to Physical, ideational artistry to
Creative (this split resolves RIASEC's Artistic ambiguity); unpopulated
facets (Mechanical, Administrative) are signal, not error.

SECI was considered as a per-cell category and **rejected** (a process
model, not a bucket scheme; several assignments were forced; it duplicated
the locus axis and re-jargoned the page). Its correct use is narrative —
education internalizes into skills, skills externalize into works.

Function words as of early July 2026 (historical; the current category
glosses are listed under "Current page"): socialized literacy / exploratory literacy
(Education — both end in the branch's function-noun, literacy; Pasteur
tooltip on exploratory); structural design, movement mastery (Skills —
Technical); live transmission, project orchestration (Skills —
Interpersonal); codified originals, collaborative artifacts (Works).

## 6. Reference candidates for the page

*Status: none of these is cited on the page. Since 2026-07-16 the
Knowledge references carry only first-party evidence (skill samples,
co-creations, feedback); this list stays as the theoretical bibliography
for the framework and the superstudents project.*

- Aristotle, Nicomachean Ethics VI (episteme/techne/phronesis;
  theoria/praxis/poiesis)
- Ryle (1949), The Concept of Mind (knowing-how/knowing-that)
- Anderson & Krathwohl (2001), A Taxonomy for Learning, Teaching, and
  Assessing (revised Bloom)
- Vervaeke — four kinds of knowing (4P)
- Polanyi (1966), The Tacit Dimension
- Ranganathan (1933), Colon Classification (faceted classification)
- Stokes (1997), Pasteur's Quadrant
- Wilber — Integral Methodological Pluralism (enactment)
- Delano — the framework itself (superstudents; forthcoming), first
  reference, as on Health.

(Verify all citation details against sources before publishing, per the
references standard.)
