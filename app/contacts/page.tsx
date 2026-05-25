import ContactsClient from "./ContactsClient";
import { getPageMetadata } from "../lib/page-metadata";
import { getInitialLang, type PageWithLangProps } from "../lib/server-language";

export function generateMetadata({ searchParams }: PageWithLangProps) {
  return getPageMetadata("contacts", searchParams);
}

export default async function ContactsPage({ searchParams }: PageWithLangProps) {
  const initialLang = await getInitialLang(searchParams);

  return <ContactsClient initialLang={initialLang} />;
}
