"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
  const root = useRef<HTMLDivElement>(null);
  const num = useRef<HTMLSpanElement>(null);
  const bar = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("corieosity-loaded")) {
      setHidden(true);
      return;
    }
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const counter = { v: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem("corieosity-loaded", "1");
        setHidden(true);
      },
    });
    tl.to(counter, {
      v: 100,
      duration: reduced ? 0.3 : 1.8,
      ease: "power2.inOut",
      onUpdate: () => {
        const v = Math.round(counter.v);
        if (num.current) num.current.textContent = String(v);
        if (bar.current) bar.current.style.width = `${v}%`;
      },
    });
    tl.to(root.current, {
      yPercent: -100,
      duration: 0.8,
      ease: "power4.inOut",
    }, "+=0.15");
    return () => {
      tl.kill();
    };
  }, []);

  if (hidden) return null;

  return (
    <div ref={root} className="preloader">
      <div className="preloader-count">
        <span ref={num}>0</span>
        <span style={{ color: "var(--teal-bright)" }}>%</span>
      </div>
      <div ref={bar} className="preloader-bar" style={{ width: 0 }} />
    </div>
  );
}
