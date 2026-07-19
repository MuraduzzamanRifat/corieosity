"use client";

import { useState } from "react";
import { faqs } from "@/content/site";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="faq">
      {faqs.map((f, i) => (
        <div key={i} className={`qa ${open === i ? "open" : ""}`}>
          <button
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? null : i)}
          >
            {f.q}
            <span className="plus" aria-hidden>
              +
            </span>
          </button>
          <div
            className="ans"
            style={{ maxHeight: open === i ? "540px" : 0 }}
          >
            <p>{f.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
