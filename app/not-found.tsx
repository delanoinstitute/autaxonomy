import Link from "next/link";
import BrandSymbol from "@/components/BrandSymbol";
import PageHeading from "@/components/PageHeading";

export default function NotFound() {
  return (
    <>
      <PageHeading
        title="This page has not been written"
      />
      <p>
        The page you are looking for is not part of this wiki. It may have been moved, or
        the link may be broken.
      </p>
      <p>
        <Link href="/" className="wikilink">
          Return to the Introduction
        </Link>
        .
      </p>
      {/* The seal signs the page (BRAND_SPEC §1.4): a stamp, one per surface, never beside the wordmark. */}
      <BrandSymbol variant="seal" size={40} className="mt-8" />
    </>
  );
}
