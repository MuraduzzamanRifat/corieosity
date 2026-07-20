"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "ok" | "error";

const SERVICES = [
  "AI-Search Optimization (SEO/AEO/GEO)",
  "Immersive Web Experience (WebGL)",
  "AI-Powered Website",
  "Next.js Build / Rebuild",
  "Content & Citation System",
  "WordPress → Next.js Migration",
];

const PROJECT_TYPES = [
  "New website / rebuild",
  "AI-search growth (ongoing)",
  "Answer Readiness Sprint (audit)",
  "Immersive / campaign experience",
  "Not sure — help me choose",
];

const BUDGETS = ["Under $10k", "$10k – $25k", "$25k – $50k", "$50k+", "Not sure yet"];
const TIMELINES = ["ASAP (under a month)", "1 – 3 months", "3 – 6 months", "Just exploring"];

export default function StartProjectForm() {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<Status>("idle");
  const [f, setF] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    projectType: PROJECT_TYPES[0],
    services: [] as string[],
    audience: "",
    goals: "",
    budget: BUDGETS[4],
    timeline: TIMELINES[1],
    references: "",
    notes: "",
  });

  const set = (k: keyof typeof f, v: string | string[]) =>
    setF((prev) => ({ ...prev, [k]: v }));
  const toggleService = (s: string) =>
    set("services", f.services.includes(s) ? f.services.filter((x) => x !== s) : [...f.services, s]);

  const step0Valid = f.name.trim() !== "" && f.email.includes("@");

  async function submit() {
    setStatus("sending");
    const message = [
      `Project type: ${f.projectType}`,
      `Services: ${f.services.join(", ") || "—"}`,
      `Budget: ${f.budget}`,
      `Timeline: ${f.timeline}`,
      `Target audience: ${f.audience || "—"}`,
      `Reference sites: ${f.references || "—"}`,
      ``,
      `Goals:`,
      f.goals || "—",
      ``,
      `Notes:`,
      f.notes || "—",
    ].join("\n");

    try {
      const res = await fetch("/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: f.name,
          email: f.email,
          company: f.company,
          website: f.website,
          message,
          source: "start-a-project",
        }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="form-success">
        <strong>Your project request is in.</strong>
        <p style={{ margin: "8px 0 0" }}>
          We&apos;ll review it and reply within one U.S. business day with your
          Answer Readiness score and a suggested next step. Want to move faster?{" "}
          <a href="/book" className="tealtxt">
            Book a call
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="wizard">
      <div className="wizard-steps" aria-hidden>
        {["You", "Project", "Scope"].map((label, i) => (
          <div key={label} className={`wizard-pip ${i <= step ? "on" : ""}`}>
            <span className="wizard-pip-n">{i + 1}</span>
            {label}
          </div>
        ))}
      </div>

      {step === 0 && (
        <div className="form-grid">
          <div className="field">
            <label htmlFor="sp-name">Name</label>
            <input id="sp-name" value={f.name} onChange={(e) => set("name", e.target.value)} autoComplete="name" required />
          </div>
          <div className="field">
            <label htmlFor="sp-email">Work email</label>
            <input id="sp-email" type="email" value={f.email} onChange={(e) => set("email", e.target.value)} autoComplete="email" required />
          </div>
          <div className="field">
            <label htmlFor="sp-company">Company</label>
            <input id="sp-company" value={f.company} onChange={(e) => set("company", e.target.value)} autoComplete="organization" />
          </div>
          <div className="field">
            <label htmlFor="sp-website">Current website</label>
            <input id="sp-website" value={f.website} onChange={(e) => set("website", e.target.value)} placeholder="https://" inputMode="url" />
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="stack" style={{ gap: 18 }}>
          <div className="field">
            <label htmlFor="sp-ptype">What kind of project is this?</label>
            <select id="sp-ptype" value={f.projectType} onChange={(e) => set("projectType", e.target.value)}>
              {PROJECT_TYPES.map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label>Which services are you interested in?</label>
            <div className="check-grid">
              {SERVICES.map((s) => (
                <label key={s} className={`check-pill ${f.services.includes(s) ? "sel" : ""}`}>
                  <input type="checkbox" checked={f.services.includes(s)} onChange={() => toggleService(s)} />
                  {s}
                </label>
              ))}
            </div>
          </div>
          <div className="field">
            <label htmlFor="sp-goals">What does success look like?</label>
            <textarea id="sp-goals" value={f.goals} onChange={(e) => set("goals", e.target.value)} placeholder="e.g. Get cited by ChatGPT for our category, rank for buyer questions, and lift demo conversions." />
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="stack" style={{ gap: 18 }}>
          <div className="form-grid">
            <div className="field">
              <label htmlFor="sp-budget">Budget range</label>
              <select id="sp-budget" value={f.budget} onChange={(e) => set("budget", e.target.value)}>
                {BUDGETS.map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="sp-timeline">Timeline</label>
              <select id="sp-timeline" value={f.timeline} onChange={(e) => set("timeline", e.target.value)}>
                {TIMELINES.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="field">
            <label htmlFor="sp-audience">Who is your target audience?</label>
            <input id="sp-audience" value={f.audience} onChange={(e) => set("audience", e.target.value)} placeholder="e.g. US B2B SaaS buyers, RevOps leaders" />
          </div>
          <div className="field">
            <label htmlFor="sp-refs">Reference sites you admire (optional)</label>
            <input id="sp-refs" value={f.references} onChange={(e) => set("references", e.target.value)} placeholder="Links, comma-separated" />
          </div>
          <div className="field">
            <label htmlFor="sp-notes">Anything else? (optional)</label>
            <textarea id="sp-notes" value={f.notes} onChange={(e) => set("notes", e.target.value)} />
          </div>
        </div>
      )}

      {status === "error" && (
        <p className="form-note" style={{ color: "#ff9a9a" }}>
          Something went wrong sending that. Email us at hello@corieosity.com and
          we&apos;ll pick it up.
        </p>
      )}

      <div className="wizard-nav">
        {step > 0 ? (
          <button type="button" className="btn btn-ghost" onClick={() => setStep((s) => s - 1)}>
            Back
          </button>
        ) : (
          <span />
        )}
        {step < 2 ? (
          <button
            type="button"
            className="btn btn-primary"
            disabled={step === 0 && !step0Valid}
            onClick={() => setStep((s) => s + 1)}
          >
            Continue <span className="arw">↗</span>
          </button>
        ) : (
          <button type="button" className="btn btn-primary" disabled={status === "sending"} onClick={submit}>
            {status === "sending" ? "Sending…" : "Send project request"} <span className="arw">↗</span>
          </button>
        )}
      </div>
      <p className="form-note">
        No spam. We reply within one U.S. business day. Your details are used only
        to prepare your Answer Readiness score and proposal.
      </p>
    </div>
  );
}
