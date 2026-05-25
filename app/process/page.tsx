import ProcessClient from "./ProcessClient";
import { getPageMetadata } from "../lib/page-metadata";
import { getInitialLang, type PageWithLangProps } from "../lib/server-language";

export function generateMetadata({ searchParams }: PageWithLangProps) {
  return getPageMetadata("process", searchParams);
}

export default async function ProcessPage({ searchParams }: PageWithLangProps) {
  const initialLang = await getInitialLang(searchParams);

  return <ProcessClient initialLang={initialLang} />;
}
