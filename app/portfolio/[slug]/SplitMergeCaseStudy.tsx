import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";
import { CaseStudyCTA, CaseStudyMeta, CaseStudyNarrative, CaseStudyProcess, FeatureGrid, ResultHighlight } from "../../components/case-study/CaseStudyBlocks";
import { localizedHref, type Lang } from "../../lib/language";
import { splitMergeCaseStudyCopy } from "../../lib/split-merge-case-study";
import { getProjectBySlug } from "../../lib/projects";
import splitMergeVisual from "../../src/split-merge-case.webp";

export default function SplitMergeCaseStudy({ initialLang: lang }: { initialLang: Lang }) {
  const t = splitMergeCaseStudyCopy[lang];
  const project = getProjectBySlug("split-merge")!;

  return (
    <main className={`split-merge-case lang-${lang}`}>
      <div className="noise" />
      <SiteHeader lang={lang} />
      <header className="case-hero">
        <p className="kicker">{t.kicker}</p>
        <div className="case-hero-name">SPLIT &amp; MERGE</div>
        <h1>{t.headline}</h1>
        <p className="case-hero-description">{project.summary[lang]}</p>
        <CaseStudyMeta items={t.meta} />
        <div className="hero-actions">
          <a className="primary" href={project.url} target="_blank" rel="noopener noreferrer">{t.store}<ArrowRight size={20} /></a>
        </div>
        <figure className="case-hero-visual">
          <Image src={splitMergeVisual} alt={project.imageAlt[lang]} priority unoptimized placeholder="blur" sizes="100vw" />
          <figcaption>{project.details[lang]}</figcaption>
        </figure>
      </header>
      <ResultHighlight result={t.result} />
      <section className="case-story-grid">
        <CaseStudyNarrative section={t.problem} tone="light" />
        <CaseStudyNarrative section={t.solution} tone="acid" />
      </section>
      <FeatureGrid title={t.builtTitle} features={t.features} />
      <CaseStudyProcess title={t.processTitle} steps={t.process} />
      <aside className="case-service-link">
        <span>SPLIT &amp; MERGE / NotAgency</span>
        <a href={localizedHref("/mobile-app-development", lang)}>{t.service}<ArrowRight size={20} /></a>
      </aside>
      <CaseStudyCTA lang={lang} copy={t.cta} />
      <SiteFooter lang={lang} />
    </main>
  );
}
