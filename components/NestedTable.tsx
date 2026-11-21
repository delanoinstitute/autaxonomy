"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import Chevron from "./Chevron";
import MetricList from "./MetricList";
import type { StatTableData } from "./StatTable";

// A two-level, row-based accordion — no left column. Each band is a colored
// header row that collapses; inside it, each category is a gray header row
// with its own chevron, over a full-width content row. Everything defaults
// closed: pages load compressed to their band titles. Used by the taxonomy
// branches on every page.

/** Split a label so any parenthetical drops to muted weight. */
function labelParts(text: string) {
  return text
    .split(/(\([^)]*\))/g)
    .filter(Boolean)
    .map((part, i) =>
      part.startsWith("(") ? (
        <span key={i} className="stat-paren">
          {part}
        </span>
      ) : (
        <Fragment key={i}>{part}</Fragment>
      ),
    );
}

export function NestedTable({
  groups,
  hint,
  defaultOpen = false,
}: StatTableData & { hint?: string; defaultOpen?: boolean }) {
  // Default: everything closed — the page loads compressed to its band
  // titles, and the reader explores branch by branch. Categories inside a
  // band stay collapsed too, so each level opens by choice.
  // defaultOpen reverses that for a page read in one pass (the Family page):
  // every band and category starts open, and the reader collapses by choice.
  const [openBands, setOpenBands] = useState<Set<string>>(
    () => new Set(defaultOpen ? groups.map((g) => g.domain) : []),
  );
  const [closedCats, setClosedCats] = useState<Set<string>>(
    () => new Set(defaultOpen ? [] : groups.flatMap((g) => g.rows.map((r) => `${g.domain}:${r.category}`))),
  );

  const toggleBand = (key: string) =>
    setOpenBands((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  const toggleCat = (key: string) =>
    setClosedCats((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });

  // Arrival by hash opens the door: when the URL targets this branch's heading
  // (the nearest h2 above the table), every band expands and the first
  // category opens, so a link into a branch lands on its evidence rather than
  // on a row of closed bands. A category can be named after a colon —
  // "#contact:patrons" — to open that category instead of the first; the
  // match is the category's first word, lowercased. Plain page loads stay
  // compressed.
  const rootRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Two forms match a category: its first word ("patrons"), or, when two
    // categories under one heading share a first word, the whole name
    // hyphenated including the parenthetical ("global-energy-efficiency").
    const words = (category: string) =>
      category
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, " ")
        .split(/\s+/)
        .filter(Boolean);
    const slugOf = (category: string) => words(category)[0] ?? "";
    const fullSlugOf = (category: string) => words(category).join("-");
    const reveal = () => {
      const raw = decodeURIComponent(window.location.hash.slice(1));
      if (!raw) return;
      const [id, want] = raw.split(":");
      const target = document.getElementById(id);
      if (!target || target.tagName !== "H2") return;
      let el: Element | null = rootRef.current;
      while (el && (el = el.previousElementSibling) && el.tagName !== "H2");
      if (el !== target) return;
      setOpenBands(new Set(groups.map((g) => g.domain)));
      let key: string | undefined;
      if (want) {
        const all = groups.flatMap((g) => g.rows.map((r) => ({ g, r })));
        const hit =
          all.find(({ r }) => fullSlugOf(r.category) === want) ??
          all.find(({ r }) => slugOf(r.category) === want);
        if (hit) key = `${hit.g.domain}:${hit.r.category}`;
      }
      if (!key) {
        const first = groups[0]?.rows[0];
        if (first) key = `${groups[0].domain}:${first.category}`;
      }
      if (key) {
        const found = key;
        setClosedCats((prev) => {
          const next = new Set(prev);
          next.delete(found);
          return next;
        });
      }
      // With a category in the hash there is no element whose id matches the
      // whole fragment, so the browser will not scroll on its own.
      if (want) target.scrollIntoView({ block: "start" });
    };
    reveal();
    window.addEventListener("hashchange", reveal);
    return () => window.removeEventListener("hashchange", reveal);
  }, [groups]);

  return (
    <div ref={rootRef} className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
      {hint && <p className="stat-hint">{hint}</p>}
      <table className="stat-table nested-table">
        {groups.map((group) => {
          const bandOpen = openBands.has(group.domain);
          // Band count = its supportive entries (the numbered items), so the
          // header advertises how much evidence sits inside.
          const count = group.rows.reduce(
            (n, r) => n + r.metrics.filter((m) => m[2] && !m[5]).length,
            0,
          );
          return (
            <tbody key={group.domain}>
              <tr className="nested-band" data-hue={group.hue} onClick={() => toggleBand(group.domain)}>
                <th>
                  <button
                    type="button"
                    className="nested-band-toggle"
                    aria-expanded={bandOpen}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleBand(group.domain);
                    }}
                  >
                    <span>
                      <span className="nested-domain">{group.domain}</span>
                      {group.label && (
                        <>
                          {" "}
                          <span className="nested-gloss">({group.label})</span>
                        </>
                      )}{" "}
                      <span className="nested-gloss">({count})</span>
                    </span>
                    <Chevron className={`stat-chevron${bandOpen ? " is-open" : ""}`} />
                  </button>
                </th>
              </tr>
              {group.rows.map((row) => {
                  const catKey = `${group.domain}:${row.category}`;
                  const catOpen = !closedCats.has(catKey);
                  // Collapsed rows stay in the DOM (hidden) so find-in-page
                  // and crawlers still see the content.
                  return (
                    <Fragment key={catKey}>
                      <tr
                        className="nested-cat"
                        hidden={!bandOpen}
                        onClick={() => toggleCat(catKey)}
                      >
                        <th>
                          <button
                            type="button"
                            className="nested-cat-toggle"
                            aria-expanded={catOpen}
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleCat(catKey);
                            }}
                          >
                            <span>{labelParts(row.category)}</span>
                            <Chevron
                              className={`stat-chevron${catOpen ? " is-open" : ""}`}
                            />
                          </button>
                        </th>
                      </tr>
                      <tr className="nested-content" hidden={!bandOpen || !catOpen}>
                        <td>
                          <MetricList metrics={row.metrics} numbered />
                        </td>
                      </tr>
                    </Fragment>
                  );
                })}
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
