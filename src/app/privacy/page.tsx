import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import SceneTint from "@/components/three/SceneTint";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Corieosity collects, uses, and protects information, including California (CCPA) rights.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const sections: { h: string; p: string }[] = [
  {
    h: "Who we are",
    p: `Corieosity ("we", "us") is a U.S.-focused digital agency. This policy explains what we collect through ${site.domain} and how we use it. Questions: ${site.email}.`,
  },
  {
    h: "What we collect",
    p: "Information you submit through our contact form — name, work email, company, website URL, and your message. We also collect standard analytics (pages viewed, approximate location, device/browser) to understand and improve the site.",
  },
  {
    h: "How we use it",
    p: "To respond to your enquiry, prepare an Answer Readiness score, provide our services, and improve the site. We use it for the purpose you provided it and reasonably related purposes.",
  },
  {
    h: "We don’t sell your data",
    p: "We do not sell or rent personal information. We share it only with service providers who help us operate (for example hosting and analytics), under agreements that limit their use to our instructions.",
  },
  {
    h: "Your California (CCPA/CPRA) rights",
    p: "If you’re a California resident you may request access to, correction of, or deletion of your personal information, and you may opt out of any sharing. We will not discriminate against you for exercising these rights. To make a request, email us and we’ll verify and respond within the timeframes the law requires.",
  },
  {
    h: "Data retention & security",
    p: "We keep submissions only as long as needed for the purposes above or as required by law, and we use reasonable technical and organizational measures to protect them. No method of transmission is perfectly secure.",
  },
  {
    h: "Changes",
    p: "We may update this policy; material changes will be reflected by the date below.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <SceneTint accent="#3fb98f" />
      <PageHero index="—" eyebrow="Legal" title="Privacy Policy">
        Last updated 19 July 2026. Plain-English summary: we only collect what
        you give us and basic analytics, we never sell it, and you can ask us to
        delete it.
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
