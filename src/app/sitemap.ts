import type { MetadataRoute } from "next";
import { projects } from "@/data/portfolio";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://devashish1000.github.io";
  return [
    { url: base, priority: 1 },
    { url: `${base}/work/`, priority: 0.9 },
    ...projects.map((project) => ({ url: `${base}/work/${project.slug}/`, priority: 0.8 })),
  ];
}
