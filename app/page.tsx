import HomeClient from "./HomeClient";
import { getPageMetadata } from "./lib/page-metadata";
import { getInitialLang, type PageWithLangProps } from "./lib/server-language";

export function generateMetadata({ searchParams }: PageWithLangProps) {
  return getPageMetadata("home", searchParams);
}

export default async function HomePage({ searchParams }: PageWithLangProps) {
  const initialLang = await getInitialLang(searchParams);

  return <HomeClient initialLang={initialLang} />;
}
