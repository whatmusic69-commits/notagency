"use client";

import Image from "next/image";
import { useState } from "react";
import marketplaceVisual from "../../src/underbpm 1.png";
import youtubeVisual from "../../src/underbpm 2.png";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import {
  CaseStudyCTA,
  CaseStudyMeta,
  CaseStudyNarrative,
  CaseStudyProcess,
  FeatureGrid,
  ResultHighlight,
} from "../../components/case-study/CaseStudyBlocks";
import { type Lang, storeLang } from "../../lib/language";
import { underbpmCaseStudyCopy } from "../../lib/underbpm-case-study";

const youtubeAlt = {
  en: "UNDERBPM YouTube channel showing videos published from the marketplace creator workflow.",
  ru: "YouTube-канал UNDERBPM с видео, опубликованными через инструменты marketplace.",
  lv: "UNDERBPM YouTube kanāls ar video, kas publicēti caur marketplace autora rīkiem.",
} satisfies Record<Lang, string>;

const youtubeCaption = {
  en: "One connected publishing path: audio and cover become a video on the UNDERBPM YouTube channel.",
  ru: "Единый путь публикации: аудио и обложка превращаются в видео на YouTube-канале UNDERBPM.",
  lv: "Vienota publicēšanas plūsma: audio un vāks kļūst par video UNDERBPM YouTube kanālā.",
} satisfies Record<Lang, string>;

export default function UnderbpmCaseStudy({ initialLang }: { initialLang: Lang }) {
  const [lang, setLang] = useState(initialLang);
  const t = underbpmCaseStudyCopy[lang];
  const finalMark: Record<Lang, string> = {
    en: "ONE SYSTEM",
    ru: "ОДНА СИСТЕМА",
    lv: "VIENA SISTĒMA",
  };
  const changeLang = (nextLang: Lang) => {
    storeLang(nextLang);
    setLang(nextLang);
  };

  return (
    <main className={`underbpm-case lang-${lang}`}>
      <div className="noise" />
      <SiteHeader lang={lang} onLangChange={changeLang} />

      <header className="case-hero">
        <p className="kicker">{t.kicker}</p>
        <div className="case-hero-name">UNDERBPM</div>
        <h1>{t.headline}</h1>
        <p className="case-hero-description">{t.description}</p>
        <CaseStudyMeta items={t.meta} />
        <figure className="case-hero-visual">
          <Image src={marketplaceVisual} alt={t.imageAlt} priority sizes="100vw" />
          <figcaption>{t.imageCaption}</figcaption>
        </figure>
      </header>

      <ResultHighlight result={t.result} />

      <section className="case-story-grid" aria-label="UNDERBPM project story">
        <CaseStudyNarrative section={t.problem} tone="light" />
        <CaseStudyNarrative section={t.solution} tone="acid" />
      </section>

      <section className="case-flow case-section" aria-labelledby="underbpm-flow-title">
        <h2 id="underbpm-flow-title">{t.flowTitle}</h2>
        <ol>
          {t.flow.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
            </li>
          ))}
        </ol>
      </section>

      <FeatureGrid title={t.builtTitle} features={t.features} />

      <figure className="case-secondary-visual">
        <Image src={youtubeVisual} alt={youtubeAlt[lang]} loading="eager" sizes="100vw" />
        <figcaption>{youtubeCaption[lang]}</figcaption>
      </figure>

      <CaseStudyProcess title={t.processTitle} steps={t.process} />

      <section className="case-section case-systems" aria-labelledby="underbpm-systems-title">
        <h2 id="underbpm-systems-title">{t.techTitle}</h2>
        <div>{t.systems.map((system) => <span key={system}>{system}</span>)}</div>
      </section>

      <section className="case-final-result underbpm-final-result">
        <div className="case-final-seven" aria-hidden="true">{finalMark[lang]}</div>
        <div>
          <h2>{t.resultSection.title}</h2>
          {t.resultSection.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>

      <CaseStudyCTA copy={t.cta} />
      <SiteFooter lang={lang} />
    </main>
  );
}
