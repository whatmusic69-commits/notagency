"use client";

import Image from "next/image";
import { type FormEvent, useEffect, useMemo, useState } from "react";
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
import { ProofSection } from "./components/ProofSection";
import {
  PortfolioHoverMascot,
  type PortfolioMascotTarget,
} from "./components/PortfolioHoverMascot";
import { type Lang, storeLang } from "./lib/language";
import { projects } from "./lib/projects";

type WelcomeStage = "hidden" | "broken" | "repairing";

function getRandomLaunchDate() {
  const minDays = 90;
  const maxDays = 420;
  const randomDays = minDays + Math.floor(Math.random() * (maxDays - minDays + 1));
  const randomHours = Math.floor(Math.random() * 24);
  const randomMinutes = Math.floor(Math.random() * 60);
  const randomSeconds = Math.floor(Math.random() * 60);

  return Date.now()
    + randomDays * 24 * 60 * 60 * 1000
    + randomHours * 60 * 60 * 1000
    + randomMinutes * 60 * 1000
    + randomSeconds * 1000;
}

function WaveText({ text }: { text: string }) {
  let letterIndex = 0;

  return (
    <span aria-label={text} className="wave-text">
      <span aria-hidden="true">
        {text.split(/(\s+)/).map((part, partIndex) => {
          if (/^\s+$/.test(part)) {
            return " ";
          }

          return (
            <span className="wave-word" key={`${part}-${partIndex}`}>
              {Array.from(part).map((letter) => (
                <span
                  className="wave-letter"
                  key={`${letter}-${letterIndex}`}
                  style={{ "--wave-index": letterIndex++ } as React.CSSProperties}
                >
                  {letter}
                </span>
              ))}
            </span>
          );
        })}
      </span>
    </span>
  );
}

function getLaunchCountdown(launchDate: number) {
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
    projectMore: "Подробнее",
    projectModalClose: "Закрыть",
    projectModalVisit: "Открыть сайт",
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
    aboutTitle: "NotAgency — не витрина, а мастерская.",
    about:
      "Мы собираем сайты и приложения, которые выглядят громко, продают спокойно и не разваливаются после первого обновления.",
    formTitle: "Чего надо?",
    formSub: "Выбери формат. О нет, он такой грустный — заставь его улыбнуться.",
    send: "Отправить заявку",
    sending: "Отправляем...",
    sent: "Заявка ушла. Ответим на почту.",
    sentMascot:
      "Ура. Наконец-то у тебя будет нормальный сайт и проект. Будем на связи, бро.",
    error: "Не получилось отправить. Напиши на hello@notagency.io.",
    name: "Кто ты?",
    email: "Куда писать?",
    idea: "Что строим?",
    budgetField: "Бюджет",
    customProject: "Свой вариант",
    customProjectPlaceholder: "Напиши тип проекта",
    namePlaceholder: "CEO, фаундер, владелец хаоса",
    ideaPlaceholder:
      "Сайт, который продает. Приложение, за которое не стыдно. Запуск вчера.",
    services: [
      {
        title: "Сайты",
        text: "Лендинги, корпоративные, промо и контентные сайты с понятной логикой конверсии.",
        detail:
          "Собираем сайт вокруг задачи бизнеса: кто должен прийти, что он должен понять и какое действие совершить. Не рисуем витрину ради витрины.",
        bullets: ["Структура и оффер", "Дизайн ключевых экранов", "Адаптивная разработка", "Формы, аналитика и запуск"],
      },
      {
        title: "Приложения",
        text: "Web apps, iOS/Android-приложения, SaaS-инструменты, клиентские кабинеты, MVP и Web3-интерфейсы.",
        detail:
          "Проектируем интерфейс и логику продукта так, чтобы MVP можно было показать, проверить и развивать без переписывания с нуля.",
        bullets: ["User flow и роли", "UI для сценариев", "Frontend-разработка", "Интеграции и рабочий MVP"],
      },
      {
        title: "Brand UI",
        text: "Визуальные системы, motion-направление, компоненты и экраны, которые запоминают.",
        detail:
          "Делаем digital-образ, который не разваливается после первого баннера: компоненты, визуальный тон, движение и правила для дальнейшей работы.",
        bullets: ["Визуальное направление", "UI-kit и компоненты", "Motion-принципы", "Экраны для продукта и маркетинга"],
      },
      {
        title: "Запуск",
        text: "Домен, deploy, аналитика, формы, интеграции и launch-баннер, который не выглядит мертвым.",
        detail:
          "Доводим проект до состояния, где он реально живет в интернете: открывается, собирает заявки, измеряется и не выглядит брошенным.",
        bullets: ["Deploy и домен", "Формы и email", "Базовая аналитика", "Проверка перед стартом"],
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
    budget: "Ja budžets ir 200€ — aizver lapu. Mēs nebūsim īstie.",
    budgetSub: "Atnāc, kad gribi rezultātu, nevis tikai bildīti.",
    servicesTitle: "Ko mēs darām",
    servicesSub: "Tirgus ir haoss. Mēs tajā esam kārtība.",
    portfolioTitle: "Portfolio bez garlaicīgiem keisiem",
    portfolioAll: "Visi projekti",
    projectLink: "Skatīt projektu",
    projectMore: "Vairāk",
    projectModalClose: "Aizvērt",
    projectModalVisit: "Atvērt lapu",
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
    formSub: "Izvēlies formātu. Ak nē, viņš ir tik skumjš — liec viņam pasmaidīt.",
    send: "Nosūtīt pieteikumu",
    sending: "Sūtām...",
    sent: "Pieteikums aizgāja. Atbildēsim uz email.",
    sentMascot:
      "Urrā. Beidzot tev būs normāla lapa un projekts. Būsim kontaktā, bro.",
    error: "Neizdevās nosūtīt. Raksti uz hello@notagency.io.",
    name: "Kas tu esi?",
    email: "Kur rakstīt?",
    idea: "Ko būvējam?",
    budgetField: "Budžets",
    customProject: "Savs variants",
    customProjectPlaceholder: "Ieraksti projekta tipu",
    namePlaceholder: "CEO, founderis, haosa īpašnieks",
    ideaPlaceholder:
      "Lapa, kas pārdod. Aplikācija, par kuru nav kauns. Palaišana bija vajadzīga vakar.",
    services: [
      {
        title: "Mājaslapas",
        text: "Landing, korporatīvās, promo un satura lapas ar skaidru konversijas loģiku.",
        detail:
          "Būvējam lapu ap biznesa uzdevumu: kam jāatnāk, kas jāsaprot un kāda darbība jāizdara. Nezīmējam vitrīnu vitrīnas pēc.",
        bullets: ["Struktūra un offeris", "Galveno ekrānu dizains", "Responsīva izstrāde", "Formas, analītika un palaišana"],
      },
      {
        title: "Aplikācijas",
        text: "Web apps, iOS/Android aplikācijas, SaaS rīki, klientu portāli, MVP un Web3 interfeisi.",
        detail:
          "Projektējam produkta loģiku un interfeisu tā, lai MVP var parādīt, pārbaudīt un attīstīt bez pārrakstīšanas no nulles.",
        bullets: ["User flow un lomas", "UI scenārijiem", "Frontend izstrāde", "Integrācijas un strādājošs MVP"],
      },
      {
        title: "Brand UI",
        text: "Vizuālās sistēmas, motion virziens, komponentes un ekrāni, kurus atceras.",
        detail:
          "Veidojam digital tēlu, kas nesabrūk pēc pirmā banera: komponentes, vizuālais tonis, kustība un noteikumi tālākai darbībai.",
        bullets: ["Vizuālais virziens", "UI-kit un komponentes", "Motion principi", "Ekrāni produktam un mārketingam"],
      },
      {
        title: "Palaišana",
        text: "Domēns, deploy, analītika, formas, integrācijas un launch baneris, kas neizskatās miris.",
        detail:
          "Aizvedam projektu līdz stāvoklim, kur tas tiešām dzīvo internetā: atveras, vāc pieteikumus, ir izmērāms un neizskatās pamests.",
        bullets: ["Deploy un domēns", "Formas un email", "Bāzes analītika", "Pārbaude pirms starta"],
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
    projectMore: "Details",
    projectModalClose: "Close",
    projectModalVisit: "Open site",
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
    formSub: "Pick the shape. Oh no, he looks so sad — make him smile.",
    send: "Send request",
    sending: "Sending...",
    sent: "Request sent. We will reply by email.",
    sentMascot:
      "Finally. You are getting a proper website and project. We will stay in touch, bro.",
    error: "Could not send. Write to hello@notagency.io.",
    name: "Who are you?",
    email: "Where do we write?",
    idea: "What are we building?",
    budgetField: "Budget",
    customProject: "Custom",
    customProjectPlaceholder: "Write the project type",
    namePlaceholder: "CEO, founder, chaos owner",
    ideaPlaceholder:
      "A site that sells. An app that does not embarrass us. A launch page yesterday.",
    services: [
      {
        title: "Websites",
        text: "Landing, corporate, promo and content-heavy sites with clear conversion logic.",
        detail:
          "We build the site around the business job: who should arrive, what they should understand and what action they should take.",
        bullets: ["Structure and offer", "Key screen design", "Responsive development", "Forms, analytics and launch"],
      },
      {
        title: "Apps",
        text: "Web apps, iOS/Android apps, SaaS tools, client portals, MVPs and Web3 interfaces.",
        detail:
          "We shape product logic and interface flows so the MVP can be shown, tested and extended without starting over.",
        bullets: ["User flows and roles", "Scenario-based UI", "Frontend development", "Integrations and working MVP"],
      },
      {
        title: "Brand UI",
        text: "Visual systems, motion direction, components and the screens people remember.",
        detail:
          "We create a digital look that survives past one banner: components, visual tone, motion rules and reusable screens.",
        bullets: ["Visual direction", "UI kit and components", "Motion principles", "Product and marketing screens"],
      },
      {
        title: "Launch",
        text: "Domain, deploy, analytics, forms, integrations and a launch banner that does not look dead.",
        detail:
          "We get the project to the point where it actually lives online: opens, collects leads, can be measured and feels alive.",
        bullets: ["Deploy and domain", "Forms and email", "Baseline analytics", "Pre-launch check"],
      },
    ],
    options: ["Landing", "Web app", "E-commerce", "Brand + site"],
  },
};

const serviceIcons = [LayoutDashboard, Cpu, Palette, Rocket];
const serviceAccents = ["var(--white)", "var(--lime)", "var(--cyan)", "var(--orange)"];

const budgets = ["< 1k", "1k-3k", "3k-8k", "8k+"];
const initialCountdown = "365 : 23 : 59 : 59";
const welcomeShownAtKey = "notagency-welcome-shown-at";
const welcomeCooldownMs = 7 * 24 * 60 * 60 * 1000;

type HomeClientProps = {
  initialLang: Lang;
};

export default function HomeClient({ initialLang }: HomeClientProps) {
  const [welcomeStage, setWelcomeStage] = useState<WelcomeStage>("hidden");
  const [lang, setLang] = useState<Lang>(initialLang);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [countdown, setCountdown] = useState(initialCountdown);
  const [choice, setChoice] = useState<number | "custom" | null>(null);
  const [budget, setBudget] = useState<number | null>(null);
  const [briefName, setBriefName] = useState("");
  const [briefEmail, setBriefEmail] = useState("");
  const [briefIdea, setBriefIdea] = useState("");
  const [customProjectType, setCustomProjectType] = useState("");
  const [briefStatus, setBriefStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);
  const [selectedServiceIndex, setSelectedServiceIndex] = useState<number | null>(null);
  const [portfolioMascotTarget, setPortfolioMascotTarget] =
    useState<PortfolioMascotTarget>({ active: false, x: 0, y: 0 });
  const t = copy[lang];
  const selectedService =
    selectedServiceIndex === null ? null : t.services[selectedServiceIndex];
  const mascotMoodClass =
    briefStatus === "sent"
      ? `is-brief-active is-brief-sent mood-${budget ?? 3}`
      : choice === null
        ? "mood-sad"
        : `is-brief-active mood-${budget ?? 0}`;

  const changeLang = (nextLang: Lang) => {
    storeLang(nextLang);
    setLang(nextLang);
  };

  const movePortfolioMascot = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const nextTarget = {
      active: true,
      x: rect.right - 22,
      y: rect.top + 18,
    };

    if (!portfolioMascotTarget.active) {
      setPortfolioMascotTarget({
        active: true,
        x: -90,
        y: nextTarget.y,
      });
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => setPortfolioMascotTarget(nextTarget));
      });
      return;
    }

    setPortfolioMascotTarget(nextTarget);
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
    const launchDate = getRandomLaunchDate();

    setCountdown(getLaunchCountdown(launchDate));

    const countdownTimer = window.setInterval(() => {
      setCountdown(getLaunchCountdown(launchDate));
    }, 1000);

    return () => window.clearInterval(countdownTimer);
  }, []);

  useEffect(() => {
    if (!selectedProject) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [selectedProject]);

  useEffect(() => {
    if (selectedServiceIndex === null) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedServiceIndex(null);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [selectedServiceIndex]);

  const characterStyle = useMemo(
    () => {
      const choiceValue = choice ?? 0;
      const numericChoice = choiceValue === "custom" ? t.options.length : choiceValue;
      const budgetValue = budget ?? 0;

      return {
        transform: `translate(${numericChoice * 22 - budgetValue * 8}px, ${budgetValue * 8 - numericChoice * 5}px) rotate(${numericChoice * 5 - budgetValue * 3}deg)`,
      };
    },
    [choice, budget, t.options.length],
  );

  const submitBrief = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBriefStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          form: "home",
          lang,
          name: briefName,
          email: briefEmail,
          idea: briefIdea,
          projectType:
            choice === "custom"
              ? customProjectType
              : choice === null
                ? ""
                : t.options[choice],
          budget: budget === null ? "" : budgets[budget],
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setBriefName("");
      setBriefEmail("");
      setBriefIdea("");
      setCustomProjectType("");
      setChoice(null);
      setBriefStatus("sent");
    } catch {
      setBriefStatus("error");
    }
  };

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

          <section className="section services-section" id="work">
            <div className="section-head">
              <p className="kicker">SYSTEM / CHAOS</p>
              <h2>{t.servicesTitle}</h2>
              <p>{t.servicesSub}</p>
            </div>
            <div className="service-grid">
              {t.services.map((service, index) => {
                const Icon = serviceIcons[index];
                return (
                  <button
                    className="service-card"
                    key={service.title}
                    onClick={() => setSelectedServiceIndex(index)}
                    type="button"
                  >
                    <Icon size={28} />
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                    <ChevronRight size={22} />
                  </button>
                );
              })}
            </div>
            {selectedService ? (
              <div className="project-modal-backdrop" role="presentation" onClick={() => setSelectedServiceIndex(null)}>
                <div
                  aria-labelledby="service-modal-title"
                  aria-modal="true"
                  className="project-modal service-modal"
                  role="dialog"
                  style={{ "--accent": serviceAccents[selectedServiceIndex ?? 0] } as React.CSSProperties}
                  onClick={(event) => event.stopPropagation()}
                >
                  <button
                    aria-label={t.projectModalClose}
                    className="project-modal-close"
                    type="button"
                    onClick={() => setSelectedServiceIndex(null)}
                  >
                    <X size={22} />
                  </button>
                  <p className="kicker">NOTAGENCY / SERVICE</p>
                  <h3 id="service-modal-title">{selectedService.title}</h3>
                  <p className="project-modal-summary">{selectedService.text}</p>
                  <p className="project-modal-details">{selectedService.detail}</p>
                  <div className="service-modal-list">
                    {selectedService.bullets.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <a className="project-modal-link" href="/brief" onClick={() => setSelectedServiceIndex(null)}>
                    {t.cta}
                    <ArrowRight size={17} />
                  </a>
                </div>
              </div>
            ) : null}
          </section>

          <ProofSection lang={lang} />

          <section className="portfolio" id="portfolio">
            <PortfolioHoverMascot target={portfolioMascotTarget} />
            <div className="section-head">
              <p className="kicker">LOUD BUT USEFUL</p>
              <h2>{t.portfolioTitle}</h2>
            </div>
            <div
              className="project-rail"
              onMouseLeave={() =>
                setPortfolioMascotTarget((target) => ({ ...target, active: false }))
              }
            >
              {projects.slice(0, 3).map((project, index) => (
                <article
                  className="project-card"
                  key={project.name}
                  onMouseEnter={movePortfolioMascot}
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
                  <a className="project-link" href={project.url} rel="noreferrer" target="_blank">
                    {t.projectLink}
                    <ExternalLink size={16} />
                  </a>
                  <a
                    className="project-more-button"
                    href={`/portfolio/${project.slug}`}
                    onClick={(event) => {
                      event.preventDefault();
                      setSelectedProject(project);
                    }}
                  >
                    {t.projectMore}
                    <ArrowRight size={16} />
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
            {selectedProject ? (
              <div className="project-modal-backdrop" role="presentation" onClick={() => setSelectedProject(null)}>
                <div
                  aria-labelledby="project-modal-title"
                  aria-modal="true"
                  className="project-modal"
                  role="dialog"
                  style={{ "--accent": selectedProject.color } as React.CSSProperties}
                  onClick={(event) => event.stopPropagation()}
                >
                  <button
                    aria-label={t.projectModalClose}
                    className="project-modal-close"
                    type="button"
                    onClick={() => setSelectedProject(null)}
                  >
                    <X size={22} />
                  </button>
                  <p className="kicker">{selectedProject.type}</p>
                  <h3 id="project-modal-title">{selectedProject.name}</h3>
                  {selectedProject.modalImage ? (
                    <Image
                      alt={selectedProject.imageAlt[lang]}
                      className="project-modal-image"
                      placeholder="blur"
                      priority
                      src={selectedProject.modalImage}
                      unoptimized
                    />
                  ) : null}
                  <p className="project-modal-summary">{selectedProject.summary[lang]}</p>
                  <p className="project-modal-details">{(selectedProject.modalDetails ?? selectedProject.details)[lang]}</p>
                  <div className="project-tags">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <a className="project-modal-link" href={selectedProject.url} rel="noreferrer" target="_blank">
                    {t.projectModalVisit}
                    <ExternalLink size={17} />
                  </a>
                </div>
              </div>
            ) : null}
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
                    <li className="wave-list-item" key={item}>
                      <Check size={18} />
                      <WaveText text={item} />
                    </li>
                  ))}
                </ul>
              </article>
              <article className="fit-card bad">
                <h3>{t.badFit}</h3>
                <ul>
                  {t.fitBad.map((item) => (
                    <li className="wave-list-item" key={item}>
                      <X size={18} />
                      <WaveText text={item} />
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
              <div
                className={`brief-mascot ${mascotMoodClass}`}
                style={characterStyle}
              >
                <span className="eye left" />
                <span className="eye right" />
                <span className="mouth" />
              </div>
              {briefStatus === "sent" ? (
                <div className="brief-mascot-bubble" role="status">
                  {t.sentMascot}
                </div>
              ) : null}
            </div>
            <form className="brief-form" onSubmit={submitBrief}>
              <label>
                {t.name}
                <input
                  onChange={(event) => setBriefName(event.target.value)}
                  placeholder={t.namePlaceholder}
                  required
                  value={briefName}
                />
              </label>
              <label>
                {t.email}
                <input
                  onChange={(event) => setBriefEmail(event.target.value)}
                  placeholder="you@company.com"
                  required
                  type="email"
                  value={briefEmail}
                />
              </label>
              <label>
                {t.idea}
                <textarea
                  onChange={(event) => setBriefIdea(event.target.value)}
                  placeholder={t.ideaPlaceholder}
                  required
                  value={briefIdea}
                />
              </label>
              <div className="option-group">
                {t.options.map((item, index) => (
                  <button
                    className={choice === index ? "selected" : ""}
                    key={item}
                    onClick={() => {
                      setChoice(index);
                    }}
                    type="button"
                  >
                    {choice === index && <Check size={16} />}
                    {item}
                  </button>
                ))}
                <button
                  className={choice === "custom" ? "selected" : ""}
                  onClick={() => setChoice("custom")}
                  type="button"
                >
                  {choice === "custom" && <Check size={16} />}
                  {t.customProject}
                </button>
              </div>
              {choice === "custom" ? (
                <input
                  className="custom-project-input"
                  onChange={(event) => setCustomProjectType(event.target.value)}
                  placeholder={t.customProjectPlaceholder}
                  required
                  value={customProjectType}
                />
              ) : null}
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
              <button className="submit" disabled={briefStatus === "sending"} type="submit">
                {briefStatus === "sending" ? t.sending : t.send}
                <ArrowRight size={18} />
              </button>
              {briefStatus !== "idle" ? (
                <p className={`form-status ${briefStatus}`} role="status">
                  {briefStatus === "sent" ? t.sent : briefStatus === "error" ? t.error : t.sending}
                </p>
              ) : null}
            </form>
          </section>
          <SiteFooter lang={lang} />
      </div>
    </main>
  );
}
