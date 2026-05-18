import BriefClient from "./BriefClient";
import { getInitialLang, type PageWithLangProps } from "../lib/server-language";

export default async function BriefPage({ searchParams }: PageWithLangProps) {
  const initialLang = await getInitialLang(searchParams);

  return <BriefClient initialLang={initialLang} />;
}
