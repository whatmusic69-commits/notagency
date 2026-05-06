export type Lang = "en" | "ru" | "lv";

export const defaultLang: Lang = "en";
export const languageStorageKey = "notagency-language";

export function readStoredLang(): Lang {
  if (typeof window === "undefined") {
    return defaultLang;
  }

  const storedLang = window.localStorage.getItem(languageStorageKey);

  return storedLang === "ru" || storedLang === "lv" || storedLang === "en"
    ? storedLang
    : defaultLang;
}

export function storeLang(lang: Lang) {
  window.localStorage.setItem(languageStorageKey, lang);
}
