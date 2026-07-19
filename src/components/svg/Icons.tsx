import type { ReactElement } from "react";

type IconProps = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function IconTarget({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}
export function IconLayers({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <path d="M12 3 3 8l9 5 9-5-9-5Z" />
      <path d="M3 13l9 5 9-5" />
    </svg>
  );
}
export function IconCpu({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
    </svg>
  );
}
export function IconCode({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <path d="m8 8-5 4 5 4M16 8l5 4-5 4M14 4l-4 16" />
    </svg>
  );
}
export function IconMail({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
export function IconPhone({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L20 13l-1 4a2 2 0 0 1-2 1.5A16 16 0 0 1 3 6 2 2 0 0 1 4 4Z" />
    </svg>
  );
}
export function IconClock({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}
export function IconSpark({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
    </svg>
  );
}

export const serviceIcons: Record<string, (p: IconProps) => ReactElement> = {
  "ai-search-optimization": IconTarget,
  "immersive-web-experiences": IconLayers,
  "ai-powered-websites": IconCpu,
  "nextjs-development": IconCode,
};
