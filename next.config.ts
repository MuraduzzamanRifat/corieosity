import type { NextConfig } from "next";
import path from "node:path";

// Next.js 16 no longer runs ESLint during `next build`, so nothing extra is
// needed to keep stylistic lint from blocking the build. We pin the Turbopack
// root to this project so a sibling lockfile can't be inferred as the root.
const nextConfig: NextConfig = {
  turbopack: { root: path.resolve() },
};

export default nextConfig;
