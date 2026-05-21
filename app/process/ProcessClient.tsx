"use client";

import { useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  Flame,
  Globe2,
  MousePointerClick,
  Rocket,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { type Lang, storeLang } from "../lib/language";

const copy = {
  en: {
    kicker: "NotAgency / Process",
    title: "No magic. Just pressure, taste and shipping.",
    text:
      "We do not disappear after the first invoice. We build in public enough for you to stay calm and private enough for the work to stay sharp.",
    back: "Back home",
    brief: "Start brief",
    brutal: "If every decision needs ten approvals, the launch will drown before it starts.",
    steps: [
      ["01", "Damage scan", "We find what is broken: offer, structure, visuals, tech, trust. No polite lies."],
      ["02", "Sharp concept", "One direction, strong enough to sell. Not fifty beige options and a funeral moodboard."],
      ["03", "Design system", "Screens, states, motion, components. The site starts acting like a product."],
      ["04", "Build sprint", "Next.js, integrations, forms, analytics, deploy. Pretty is useless if it is dead."],
      ["05", "Launch and clean up", "Domain live, bugs hunted, metrics wired, next iteration already obvious."],
    ],
    cards: [
      ["Fast feedback", "You see progress before panic starts."],
      ["Clear ownership", "One team owns the mess until it becomes order."],
      ["Real launch", "Not just a Figma mockup. A working website."],
    ],
  },
  ru: {
    kicker: "NotAgency / Процесс",
    title: "Без магии. Давление, вкус и запуск.",
    text:
      "Мы не пропадаем после первого счета. Показываем прогресс достаточно часто, чтобы тебе было спокойно, и держим фокус достаточно жестко, чтобы работа не расползлась.",
    back: "На главную",
    brief: "Заполнить бриф",
    brutal: "Если каждое решение согласуют десять человек, запуск утонет до старта.",
    steps: [
      ["01", "Скан ущерба", "Находим, что сломано: оффер, структура, визуал, техника, доверие. Без вежливой лжи."],
      ["02", "Жесткая концепция", "Один внятный вектор, который может продавать. Не пятьдесят бежевых вариантов."],
      ["03", "Дизайн-система", "Экраны, состояния, motion, компоненты. Сайт начинает вести себя как продукт."],
      ["04", "Спринт разработки", "Next.js, интеграции, формы, аналитика, deploy. Красота бесполезна, если сайт мертвый."],
      ["05", "Запуск и зачистка", "Домен поднят, баги пойманы, метрики подключены, следующая итерация уже понятна."],
    ],
    cards: [
      ["Быстрый фидбек", "Ты видишь прогресс до того, как начинается паника."],
      ["Четкая ответственность", "Одна команда держит хаос, пока он не станет порядком."],
      ["Реальный запуск", "Не просто макет в Figma. Рабочий сайт."],
    ],
  },
  lv: {
    kicker: "NotAgency / Process",
    title: "Bez maģijas. Spiediens, gaume un palaišana.",
    text:
      "Mēs nepazūdam pēc pirmā rēķina. Tu redzi progresu pietiekami bieži, lai būtu miers, un mēs turam fokusu pietiekami stingri, lai darbs neizjuktu.",
    back: "Uz sākumu",
    brief: "Sākt briefu",
    brutal: "Ja katru lēmumu apstiprina desmit cilvēki, palaišana noslīks pirms starta.",
    steps: [
      ["01", "Bojājumu skenēšana", "Atrodam, kas nestrādā: piedāvājums, struktūra, vizuālais, tehnika, uzticība."],
      ["02", "Ass koncepts", "Viens skaidrs virziens, kas spēj pārdot. Ne piecdesmit bēši varianti."],
      ["03", "Dizaina sistēma", "Ekrāni, stāvokļi, motion, komponentes. Lapa sāk uzvesties kā produkts."],
      ["04", "Izstrādes sprints", "Next.js, integrācijas, formas, analītika, deploy. Skaisti ir bezjēdzīgi, ja viss ir miris."],
      ["05", "Palaišana un tīrīšana", "Domēns dzīvs, kļūdas noķertas, metrikas pieslēgtas, nākamais solis skaidrs."],
    ],
    cards: [
      ["Ātrs feedback", "Tu redzi progresu pirms sākas panika."],
      ["Skaidra atbildība", "Viena komanda tur haosu, līdz tas kļūst par kārtību."],
      ["Īsta palaišana", "Ne tikai Figma makets. Strādājoša lapa."],
    ],
  },
};

const icons = [MousePointerClick, Sparkles, ShieldCheck, Zap, Rocket];

type ProcessClientProps = {
  initialLang: Lang;
};

export default function ProcessClient({ initialLang }: ProcessClientProps) {
  const [lang, setLang] = useState<Lang>(initialLang);
  const t = copy[lang];
  const changeLang = (nextLang: Lang) => {
    storeLang(nextLang);
    setLang(nextLang);
  };

  return (
    <main className={`process-shell lang-${lang}`}>
      <div className="noise" />
      <SiteHeader
        className="process-topbar"
        lang={lang}
        onLangChange={changeLang}
      />

      <section className="process-hero">
        <div className="process-copy">
          <p className="kicker">
            <Flame size={16} />
            {t.kicker}
          </p>
          <h1>{t.title}</h1>
          <p>{t.text}</p>
          <div className="hero-actions">
            <a className="secondary" href="/#home">
              <ArrowLeft size={20} />
              {t.back}
            </a>
            <a className="primary" href="/brief">
              {t.brief}
              <Rocket size={20} />
            </a>
          </div>
        </div>

        <div className="process-machine" aria-hidden="true">
          <div className="machine-ring" />
          <div className="machine-core">
            <Globe2 size={54} />
            <span>ORDER</span>
          </div>
          <div className="machine-chip chip-one">brief</div>
          <div className="machine-chip chip-two">design</div>
          <div className="machine-chip chip-three">deploy</div>
        </div>
      </section>

      <section className="process-warning">
        <Zap size={30} />
        <h2>{t.brutal}</h2>
      </section>

      <section className="process-timeline">
        {t.steps.map(([number, title, text], index) => {
          const Icon = icons[index];

          return (
            <article className="process-step" key={number}>
              <div className="step-number">{number}</div>
              <div className="step-icon">
                <Icon size={28} />
              </div>
              <div>
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
            </article>
          );
        })}
      </section>

      <section className="process-cards">
        {t.cards.map(([title, text]) => (
          <article className="process-card" key={title}>
            <CheckCircle2 size={28} />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>
      <SiteFooter lang={lang} />
    </main>
  );
}
