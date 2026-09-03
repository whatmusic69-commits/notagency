"use client";

import Image from "next/image";
import { useState } from "react";
import coinerHeroVisual from "../../src/COINER HERO.png";
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
import { coinerHeroCaseStudyCopy } from "../../lib/coiner-hero-case-study";
import { type Lang, storeLang } from "../../lib/language";

export default function CoinerHeroCaseStudy({ initialLang }: { initialLang: Lang }) {
  const [lang, setLang] = useState(initialLang);
  const t = coinerHeroCaseStudyCopy[lang];
  const changeLang = (nextLang: Lang) => {
    storeLang(nextLang);
    setLang(nextLang);
  };

  return (
    <main className={`coiner-hero-case lang-${lang}`}>
      <div className="noise" />
      <SiteHeader lang={lang} onLangChange={changeLang} />

      <header className="case-hero">
        <p className="kicker">{t.kicker}</p>
        <div className="case-hero-name">COINER HERO</div>
        <h1>{t.headline}</h1>
        <p className="case-hero-description">{t.description}</p>
        <CaseStudyMeta items={t.meta} />
        <figure className="case-hero-visual">
          <Image src={coinerHeroVisual} alt={t.imageAlt} priority sizes="100vw" />
          <figcaption>{t.imageCaption}</figcaption>
        </figure>
      </header>

      <ResultHighlight result={t.result} />

      <section className="case-story-grid" aria-label="Coiner Hero project story">
        <CaseStudyNarrative section={t.problem} tone="light" />
        <CaseStudyNarrative section={t.solution} tone="acid" />
      </section>

      <FeatureGrid title={t.builtTitle} features={t.features} />
      <CaseStudyProcess title={t.processTitle} steps={t.process} />

      <section className="case-section case-systems" aria-labelledby="coiner-systems-title">
        <h2 id="coiner-systems-title">{t.techTitle}</h2>
        <div>{t.systems.map((system) => <span key={system}>{system}</span>)}</div>
      </section>

      <section className="case-final-result coiner-final-result">
        <div className="case-final-seven" aria-hidden="true">1→N</div>
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
