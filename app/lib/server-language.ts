import { cookies } from "next/headers";
import { defaultLang, isLang, languageStorageKey, type Lang } from "./language";

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

export type PageWithLangProps = {
  searchParams?: SearchParams;
};

export async function getInitialLang(searchParams?: SearchParams): Promise<Lang> {
  const params = searchParams ? await searchParams : undefined;
  const queryLang = params?.lang;
  const lang = Array.isArray(queryLang) ? queryLang[0] : queryLang;

  if (typeof lang === "string" && isLang(lang)) {
    return lang;
  }

  const cookieLang = (await cookies()).get(languageStorageKey)?.value;

  return typeof cookieLang === "string" && isLang(cookieLang)
    ? cookieLang
    : defaultLang;
}
