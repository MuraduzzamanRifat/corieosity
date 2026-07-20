"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Magnetic from "@/components/ui/Magnetic";
import { pricing } from "@/content/site";

const money = (n: number) =>
  "$" + (Math.round(n / 500) * 500).toLocaleString("en-US");

export default function PricingCalculator() {
  const [type, setType] = useState<string>(pricing.projectTypes[1].id);
  const [scope, setScope] = useState<string>(pricing.scope[1].id);
  const [addons, setAddons] = useState<string[]>([]);

  const toggle = (id: string) =>
    setAddons((a) => (a.includes(id) ? a.filter((x) => x !== id) : [...a, id]));

  const estimate = useMemo(() => {
    const pt = pricing.projectTypes.find((p) => p.id === type)!;
    const sc = pricing.scope.find((s) => s.id === scope)!;
    let low = pt.low * sc.mult;
    let high = pt.high * sc.mult;
    for (const id of addons) {
      const a = pricing.addons.find((x) => x.id === id);
      if (a) {
        low += a.low;
        high += a.high;
      }
    }
    return { low, high };
  }, [type, scope, addons]);

  return (
    <div className="calc">
      <div className="calc-controls">
        <fieldset className="calc-group">
          <legend className="eyebrow">1 · What are you building?</legend>
          <div className="calc-options">
            {pricing.projectTypes.map((p) => (
              <label
                key={p.id}
                className={`calc-opt ${type === p.id ? "sel" : ""}`}
              >
                <input
                  type="radio"
                  name="ptype"
                  checked={type === p.id}
                  onChange={() => setType(p.id)}
                />
                <span className="calc-opt-title">{p.label}</span>
                <span className="calc-opt-desc">{p.desc}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="calc-group">
          <legend className="eyebrow">2 · How big is the scope?</legend>
          <div className="calc-options calc-options-3">
            {pricing.scope.map((s) => (
              <label
                key={s.id}
                className={`calc-opt ${scope === s.id ? "sel" : ""}`}
              >
                <input
                  type="radio"
                  name="scope"
                  checked={scope === s.id}
                  onChange={() => setScope(s.id)}
                />
                <span className="calc-opt-title">{s.label}</span>
                <span className="calc-opt-desc">{s.hint}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="calc-group">
          <legend className="eyebrow">3 · Add capabilities (optional)</legend>
          <div className="calc-options calc-options-2">
            {pricing.addons.map((a) => (
              <label
                key={a.id}
                className={`calc-opt ${addons.includes(a.id) ? "sel" : ""}`}
              >
                <input
                  type="checkbox"
                  checked={addons.includes(a.id)}
                  onChange={() => toggle(a.id)}
                />
                <span className="calc-opt-title">{a.label}</span>
                <span className="calc-opt-desc">
                  +{money(a.low)}–{money(a.high)}
                </span>
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <aside className="calc-result card-glass" aria-live="polite">
        <span className="eyebrow">Indicative range</span>
        <div className="calc-figure">
          {money(estimate.low)}
          <span className="calc-dash">–</span>
          {money(estimate.high)}
        </div>
        <p className="form-note" style={{ marginTop: 0 }}>
          {pricing.note}
        </p>
        <div className="btn-row" style={{ marginTop: 22 }}>
          <Magnetic>
            <Link href="/start" className="btn btn-primary">
              Get an exact quote <span className="arw">↗</span>
            </Link>
          </Magnetic>
          <Link href="/book" className="btn btn-ghost">
            Book a call
          </Link>
        </div>
      </aside>
    </div>
  );
}
