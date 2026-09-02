"use client";

import Image from "next/image";
import { useState } from "react";
import hidyVisual from "../../src/hidy 1.png";
import hidyTopFour from "../../src/top4.jpg";
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
import { hidyCaseStudyCopy } from "../../lib/hidy-case-study";
import { type Lang, storeLang } from "../../lib/language";

export default function HidyCaseStudy({ initialLang }: { initialLang: Lang }) {
  const [lang, setLang] = useState(initialLang);
  const t = hidyCaseStudyCopy[lang];
  const changeLang = (nextLang: Lang) => {
    storeLang(nextLang);
    setLang(nextLang);
  };

  return (
    <main className={`hidy-case lang-${lang}`}>
      <div className="noise" />
      <SiteHeader lang={lang} onLangChange={changeLang} />

      <header className="case-hero">
        <p className="kicker">{t.kicker}</p>
        <div className="case-hero-name">HIDY</div>
        <h1>{t.headline}</h1>
        <p className="case-hero-description">{t.description}</p>
        <CaseStudyMeta items={t.meta} />
        <figure className="case-hero-visual">
          <Image src={hidyVisual} alt={t.imageAlt} priority sizes="100vw" />
          <figcaption>{t.imageCaption}</figcaption>
        </figure>
      </header>

      <ResultHighlight result={t.result} />

      {t.resultProof && (
        <section className="hidy-result-proof" aria-label={t.resultProof.caption}>
          <figure>
            <div className="hidy-result-proof-copy">
              <span aria-hidden="true">↳</span>
              <figcaption>{t.resultProof.caption}</figcaption>
            </div>
            <Image
              src={hidyTopFour}
              alt={t.resultProof.alt}
              sizes="(max-width: 760px) calc(100vw - 36px), 680px"
            />
          </figure>
        </section>
      )}

      <section className="case-story-grid" aria-label="HIDY project story">
        <CaseStudyNarrative section={t.problem} tone="light" />
        <CaseStudyNarrative section={t.solution} tone="acid" />
      </section>

      <section className="case-flow case-section" aria-labelledby="hidy-flow-title">
        <h2 id="hidy-flow-title">{t.flowTitle}</h2>
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

      <section className="case-section case-systems" aria-labelledby="hidy-systems-title">
        <h2 id="hidy-systems-title">{t.techTitle}</h2>
        <div>{t.systems.map((system) => <span key={system}>{system}</span>)}</div>
      </section>

      <section className="case-final-result">
        <div className="case-final-seven" aria-hidden="true">#4</div>
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
