"use client";

import { useState } from "react";
import { meetingTypes } from "@/content/site";

// When Corieosity connects a scheduler (Cal.com / Calendly), set this to the
// booking URL and the page will point people straight to live scheduling.
// Until then, requests are emailed and confirmed within one U.S. business day.
const BOOKING_URL = "";

type Status = "idle" | "sending" | "ok" | "error";

const TIMEZONES = ["ET (Eastern)", "CT (Central)", "MT (Mountain)", "PT (Pacific)", "Other / international"];

export default function BookMeetingForm() {
  const [type, setType] = useState<string>(meetingTypes[0].id);
  const [status, setStatus] = useState<Status>("idle");
  const [f, setF] = useState({
    name: "",
    email: "",
    company: "",
    tz: TIMEZONES[0],
    times: "",
    agenda: "",
  });
  const set = (k: keyof typeof f, v: string) => setF((p) => ({ ...p, [k]: v }));
  const valid = f.name.trim() !== "" && f.email.includes("@") && f.times.trim() !== "";

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!valid) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    const mt = meetingTypes.find((m) => m.id === type)!;
    const message = [
      `Meeting request: ${mt.name} (${mt.length})`,
      `Timezone: ${f.tz}`,
      `Preferred times: ${f.times}`,
      ``,
      `Agenda:`,
      f.agenda || "—",
    ].join("\n");
    try {
      const res = await fetch("/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: f.name,
          email: f.email,
          company: f.company,
          message,
          source: "book-a-meeting",
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
        <strong>Meeting request received.</strong>
        <p style={{ margin: "8px 0 0" }}>
          We&apos;ll confirm a time by email within one U.S. business day and send
          a calendar invite with a video link. Talk soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate>
      <fieldset className="calc-group" style={{ marginBottom: 24 }}>
        <legend className="eyebrow">Choose a meeting</legend>
        <div className="calc-options calc-options-3">
          {meetingTypes.map((m) => (
            <label key={m.id} className={`calc-opt ${type === m.id ? "sel" : ""}`}>
              <input type="radio" name="mtype" checked={type === m.id} onChange={() => setType(m.id)} />
              <span className="calc-opt-title">
                {m.name} <span className="muted small">· {m.length}</span>
              </span>
              <span className="calc-opt-desc">{m.desc}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="form-grid">
        <div className="field">
          <label htmlFor="bk-name">Name</label>
          <input id="bk-name" value={f.name} onChange={(e) => set("name", e.target.value)} autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="bk-email">Work email</label>
          <input id="bk-email" type="email" value={f.email} onChange={(e) => set("email", e.target.value)} autoComplete="email" required />
        </div>
        <div className="field">
          <label htmlFor="bk-company">Company</label>
          <input id="bk-company" value={f.company} onChange={(e) => set("company", e.target.value)} autoComplete="organization" />
        </div>
        <div className="field">
          <label htmlFor="bk-tz">Your timezone</label>
          <select id="bk-tz" value={f.tz} onChange={(e) => set("tz", e.target.value)}>
            {TIMEZONES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="field form-full">
          <label htmlFor="bk-times">A few times that work for you</label>
          <input id="bk-times" value={f.times} onChange={(e) => set("times", e.target.value)} placeholder="e.g. Tue/Wed afternoon, or Thu morning ET" required />
        </div>
        <div className="field form-full">
          <label htmlFor="bk-agenda">What would you like to cover? (optional)</label>
          <textarea id="bk-agenda" value={f.agenda} onChange={(e) => set("agenda", e.target.value)} />
        </div>
      </div>

      {status === "error" && (
        <p className="form-note" style={{ color: "#ff9a9a" }}>
          Please add your name, a valid email, and a preferred time.
        </p>
      )}

      <div className="btn-row" style={{ marginTop: 18, alignItems: "center" }}>
        {BOOKING_URL ? (
          <a className="btn btn-primary" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            Open live scheduler <span className="arw">↗</span>
          </a>
        ) : (
          <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Request this meeting"} <span className="arw">↗</span>
          </button>
        )}
        <span className="form-note">We confirm within one U.S. business day.</span>
      </div>
    </form>
  );
}
