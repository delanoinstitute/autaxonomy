"use client";

import { usePathname } from "next/navigation";
import Chevron from "./Chevron";
import Infobox from "./Infobox";

/**
 * Inline infobox for phones (< lg): a native <details> so it needs zero JS to
 * collapse, costs no CLS, and gets keyboard/AT support for free. Open on the
 * Introduction page (where the profile is the point), collapsed on inner pages.
 */
export default function MobileInfobox() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  // The Family page opens with its own identity strip (portrait, name, role),
  // so the folded profile card above it would only repeat it.
  if (pathname === "/family") return null;

  return (
    <details
      open={isHome}
      className="group mb-5 border border-border-strong bg-surface-subtle lg:hidden"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between bg-surface-band px-3 py-2 text-sm font-semibold">
        <span>Quick facts</span>
        <Chevron className="h-[1.15rem] w-[1.15rem] text-muted transition-transform group-open:rotate-180" />
      </summary>
      <div className="p-2">
        <Infobox priority={false} compact embedded />
      </div>
    </details>
  );
}
