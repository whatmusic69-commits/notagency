import BriefClient from "./BriefClient";
import { getPageMetadata } from "../lib/page-metadata";
import { getInitialLang, type PageWithLangProps } from "../lib/server-language";

export function generateMetadata({ searchParams }: PageWithLangProps) {
  return getPageMetadata("brief", searchParams);
}

export default async function BriefPage({ searchParams }: PageWithLangProps) {
  const initialLang = await getInitialLang(searchParams);

  return <BriefClient initialLang={initialLang} />;
}
