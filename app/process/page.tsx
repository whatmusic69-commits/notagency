import ProcessClient from "./ProcessClient";
import { getInitialLang, type PageWithLangProps } from "../lib/server-language";

export default async function ProcessPage({ searchParams }: PageWithLangProps) {
  const initialLang = await getInitialLang(searchParams);

  return <ProcessClient initialLang={initialLang} />;
}
