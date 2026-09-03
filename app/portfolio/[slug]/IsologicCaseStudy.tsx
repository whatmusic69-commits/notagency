"use client";

import Image from "next/image";
import { useState } from "react";
import isologicVisual from "../../src/isologic 1.png";
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
import { isologicCaseStudyCopy } from "../../lib/isologic-case-study";
import { type Lang, storeLang } from "../../lib/language";

export default function IsologicCaseStudy({ initialLang }: { initialLang: Lang }) {
  const [lang, setLang] = useState(initialLang);
  const t = isologicCaseStudyCopy[lang];
  const changeLang = (nextLang: Lang) => {
    storeLang(nextLang);
    setLang(nextLang);
  };

  return (
    <main className={`isologic-case lang-${lang}`}>
      <div className="noise" />
      <SiteHeader lang={lang} onLangChange={changeLang} />

      <header className="case-hero">
        <p className="kicker">{t.kicker}</p>
        <div className="case-hero-name">ISOLOGIC</div>
        <h1>{t.headline}</h1>
        <p className="case-hero-description">{t.description}</p>
        <CaseStudyMeta items={t.meta} />
        <figure className="case-hero-visual">
          <Image src={isologicVisual} alt={t.imageAlt} priority sizes="100vw" />
          <figcaption>{t.imageCaption}</figcaption>
        </figure>
      </header>

      <ResultHighlight result={t.result} />

      <section className="case-story-grid" aria-label="ISOLogic project story">
        <CaseStudyNarrative section={t.problem} tone="light" />
        <CaseStudyNarrative section={t.solution} tone="acid" />
      </section>

      <FeatureGrid title={t.builtTitle} features={t.features} />
      <CaseStudyProcess title={t.processTitle} steps={t.process} />

      <section className="case-section case-systems" aria-labelledby="isologic-systems-title">
        <h2 id="isologic-systems-title">{t.techTitle}</h2>
        <div>{t.systems.map((system) => <span key={system}>{system}</span>)}</div>
      </section>

      <section className="case-final-result isologic-final-result">
        <div className="case-final-seven" aria-hidden="true">EDIT/LIVE</div>
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
