import Link from "next/link";
import { SITE } from "@/content/site";
import MobileNav from "./MobileNav";
import BrandSymbol from "./BrandSymbol";

/**
 * Sticky top chrome (z-30, height = --header-h). Hamburger (mobile only) +
 * wordmark + a single Contact escape hatch. Always visible — no hide-on-scroll.
 */
export default function SiteHeader() {
  return (
    <header
      className="sticky top-0 z-30 border-b border-rule backdrop-blur-sm"
      style={{ height: "var(--header-h)" }}
    >
      {/* Left padding matches the page grid's rail (outer px-4 + rail px-3) so the
          symbol sits on the nav's text edge; right padding matches the outer px-4
          so the Email chip ends on the infobox column's edge. */}
      <div className="mx-auto flex h-full max-w-326 items-center gap-2 px-3 sm:px-4 lg:pl-7 lg:pr-4">
        <MobileNav />

        {/* Tagline lockup: the symbol spans from the wordmark's cap line to the
            tagline's baseline (BRAND_SPEC §1.3). Mobile drops the tagline, so
            the symbol drops to the horizontal-lockup size. */}
        {/* The tagline lockup (BRAND_SPEC §1.3) at a 35.72 px symbol, sized so the
            tagline meets the 13 px floor (13 ÷ 0.587 = 22.15 px name): name N = side ÷
            1.613, tagline 0.587 N, gap = half a side; with line-height 1 the name's
            cap line sits 0.02 N below its box top and the tagline's box starts
            1.065 N below the name's, so symbol top = cap line and symbol bottom =
            the tagline's lowest descender. Mobile drops the tagline and centres a
            26 px symbol on the name. */}
        <Link href="/" className="flex items-start gap-3 no-underline lg:gap-[17.86px]">
          <BrandSymbol size={26} className="shrink-0 self-center text-accent lg:hidden" />
          <BrandSymbol size={35.72} className="mt-[0.44px] hidden shrink-0 text-accent lg:block" />
          <span className="flex flex-col">
            <span className="block font-serif text-(--fs-wordmark) font-semibold uppercase leading-[24px] tracking-[0.02em] whitespace-nowrap text-text lg:text-[22.15px] lg:leading-none lg:tracking-[0.055em]">
              {SITE.name}
            </span>
            <span className="mt-[1.44px] hidden font-serif text-[13px] italic leading-none text-text lg:block">
              {SITE.tagline}
            </span>
          </span>
        </Link>

        {/* The Email CTA returns to the header now that the SectionNav bar is
            retired — same gray action chip, far right, on every page. The
            wordmark never wraps, so the chip yields on narrow phones:
            "Email Lorenzo" ≥400px, "Email" 360–399px, an envelope below 360px
            (the 320px floor). Its accessible name is always "Email Lorenzo". */}
        <a
          href={`mailto:${SITE.email}`}
          aria-label="Email Lorenzo"
          className="no-wiki relative ml-auto inline-flex shrink-0 items-center before:absolute before:-inset-x-1 before:-inset-y-2.5 before:content-[''] whitespace-nowrap rounded-sm border border-rule bg-surface-subtle px-3 py-1 text-sm text-text transition-colors hover:border-accent hover:bg-accent hover:text-white max-[359px]:px-2.5"
        >
          <span className="max-[399px]:hidden">Email Lorenzo</span>
          <span className="hidden max-[399px]:inline max-[359px]:hidden">Email</span>
          <svg
            className="hidden max-[359px]:block"
            width="16"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <rect x="3" y="5" width="18" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
            <path d="M3.5 6l8.5 7 8.5-7" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </header>
  );
}
