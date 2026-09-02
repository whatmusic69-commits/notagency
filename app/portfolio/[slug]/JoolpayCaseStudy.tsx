"use client";

import Image from "next/image";
import { useState } from "react";
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
import { joolpayCaseStudyCopy } from "../../lib/joolpay-case-study";
import { type Lang, storeLang } from "../../lib/language";
import joolpayVisual from "../../src/Joolpay2.png";

export default function JoolpayCaseStudy({ initialLang }: { initialLang: Lang }) {
  const [lang, setLang] = useState(initialLang);
  const t = joolpayCaseStudyCopy[lang];

  const changeLang = (nextLang: Lang) => {
    storeLang(nextLang);
    setLang(nextLang);
  };

  return (
    <main className={`joolpay-case lang-${lang}`}>
      <div className="noise" />
      <SiteHeader lang={lang} onLangChange={changeLang} />

      <header className="case-hero">
        <p className="kicker">{t.kicker}</p>
        <div className="case-hero-name">JOOLPAY</div>
        <h1>{t.headline}</h1>
        <p className="case-hero-description">{t.description}</p>
        <CaseStudyMeta items={t.meta} />
        <figure className="case-hero-visual">
          <Image src={joolpayVisual} alt={t.imageAlt} priority sizes="100vw" />
          <figcaption>{t.imageCaption}</figcaption>
        </figure>
      </header>

      <ResultHighlight result={t.result} />

      <section className="case-story-grid" aria-label="JOOLPAY project story">
        <CaseStudyNarrative section={t.problem} tone="light" />
        <CaseStudyNarrative section={t.solution} tone="acid" />
      </section>

      <section className="case-flow case-section" aria-labelledby="joolpay-flow-title">
        <h2 id="joolpay-flow-title">{t.flowTitle}</h2>
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
      <CaseStudyProcess title={t.processTitle} steps={t.process} />

      <section className="case-section case-systems" aria-labelledby="joolpay-systems-title">
        <h2 id="joolpay-systems-title">{t.techTitle}</h2>
        <div>{t.systems.map((system) => <span key={system}>{system}</span>)}</div>
      </section>

      <section className="case-final-result joolpay-final-result">
        <div className="case-final-seven" aria-hidden="true">WEB+APP</div>
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
