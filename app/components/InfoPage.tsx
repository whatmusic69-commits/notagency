 "use client";

import { useEffect, useState } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { type Lang, readStoredLang, storeLang } from "../lib/language";

type InfoPageProps = {
  content: Record<
    Lang,
    {
      kicker: string;
      title: string;
      text: string;
      sections: Array<{
        title: string;
        body: string;
      }>;
    }
  >;
};

export function InfoPage({ content }: InfoPageProps) {
  const [lang, setLang] = useState<Lang>("en");
  const changeLang = (nextLang: Lang) => {
    storeLang(nextLang);
    setLang(nextLang);
  };

  useEffect(() => {
    setLang(readStoredLang());
  }, []);
  const page = content[lang];

  return (
    <main className={`info-shell lang-${lang}`}>
      <div className="noise" />
      <SiteHeader lang={lang} onLangChange={changeLang} />

      <section className="info-hero">
        <p className="kicker">{page.kicker}</p>
        <h1>{page.title}</h1>
        <p>{page.text}</p>
      </section>

      <section className="info-content">
        {page.sections.map((section) => (
          <article className="info-card" key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </article>
        ))}
      </section>

      <SiteFooter lang={lang} />
    </main>
  );
}
