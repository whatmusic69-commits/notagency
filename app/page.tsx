"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeEuro,
  Check,
  ChevronRight,
  Code2,
  Cpu,
  ExternalLink,
  LayoutDashboard,
  Palette,
  Rocket,
  Sparkles,
  TimerReset,
  X,
} from "lucide-react";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { type Lang, readStoredLang, storeLang } from "./lib/language";
import { projects } from "./lib/projects";

type WelcomeStage = "hidden" | "broken" | "repairing";

const launchDate = new Date("2026-06-01T12:00:00+03:00").getTime();

function getLaunchCountdown() {
  const distance = Math.max(0, launchDate - Date.now());
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  return [days, hours, minutes, seconds]
    .map((unit) => String(unit).padStart(2, "0"))
    .join(" : ");
}

const copy = {
  ru: {
    nav: ["Что делаем", "Портфолио", "Процесс", "Заявка"],
    fix: "FIX THAT SHIT",
    lang: "RU",
    glitchTitle: "404. Такой сайт ты получишь у дешевых фрилансеров.",
    glitchText:
      "Кривые блоки, мертвые кнопки, логотип в PNG и фраза «почти готово» три недели подряд.",
    normalTitle: "У нас есть идея, как должен выглядеть интернет.",
    normalText:
      "Снаружи дерзко. Внутри четкий бизнес: стратегия, дизайн, разработка, запуск и нормальная коммуникация.",
    cta: "Заполнить бриф",
    secondary: "Смотреть работы",
    counterLabel: "До запуска клиентского домена",
    budget: "Если бюджет 200€ — закрой сайт. Мы не для тебя.",
    budgetSub: "Устройся на вторую работу или приходи, когда захочешь результат, а не картинку.",
    servicesTitle: "Что мы делаем",
    servicesSub: "Хаос — это рынок. Мы в нем — порядок.",
    portfolioTitle: "Портфолио без скучных кейсов",
    portfolioAll: "Все проекты",
    projectLink: "Смотреть проект",
    fitTitle: "Кому мы подходим",
    fitSub:
      "Мы не продаем спокойствие людям, которые сами не верят в свой проект. Мы входим туда, где есть амбиция, бюджет и готовность принимать решения.",
    goodFit: "Работаем с",
    badFit: "Не работаем с",
    fitGood: [
      "Фаундерами и владельцами, которые уверены в продукте и хотят сильный digital-образ.",
      "Командами, которым нужен сайт, приложение или MVP с нормальной логикой, а не картинка для галочки.",
      "Бизнесами, готовыми к быстрым решениям, честному фидбеку и запуску без театра согласований.",
    ],
    fitBad: [
      "Проектами без уверенности, позиции и понимания, зачем вообще нужен сайт.",
      "Бюджетами из серии «сделайте все красиво за 200 EUR».",
      "Запросами на шаблонный WordPress, конструкторный мусор и сайты, которые должны просто существовать.",
    ],
    processHomeTitle: "Процесс без тумана",
    processHomeSub:
      "Сначала разбираем ущерб, потом собираем направление, дизайн, разработку и запуск без театра согласований.",
    processHomeCta: "Смотреть весь процесс",
    processHomeSteps: [
      "Сканируем оффер, структуру и визуальный хаос.",
      "Собираем сильную концепцию и рабочие экраны.",
      "Доводим до deploy, аналитики, форм и реального запуска.",
    ],
    aboutTitle: "NotAgency — не витрина, а цех.",
    about:
      "Мы собираем сайты и приложения, которые выглядят громко, продают спокойно и не разваливаются после первого обновления.",
    formTitle: "Чего надо?",
    formSub: "Выбери формат. Персонаж сайта двигается вместе с твоими решениями.",
    send: "Отправить заявку",
    name: "Кто ты?",
    email: "Куда писать?",
    idea: "Что строим?",
    budgetField: "Бюджет",
    namePlaceholder: "CEO, фаундер, владелец хаоса",
    ideaPlaceholder:
      "Сайт, который продает. Приложение, за которое не стыдно. Запуск вчера.",
    services: [
      {
        title: "Сайты",
        text: "Лендинги, корпоративные, промо и контентные сайты с понятной логикой конверсии.",
      },
      {
        title: "Приложения",
        text: "Дашборды, SaaS-инструменты, клиентские кабинеты и MVP, которые могут вырасти дальше демо.",
      },
      {
        title: "Brand UI",
        text: "Визуальные системы, motion-направление, компоненты и экраны, которые запоминают.",
      },
      {
        title: "Запуск",
        text: "Домен, deploy, аналитика, формы, интеграции и launch-баннер, который не выглядит мертвым.",
      },
    ],
    options: ["Лендинг", "Web app", "E-commerce", "Бренд + сайт"],
  },
  lv: {
    nav: ["Pakalpojumi", "Portfolio", "Process", "Pieteikums"],
    fix: "SALABOT ŠO",
    lang: "LV",
    glitchTitle: "404. Tā izskatīsies tava lapa pie lētiem freelanceriem.",
    glitchText:
      "Šķībi bloki, mirušas pogas, PNG logo un frāze 'gandrīz gatavs' trīs nedēļas pēc kārtas.",
    normalTitle: "Mums ir ideja, kā internetam ir jāizskatās.",
    normalText:
      "Ārpusē drosmīgi. Iekšpusē skaidrs bizness: stratēģija, dizains, izstrāde, palaišana un normāla komunikācija.",
    cta: "Aizpildīt briefu",
    secondary: "Skatīt darbus",
    counterLabel: "Līdz klienta domēna startam",
    budget: "Ja budžets ir 200€ — aizver lapu. Mēs neesam tev.",
    budgetSub: "Atnāc, kad gribi rezultātu, nevis tikai bildīti.",
    servicesTitle: "Ko mēs darām",
    servicesSub: "Tirgus ir haoss. Mēs tajā esam kārtība.",
    portfolioTitle: "Portfolio bez garlaicīgiem keisiem",
    portfolioAll: "Visi projekti",
    projectLink: "Skatīt projektu",
    fitTitle: "Kam mēs deram",
    fitSub:
      "Mēs nepārdodam mierinājumu cilvēkiem, kuri paši netic savam projektam. Mēs ejam tur, kur ir ambīcija, budžets un gatavība pieņemt lēmumus.",
    goodFit: "Strādājam ar",
    badFit: "Nestrādājam ar",
    fitGood: [
      "Founderiem un īpašniekiem, kuri tic produktam un grib spēcīgu digital tēlu.",
      "Komandām, kurām vajag lapu, aplikāciju vai MVP ar skaidru loģiku, nevis bildīti ķeksītim.",
      "Biznesiem, kas gatavi ātriem lēmumiem, godīgam feedback un palaišanai bez apstiprināšanas teātra.",
    ],
    fitBad: [
      "Projektiem bez pārliecības, pozīcijas un saprašanas, kāpēc vispār vajag lapu.",
      "Budžetiem no sērijas 'uztaisiet visu skaisti par 200 EUR'.",
      "Šabloniskiem WordPress, konstruktoru atkritumiem un lapām, kurām vienkārši jāeksistē.",
    ],
    processHomeTitle: "Process bez miglas",
    processHomeSub:
      "Vispirms atrodam bojājumus, tad saliekam virzienu, dizainu, izstrādi un palaišanu bez apstiprināšanas teātra.",
    processHomeCta: "Skatīt visu procesu",
    processHomeSteps: [
      "Skenējam piedāvājumu, struktūru un vizuālo haosu.",
      "Saliekam spēcīgu konceptu un strādājošus ekrānus.",
      "Aizvedam līdz deploy, analītikai, formām un īstai palaišanai.",
    ],
    aboutTitle: "NotAgency nav vitrīna, tā ir darbnīca.",
    about:
      "Mēs būvējam mājaslapas un aplikācijas, kas izskatās skaļi, pārdod mierīgi un nesabrūk pēc pirmā update.",
    formTitle: "Ko vajag?",
    formSub: "Izvēlies formātu. Lapas tēls kustas kopā ar tavām izvēlēm.",
    send: "Nosūtīt pieteikumu",
    name: "Kas tu esi?",
    email: "Kur rakstīt?",
    idea: "Ko būvējam?",
    budgetField: "Budžets",
    namePlaceholder: "CEO, founderis, haosa īpašnieks",
    ideaPlaceholder:
      "Lapa, kas pārdod. Aplikācija, par kuru nav kauns. Palaišana bija vajadzīga vakar.",
    services: [
      {
        title: "Mājaslapas",
        text: "Landing, korporatīvās, promo un satura lapas ar skaidru konversijas loģiku.",
      },
      {
        title: "Aplikācijas",
        text: "Dashboardi, SaaS rīki, klientu portāli un MVP, kas var izaugt tālāk par demo.",
      },
      {
        title: "Brand UI",
        text: "Vizuālās sistēmas, motion virziens, komponentes un ekrāni, kurus atceras.",
      },
      {
        title: "Palaišana",
        text: "Domēns, deploy, analītika, formas, integrācijas un launch baneris, kas neizskatās miris.",
      },
    ],
    options: ["Landing", "Web app", "E-commerce", "Zīmols + lapa"],
  },
  en: {
    nav: ["Work", "Portfolio", "Process", "Brief"],
    fix: "FIX THAT SHIT",
    lang: "EN",
    glitchTitle: "404. This is your site if cheap freelancers build it.",
    glitchText:
      "Broken layouts, dead buttons, a PNG logo and 'almost done' repeated for three weeks.",
    normalTitle: "We have an idea of what the internet should look like.",
    normalText:
      "Loud outside. Clean business inside: strategy, design, development, launch and actual communication.",
    cta: "Fill the brief",
    secondary: "View work",
    counterLabel: "Until the client domain goes live",
    budget: "If your budget is 200€ — close the site. We are not for you.",
    budgetSub: "Come back when you want a result, not a screenshot.",
    servicesTitle: "What we build",
    servicesSub: "The market is chaos. We are the order inside it.",
    portfolioTitle: "Portfolio without sleepy case studies",
    portfolioAll: "All projects",
    projectLink: "View project",
    fitTitle: "Who we are for",
    fitSub:
      "We do not sell comfort to people who do not believe in their own project. We enter when there is ambition, budget and a willingness to decide.",
    goodFit: "We work with",
    badFit: "We do not work with",
    fitGood: [
      "Founders and owners who believe in the product and want a sharp digital presence.",
      "Teams that need a website, app or MVP with clear logic, not a pretty checkbox.",
      "Businesses ready for fast decisions, honest feedback and a launch without approval theater.",
    ],
    fitBad: [
      "Projects with no confidence, no position and no clear reason for the site to exist.",
      "Budgets that expect everything to be beautiful for 200 EUR.",
      "Template WordPress jobs, builder junk and websites that are only meant to sit there.",
    ],
    processHomeTitle: "Process without fog",
    processHomeSub:
      "We scan the damage, shape the direction, design, build and launch without turning decisions into theater.",
    processHomeCta: "View full process",
    processHomeSteps: [
      "Scan the offer, structure and visual chaos.",
      "Shape a sharp concept and usable screens.",
      "Ship deploy, analytics, forms and the real launch.",
    ],
    aboutTitle: "NotAgency is not a showroom. It is a workshop.",
    about:
      "We build sites and apps that look loud, sell calmly and do not fall apart after the first update.",
    formTitle: "What do you need?",
    formSub: "Pick the shape. The site character moves with your choices.",
    send: "Send request",
    name: "Who are you?",
    email: "Where do we write?",
    idea: "What are we building?",
    budgetField: "Budget",
    namePlaceholder: "CEO, founder, chaos owner",
    ideaPlaceholder:
      "A site that sells. An app that does not embarrass us. A launch page yesterday.",
    services: [
      {
        title: "Websites",
        text: "Landing, corporate, promo and content-heavy sites with clear conversion logic.",
      },
      {
        title: "Apps",
        text: "Dashboards, SaaS tools, client portals and MVPs that can grow past the demo.",
      },
      {
        title: "Brand UI",
        text: "Visual systems, motion direction, components and the screens people remember.",
      },
      {
        title: "Launch",
        text: "Domain, deploy, analytics, forms, integrations and a launch banner that does not look dead.",
      },
    ],
    options: ["Landing", "Web app", "E-commerce", "Brand + site"],
  },
};

const serviceIcons = [LayoutDashboard, Cpu, Palette, Rocket];

const budgets = ["< 1k", "1k-3k", "3k-8k", "8k+"];
const initialCountdown = "00 : 00 : 00 : 00";
const welcomeShownAtKey = "notagency-welcome-shown-at";
const welcomeCooldownMs = 7 * 24 * 60 * 60 * 1000;

export default function Home() {
  const [welcomeStage, setWelcomeStage] = useState<WelcomeStage>("hidden");
  const [lang, setLang] = useState<Lang>("en");
  const [languageOpen, setLanguageOpen] = useState(false);
  const [countdown, setCountdown] = useState(initialCountdown);
  const [choice, setChoice] = useState(1);
  const [budget, setBudget] = useState(2);
  const t = copy[lang];

  useEffect(() => {
    setLang(readStoredLang());
  }, []);

  const changeLang = (nextLang: Lang) => {
    storeLang(nextLang);
    setLang(nextLang);
  };

  useEffect(() => {
    let welcomeTimer: number | undefined;

    const openHashTarget = () => {
      const targetId = window.location.hash.slice(1);

      if (!targetId) {
        return;
      }

      setWelcomeStage("hidden");
      window.requestAnimationFrame(() => {
        document.getElementById(targetId)?.scrollIntoView({ block: "start" });
      });
    };

    openHashTarget();
    window.addEventListener("hashchange", openHashTarget);

    if (!window.location.hash) {
      const lastShownAt = Number(
        window.localStorage.getItem(welcomeShownAtKey) ?? 0,
      );
      const shouldShowWelcome = Date.now() - lastShownAt > welcomeCooldownMs;

      if (shouldShowWelcome) {
        welcomeTimer = window.setTimeout(() => {
          window.localStorage.setItem(welcomeShownAtKey, String(Date.now()));
          setWelcomeStage("broken");
        }, 2000);
      }
    }

    return () => {
      window.removeEventListener("hashchange", openHashTarget);
      if (welcomeTimer) {
        window.clearTimeout(welcomeTimer);
      }
    };
  }, []);

  useEffect(() => {
    if (welcomeStage !== "repairing") {
      return;
    }

    const repairTimer = window.setTimeout(() => {
      setWelcomeStage("hidden");
    }, 2400);

    return () => window.clearTimeout(repairTimer);
  }, [welcomeStage]);

  useEffect(() => {
    setCountdown(getLaunchCountdown());

    const countdownTimer = window.setInterval(() => {
      setCountdown(getLaunchCountdown());
    }, 1000);

    return () => window.clearInterval(countdownTimer);
  }, []);

  const characterStyle = useMemo(
    () => ({
      transform: `translate(${choice * 22 - budget * 8}px, ${budget * 8 - choice * 5}px) rotate(${choice * 5 - budget * 3}deg)`,
    }),
    [choice, budget],
  );

  return (
    <main className={`site-shell is-fixed lang-${lang}`}>
      <div className="noise" />
      {welcomeStage !== "hidden" ? (
        <div
          className="welcome-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="NotAgency welcome repair"
        >
          <div className="welcome-window">
            <div className="welcome-window-bar">
              <div className="welcome-window-lights" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <strong>notagency.damage.report</strong>
            </div>
            {welcomeStage === "broken" ? (
              <section className="error-stage" aria-label="Broken cheap website preview">
              <div className={`welcome-language ${languageOpen ? "open" : ""}`}>
                <button
                  className="language-trigger active"
                  onClick={() => setLanguageOpen((open) => !open)}
                  type="button"
                  aria-expanded={languageOpen}
                  aria-label="Change language"
                >
                  {lang.toUpperCase()}
                </button>
                <div className="language-menu">
                  {(["en", "ru", "lv"] as Lang[]).map((item) => (
                    <button
                      className={item === lang ? "active" : ""}
                      key={item}
                      onClick={() => {
                        changeLang(item);
                        setLanguageOpen(false);
                      }}
                      type="button"
                    >
                      {item.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
              <div className="broken-nav">
                <span />
                <span />
                <span />
              </div>
              <div className="error-grid">
                <div className="glitch-copy">
                  <p className="kicker">NOTAGENCY / DAMAGE REPORT</p>
                  <h1 data-text="404">404</h1>
                  <h2>{t.glitchTitle}</h2>
                  <p>{t.glitchText}</p>
                  <button
                    className="panic-button"
                    onClick={() => setWelcomeStage("repairing")}
                    type="button"
                  >
                    <TimerReset size={20} />
                    {t.fix}
                  </button>
                </div>
                <div className="broken-browser" aria-hidden="true">
                  <div className="crash-card card-a">header_final_final_v7</div>
                  <div className="crash-card card-b">button?</div>
                  <div className="crash-card card-c">logo.png</div>
                  <div className="crash-card card-d">mobile later</div>
                  <div className="dead-cursor">×</div>
                </div>
              </div>
              </section>
            ) : (
              <section className="repair-stage" aria-label="NotAgency repair sequence">
              <div className="repair-panel">
                <div className="repair-browser">
                  <div className="repair-topbar">
                    <span />
                    <span />
                    <span />
                    <strong>notagency.fix</strong>
                  </div>
                  <div className="repair-grid">
                    <div className="repair-block repair-hero" />
                    <div className="repair-block repair-card one" />
                    <div className="repair-block repair-card two" />
                    <div className="repair-block repair-card three" />
                    <div className="repair-mascot">
                      <span className="eye left" />
                      <span className="eye right" />
                      <span className="mouth" />
                    </div>
                  </div>
                  <div className="scan-line" />
                </div>
                <div className="repair-copy">
                  <p className="kicker">NOTAGENCY / LIVE REPAIR</p>
                  <h2>Fixing cheap damage</h2>
                  <div className="repair-steps">
                    <span>killing template</span>
                    <span>aligning chaos</span>
                    <span>shipping taste</span>
                  </div>
                  <div className="repair-progress">
                    <span />
                  </div>
                </div>
              </div>
              </section>
            )}
          </div>
        </div>
      ) : null}

      <div className={`site-content ${welcomeStage !== "hidden" ? "is-blurred" : ""}`}>
        <SiteHeader className="" lang={lang} onLangChange={changeLang} />

          <section className="hero" id="home">
            <div className="hero-art" aria-hidden="true">
              <div className="planet planet-one" />
              <div className="planet planet-two" />
              <div className="mascot">
                <span className="eye left" />
                <span className="eye right" />
                <span className="mouth" />
              </div>
            </div>
            <div className="hero-copy">
              <p className="kicker">
                <Sparkles size={16} />
                websites, apps, controlled chaos
              </p>
              <h1>{t.normalTitle}</h1>
              <p>{t.normalText}</p>
              <div className="hero-actions">
                <a className="primary" href="/brief">
                  {t.cta}
                  <ArrowRight size={20} />
                </a>
                <a className="secondary" href="#portfolio">
                  {t.secondary}
                </a>
              </div>
            </div>
          </section>

          <section className="launch-strip">
            <div>
              <p>{t.counterLabel}</p>
              <strong>{countdown}</strong>
            </div>
            <div className="ticker">
              <div className="ticker-track">
                <div className="ticker-group">
                  <span>DOMAIN UP</span>
                  <span>DESIGN MOVING</span>
                  <span>CODE BREATHING</span>
                  <span>CLIENT NOT IGNORED</span>
                </div>
                <div className="ticker-group" aria-hidden="true">
                  <span>DOMAIN UP</span>
                  <span>DESIGN MOVING</span>
                  <span>CODE BREATHING</span>
                  <span>CLIENT NOT IGNORED</span>
                </div>
              </div>
            </div>
          </section>

          <section className="budget-banner">
            <BadgeEuro size={34} />
            <div>
              <h2>{t.budget}</h2>
              <p>{t.budgetSub}</p>
            </div>
          </section>

          <section className="section" id="work">
            <div className="section-head">
              <p className="kicker">SYSTEM / CHAOS</p>
              <h2>{t.servicesTitle}</h2>
              <p>{t.servicesSub}</p>
            </div>
            <div className="service-grid">
              {t.services.map((service, index) => {
                const Icon = serviceIcons[index];
                return (
                  <article className="service-card" key={service.title}>
                    <Icon size={28} />
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                    <ChevronRight size={22} />
                  </article>
                );
              })}
            </div>
          </section>

          <section className="portfolio" id="portfolio">
            <div className="section-head">
              <p className="kicker">LOUD BUT USEFUL</p>
              <h2>{t.portfolioTitle}</h2>
            </div>
            <div className="project-rail">
              {projects.slice(0, 3).map((project, index) => (
                <article className="project-card" key={project.name} style={{ "--accent": project.color } as React.CSSProperties}>
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
                  <a className="project-link" href={project.url} rel="noreferrer" target="_blank">
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
            <a className="portfolio-more" href="/portfolio">
              {t.portfolioAll}
              <ArrowRight size={22} />
            </a>
          </section>

          <section className="fit-check">
            <div className="section-head">
              <p className="kicker">FILTER / NO MYSTERY</p>
              <h2>{t.fitTitle}</h2>
              <p>{t.fitSub}</p>
            </div>
            <div className="fit-grid">
              <article className="fit-card good">
                <h3>{t.goodFit}</h3>
                <ul>
                  {t.fitGood.map((item) => (
                    <li key={item}>
                      <Check size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
              <article className="fit-card bad">
                <h3>{t.badFit}</h3>
                <ul>
                  {t.fitBad.map((item) => (
                    <li key={item}>
                      <X size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </section>

          <section className="home-process" id="process">
            <div className="home-process-copy">
              <p className="kicker">
                <Rocket size={16} />
                NOTAGENCY / PROCESS
              </p>
              <h2>{t.processHomeTitle}</h2>
              <p>{t.processHomeSub}</p>
              <a className="primary" href="/process">
                {t.processHomeCta}
                <ArrowRight size={20} />
              </a>
            </div>
            <div className="home-process-stack">
              {t.processHomeSteps.map((item, index) => (
                <article className="home-process-step" key={item}>
                  <span>0{index + 1}</span>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="about" id="about">
            <Code2 size={36} />
            <h2>{t.aboutTitle}</h2>
            <p>{t.about}</p>
            <div className="about-tags">
              <span>Strategy</span>
              <span>Motion</span>
              <span>Next.js</span>
              <span>Deploy</span>
              <span>Analytics</span>
            </div>
          </section>

          <section className="brief" id="brief">
            <div className="brief-copy">
              <h2>{t.formTitle}</h2>
              <p>{t.formSub}</p>
              <div className="brief-mascot" style={characterStyle}>
                <span className="eye left" />
                <span className="eye right" />
                <span className="mouth" />
              </div>
            </div>
            <form className="brief-form">
              <label>
                {t.name}
                <input placeholder={t.namePlaceholder} />
              </label>
              <label>
                {t.email}
                <input placeholder="you@company.com" type="email" />
              </label>
              <label>
                {t.idea}
                <textarea placeholder={t.ideaPlaceholder} />
              </label>
              <div className="option-group">
                {t.options.map((item, index) => (
                  <button
                    className={choice === index ? "selected" : ""}
                    key={item}
                    onClick={() => setChoice(index)}
                    type="button"
                  >
                    {choice === index && <Check size={16} />}
                    {item}
                  </button>
                ))}
              </div>
              <div className="budget-group">
                <span>{t.budgetField}</span>
                <div className="budget-options">
                  {budgets.map((item, index) => (
                    <button
                      className={budget === index ? "selected" : ""}
                      key={item}
                      onClick={() => setBudget(index)}
                      type="button"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
              <button className="submit" type="button">
                {t.send}
                <ArrowRight size={18} />
              </button>
            </form>
          </section>
          <SiteFooter lang={lang} />
      </div>
    </main>
  );
}
