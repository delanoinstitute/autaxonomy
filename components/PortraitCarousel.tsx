"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CAROUSEL, PAGE_PORTRAIT } from "@/content/profile";

/**
 * Portrait carousel — Delano across contexts, in a fixed 4:3 box (shorter than
 * a full portrait, so the infobox data sits closer to the fold). Manual only
 * (no auto-advance): prev/next arrows, dot indicators, keyboard arrows, and
 * touch swipe. Crossfade honors prefers-reduced-motion via global CSS.
 */
export default function PortraitCarousel({ priority = false }: { priority?: boolean }) {
  // Each page lands on its own portrait; the carousel flips freely after.
  const pathname = usePathname();
  const pagePhoto = PAGE_PORTRAIT[pathname] ?? 0;
  const [index, setIndex] = useState(pagePhoto);
  const touchX = useRef<number | null>(null);
  const n = CAROUSEL.length;
  const go = (i: number) => setIndex((i + n) % n);

  useEffect(() => {
    setIndex(pagePhoto);
  }, [pagePhoto]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(index - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      go(index + 1);
    }
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
    touchX.current = null;
  };

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label={`Photos of ${"Lorenzo Delano"}`}
      onKeyDown={onKeyDown}
    >
      <div
        className="relative aspect-square w-full overflow-hidden border border-border-strong bg-surface-band"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {CAROUSEL.map((img, i) => (
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            fill
            sizes="(min-width: 1024px) 480px, 100vw"
            quality={82}
            priority={priority && i === pagePhoto}
            style={{ objectPosition: img.objectPosition }}
            className={`object-cover transition-opacity duration-300 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Prev / next */}
        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Previous photo"
          className="absolute left-1.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[rgba(27,28,29,0.45)] text-white backdrop-blur-xs transition-colors hover:bg-[rgba(27,28,29,0.7)]"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" fill="none">
            <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Next photo"
          className="absolute right-1.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[rgba(27,28,29,0.45)] text-white backdrop-blur-xs transition-colors hover:bg-[rgba(27,28,29,0.7)]"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" fill="none">
            <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Caption + credit + dots */}
      <div className="mt-1 flex items-start justify-between gap-2 px-0.5">
        <div className="min-w-0" aria-live="polite">
          <div className="text-xs text-muted">
            Delano in {CAROUSEL[index].year} ({CAROUSEL[index].location})
          </div>
          {CAROUSEL[index].photographer && (
            <div className="text-[0.7rem] italic leading-tight text-muted-2">
              Photograph by {CAROUSEL[index].photographer}
            </div>
          )}
        </div>
        <div
          className="flex shrink-0 items-center gap-1.5 pt-1"
          role="tablist"
          aria-label="Choose a photo"
        >
          {CAROUSEL.map((img, i) => (
            <button
              key={img.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Delano in ${img.year} (${img.location}) — photo ${i + 1} of ${n}`}
              onClick={() => go(i)}
              className={`h-2 w-2 rounded-full transition-colors ${
                i === index ? "bg-accent" : "bg-rule hover:bg-muted-2"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
