"use client";

import { appStoreLabel } from "../lib/project-links";
import { underbpmStudioAppUrl } from "../lib/underbpm-studio-case-study";

import { localizedHref } from "../lib/language";

import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import {
  ServiceCards,
  ServiceCTA,
  ServiceFAQ,
  ServiceProcess,
  ServiceProof,
} from "../components/service/ServicePageBlocks";
import { type Lang, storeLang } from "../lib/language";
import { mobileAppDevelopmentCopy } from "../lib/mobile-app-development";
import { underbpmStudio, hidyHero, hidySpotlight, splitMerge as splitMergeVisual } from "../lib/service-images";

export default function MobileAppDevelopmentClient({ initialLang }: { initialLang: Lang }) {
  const [lang, setLang] = useState(initialLang);
  const t = mobileAppDevelopmentCopy[lang];

  const changeLang = (nextLang: Lang) => {
    storeLang(nextLang);
    setLang(nextLang);
  };

  return (
    <main className={`mobile-service-page lang-${lang}`}>
      <div className="noise" />
      <SiteHeader lang={lang} onLangChange={changeLang} />

      <header className="mobile-service-hero">
        <div className="mobile-service-hero-copy">
          <p className="kicker">{t.hero.label}</p>
          <h1>{t.hero.title.map((line) => <span key={line}>{line}</span>)}</h1>
          <p>{t.hero.description}</p>
          <div className="hero-actions">
            <a className="primary" href={localizedHref("/brief", lang)}>
              {t.hero.primary}
              <ArrowRight size={21} />
            </a>
            <a className="secondary" href={localizedHref("/portfolio/hidy", lang)}>
              {t.hero.secondary}
              <ArrowRight size={21} />
            </a>
          </div>
        </div>
        <figure className="mobile-service-hero-visual">
          <Image src={hidyHero} alt={t.hero.imageAlt} placeholder="blur" priority unoptimized sizes="(max-width: 920px) 100vw, 54vw" />
          <figcaption>{t.hero.imageCaption}</figcaption>
        </figure>
      </header>

      <ServiceProof lang={lang} copy={t.proof} />
      <ServiceCards className="mobile-service-build" copy={t.build} />

      <section className="mobile-hidy-spotlight" aria-labelledby="mobile-hidy-title">
        <div className="mobile-hidy-copy">
          <p className="kicker">{t.hidy.label}</p>
          <h2 id="mobile-hidy-title">{t.hidy.title}</h2>
          <p>{t.hidy.text}</p>
          <a className="primary" href={localizedHref("/portfolio/hidy", lang)}>
            {t.hidy.action}
            <ArrowRight size={21} />
          </a>
        </div>
        <figure>
          <Image src={hidySpotlight} alt={t.hidy.imageAlt} placeholder="blur" loading="eager" unoptimized sizes="(max-width: 920px) 100vw, 52vw" />
        </figure>
      </section>

      <ServiceCards className="mobile-service-capabilities" copy={t.capabilities} />

      <section className="mobile-service-team" aria-labelledby="mobile-team-title">
        <p className="kicker">{t.team.label}</p>
        <h2 id="mobile-team-title">{t.team.title}</h2>
        <div>{t.team.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      </section>

      <ServiceProcess lang={lang} copy={t.process} />

      <section className="mobile-secondary-work" aria-labelledby="mobile-secondary-title">
        <figure>
          <Image src={splitMergeVisual} alt={t.secondary.imageAlt} placeholder="blur" loading="eager" unoptimized sizes="(max-width: 920px) 100vw, 48vw" />
        </figure>
        <div>
          <p className="kicker">{t.secondary.label}</p>
          <h2 id="mobile-secondary-title">{t.secondary.title}</h2>
          <p>{t.secondary.text}</p>
          <a className="secondary" href={localizedHref("/portfolio/split-merge", lang)}>
            {t.secondary.action}
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      <section className="mobile-secondary-work mobile-studio-work" aria-labelledby="mobile-studio-title">
        <figure>
          <Image src={underbpmStudio} alt={t.studio.imageAlt} placeholder="blur" loading="eager" unoptimized sizes="(max-width: 920px) 100vw, 48vw" />
        </figure>
        <div>
          <p className="kicker">{t.studio.label}</p>
          <h2 id="mobile-studio-title">{t.studio.title}</h2>
          <p>{t.studio.text}</p>
          <div className="hero-actions">
            <a className="primary" href={localizedHref("/portfolio/underbpm-studio", lang)}>
              {t.studio.action}<ArrowRight size={20} aria-hidden="true" />
            </a>
            <a className="secondary" href={underbpmStudioAppUrl} target="_blank" rel="noreferrer">
              {appStoreLabel[lang]}<ExternalLink size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <ServiceFAQ copy={t.faq} />
      <ServiceCTA lang={lang} copy={t.cta} />
      <SiteFooter lang={lang} />
    </main>
  );
}
