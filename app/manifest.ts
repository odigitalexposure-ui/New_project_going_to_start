import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Stay Homes",
    short_name: "Stay Homes",
    description: "Premium homestays and curated rental properties.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4efe8",
    theme_color: "#1f4d47",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
