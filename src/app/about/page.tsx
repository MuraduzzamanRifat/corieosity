import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/ui/Reveal";
import SceneTint from "@/components/three/SceneTint";
import SectionHeading from "@/components/sections/SectionHeading";
import ProcessList from "@/components/sections/ProcessList";
import CtaBand from "@/components/sections/CtaBand";
import { values } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Corieosity is a U.S.-focused AI-search growth agency. We own the intersection of AI visibility and conversion — the Answer-to-Action loop — for startups, SaaS, and enterprise.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <SceneTint accent="#ffcb3d" />
      <PageHero
        index="01"
        eyebrow="About"
        title={
          <>
            We make brands impossible to overlook — by humans{" "}
            <span className="gold-grad">and machines</span>.
          </>
        }
      >
        Most agencies sell one half: rankings, or a pretty site. Corieosity owns
        the intersection nobody else stands on — the visibility that gets you
        found, and the experience that makes you chosen.
      </PageHero>

      <section className="band-tight">
        <hr className="hair" />
      </section>

      {/* STORY */}
      <section className="band">
        <div className="wrap grid grid-2" style={{ gap: 50 }}>
          <SectionHeading eyebrow="Why we exist" title="Search is changing under everyone’s feet.">
            Roughly six in ten searches now end without a click — the answer
            arrives inside Google’s AI Overviews or a chat with ChatGPT,
            Perplexity, or Gemini. Ranking a page nobody reaches is a shrinking
            game. Being the source those answers cite is the new one.
          </SectionHeading>
          <Reveal delay={80}>
            <div className="stack" style={{ gap: 18 }}>
              <p className="lead">
                Corieosity exists to make sure the brands that deserve to be
                found are the ones that are — because being the clearest,
                fastest, best-structured answer beats being the loudest.
              </p>
              <p className="muted">
                We’re a lean, senior, U.S.-focused studio: you get strategy that
                owns the outcome and a vetted engineering bench that ships it in
                Next.js and WebGL — without agency overhead, in your time zone,
                billed in USD.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section
        className="band"
        style={{
          background:
            "linear-gradient(180deg,transparent,rgba(63,185,143,.03),transparent)",
        }}
      >
        <div className="wrap">
          <SectionHeading
            eyebrow="The owl, made literal"
            title="Wisdom that’s earned, curiosity that stays ahead."
          >
            Our name is a promise, and our mark is an owl — the one creature
            that sees in the dark and turns its head to watch what everyone else
            misses.
          </SectionHeading>
          <div className="grid grid-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 60}>
                <div className="card" style={{ height: "100%" }}>
                  <h3 className="h3" style={{ marginBottom: "0.4em" }}>
                    {v.title}
                  </h3>
                  <p className="muted small">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="band">
        <div className="wrap">
          <SectionHeading eyebrow="How we work" title="A method, not a mood board." />
          <ProcessList />
        </div>
      </section>

      {/* VISION */}
      <section className="band">
        <div className="wrap center">
          <Reveal>
            <p
              className="display"
              style={{
                fontSize: "clamp(1.6rem,3.4vw,2.6rem)",
                maxWidth: "22ch",
                margin: "0 auto",
                lineHeight: 1.2,
              }}
            >
              A web where the brands that{" "}
              <span className="tealtxt">deserve</span> to be found are the ones
              that <span className="gold-grad">are</span>.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <CtaBand
            eyebrow="Work with us"
            title="Become one of our founding partners."
            primaryLabel="Start a conversation"
            secondary={{ label: "See the work", href: "/work" }}
          >
            We’re taking on a small number of founding U.S. clients at launch —
            senior attention, honest reporting, real outcomes.
          </CtaBand>
        </div>
      </section>
    </>
  );
}
