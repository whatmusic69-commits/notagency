import type { MetadataRoute } from "next";

const baseUrl = "https://notagency.io";
const routes = [
  "",
  "/about",
  "/brief",
  "/contacts",
  "/faq",
  "/portfolio",
  "/privacy",
  "/process",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
    alternates: {
      languages: {
        en: `${baseUrl}${route}`,
        ru: `${baseUrl}${route}?lang=ru`,
        lv: `${baseUrl}${route}?lang=lv`,
        "x-default": `${baseUrl}${route}`,
      },
    },
  }));
}
