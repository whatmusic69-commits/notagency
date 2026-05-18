import HomeClient from "./HomeClient";
import { getInitialLang, type PageWithLangProps } from "./lib/server-language";

export default async function HomePage({ searchParams }: PageWithLangProps) {
  const initialLang = await getInitialLang(searchParams);

  return <HomeClient initialLang={initialLang} />;
}
