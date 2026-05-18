import ContactsClient from "./ContactsClient";
import { getInitialLang, type PageWithLangProps } from "../lib/server-language";

export default async function ContactsPage({ searchParams }: PageWithLangProps) {
  const initialLang = await getInitialLang(searchParams);

  return <ContactsClient initialLang={initialLang} />;
}
