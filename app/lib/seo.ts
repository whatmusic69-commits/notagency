import type { Lang } from "./language";
import { getProjectBySlug } from "./projects";

export type SeoPageKey =
  | "home"
  | "about"
  | "brief"
  | "contacts"
  | "faq"
  | "portfolio"
  | "privacy"
  | "process"
  | "terms";

export type SeoEntry = {
  description: string;
  keywords: string[];
  title: string;
};

export const seoBaseUrl = "https://notagency.io";

export const seoPaths: Record<SeoPageKey, string> = {
  home: "/",
  about: "/about",
  brief: "/brief",
  contacts: "/contacts",
  faq: "/faq",
  portfolio: "/portfolio",
  privacy: "/privacy",
  process: "/process",
  terms: "/terms",
};

const commonKeywords: Record<Lang, string[]> = {
  en: [
    "NotAgency",
    "web agency Riga",
    "website design",
    "web app development",
    "Next.js agency",
    "MVP development",
    "digital studio Latvia",
  ],
  ru: [
    "NotAgency",
    "веб студия Рига",
    "разработка сайтов",
    "дизайн сайтов",
    "разработка приложений",
    "создание MVP",
    "digital студия Латвия",
  ],
  lv: [
    "NotAgency",
    "web aģentūra Rīga",
    "mājaslapu izstrāde",
    "web aplikāciju izstrāde",
    "Next.js aģentūra",
    "MVP izstrāde",
    "digitālā studija Latvijā",
  ],
};

export const seoCopy: Record<SeoPageKey, Record<Lang, SeoEntry>> = {
  home: {
    en: {
      title: "NotAgency - Websites, Apps and Digital Systems",
      description:
        "NotAgency builds sharp websites, web apps, MVPs and digital systems for founders and businesses that are ready to launch properly.",
      keywords: ["websites", "web apps", "digital systems", "launch pages"],
    },
    ru: {
      title: "NotAgency - сайты, приложения и digital-системы",
      description:
        "NotAgency делает сильные сайты, web apps, MVP и digital-системы для бизнесов, которые готовы нормально запускаться.",
      keywords: ["сайты", "web apps", "digital системы", "лендинги"],
    },
    lv: {
      title: "NotAgency - mājaslapas, aplikācijas un digital sistēmas",
      description:
        "NotAgency būvē asas mājaslapas, web app, MVP un digital sistēmas uzņēmumiem, kas gatavi normālai palaišanai.",
      keywords: ["mājaslapas", "web app", "digital sistēmas", "landing lapas"],
    },
  },
  about: {
    en: {
      title: "About NotAgency",
      description:
        "NotAgency is an independent web and app studio run by two developers who design, build and launch digital products directly with clients.",
      keywords: ["about NotAgency", "digital studio", "web studio Riga"],
    },
    ru: {
      title: "О NotAgency",
      description:
        "NotAgency — независимая web и app студия из двух разработчиков, которые напрямую с клиентами проектируют и запускают digital-продукты.",
      keywords: ["о NotAgency", "digital студия", "веб студия Рига"],
    },
    lv: {
      title: "Par NotAgency",
      description:
        "NotAgency ir neatkarīga web un lietotņu studija, ko veido divi izstrādātāji, kuri kopā ar klientiem projektē un palaiž digitālus produktus.",
      keywords: ["par NotAgency", "digital studija", "web studija Rīga"],
    },
  },
  brief: {
    en: {
      title: "Project Brief",
      description:
        "Send NotAgency project context: site, app, MVP, launch page, budget range, deadline and decision-maker.",
      keywords: ["project brief", "website brief", "app brief", "MVP request"],
    },
    ru: {
      title: "Бриф проекта",
      description:
        "Отправь NotAgency контекст проекта: сайт, приложение, MVP, launch page, бюджет, сроки и кто принимает решения.",
      keywords: ["бриф проекта", "бриф сайта", "заявка на сайт", "заявка на MVP"],
    },
    lv: {
      title: "Projekta briefs",
      description:
        "Atsūti NotAgency projekta kontekstu: mājaslapa, aplikācija, MVP, launch lapa, budžets, termiņš un lēmumu pieņēmējs.",
      keywords: ["projekta briefs", "mājaslapas pieteikums", "MVP pieteikums"],
    },
  },
  contacts: {
    en: {
      title: "Contact NotAgency",
      description:
        "Contact NotAgency in Riga or remote. Send context, budget range and deadline for a serious website, app or MVP.",
      keywords: ["contact NotAgency", "web agency contact", "Riga web studio"],
    },
    ru: {
      title: "Контакты NotAgency",
      description:
        "Свяжись с NotAgency в Риге или удаленно. Пришли контекст, бюджет и дедлайн для сайта, приложения или MVP.",
      keywords: ["контакты NotAgency", "веб студия контакты", "сайт Рига"],
    },
    lv: {
      title: "NotAgency kontakti",
      description:
        "Sazinies ar NotAgency Rīgā vai attālināti. Atsūti kontekstu, budžetu un termiņu mājaslapai, aplikācijai vai MVP.",
      keywords: ["NotAgency kontakti", "web studija kontakti", "mājaslapa Rīga"],
    },
  },
  faq: {
    en: {
      title: "FAQ",
      description:
        "Answers about NotAgency services, budgets, launch timelines, process, copywriting, support and fixing existing sites.",
      keywords: ["web agency FAQ", "website cost", "launch timeline"],
    },
    ru: {
      title: "FAQ",
      description:
        "Ответы о сервисах NotAgency, бюджетах, сроках запуска, процессе, текстах, поддержке и переделке старых сайтов.",
      keywords: ["FAQ веб студии", "стоимость сайта", "сроки запуска сайта"],
    },
    lv: {
      title: "FAQ",
      description:
        "Atbildes par NotAgency pakalpojumiem, budžetiem, palaišanas termiņiem, procesu, tekstiem, supportu un esošu lapu labošanu.",
      keywords: ["web studijas FAQ", "mājaslapas cena", "palaišanas termiņi"],
    },
  },
  portfolio: {
    en: {
      title: "Portfolio",
      description:
        "Explore NotAgency work for JoolPay, HIDY, Split & Merge, Coiner Hero, UNDERBPM and ISOLOGIC: websites, apps, games and digital products.",
      keywords: ["NotAgency portfolio", "web design portfolio", "app portfolio"],
    },
    ru: {
      title: "Портфолио",
      description:
        "Кейсы NotAgency для JoolPay, HIDY, Split & Merge, Coiner Hero, UNDERBPM и ISOLOGIC: сайты, приложения, игры и digital-продукты.",
      keywords: ["портфолио NotAgency", "портфолио сайтов", "портфолио приложений"],
    },
    lv: {
      title: "Portfolio",
      description:
        "NotAgency darbi JoolPay, HIDY, Split & Merge, Coiner Hero, UNDERBPM un ISOLOGIC: mājaslapas, aplikācijas, spēles un digital produkti.",
      keywords: ["NotAgency portfolio", "mājaslapu portfolio", "aplikāciju portfolio"],
    },
  },
  privacy: {
    en: {
      title: "Privacy Policy",
      description:
        "NotAgency Privacy Policy: what we collect, how we use data, service providers, retention, security and your rights.",
      keywords: ["privacy policy", "data processing", "NotAgency privacy"],
    },
    ru: {
      title: "Политика приватности",
      description:
        "Политика приватности NotAgency: какие данные собираем, как используем, сервисы, хранение, безопасность и твои права.",
      keywords: ["политика приватности", "обработка данных", "NotAgency privacy"],
    },
    lv: {
      title: "Privātuma politika",
      description:
        "NotAgency privātuma politika: kādus datus vācam, kā izmantojam, servisi, glabāšana, drošība un tavas tiesības.",
      keywords: ["privātuma politika", "datu apstrāde", "NotAgency privātums"],
    },
  },
  process: {
    en: {
      title: "Process",
      description:
        "How NotAgency works: scan the mess, shape the offer, design, build, launch and support without approval theater.",
      keywords: ["web design process", "website launch process", "MVP process"],
    },
    ru: {
      title: "Процесс",
      description:
        "Как работает NotAgency: разбираем хаос, собираем оффер, дизайн, разработку, запуск и поддержку без театра согласований.",
      keywords: ["процесс разработки сайта", "запуск сайта", "процесс MVP"],
    },
    lv: {
      title: "Process",
      description:
        "Kā strādā NotAgency: sakārtojam haosu, offeri, dizainu, izstrādi, palaišanu un supportu bez apstiprināšanas teātra.",
      keywords: ["mājaslapas izstrādes process", "lapas palaišana", "MVP process"],
    },
  },
  terms: {
    en: {
      title: "Terms",
      description:
        "NotAgency Terms: website use, project work, payments, scope, intellectual property, third-party tools, launch and liability.",
      keywords: ["terms", "NotAgency terms", "project terms"],
    },
    ru: {
      title: "Условия",
      description:
        "Условия NotAgency: использование сайта, проектная работа, платежи, scope, права, сторонние сервисы, запуск и ответственность.",
      keywords: ["условия", "условия NotAgency", "условия проекта"],
    },
    lv: {
      title: "Noteikumi",
      description:
        "NotAgency noteikumi: lapas lietošana, projektu darbs, maksājumi, scope, tiesības, trešo pušu rīki, palaišana un atbildība.",
      keywords: ["noteikumi", "NotAgency noteikumi", "projekta noteikumi"],
    },
  },
};

export function getSeoEntry(page: SeoPageKey, lang: Lang): SeoEntry {
  const entry = seoCopy[page][lang];

  return {
    ...entry,
    keywords: [...commonKeywords[lang], ...entry.keywords],
  };
}

export function getProjectSeoEntry(slug: string, lang: Lang): SeoEntry | null {
  const project = getProjectBySlug(slug);

  if (!project) {
    return null;
  }

  const titleByLang: Record<Lang, string> = {
    en: `${project.name} case study - NotAgency`,
    ru: `${project.name}: кейс проекта - NotAgency`,
    lv: `${project.name}: projekta case - NotAgency`,
  };

  return {
    title: titleByLang[lang],
    description: project.seoDescription[lang],
    keywords: [
      ...commonKeywords[lang],
      project.name,
      project.type,
      ...project.tags,
      "case study",
      "portfolio",
    ],
  };
}

export function getSeoEntryForPath(pathname: string, lang: Lang): SeoEntry {
  const projectSlug = pathname.match(/^\/portfolio\/([^/]+)\/?$/)?.[1];
  const projectSeo = projectSlug ? getProjectSeoEntry(projectSlug, lang) : null;

  if (projectSeo) {
    return projectSeo;
  }

  return getSeoEntry(getSeoPageFromPath(pathname), lang);
}

export function getSeoPageFromPath(pathname: string): SeoPageKey {
  const normalizedPath = pathname === "" ? "/" : pathname.replace(/\/$/, "") || "/";
  const match = (Object.entries(seoPaths) as Array<[SeoPageKey, string]>).find(
    ([, path]) => path === normalizedPath,
  );

  return match?.[0] ?? "home";
}
