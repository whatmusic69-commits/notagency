import type { MetadataRoute } from "next";
import { projects } from "./lib/projects";
import { seoBaseUrl } from "./lib/seo";

const lastModified = new Date("2026-05-25");
const routes: Array<{
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  path: string;
  priority: number;
}> = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/portfolio", changeFrequency: "weekly", priority: 0.9 },
  { path: "/brief", changeFrequency: "monthly", priority: 0.85 },
  { path: "/contacts", changeFrequency: "monthly", priority: 0.8 },
  { path: "/process", changeFrequency: "monthly", priority: 0.78 },
  { path: "/about", changeFrequency: "monthly", priority: 0.72 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.7 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.35 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.35 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const mainRoutes = routes.map(({ path, changeFrequency, priority }) => ({
    url: `${seoBaseUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
    alternates: {
      languages: {
        en: `${seoBaseUrl}${path}`,
        ru: `${seoBaseUrl}${path}?lang=ru`,
        lv: `${seoBaseUrl}${path}?lang=lv`,
        "x-default": `${seoBaseUrl}${path}`,
      },
    },
  }));

  const projectRoutes = projects.map((project) => {
    const path = `/portfolio/${project.slug}`;

    return {
      url: `${seoBaseUrl}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.76,
      images: project.modalImage ? [`${seoBaseUrl}${project.modalImage.src}`] : undefined,
      alternates: {
        languages: {
          en: `${seoBaseUrl}${path}`,
          ru: `${seoBaseUrl}${path}?lang=ru`,
          lv: `${seoBaseUrl}${path}?lang=lv`,
          "x-default": `${seoBaseUrl}${path}`,
        },
      },
    };
  });

  return [...mainRoutes, ...projectRoutes];
}
