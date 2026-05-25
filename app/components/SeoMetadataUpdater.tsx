"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  isLang,
  languageChangeEventName,
  readStoredLang,
  type Lang,
} from "../lib/language";
import { getSeoEntryForPath } from "../lib/seo";

function updateMetaTag(selector: string, attribute: "content" | "lang", value: string) {
  const element = document.querySelector(selector);

  if (element) {
    element.setAttribute(attribute, value);
  }
}

export function SeoMetadataUpdater() {
  const pathname = usePathname();
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    setLang(readStoredLang());

    const updateLang = (event: Event) => {
      const nextLang = (event as CustomEvent).detail;

      if (isLang(nextLang)) {
        setLang(nextLang);
      }
    };

    window.addEventListener(languageChangeEventName, updateLang);

    return () => window.removeEventListener(languageChangeEventName, updateLang);
  }, []);

  useEffect(() => {
    const seo = getSeoEntryForPath(pathname, lang);

    document.documentElement.lang = lang;
    document.title = seo.title;
    updateMetaTag('meta[name="description"]', "content", seo.description);
    updateMetaTag('meta[name="keywords"]', "content", seo.keywords.join(", "));
    updateMetaTag('meta[property="og:title"]', "content", seo.title);
    updateMetaTag('meta[property="og:description"]', "content", seo.description);
    updateMetaTag('meta[name="twitter:title"]', "content", seo.title);
    updateMetaTag('meta[name="twitter:description"]', "content", seo.description);
  }, [lang, pathname]);

  return null;
}
