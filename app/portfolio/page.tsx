import PortfolioClient from "./PortfolioClient";
import { getInitialLang, type PageWithLangProps } from "../lib/server-language";

export default async function PortfolioPage({ searchParams }: PageWithLangProps) {
  const initialLang = await getInitialLang(searchParams);

  return <PortfolioClient initialLang={initialLang} />;
}
