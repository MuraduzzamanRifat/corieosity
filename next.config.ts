import type { NextConfig } from "next";
import path from "node:path";

// Next.js 16 no longer runs ESLint during `next build`, so nothing extra is
// needed to keep stylistic lint from blocking the build. We pin the Turbopack
// root to this project so a sibling lockfile can't be inferred as the root.
const nextConfig: NextConfig = {
  turbopack: { root: path.resolve() },
  // Static export for HostGator shared hosting. A post-build step renames the
  // `_next` asset folder to `next` (Apache blocks underscore dirs with 403).
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
