 "use client";

import { useState } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { type Lang, storeLang } from "../lib/language";

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
  initialLang: Lang;
  pageClassName?: string;
};

function renderTextWithEmailLinks(text: string) {
  const emailPattern = /([^\s@]+@[^\s@]+\.[^\s@.]+)/g;
  const emailOnlyPattern = /^[^\s@]+@[^\s@]+\.[^\s@.]+$/;
  const parts = text.split(emailPattern);

  return parts.map((part, index) =>
    emailOnlyPattern.test(part) ? (
      <a href={`mailto:${part}`} key={`${part}-${index}`}>
        {part}
      </a>
    ) : (
      part
    ),
  );
}

export function InfoPage({
  content,
  initialLang,
  pageClassName = "",
}: InfoPageProps) {
  const [lang, setLang] = useState<Lang>(initialLang);
  const changeLang = (nextLang: Lang) => {
    storeLang(nextLang);
    setLang(nextLang);
  };

  const page = content[lang];

  return (
    <main className={`info-shell lang-${lang} ${pageClassName}`.trim()}>
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
            <p>{renderTextWithEmailLinks(section.body)}</p>
          </article>
        ))}
      </section>

      <SiteFooter lang={lang} />
    </main>
  );
}
