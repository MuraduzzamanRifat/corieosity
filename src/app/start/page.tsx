import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import SceneTint from "@/components/three/SceneTint";
import Reveal from "@/components/ui/Reveal";
import StartProjectForm from "@/components/StartProjectForm";

export const metadata: Metadata = {
  title: "Start your project",
  description:
    "Tell us about your project in three quick steps. We'll reply within one U.S. business day with a free Answer Readiness score and a suggested next step.",
  alternates: { canonical: "/start" },
};

const NEXT = [
  {
    n: "01",
    title: "We read your request",
    body: "A senior strategist reviews your goals and runs a first-pass Answer Readiness read on your site — no bot, no queue.",
  },
  {
    n: "02",
    title: "You get your score",
    body: "Within one U.S. business day: your three-layer breakdown of where AI can and can't see you, and the highest-leverage fixes.",
  },
  {
    n: "03",
    title: "We scope it together",
    body: "If it's a fit, we book a call, define scope and success metrics, and send an exact quote — not a templated guess.",
  },
];

export default function StartPage() {
  return (
    <>
      <SceneTint accent="#62e6b6" />
      <PageHero
        index="08"
        eyebrow="Start your project"
        title={
          <>
            Let&apos;s make you the <span className="teal-grad">answer</span>.
          </>
        }
      >
        Three quick steps. No obligation. You&apos;ll leave with a free Answer
        Readiness score and a clear first move — whether or not we work together.
      </PageHero>

      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap start-grid">
          <Reveal>
            <div className="card-glass" style={{ padding: "clamp(24px,4vw,40px)" }}>
              <StartProjectForm />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="start-aside">
              <span className="eyebrow">What happens next</span>
              <div className="stack" style={{ gap: 26, marginTop: 22 }}>
                {NEXT.map((s) => (
                  <div key={s.n} className="pstep" style={{ borderTop: "none", paddingTop: 0 }}>
                    <span className="num">{s.n}</span>
                    <h3 className="h3" style={{ margin: "0.2em 0 0.3em" }}>
                      {s.title}
                    </h3>
                    <p className="muted small">{s.body}</p>
                  </div>
                ))}
              </div>
              <p className="form-note" style={{ marginTop: 26 }}>
                Serving U.S. startups, SaaS &amp; enterprise · ET / PT · Billed in USD.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
