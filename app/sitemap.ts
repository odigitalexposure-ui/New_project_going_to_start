import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/listings", "/contact"];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
