import { AnimatedFAQItem } from "./AnimatedFAQItem";
import type { Lang } from "../../lib/language";
import { localizedHref } from "../../lib/language";
import { ArrowRight } from "lucide-react";
import type { MobileAppDevelopmentCopy } from "../../lib/mobile-app-development";

export function ServiceProof({ copy, lang }: { lang: Lang; copy: MobileAppDevelopmentCopy["proof"] }) {
  return (
    <section className="mobile-service-proof" aria-labelledby="mobile-proof-title">
      <a className="mobile-proof-rank" href={localizedHref("/portfolio/hidy", lang)}>
        <span className="mobile-proof-number"><span>#</span><span>4</span></span>
        <strong id="mobile-proof-title">{copy.appStore}</strong>
        <small>{copy.context}</small>
        <ArrowRight aria-hidden="true" size={28} />
      </a>
      <div className="mobile-proof-facts">
        <strong>{copy.platforms}</strong>
        <strong className="mobile-proof-path">
          {copy.path.split(" → ").map((step, index) => (
            <span key={step}>
              {index > 0 && <ArrowRight size={16} aria-hidden="true" />}
              {step}
            </span>
          ))}
        </strong>
        <strong>{copy.live}</strong>
      </div>
      <p>{copy.text}</p>
    </section>
  );
}

export function ServiceCards({
  className,
  copy,
}: {
  className: string;
  copy: MobileAppDevelopmentCopy["build"] | MobileAppDevelopmentCopy["capabilities"];
}) {
  const splitTitle = "title" in copy && Array.isArray(copy.title) ? copy.title : null;

  return (
    <section className={`mobile-service-section ${className}`}>
      <p className="kicker">{copy.label}</p>
      {splitTitle ? (
        <h2>{splitTitle.map((line) => <span key={line}>{line}</span>)}</h2>
      ) : (
        <h2>{copy.title as string}</h2>
      )}
      <div className="mobile-service-card-grid">
        {copy.items.map((item, index) => (
          <article key={item.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ServiceProcess({ copy, lang }: { lang: Lang; copy: MobileAppDevelopmentCopy["process"] }) {
  return (
    <section className="mobile-service-process" aria-labelledby="mobile-process-title">
      <p className="kicker">{copy.label}</p>
      <h2 id="mobile-process-title">{copy.title}</h2>
      <ol>
        {copy.steps.map((step, index) => (
          <li key={step.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
      <a className="secondary" href={localizedHref("/process", lang)}>
        {copy.action}
        <ArrowRight size={20} />
      </a>
    </section>
  );
}

export function ServiceFAQ({ copy }: { copy: MobileAppDevelopmentCopy["faq"] }) {
  return (
    <section className="mobile-service-faq" aria-labelledby="mobile-faq-title">
      <header>
        <p className="kicker">{copy.label}</p>
        <h2 id="mobile-faq-title">{copy.title}</h2>
      </header>
      <div>
        {copy.items.map((item, index) => (
          <AnimatedFAQItem
            key={item.question}
            question={item.question}
            answer={item.answer}
            number={String(index + 1).padStart(2, "0")}
          />
        ))}
      </div>
    </section>
  );
}

export function ServiceCTA({ copy, lang }: { lang: Lang; copy: MobileAppDevelopmentCopy["cta"] }) {
  return (
    <section className="mobile-service-cta">
      <h2>{copy.title.map((line) => <span key={line}>{line}</span>)}</h2>
      <p>{copy.text}</p>
      <a className="primary" href={localizedHref("/brief", lang)}>
        {copy.action}
        <ArrowRight size={22} />
      </a>
    </section>
  );
}
