"use client";

import { ArrowRight } from "lucide-react";
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
import hidyHero from "../src/hidy 1.png";
import hidySpotlight from "../src/hidy-case.jpg";
import splitMergeVisual from "../src/Split&Merge.png";

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
            <a className="primary" href="/brief">
              {t.hero.primary}
              <ArrowRight size={21} />
            </a>
            <a className="secondary" href="/portfolio/hidy">
              {t.hero.secondary}
              <ArrowRight size={21} />
            </a>
          </div>
        </div>
        <figure className="mobile-service-hero-visual">
          <Image src={hidyHero} alt={t.hero.imageAlt} priority sizes="(max-width: 920px) 100vw, 54vw" />
          <figcaption>{t.hero.imageCaption}</figcaption>
        </figure>
      </header>

      <ServiceProof copy={t.proof} />
      <ServiceCards className="mobile-service-build" copy={t.build} />

      <section className="mobile-hidy-spotlight" aria-labelledby="mobile-hidy-title">
        <div className="mobile-hidy-copy">
          <p className="kicker">{t.hidy.label}</p>
          <h2 id="mobile-hidy-title">{t.hidy.title}</h2>
          <p>{t.hidy.text}</p>
          <a className="primary" href="/portfolio/hidy">
            {t.hidy.action}
            <ArrowRight size={21} />
          </a>
        </div>
        <figure>
          <Image src={hidySpotlight} alt={t.hidy.imageAlt} sizes="(max-width: 920px) 100vw, 52vw" />
        </figure>
      </section>

      <ServiceCards className="mobile-service-capabilities" copy={t.capabilities} />

      <section className="mobile-service-team" aria-labelledby="mobile-team-title">
        <p className="kicker">{t.team.label}</p>
        <h2 id="mobile-team-title">{t.team.title}</h2>
        <div>{t.team.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      </section>

      <ServiceProcess copy={t.process} />

      <section className="mobile-secondary-work" aria-labelledby="mobile-secondary-title">
        <figure>
          <Image src={splitMergeVisual} alt={t.secondary.imageAlt} sizes="(max-width: 920px) 100vw, 48vw" />
        </figure>
        <div>
          <p className="kicker">{t.secondary.label}</p>
          <h2 id="mobile-secondary-title">{t.secondary.title}</h2>
          <p>{t.secondary.text}</p>
          <a className="secondary" href="/portfolio/split-merge">
            {t.secondary.action}
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      <ServiceFAQ copy={t.faq} />
      <ServiceCTA copy={t.cta} />
      <SiteFooter lang={lang} />
    </main>
  );
}
