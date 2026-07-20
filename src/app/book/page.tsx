import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import SceneTint from "@/components/three/SceneTint";
import Reveal from "@/components/ui/Reveal";
import BookMeetingForm from "@/components/BookMeetingForm";
import { IconClock, IconSpark, IconTarget } from "@/components/svg/Icons";

export const metadata: Metadata = {
  title: "Book a meeting",
  description:
    "Book an intro call, an Answer Readiness review, or a project scoping session with Corieosity. U.S. business hours, ET/PT. We confirm within one business day.",
  alternates: { canonical: "/book" },
};

export default function BookPage() {
  return (
    <>
      <SceneTint accent="#62e6b6" />
      <PageHero
        index="09"
        eyebrow="Book a meeting"
        title={
          <>
            A real conversation, <span className="teal-grad">not a pitch</span>.
          </>
        }
      >
        Pick the meeting that fits where you are. You&apos;ll talk to a senior
        strategist — no SDR, no script — and leave with a clear, honest next step.
      </PageHero>

      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap start-grid">
          <Reveal>
            <div className="card-glass" style={{ padding: "clamp(24px,4vw,40px)" }}>
              <BookMeetingForm />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="start-aside">
              <span className="eyebrow">Good to know</span>
              <div className="stack" style={{ gap: 22, marginTop: 22 }}>
                <div className="contact-aside">
                  <div className="row">
                    <IconClock />
                    <div>
                      <div className="k">Hours</div>
                      <div className="v">U.S. business hours · ET / PT</div>
                    </div>
                  </div>
                  <div className="row">
                    <IconTarget />
                    <div>
                      <div className="k">Who you meet</div>
                      <div className="v">A senior AI-search strategist — not a sales rep.</div>
                    </div>
                  </div>
                  <div className="row">
                    <IconSpark />
                    <div>
                      <div className="k">Come prepared</div>
                      <div className="v">
                        Have your URL handy — we&apos;ll often glance at your Answer
                        Readiness live.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="form-note" style={{ marginTop: 24 }}>
                Prefer to write first? <a href="/start" className="tealtxt">Start your project</a> and
                we&apos;ll bring your score to the call.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
