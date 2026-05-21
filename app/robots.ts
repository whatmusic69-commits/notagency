import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://notagency.io/sitemap.xml",
    host: "https://notagency.io",
  };
}
