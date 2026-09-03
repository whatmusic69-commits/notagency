import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Lang } from "../lib/language";

const proofCopy = {
  en: {
    label: "Proof",
    headline: ["Okay.", "Prove it."],
    description: "We don't sell promises. Here's what's already live.",
    shipped: "Shipped products",
    platforms: "iOS / Android / Web",
    production: "Live in production",
    appStore: "App Store",
    hidyContext: "HIDY / first month",
    projectsTitle: "Shipped by us",
    portfolioAction: "View all portfolio projects",
    industries: "Fintech / SaaS / Marketplaces / Games / Digital systems",
  },
  ru: {
    label: "Доказательства",
    headline: ["Ладно.", "Докажите."],
    description: "Мы не продаём обещания. Вот что уже реально запущено.",
    shipped: "Запущенных продуктов",
    platforms: "iOS / Android / Веб",
    production: "Работают в продакшене",
    appStore: "App Store",
    hidyContext: "HIDY / первый месяц",
    projectsTitle: "Запущено нами",
    portfolioAction: "Смотреть всё портфолио",
    industries: "Финтех / SaaS / Маркетплейсы / Игры / Цифровые системы",
  },
  lv: {
    label: "Pierādījumi",
    headline: ["Labi.", "Pierādiet."],
    description: "Mēs nepārdodam solījumus. Lūk, kas jau ir palaists.",
    shipped: "Palaisti produkti",
    platforms: "iOS / Android / Tīmeklis",
    production: "Darbojas produkcijas vidē",
    appStore: "App Store",
    hidyContext: "HIDY / pirmais mēnesis",
    projectsTitle: "Mūsu palaistie projekti",
    portfolioAction: "Skatīt visu portfolio",
    industries: "Fintech / SaaS / Tirgus platformas / Spēles / Digitālās sistēmas",
  },
} satisfies Record<Lang, {
  label: string;
  headline: [string, string];
  description: string;
  shipped: string;
  platforms: string;
  production: string;
  appStore: string;
  hidyContext: string;
  projectsTitle: string;
  portfolioAction: string;
  industries: string;
}>;

const selectedProjects = [
  { name: "JOOLPAY", slug: "joolpay" },
  { name: "UNDERBPM", slug: "underbpm" },
  { name: "HIDY", slug: "hidy" },
  { name: "ISOLOGIC", slug: "isologic" },
  { name: "COINER HERO", slug: "coiner-hero" },
];

export function ProofSection({ lang }: { lang: Lang }) {
  const t = proofCopy[lang];

  return (
    <section className="proof-section" aria-labelledby="proof-title">
      <header className="proof-heading">
        <p className="kicker">{t.label}</p>
        <h2 id="proof-title">
          <span>{t.headline[0]}</span>
          <span>{t.headline[1]}</span>
        </h2>
        <p>{t.description}</p>
      </header>

      <div className="proof-grid">
        <a className="proof-rank" href="/portfolio/hidy">
          <span className="proof-confetti" aria-hidden="true">
            {Array.from({ length: 40 }, (_, index) => <i key={index} />)}
          </span>
          <span className="proof-number" aria-label="#4">
            <span aria-hidden="true">#</span>
            <span aria-hidden="true">4</span>
          </span>
          <strong>{t.appStore}</strong>
          <small>{t.hidyContext}</small>
          <ArrowUpRight aria-hidden="true" size={30} />
        </a>

        <div className="proof-facts">
          <article className="proof-fact proof-fact-shipped">
            <strong>6</strong>
            <span>{t.shipped}</span>
          </article>
          <article className="proof-fact proof-fact-platforms">
            <strong>{t.platforms}</strong>
          </article>
          <article className="proof-fact proof-fact-live">
            <span className="proof-live-dot" aria-hidden="true" />
            <strong>{t.production}</strong>
          </article>
        </div>
      </div>

      <div className="proof-projects">
        <h3>{t.projectsTitle}</h3>
        <nav aria-label={t.projectsTitle}>
          {selectedProjects.map((project, index) => (
            <a href={`/portfolio/${project.slug}`} key={project.slug}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{project.name}</strong>
              <ArrowUpRight aria-hidden="true" size={22} />
            </a>
          ))}
          <a
            className="proof-projects-all"
            href="/portfolio"
            aria-label={t.portfolioAction}
            title={t.portfolioAction}
          >
            <ArrowRight aria-hidden="true" size={42} strokeWidth={3} />
          </a>
        </nav>
      </div>

      <div className="proof-industries" aria-label={t.industries}>
        <span>{t.industries}</span>
      </div>
    </section>
  );
}
