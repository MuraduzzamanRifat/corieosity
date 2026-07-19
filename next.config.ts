import type { NextConfig } from "next";
import path from "node:path";

// Next.js 16 no longer runs ESLint during `next build`, so nothing extra is
// needed to keep stylistic lint from blocking the build. We pin the Turbopack
// root to this project so a sibling lockfile can't be inferred as the root.
const nextConfig: NextConfig = {
  turbopack: { root: path.resolve() },
  // Static export for shared hosting (HostGator). Produces an `out/` folder of
  // plain HTML/CSS/JS. trailingSlash makes clean /about/ → about/index.html URLs
  // that Apache serves without rewrites; images unoptimized (no Node image server).
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
