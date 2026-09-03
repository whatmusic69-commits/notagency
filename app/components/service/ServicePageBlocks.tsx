import { ArrowRight } from "lucide-react";
import type { MobileAppDevelopmentCopy } from "../../lib/mobile-app-development";

export function ServiceProof({ copy }: { copy: MobileAppDevelopmentCopy["proof"] }) {
  return (
    <section className="mobile-service-proof" aria-labelledby="mobile-proof-title">
      <a className="mobile-proof-rank" href="/portfolio/hidy">
        <span className="mobile-proof-number">#4</span>
        <strong id="mobile-proof-title">{copy.appStore}</strong>
        <small>{copy.context}</small>
        <ArrowRight aria-hidden="true" size={28} />
      </a>
      <div className="mobile-proof-facts">
        <strong>{copy.platforms}</strong>
        <strong>{copy.path}</strong>
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

export function ServiceProcess({ copy }: { copy: MobileAppDevelopmentCopy["process"] }) {
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
      <a className="secondary" href="/process">
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
          <details key={item.question}>
            <summary>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item.question}</strong>
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function ServiceCTA({ copy }: { copy: MobileAppDevelopmentCopy["cta"] }) {
  return (
    <section className="mobile-service-cta">
      <h2>{copy.title.map((line) => <span key={line}>{line}</span>)}</h2>
      <p>{copy.text}</p>
      <a className="primary" href="/brief">
        {copy.action}
        <ArrowRight size={22} />
      </a>
    </section>
  );
}
