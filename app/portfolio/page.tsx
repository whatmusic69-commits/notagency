import PortfolioClient from "./PortfolioClient";
import { getPageMetadata } from "../lib/page-metadata";
import { getInitialLang, type PageWithLangProps } from "../lib/server-language";

export function generateMetadata({ searchParams }: PageWithLangProps) {
  return getPageMetadata("portfolio", searchParams);
}

export default async function PortfolioPage({ searchParams }: PageWithLangProps) {
  const initialLang = await getInitialLang(searchParams);

  return <PortfolioClient initialLang={initialLang} />;
}
