import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/ui/Reveal";
import SceneTint from "@/components/three/SceneTint";
import SectionHeading from "@/components/sections/SectionHeading";
import AnswerSystem from "@/components/sections/AnswerSystem";
import Commitments from "@/components/sections/Commitments";
import CtaBand from "@/components/sections/CtaBand";
import InfoCard from "@/components/sections/InfoCard";

const chapters = [
  {
    k: "The challenge",
    t: "Launch an agency nobody has heard of — into a search landscape being rewritten by AI.",
    b: "No client list, no borrowed logos, and a category (AEO/GEO) most buyers can’t yet name. The site itself had to do the convincing: prove the craft, and prove the thesis, at the same time.",
  },
  {
    k: "The approach",
    t: "Make the website the case study.",
    b: "Rather than claim expertise, we engineered corieosity.com to demonstrate it — server-rendered content AI crawlers can read, schema and entity signals that make us citable, and an immersive WebGL layer that stays under a one-second load. If an AI engine recommends AI-search agencies, we want to be in the answer.",
  },
  {
    k: "The build",
    t: "Rich for humans, machine-readable for engines.",
    b: "Next.js 16 with React Server Components keeps every word in the initial HTML. A single persistent React Three Fiber scene — driven by a custom GLSL point-field — carries the immersive identity across routes without re-loading, so Core Web Vitals stay green while the experience stays cinematic.",
  },
];

const measures = [
  ["Findable", "Indexed, server-rendered, Core Web Vitals in the green from day one."],
  ["Extractable", "FAQ and answer blocks structured with schema for snippets and AI Overviews."],
  ["Citable", "Entity-consistent, source-backed content built to be named by ChatGPT, Perplexity, and Gemini."],
];

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "The first Corieosity case study is this website — engineered to be findable, extractable, and citable. See the method and what we measure.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <SceneTint accent="#ffdd7a" />
      <PageHero
        index="04"
        eyebrow="Case Studies"
        title={
          <>
            The first case study is{" "}
            <span className="gold-grad">this website</span>.
          </>
        }
      >
        We won’t fabricate client results we haven’t earned. So here’s the one
        engagement we can show you end to end — the one you’re looking at right
        now — with the method laid bare.
      </PageHero>

      <section className="band">
        <div className="wrap stack" style={{ gap: 8 }}>
          {chapters.map((c, i) => (
            <Reveal key={c.k} delay={i * 60}>
              <div
                className="grid grid-2"
                style={{
                  gap: 40,
                  padding: "38px 0",
                  borderTop: "1px solid var(--line)",
                  alignItems: "start",
                }}
              >
                <div>
                  <span className="tag">{c.k}</span>
                  <h2 className="h3" style={{ marginTop: "0.5em", maxWidth: "20ch" }}>
                    {c.t}
                  </h2>
                </div>
                <p className="muted" style={{ fontSize: "1.02rem" }}>
                  {c.b}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="band band-wash-gold">
        <div className="wrap">
          <SectionHeading
            eyebrow="The strategy in three layers"
            title="Findable → Extractable → Citable."
          />
          <AnswerSystem />
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <SectionHeading
            eyebrow="What we measure"
            title="Results, reported — not assumed."
          >
            A live site can’t claim a case-study number it hasn’t banked. So we
            publish the framework we hold ourselves (and every client) to, and
            fill the numbers in as they land.
          </SectionHeading>
          <div className="grid grid-3">
            {measures.map(([t, b], i) => (
              <Reveal key={t} delay={i * 60}>
                <InfoCard tag="Layer" title={t} body={b} small />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <SectionHeading
            center
            eyebrow="Our promise to clients"
            title="The numbers we’ll be measured on."
          />
          <Commitments />
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <CtaBand
            title="Write the next case study with us."
            primaryLabel="Get your Answer Readiness score"
            secondary={{ label: "Talk to sales", href: "/contact" }}
          >
            Founding-partner engagements are open now — real results, published
            together.
          </CtaBand>
        </div>
      </section>
    </>
  );
}
