"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// WebGL is loaded client-only and after first paint, so it never blocks content
// (and content stays fully server-rendered for crawlers / AI engines).
const Scene = dynamic(() => import("./Scene"), { ssr: false });

export default function SceneMount() {
  const [ready, setReady] = useState(false);
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const ok =
        !!window.WebGLRenderingContext &&
        !!(
          canvas.getContext("webgl2") ||
          canvas.getContext("webgl") ||
          canvas.getContext("experimental-webgl")
        );
      setSupported(!!ok);
    } catch {
      setSupported(false);
    }
    const id = window.setTimeout(() => setReady(true), 200);
    return () => window.clearTimeout(id);
  }, []);

  if (!ready || !supported) return null;
  return <Scene />;
}
