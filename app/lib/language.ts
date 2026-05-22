export type Lang = "en" | "ru" | "lv";

export const defaultLang: Lang = "en";
export const languageStorageKey = "notagency-language";
export const languageChangeEventName = "notagency-language-change";
const languageCookieMaxAge = 60 * 60 * 24 * 365;

export function isLang(value: string | null): value is Lang {
  return value === "ru" || value === "lv" || value === "en";
}

function readCookieLang() {
  if (typeof document === "undefined") {
    return null;
  }

  const cookie = document.cookie
    .split("; ")
    .find((item) => item.startsWith(`${languageStorageKey}=`));

  return cookie ? decodeURIComponent(cookie.split("=")[1] ?? "") : null;
}

export function readStoredLang(): Lang {
  if (typeof window === "undefined") {
    return defaultLang;
  }

  const queryLang = new URLSearchParams(window.location.search).get("lang");

  if (isLang(queryLang)) {
    return queryLang;
  }

  const cookieLang = readCookieLang();

  if (isLang(cookieLang)) {
    return cookieLang;
  }

  const storedLang = window.localStorage.getItem(languageStorageKey);

  return isLang(storedLang) ? storedLang : defaultLang;
}

export function persistLang(lang: Lang) {
  window.localStorage.setItem(languageStorageKey, lang);
  document.cookie = `${languageStorageKey}=${encodeURIComponent(
    lang,
  )}; path=/; max-age=${languageCookieMaxAge}; SameSite=Lax`;
  window.dispatchEvent(new CustomEvent(languageChangeEventName, { detail: lang }));
}

export function storeLang(lang: Lang) {
  persistLang(lang);

  const url = new URL(window.location.href);

  if (lang === defaultLang) {
    url.searchParams.delete("lang");
  } else {
    url.searchParams.set("lang", lang);
  }

  window.history.replaceState(null, "", url);
}
