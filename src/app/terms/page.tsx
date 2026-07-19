import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import SceneTint from "@/components/three/SceneTint";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern use of the Corieosity website.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

const sections: { h: string; p: string }[] = [
  {
    h: "Acceptance",
    p: `By using ${site.domain} you agree to these terms. If you don’t agree, please don’t use the site.`,
  },
  {
    h: "Use of the site",
    p: "You may view and interact with the site for lawful, personal or business purposes. Don’t attempt to disrupt, reverse-engineer, scrape at scale, or misuse it in ways that harm the site or other users.",
  },
  {
    h: "Intellectual property",
    p: "The site design, code, copy, and the Corieosity name and marks are our property or used with permission. You may not reproduce or reuse them without written consent.",
  },
  {
    h: "No warranty",
    p: "The site is provided “as is.” We work hard to keep it accurate and available, but we don’t guarantee it will be error-free or uninterrupted, and content here is informational, not a binding offer.",
  },
  {
    h: "Limitation of liability",
    p: "To the extent permitted by law, Corieosity is not liable for indirect or consequential damages arising from use of the site. Nothing here limits liability that cannot be limited under applicable law.",
  },
  {
    h: "Engagements",
    p: "Any services we provide are governed by a separate written agreement (proposal, statement of work, or MSA), which controls if it conflicts with these site terms.",
  },
  {
    h: "Governing law & contact",
    p: `These terms are governed by the laws of the United States and the state in which we operate. Questions: ${site.email}.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <SceneTint accent="#ffcb3d" />
      <PageHero index="—" eyebrow="Legal" title="Terms of Service">
        Last updated 19 July 2026. The short version: use the site fairly, the
        content is ours, and any actual work we do together is governed by a
        separate signed agreement.
      </PageHero>
      <section className="band">
        <div className="wrap stack" style={{ gap: 34, maxWidth: "78ch" }}>
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="h3" style={{ marginBottom: "0.4em" }}>
                {s.h}
              </h2>
              <p className="muted">{s.p}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
