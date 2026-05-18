"use client";

import { useState } from "react";
import { ArrowLeft, ExternalLink, FolderKanban } from "lucide-react";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { type Lang, storeLang } from "../lib/language";
import { projects } from "../lib/projects";

const copy = {
  en: {
    kicker: "Portfolio / Real work",
    title: "Projects that shipped.",
    text:
      "A growing archive of websites, apps, marketplaces and product work we shaped from rough context into something usable.",
    back: "Back home",
    projectLink: "Open project",
  },
  ru: {
    kicker: "Портфолио / Реальная работа",
    title: "Проекты, которые вышли.",
    text:
      "Растущий архив сайтов, приложений, marketplaces и продуктовой работы, которую мы превращали из сырого контекста в рабочий результат.",
    back: "На главную",
    projectLink: "Открыть проект",
  },
  lv: {
    kicker: "Portfolio / Īsts darbs",
    title: "Projekti, kas palaisti.",
    text:
      "Augošs arhīvs ar lapām, aplikācijām, marketplace un produktu darbu, ko no aptuvena konteksta pārvērtām strādājošā rezultātā.",
    back: "Uz sākumu",
    projectLink: "Atvērt projektu",
  },
};

type PortfolioClientProps = {
  initialLang: Lang;
};

export default function PortfolioClient({ initialLang }: PortfolioClientProps) {
  const [lang, setLang] = useState<Lang>(initialLang);
  const t = copy[lang];

  const changeLang = (nextLang: Lang) => {
    storeLang(nextLang);
    setLang(nextLang);
  };

  return (
    <main className={`portfolio-shell lang-${lang}`}>
      <div className="noise" />
      <SiteHeader lang={lang} onLangChange={changeLang} />

      <section className="portfolio-hero">
        <p className="kicker">
          <FolderKanban size={16} />
          {t.kicker}
        </p>
        <h1>{t.title}</h1>
        <p>{t.text}</p>
        <a className="secondary" href="/#home">
          <ArrowLeft size={20} />
          {t.back}
        </a>
      </section>

      <section className="portfolio-list">
        <div className="project-rail portfolio-project-rail">
          {projects.map((project, index) => (
            <article
              className="project-card"
              key={project.name}
              style={{ "--accent": project.color } as React.CSSProperties}
            >
              <span className="project-index">0{index + 1}</span>
              <h3>{project.name}</h3>
              <p className="project-type">{project.type}</p>
              <p className="project-summary">{project.summary[lang]}</p>
              <p className="project-details">{project.details[lang]}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a
                className="project-link"
                href={project.url}
                rel="noreferrer"
                target="_blank"
              >
                {t.projectLink}
                <ExternalLink size={16} />
              </a>
              <div className="project-screen">
                <div />
                <div />
                <div />
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter lang={lang} />
    </main>
  );
}
