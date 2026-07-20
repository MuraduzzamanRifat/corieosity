import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import ProseSections from "@/components/sections/ProseSections";
import SceneTint from "@/components/three/SceneTint";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "What cookies and similar technologies Corieosity uses. In short: this site currently sets no advertising or cross-site tracking cookies.",
  alternates: { canonical: "/cookies" },
  robots: { index: true, follow: true },
};

const sections: { h: string; p: string }[] = [
  {
    h: "The short version",
    p: `This site is a fast, statically-served website. As of the date below, it sets no advertising cookies and no cross-site tracking cookies. Fonts are self-hosted, so loading a page does not call third-party font servers. If that changes, we'll update this page and add a consent control.`,
  },
  {
    h: "What a cookie is",
    p: "A cookie is a small text file a website can store in your browser. Similar technologies (local storage, pixels) work the same way. They're used to remember preferences, keep you signed in, or measure how a site is used.",
  },
  {
    h: "What we currently use",
    p: "Strictly-necessary only. We do not currently run analytics, advertising, or social-media cookies on the public site. Your browser may store a preference such as reduced-motion locally on your device; that never leaves your browser and isn't sent to us.",
  },
  {
    h: "If we add analytics later",
    p: "If we introduce privacy-respecting analytics (for example, to see which pages are useful), we'll list the specific provider and cookies here, explain what they measure, and — where required — ask for your consent before they load. We will always prefer aggregate, non-identifying measurement.",
  },
  {
    h: "Forms and third parties",
    p: `When you submit a form (Contact, Start your project, Book a meeting), the details you enter are sent to us to respond — that's covered by our Privacy Policy, not by cookies. If we later embed a scheduling or video tool, its own cookies would apply on that embed, and we'll note it here.`,
  },
  {
    h: "Managing cookies",
    p: "You can block or delete cookies in your browser settings at any time. Because this site relies only on strictly-necessary technology, blocking cookies won't break it.",
  },
  {
    h: "Questions",
    p: `Email ${site.email} and we'll answer plainly. See also our Privacy Policy for how we handle the information you send us.`,
  },
];

export default function CookiesPage() {
  return (
    <>
      <SceneTint accent="#3fb98f" />
      <PageHero index="—" eyebrow="Legal" title="Cookie Policy">
        Last updated 21 July 2026. Plain-English summary: this site sets no
        tracking or advertising cookies today — only what&apos;s strictly necessary
        to serve the page.
      </PageHero>
      <ProseSections sections={sections} />
    </>
  );
}
