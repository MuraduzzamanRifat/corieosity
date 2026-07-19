"use client";

import { useEffect } from "react";
import { sceneConfig } from "./sceneConfig";

// Rendered by each page to shift the shared particle field toward its accent.
export default function SceneTint({ accent }: { accent: string }) {
  useEffect(() => {
    const prev = sceneConfig.accent;
    sceneConfig.accent = accent;
    return () => {
      sceneConfig.accent = prev;
    };
  }, [accent]);
  return null;
}
