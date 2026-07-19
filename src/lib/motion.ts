// Single source for the reduced-motion preference check (was duplicated in 5 files).
export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
