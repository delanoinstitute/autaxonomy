/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    // Baseline hardening for a static public site; Vercel adds HSTS itself.
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      // Client demos are shown by link only: keep them out of search.
      { source: "/clients/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] },
    ];
  },
  async rewrites() {
    // Client demos are single static files in public/clients/<name>/index.html.
    // Personal Fit's source of truth is ~/Developer/Sites/PersonalFit/index.html; copy it here to update the demo.
    return [{ source: "/clients/personal-fit", destination: "/clients/personal-fit/index.html" }];
  },
  async redirects() {
    // Preserve old URLs after the navigation restructure.
    return [
      { source: "/current-status", destination: "/nature", permanent: true },
      { source: "/constituents", destination: "/nature", permanent: true },
      // Identity → Nature (2026): the word returned to Story's Inheritance branch,
      // and the page took the given half of nature/nurture.
      { source: "/identity", destination: "/nature", permanent: true },
      { source: "/time", destination: "/lifestyle", permanent: true },
      { source: "/historical-context", destination: "/story", permanent: true },
      // Biography → History (2026) when the nav split into Constitution / Capital;
      // History → Story once the branch grew to cover intention as well as record.
      { source: "/biography", destination: "/story", permanent: true },
      { source: "/history", destination: "/story", permanent: true },
      { source: "/future-trajectory", destination: "/", permanent: true },
      { source: "/purpose", destination: "/", permanent: true },
      { source: "/assets", destination: "/wealth", permanent: true },
      // Education, skills, and works merged into the knowledge page (2026).
      { source: "/education", destination: "/knowledge#education", permanent: true },
      { source: "/skills", destination: "/knowledge#skills", permanent: true },
      { source: "/works", destination: "/knowledge#works", permanent: true },
      // Three early routes were dropped without a forwarding address; Search
      // Console reported them as 404s (2026-09-06). Experience folded into Skills
      // and then Knowledge; the inherited profile lives in Story's Inheritance
      // branch; knowledge-alt was a short-lived layout comparison.
      { source: "/experience", destination: "/knowledge#works", permanent: true },
      { source: "/inherited-profile", destination: "/story#inheritance", permanent: true },
      { source: "/knowledge-alt", destination: "/knowledge", permanent: true },
    ];
  },
};

export default nextConfig;
