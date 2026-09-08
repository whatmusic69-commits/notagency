import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { localizedHref } from "../lib/language";
import { getPageMetadata } from "../lib/page-metadata";
import { getInitialLang, type PageWithLangProps } from "../lib/server-language";
import { webAppCopy } from "../lib/web-app-development";
import { seoBaseUrl } from "../lib/seo";
import underbpm from "../src/underbpm 1.png";
import joolpay from "../src/Joolpay2.png";

export function generateMetadata({ searchParams }: PageWithLangProps) {
  return getPageMetadata("webAppDevelopment", searchParams);
}

export default async function WebAppDevelopmentPage({ searchParams }: PageWithLangProps) {
  const lang = await getInitialLang(searchParams);
  const t = webAppCopy[lang];
  const schema = {
    "@context": "https://schema.org", "@type": "Service",
    name: t.title, description: t.description, areaServed: "Worldwide",
    serviceType: "Web application development",
    url: `${seoBaseUrl}${localizedHref("/web-app-development", lang)}`,
    provider: { "@type": "Organization", name: "NotAgency", url: seoBaseUrl },
  };
  return (
    <main className={`mobile-service-page web-service-page lang-${lang}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="noise" />
      <SiteHeader lang={lang} />
      <header className="mobile-service-hero">
        <div className="mobile-service-hero-copy">
          <p className="kicker">{t.title.replace(" — NotAgency", "")}</p>
          <h1>{t.heading}</h1>
          <p>{t.intro}</p>
          <div className="hero-actions">
            <a className="primary" href={localizedHref("/brief", lang)}>{t.action}<ArrowRight size={21} /></a>
            <a className="secondary" href="#web-cases">{t.casesTitle}<ArrowRight size={21} /></a>
          </div>
        </div>
        <figure className="mobile-service-hero-visual">
          <Image src={underbpm} alt={t.cases[0].alt} priority sizes="(max-width: 920px) 100vw, 54vw" />
          <figcaption>UNDERBPM</figcaption>
        </figure>
      </header>
      <section className="mobile-service-section mobile-service-build">
        <h2>{t.buildTitle}</h2>
        <div className="mobile-service-card-grid">{t.build.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </section>
      <section id="web-cases" aria-labelledby="web-cases-title">
        <div className="web-cases-heading"><h2 id="web-cases-title">{t.casesTitle}</h2></div>
        {t.cases.map((item, index) => (
          <article className="mobile-hidy-spotlight" key={item.slug}>
            <div className="mobile-hidy-copy">
              <p className="kicker">{item.name}</p><h3>{item.name}</h3><p>{item.text}</p>
              <a className="primary" href={localizedHref(`/portfolio/${item.slug}`, lang)}>{t.work}<ArrowRight size={21} /></a>
            </div>
            <figure><Image src={index === 0 ? underbpm : joolpay} alt={item.alt} sizes="(max-width: 920px) 100vw, 52vw" /></figure>
          </article>
        ))}
      </section>
      <section className="mobile-service-process">
        <h2>{t.processTitle}</h2>
        <ol>{t.steps.map((step, index) => <li key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol>
      </section>
      <section className="mobile-service-team"><h2>{t.teamTitle}</h2><div><p>{t.team}</p></div></section>
      <section className="mobile-service-faq"><header><h2>{t.faqTitle}</h2></header><div>{t.faq.map((item) => <details key={item.question}><summary><strong>{item.question}</strong></summary><p>{item.answer}</p></details>)}</div></section>
      <section className="mobile-service-cta"><h2>{t.cta}</h2><a className="primary" href={localizedHref("/brief", lang)}>{t.action}<ArrowRight size={22} /></a></section>
      <SiteFooter lang={lang} />
    </main>
  );
}
