"use client";

import { useEffect } from "react";
import { scroll } from "./scrollStore";

// Feeds DOM scroll progress into the 3D scene singleton (works with or without Lenis).
export default function ScrollBridge() {
  useEffect(() => {
    let raf = 0;
    const update = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      const y = window.scrollY || el.scrollTop || 0;
      scroll.y = y;
      scroll.progress = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0;
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  return null;
}
