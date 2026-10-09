# Autaxonomy — lorenzodelano.com

A Wikipedia-style record of one life: a person, classified. Every claim is
measured and referenced, or marked pending. Built with Next.js 16 (App Router),
React 19 and Tailwind CSS 4; statically rendered and deployed on Vercel from
`main` (GitHub: `delanoinstitute/autaxonomy`).

## Pages

Eight pages in two groups. Each page has three branches; each branch's table
has exactly two bands (see `PORTABLE_SPEC.md` §2).

| Group | Route | Page | Branches |
| --- | --- | --- | --- |
| Constitution | `/` | About | Lorenzo, Website, Contact |
| | `/story` | Story | Inheritance, Development, Emergence |
| | `/nature` | Nature | Intellect, Character, Drive |
| | `/lifestyle` | Lifestyle | Activity, Time, Space |
| Capital | `/health` | Health | Integrity, Balance, Capacity |
| | `/knowledge` | Knowledge | Works, Skills, Education |
| | `/wealth` | Wealth | Security, Efficiency, Growth |
| | `/network` | Network | Care, Collaboration, Contribution |

Old URLs (`/identity`, `/history`, `/education`…) redirect permanently; the
list is in `next.config.mjs`.

## Where things live

| Path | What it holds |
| --- | --- |
| `app/` | One folder per page (`app/health/page.tsx` is `/health`). `layout.tsx` is the frame on every page: header, left nav, infobox, footer. `globals.css` holds the design tokens and maps them to Tailwind utilities in its `@theme` block. `sitemap.ts`, `robots.ts` and `manifest.ts` are for search engines and phones. |
| `content/` | The words and data: `site.ts` (metadata, navigation), `profile.ts` (infobox), `knowledge.tsx`, `timeline.tsx`. |
| `components/` | Reusable building blocks: `Infobox`, `NestedTable`, `StatTable`, `Tooltip`, `References`, `PortraitCarousel`… |
| `public/` | Files served as they are: `brand/` marks, `carousel/` photos, `evidence/` and `reports/` PDFs, `resume.pdf`. |
| `resume/resume.html` | The résumé's source. Edit it, export to PDF, save as `public/resume.pdf`, commit. |
| `docs/` | Reference lists behind the Health and profiling pages. |

## The specs

| File | What it governs |
| --- | --- |
| `BRAND_SPEC.md` | The brand everywhere, not just this site: marks, inks, rank colours, letterhead, slides. |
| `DESIGN_SPEC.md` | How this site looks, reads and behaves: type, colour tokens, layout, components, accessibility, house style. Binding: where code and spec disagree, change the code. |
| `KNOWLEDGE_SPEC.md` | The research and reasoning behind the Knowledge page's taxonomy (knowing, doing, making). |
| `PORTABLE_SPEC.md` | The method with this site's content removed, so anyone can build a personal wiki like it. |
| `BUILD_PROMPT.md` | The instructions to give an AI assistant together with `PORTABLE_SPEC.md`. |

## Develop

```bash
npm install
npm run dev      # http://localhost:3000, reloads as you edit
npm run build    # production build, the same one Vercel runs
```

Push to any branch other than `main` for a Vercel preview URL; merging into
`main` publishes to lorenzodelano.com.

## Never commit

- `private/` and any record with ID numbers, dates of birth or contact details
  `.gitignore` blocks every PDF by default; the public ones (`resume.pdf`,
  `public/evidence/`, `public/reports/`) were vetted and added deliberately.
- `.env*.local` files.

Financial account data is excluded from the public site by design.
