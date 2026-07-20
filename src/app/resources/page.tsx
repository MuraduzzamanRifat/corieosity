import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import SceneTint from "@/components/three/SceneTint";
import Reveal from "@/components/ui/Reveal";
import CtaBand from "@/components/sections/CtaBand";
import { resources } from "@/content/site";

export const metadata: Metadata = {
  title: "Resource Library",
  description:
    "Free tools and guides from Corieosity — starting with the Answer Readiness Score. Checklists and playbooks on AEO/GEO, Core Web Vitals, and Next.js migration are on the way.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <>
      <SceneTint accent="#ffcb3d" />
      <PageHero
        index="12"
        eyebrow="Resource Library"
        title={
          <>
            Tools that make you <span className="gold-grad">measurably better</span>.
          </>
        }
      >
        Practical resources you can use today — no fluff, no gated PDFs of
        recycled advice. We publish a resource only when it&apos;s genuinely useful.
      </PageHero>

      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="grid grid-2">
            {resources.map((r, i) => (
              <Reveal key={r.title} delay={i * 70}>
                <div className="card" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                    <span className="tag">{r.kind}</span>
                    <span className={r.available ? "chip avail" : "chip"}>
                      {r.available ? "Available now" : "In the library soon"}
                    </span>
                  </div>
                  <h2 className="h3" style={{ margin: "0.5em 0 0.3em", fontSize: "1.4rem" }}>
                    {r.title}
                  </h2>
                  <p className="muted" style={{ flex: 1 }}>
                    {r.desc}
                  </p>
                  <div className="btn-row" style={{ marginTop: 20 }}>
                    {r.available ? (
                      <Link href="/start" className="btn btn-primary">
                        Get it free <span className="arw">↗</span>
                      </Link>
                    ) : (
                      <Link href="/contact" className="btn btn-ghost">
                        Notify me when it&apos;s live
                      </Link>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band band-wash-gold">
        <div className="wrap">
          <CtaBand
            eyebrow="Start with the score"
            title="The most useful resource is knowing where you actually stand."
            primaryLabel="Get your Answer Readiness score"
            primaryHref="/start"
            secondary={{ label: "Read the Knowledge Center", href: "/knowledge" }}
          >
            A three-layer read on how AI engines see your site — free, and specific
            to you.
          </CtaBand>
        </div>
      </section>
    </>
  );
}
