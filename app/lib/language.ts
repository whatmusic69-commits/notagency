export type Lang = "en" | "ru" | "lv";

export const defaultLang: Lang = "en";
export const languageStorageKey = "notagency-language";

function isLang(value: string | null): value is Lang {
  return value === "ru" || value === "lv" || value === "en";
}

export function readStoredLang(): Lang {
  if (typeof window === "undefined") {
    return defaultLang;
  }

  const queryLang = new URLSearchParams(window.location.search).get("lang");

  if (isLang(queryLang)) {
    return queryLang;
  }

  const storedLang = window.localStorage.getItem(languageStorageKey);

  return isLang(storedLang) ? storedLang : defaultLang;
}

export function storeLang(lang: Lang) {
  window.localStorage.setItem(languageStorageKey, lang);

  const url = new URL(window.location.href);

  if (lang === defaultLang) {
    url.searchParams.delete("lang");
  } else {
    url.searchParams.set("lang", lang);
  }

  window.history.replaceState(null, "", url);
}
