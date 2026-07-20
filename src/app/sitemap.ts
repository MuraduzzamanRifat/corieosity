import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/industries", priority: 0.8 },
    { path: "/work", priority: 0.8 },
    { path: "/case-studies", priority: 0.8 },
    { path: "/pricing", priority: 0.8 },
    { path: "/start", priority: 0.9 },
    { path: "/book", priority: 0.7 },
    { path: "/about", priority: 0.7 },
    { path: "/blog", priority: 0.7 },
    { path: "/knowledge", priority: 0.6 },
    { path: "/resources", priority: 0.6 },
    { path: "/team", priority: 0.6 },
    { path: "/faq", priority: 0.6 },
    { path: "/careers", priority: 0.5 },
    { path: "/contact", priority: 0.7 },
    { path: "/privacy", priority: 0.3 },
    { path: "/terms", priority: 0.3 },
    { path: "/cookies", priority: 0.3 },
  ];
  return routes.map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
