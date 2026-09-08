import { defaultLang, isLang, type Lang } from "./language";

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

  return defaultLang;
}
