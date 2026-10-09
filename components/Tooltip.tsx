"use client";

import { ReactNode, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

/**
 * Accessible hover/focus tooltip (WCAG 1.4.13): opens on hover and focus,
 * dismissable with Esc without moving the pointer, and persistent via a hover
 * bridge (the pointer can move onto the tooltip). On touch it is tap-to-toggle.
 *
 * The bubble is PORTALED to document.body with fixed positioning so it can
 * never be clipped by an ancestor scroll container (e.g. the stat-table's
 * overflow-x wrapper) — flipping upward when there is no room below.
 *
 * - Plain-text glosses render a focusable <button> trigger (dotted underline).
 * - When `interactive`, the trigger wraps an already-focusable child (a link);
 *   focus/blur bubble from the child, so no extra tab stop is added.
 */
type Pos = { left: number; top?: number; bottom?: number };

export default function Tooltip({
  children,
  content,
  interactive = false,
  media,
  variant = "dotted",
}: {
  children: ReactNode;
  content: ReactNode;
  interactive?: boolean;
  media?: { src: string; alt: string; portrait?: boolean };
  /** "dotted" = definition affordance (dotted underline); "bold" = primary term (bold, no underline). */
  variant?: "dotted" | "bold";
}) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [pos, setPos] = useState<Pos>({ left: 0, top: 0 });
  const id = useId();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrapRef = useRef<HTMLSpanElement>(null);
  const bubbleRef = useRef<HTMLSpanElement>(null);

  const show = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    const rect = wrapRef.current?.getBoundingClientRect();
    if (rect) {
      // Flip above the trigger when there isn't room below; clamp the center
      // so the bubble (w-64, max 80vw) never overhangs the viewport edge.
      const spaceBelow = window.innerHeight - rect.bottom;
      const placement = spaceBelow < 150 && rect.top > 120 ? "top" : "bottom";
      const halfBase = media ? (media.portrait ? 160 : 144) : 128;
      const half = Math.min(halfBase, window.innerWidth * 0.45);
      const left = Math.min(
        Math.max(rect.left + rect.width / 2, half + 8),
        window.innerWidth - half - 8,
      );
      setPos(
        placement === "bottom"
          ? { left, top: rect.bottom + 4 }
          : { left, bottom: window.innerHeight - rect.top + 4 },
      );
    }
    setOpen(true);
  };
  const scheduleHide = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  // Esc to dismiss; outside tap (touch) to close; close on scroll so the
  // fixed-position bubble never drifts from its trigger.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onPointerDown = (e: PointerEvent) => {
      const t = e.target as Node;
      if (
        wrapRef.current &&
        !wrapRef.current.contains(t) &&
        !(bubbleRef.current && bubbleRef.current.contains(t))
      ) {
        setOpen(false);
      }
    };
    const onScroll = () => setOpen(false);
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("scroll", onScroll, true);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("scroll", onScroll, true);
    };
  }, [open]);

  // Lightbox: Esc closes; opening it dismisses the hover bubble.
  useEffect(() => {
    if (!expanded) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpanded(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [expanded]);

  const lightbox =
    expanded && media
      ? createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={media.alt}
            className="fixed inset-0 z-70 flex items-center justify-center bg-[rgba(15,16,17,0.72)] p-4"
            onClick={() => setExpanded(false)}
          >
            {/* w-fit shrink-wraps the box to the image; the caption's
                w-0/min-w-full pair stops its text from widening the figure,
                so it wraps at the image's edge instead. */}
            <figure
              className="max-h-full w-fit max-w-[min(48rem,100%)] overflow-auto rounded-sm border border-border-strong bg-paper shadow-overlay"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={media.src}
                alt={media.alt}
                className="block max-h-[80vh] w-auto max-w-full bg-surface-band"
              />
              <figcaption className="flex w-0 min-w-full items-start justify-between gap-3 px-4 py-3 text-[0.85rem] font-normal not-italic leading-snug text-text">
                <span>{content}</span>
                <button
                  type="button"
                  aria-label="Close"
                  onClick={() => setExpanded(false)}
                  className="shrink-0 text-muted-2 hover:text-text"
                >
                  ✕
                </button>
              </figcaption>
            </figure>
          </div>,
          document.body,
        )
      : null;

  // Only rendered after a client interaction, so document is always defined.
  const bubble = open
    ? createPortal(
        <span
          ref={bubbleRef}
          role="tooltip"
          id={id}
          onMouseEnter={show}
          onMouseLeave={scheduleHide}
          style={{ left: pos.left, top: pos.top, bottom: pos.bottom }}
          className={
            media
              ? `fixed z-50 ${media.portrait ? "w-80 max-w-[90vw]" : "w-72 max-w-[85vw]"} -translate-x-1/2 overflow-hidden rounded-sm border border-border-strong bg-paper text-[0.82rem] font-normal not-italic leading-snug text-text shadow-overlay`
              : "fixed z-50 w-64 max-w-[80vw] -translate-x-1/2 rounded-sm border border-border-strong bg-paper px-3 py-2 text-[0.82rem] font-normal not-italic leading-snug text-text shadow-overlay"
          }
        >
          {media ? (
            media.portrait ? (
              <span className="flex items-stretch">
                {content ? <span className="block flex-1 self-center px-3 py-2">{content}</span> : null}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={media.src}
                  alt={media.alt}
                  className="block h-52 w-auto shrink-0 border-l border-rule bg-surface-band"
                />
              </span>
            ) : (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={media.src}
                  alt={media.alt}
                  className="block h-auto w-full border-b border-rule bg-surface-band"
                />
                {content ? <span className="block px-3 py-2">{content}</span> : null}
              </>
            )
          ) : (
            content
          )}
        </span>,
        document.body,
      )
    : null;

  if (interactive) {
    // Child is already focusable (a link); rely on bubbling focus/blur.
    return (
      <span
        ref={wrapRef}
        className="relative inline-block"
        onMouseEnter={show}
        onMouseLeave={scheduleHide}
        onFocus={show}
        onBlur={scheduleHide}
      >
        <span aria-describedby={open ? id : undefined}>{children}</span>
        {bubble}
      </span>
    );
  }

  return (
    <span ref={wrapRef} className="relative inline-block">
      <button
        type="button"
        aria-describedby={open ? id : undefined}
        aria-expanded={media ? expanded : open}
        aria-haspopup={media ? "dialog" : undefined}
        onMouseEnter={show}
        onMouseLeave={scheduleHide}
        onFocus={show}
        onBlur={scheduleHide}
        onClick={() => {
          if (media) {
            setOpen(false);
            setExpanded(true);
          } else {
            open ? setOpen(false) : show();
          }
        }}
        className={
          media
            ? "cardlink text-left"
            : variant === "bold"
              ? "cursor-help border-b border-dotted border-muted-2 text-left font-semibold"
              : "cursor-help border-b border-dotted border-muted-2 text-left"
        }
      >
        {children}
      </button>
      {bubble}
      {lightbox}
    </span>
  );
}
