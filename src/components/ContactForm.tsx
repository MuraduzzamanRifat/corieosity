"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "ok" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (!String(data.email ?? "").includes("@")) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="form-success">
        Thanks — your request is in. We’ll reply within one U.S. business day
        with your Answer Readiness score.
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="email">Work email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
          />
        </div>
        <div className="field">
          <label htmlFor="company">Company</label>
          <input id="company" name="company" autoComplete="organization" />
        </div>
        <div className="field">
          <label htmlFor="website">Website URL</label>
          <input id="website" name="website" placeholder="https://" inputMode="url" />
        </div>
        <div className="field form-full">
          <label htmlFor="message">What are you trying to achieve?</label>
          <textarea id="message" name="message" required />
        </div>
      </div>

      {status === "error" && (
        <p className="form-note" style={{ color: "#ff9a9a" }}>
          Please add a valid work email and try again.
        </p>
      )}

      <div className="btn-row" style={{ marginTop: 18, alignItems: "center" }}>
        <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Get my Answer Readiness score"}{" "}
          <span className="arw">↗</span>
        </button>
        <span className="form-note">
          No spam. We reply within one U.S. business day.
        </span>
      </div>
    </form>
  );
}
