import type { Metadata } from "next";
import { getProjectBySlug } from "./projects";
import { getInitialLang, type PageWithLangProps } from "./server-language";
import {
  getProjectSeoEntry,
  getSeoEntry,
  seoBaseUrl,
  seoPaths,
  type SeoPageKey,
} from "./seo";

const localeByLang = {
  en: "en_US",
  ru: "ru_RU",
  lv: "lv_LV",
} as const;

export async function getPageMetadata(
  page: SeoPageKey,
  searchParams?: PageWithLangProps["searchParams"],
): Promise<Metadata> {
  const lang = await getInitialLang(searchParams);
  const seo = getSeoEntry(page, lang);
  const path = seoPaths[page];
  const canonical = `${seoBaseUrl}${path}`;

  return {
    title: {
      absolute: seo.title,
    },
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical,
      languages: {
        en: canonical,
        ru: `${canonical}?lang=ru`,
        lv: `${canonical}?lang=lv`,
        "x-default": canonical,
      },
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      locale: localeByLang[lang],
      siteName: "NotAgency",
      type: "website",
      url: canonical,
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: ["/opengraph-image"],
    },
  };
}

export async function getProjectPageMetadata(
  slug: string,
  searchParams?: PageWithLangProps["searchParams"],
): Promise<Metadata> {
  const lang = await getInitialLang(searchParams);
  const project = getProjectBySlug(slug);
  const seo = project ? getProjectSeoEntry(project.slug, lang) : null;

  if (!project || !seo) {
    return {};
  }

  const canonical = `${seoBaseUrl}/portfolio/${project.slug}`;

  return {
    title: {
      absolute: seo.title,
    },
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical,
      languages: {
        en: canonical,
        ru: `${canonical}?lang=ru`,
        lv: `${canonical}?lang=lv`,
        "x-default": canonical,
      },
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      images: project.modalImage
        ? [
            {
              alt: project.imageAlt[lang],
              url: project.modalImage.src,
            },
          ]
        : undefined,
      locale: localeByLang[lang],
      siteName: "NotAgency",
      type: "article",
      url: canonical,
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: project.modalImage ? [project.modalImage.src] : ["/opengraph-image"],
    },
  };
}
