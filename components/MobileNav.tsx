"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { NAV_GROUPS } from "@/content/site";

/**
 * Mobile primary navigation (< lg): a 44×44 hamburger that opens a left
 * slide-in drawer (focus-trapped dialog). Contents = the Pages list with
 * glosses PLUS the current page's section anchors. Esc / scrim-tap closes and
 * restores focus to the trigger; body scroll is locked; honors reduced motion.
 */
export default function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(false), []);

  // Portal target only exists after mount (avoids SSR document access).
  useEffect(() => setMounted(true), []);

  // Lock scroll, move focus in, trap Tab, Esc to close, restore focus on close.
  useEffect(() => {
    if (!open) return;
    const previouslyFocused = triggerRef.current;
    document.body.style.overflow = "hidden";

    const drawer = drawerRef.current;
    const focusables = () =>
      drawer
        ? Array.from(
            drawer.querySelectorAll<HTMLElement>(
              'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
            )
          )
        : [];

    focusables()[0]?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        return;
      }
      if (e.key === "Tab") {
        const items = focusables();
        if (items.length === 0) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-drawer"
        aria-label="Open navigation"
        className="-ml-1 inline-flex min-h-11 min-w-11 items-center justify-center text-text"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" fill="none">
          <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {mounted &&
        createPortal(
          <>
            {/* Scrim */}
            <div
              onClick={close}
              className={`fixed inset-0 z-40 bg-[rgba(27,28,29,0.4)] transition-opacity duration-150 lg:hidden ${
                open ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
              aria-hidden="true"
            />

            {/* Drawer */}
            <div
              id="mobile-drawer"
              ref={drawerRef}
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              inert={open ? undefined : true}
              className={`fixed inset-y-0 left-0 z-50 flex w-[min(80vw,320px)] flex-col overflow-y-auto bg-paper shadow-overlay transition-transform duration-150 ease-out lg:hidden ${
                open ? "translate-x-0" : "-translate-x-full"
              }`}
            >
        <div
          className="flex items-center justify-between border-b border-rule px-4"
          style={{ minHeight: "var(--header-h)" }}
        >
          <span className="font-serif text-(--fs-wordmark) font-semibold">
            Navigation
          </span>
          <button
            type="button"
            onClick={close}
            aria-label="Close navigation"
            className="inline-flex min-h-11 min-w-11 items-center justify-center text-text"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav aria-label="Pages" className="px-2 py-3">
          {NAV_GROUPS.map((group) => (
            <div key={group.title} className="mb-3">
              {group.title && (
                <div className="px-2 pb-1 text-xs font-semibold uppercase tracking-[0.04em] text-muted">
                  {group.title}
                </div>
              )}
              <ul className="list-none">
                {group.pages.map((p) => {
                  const active = p.href === pathname;
                  return (
                    <li key={p.href}>
                      <Link
                        href={p.href}
                        onClick={close}
                        aria-current={active ? "page" : undefined}
                        className={`flex min-h-11 items-center rounded px-2 py-1 ${
                          active
                            ? "bg-surface-band font-semibold text-text"
                            : "text-link"
                        }`}
                      >
                        {p.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

            </nav>
            </div>
          </>,
          document.body
        )}
    </div>
  );
}
