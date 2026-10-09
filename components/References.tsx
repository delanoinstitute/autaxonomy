import type { ReactNode } from "react";
import WikiLink from "@/components/WikiLink";

/**
 * A Wikipedia-style References section: a numbered list of sources, each an
 * optionally-linked citation with a small tag noting which reading it backs.
 * Reusable across pages — pass the page's own reference list.
 *
 * Compose each `cite` with <em> for journal or book titles. Provide `url` for
 * web-based tools (rendered via WikiLink, so external links get a new tab and
 * the ↗ glyph); peer-reviewed papers and books can stand on the citation alone.
 */
export type Reference = {
  id: string;
  cite: ReactNode;
  url?: string;
  urlLabel?: string;
  tag?: string;
};

/** A titled group of references (Artifactual / Exemplary / Testimonial …). */
export type ReferenceSection = {
  label: string;
  description?: ReactNode;
  items: Reference[];
};

function ReferenceList({ items, start = 1 }: { items: Reference[]; start?: number }) {
  return (
    <ol
      start={start}
      className="reference-list mt-2 list-decimal pl-5 text-sm leading-snug text-muted marker:text-muted-2"
    >
      {items.map((r) => (
        <li key={r.id} id={`ref-${r.id}`} className="pl-1">
          {r.cite}
          {r.url ? (
            <>
              {" "}
              <WikiLink href={r.url}>{r.urlLabel ?? r.url}</WikiLink>
            </>
          ) : null}
          {r.tag ? <span className="text-muted-2"> · {r.tag}</span> : null}
        </li>
      ))}
    </ol>
  );
}

export function References({
  items,
  intro,
  sections,
  title = "References",
  id = "references",
}: {
  items?: Reference[];
  intro?: ReactNode;
  /** Sectioned mode: italic label + description over each group; numbering runs continuously. */
  sections?: ReferenceSection[];
  /** Heading text and anchor id — override to render a second, distinct block (e.g. Evidence). */
  title?: ReactNode;
  id?: string;
}) {
  let counter = 1;
  return (
    <>
      <h2 id={id}>{title}</h2>
      {intro ? <p>{intro}</p> : null}
      {sections
        ? sections.map((s) => {
            const start = counter;
            counter += s.items.length;
            return (
              <div key={s.label}>
                <p className="mb-0 mt-4">
                  <em>{s.label}</em>
                  {s.description ? <>: {s.description}</> : null}
                </p>
                <ReferenceList items={s.items} start={start} />
              </div>
            );
          })
        : items && <ReferenceList items={items} />}
    </>
  );
}
