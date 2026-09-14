"use client";

import Image from "next/image";
import { appStoreLabel } from "../../lib/project-links";
import { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import studioVisual from "../../src/Undebpm Studio.png";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { CaseStudyCTA, CaseStudyMeta, CaseStudyNarrative, FeatureGrid } from "../../components/case-study/CaseStudyBlocks";
import { localizedHref, type Lang, storeLang } from "../../lib/language";
import { underbpmStudioAppUrl, underbpmStudioCaseStudyCopy } from "../../lib/underbpm-studio-case-study";

export default function UnderbpmStudioCaseStudy({ initialLang }: { initialLang: Lang }) {
  const [lang, setLang] = useState(initialLang);
  const t = underbpmStudioCaseStudyCopy[lang];
  const changeLang = (nextLang: Lang) => {
    storeLang(nextLang);
    setLang(nextLang);
  };

  return (
    <main className={`underbpm-case underbpm-studio-case lang-${lang}`}>
      <div className="noise" />
      <SiteHeader lang={lang} onLangChange={changeLang} />
      <header className="case-hero">
        <p className="kicker">{t.kicker}</p>
        <div className="case-hero-name">UNDERBPM <span>Studio</span></div>
        <h1>{t.headline}</h1>
        <p className="case-hero-description">{t.description}</p>
        <a className="secondary" href={underbpmStudioAppUrl} target="_blank" rel="noreferrer">
          {appStoreLabel[lang]} <ExternalLink size={18} aria-hidden="true" />
        </a>
        <CaseStudyMeta items={t.meta} />
        <figure className="case-hero-visual">
          <Image src={studioVisual} alt={t.imageAlt} priority placeholder="blur" sizes="(max-width: 1230px) 100vw, 1180px" />
          <figcaption>{t.imageCaption}</figcaption>
        </figure>
      </header>
      <section className="case-story-grid" aria-label={t.headline}>
        <CaseStudyNarrative section={t.problem} tone="light" />
        <CaseStudyNarrative section={t.solution} tone="acid" />
      </section>
      <FeatureGrid title={t.builtTitle} features={t.features} />
      <aside className="case-service-link">
        <a href={localizedHref("/portfolio/underbpm", lang)}>{t.related}<ArrowRight size={20} aria-hidden="true" /></a>
      </aside>
      <aside className="case-service-link">
        <a href={localizedHref("/mobile-app-development", lang)}>{t.service}<ArrowRight size={20} aria-hidden="true" /></a>
      </aside>
      <CaseStudyCTA lang={lang} copy={t.cta} />
      <SiteFooter lang={lang} />
    </main>
  );
}
