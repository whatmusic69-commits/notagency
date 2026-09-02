import { ArrowRight } from "lucide-react";
import type { CaseStudyCopy } from "../../lib/hidy-case-study";

export function CaseStudyMeta({ items }: { items: CaseStudyCopy["meta"] }) {
  return (
    <dl className="case-meta">
      {items.map((item) => (
        <div key={item.label}>
          <dt>{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function ResultHighlight({ result }: { result: CaseStudyCopy["result"] }) {
  return (
    <section className="case-result-highlight" aria-labelledby="hidy-result-highlight">
      <div className="case-result-number" aria-hidden="true">{result.mark}</div>
      <div>
        <h2 id="hidy-result-highlight">{result.label}</h2>
        <p>{result.text}</p>
      </div>
    </section>
  );
}

export function CaseStudyNarrative({ section, tone }: { section: CaseStudyCopy["problem"]; tone: "light" | "acid" }) {
  return (
    <article className={`case-narrative case-narrative-${tone}`}>
      <h2>{section.title}</h2>
      <div>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
    </article>
  );
}

export function FeatureGrid({ title, features }: { title: string; features: CaseStudyCopy["features"] }) {
  return (
    <section className="case-section case-built" aria-labelledby="hidy-built-title">
      <h2 id="hidy-built-title">{title}</h2>
      <div className="case-feature-grid">
        {features.map((feature, index) => (
          <article key={feature.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function CaseStudyProcess({ title, steps }: { title: string; steps: CaseStudyCopy["process"] }) {
  return (
    <section className="case-section case-process" aria-labelledby="hidy-process-title">
      <h2 id="hidy-process-title">{title}</h2>
      <ol>
        {steps.map((step, index) => (
          <li key={step.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function CaseStudyCTA({ copy }: { copy: CaseStudyCopy["cta"] }) {
  return (
    <section className="case-cta">
      <h2>{copy.title}</h2>
      <p>{copy.text}</p>
      <a className="primary" href="/brief">
        {copy.action}
        <ArrowRight size={22} />
      </a>
    </section>
  );
}
