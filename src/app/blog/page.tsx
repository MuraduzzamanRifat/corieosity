import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import SceneTint from "@/components/three/SceneTint";
import Reveal from "@/components/ui/Reveal";
import CtaBand from "@/components/sections/CtaBand";
import { insights } from "@/content/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Evidence-led insights on AI search (AEO/GEO), immersive web, performance, and engineering — our publishing roadmap.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <SceneTint accent="#ffcb3d" />
      <PageHero
        index="07"
        eyebrow="Blog · Insights"
        title={
          <>
            Notes from the <span className="gold-grad">AI-search frontier</span>.
          </>
        }
      >
        Evidence-led writing on AEO, GEO, immersive web, and performance. We're a
        new studio — here's the roadmap we're publishing against, most-wanted
        first.
      </PageHero>

      <section className="band">
        <div className="wrap stack" style={{ gap: 4 }}>
          {insights.map((post, i) => (
            <Reveal key={post.title} delay={(i % 4) * 50}>
              <article className="insight-row" data-cursor="hover">
                <div className="insight-meta">
                  <span className="tag">{post.cat}</span>
                  <span className="muted small">{post.kind}</span>
                </div>
                <h2 className="h3 insight-title">{post.title}</h2>
                <span className="muted small insight-soon">Publishing soon</span>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <CtaBand
            eyebrow="Get it applied"
            title="Don't wait for the blog."
            primaryLabel="Get your Answer Readiness score"
            secondary={{ label: "See our services", href: "/services" }}
          >
            While the writing spins up, the fastest way to get our thinking
            working on your site is the free audit.
          </CtaBand>
        </div>
      </section>
    </>
  );
}
