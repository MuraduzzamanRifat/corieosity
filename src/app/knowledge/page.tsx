import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import SceneTint from "@/components/three/SceneTint";
import Reveal from "@/components/ui/Reveal";
import CtaBand from "@/components/sections/CtaBand";
import { insights } from "@/content/site";

export const metadata: Metadata = {
  title: "Knowledge Center",
  description:
    "Guides, playbooks, and analysis on AI-search optimization (AEO/GEO), immersive web performance, and Next.js — organized by topic. The Corieosity knowledge base.",
  alternates: { canonical: "/knowledge" },
};

export default function KnowledgePage() {
  const categories = Array.from(new Set(insights.map((i) => i.cat)));

  return (
    <>
      <SceneTint accent="#62e6b6" />
      <PageHero
        index="11"
        eyebrow="Knowledge Center"
        title={
          <>
            Everything we know about <span className="teal-grad">being the answer</span>.
          </>
        }
      >
        Our working knowledge base on AI search, immersive performance, and modern
        web engineering — organized by topic. Evidence over adjectives. New
        entries are publishing on a rolling basis.
      </PageHero>

      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          {categories.map((cat, ci) => (
            <Reveal key={cat} delay={ci * 60}>
              <div style={{ marginBottom: 46 }}>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16 }}>
                  <h2 className="h3" style={{ fontSize: "1.4rem" }}>
                    {cat}
                  </h2>
                  <span className="eyebrow">
                    {insights.filter((i) => i.cat === cat).length} entries
                  </span>
                </div>
                {insights
                  .filter((i) => i.cat === cat)
                  .map((i) => (
                    <div className="insight-row" key={i.title}>
                      <div className="insight-meta">
                        <span className="tag">{i.kind}</span>
                      </div>
                      <div className="insight-title">{i.title}</div>
                      <div className="insight-soon">Publishing soon</div>
                    </div>
                  ))}
              </div>
            </Reveal>
          ))}

          <Reveal>
            <p className="muted small" style={{ maxWidth: "60ch" }}>
              Want one of these sooner, or have a question we haven&apos;t covered?{" "}
              <Link href="/contact" className="tealtxt">
                Ask us directly
              </Link>{" "}
              — the questions clients ask shape what we publish next.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="band band-wash-teal">
        <div className="wrap">
          <CtaBand
            eyebrow="Put it into practice"
            title="Reading about AI search is good. Being the answer is better."
            primaryLabel="Get your Answer Readiness score"
            primaryHref="/start"
            secondary={{ label: "Browse resources", href: "/resources" }}
          >
            See exactly where your site stands across Findable, Extractable, and
            Citable — then fix the gaps that matter.
          </CtaBand>
        </div>
      </section>
    </>
  );
}
