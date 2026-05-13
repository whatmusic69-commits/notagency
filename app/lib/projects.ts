import type { Lang } from "./language";

export type Project = {
  name: string;
  type: string;
  url: string;
  color: string;
  summary: Record<Lang, string>;
  details: Record<Lang, string>;
  tags: string[];
};

export const projects: Project[] = [
  {
    name: "UNDERBPM",
    type: "Beats marketplace",
    url: "https://underbpm.com/",
    color: "var(--cyan)",
    summary: {
      ru: "Платформа для покупки и продажи битов, которую мы спроектировали и собрали с нуля.",
      lv: "Bītu pirkšanas un pārdošanas platforma, kuru izdomājām un uzbūvējām no nulles.",
      en: "A beats marketplace designed and built from scratch.",
    },
    details: {
      ru: "Клиент пришел без уникальной идеи. Мы придумали платежную механику, связку сайта с YouTube и workflow, где материал сразу готовится к рекламе и публикации.",
      lv: "Klients atnāca bez unikālas idejas. Mēs izdomājām maksājumu loģiku, saikni starp lapu un YouTube, un workflow, kur materiāls uzreiz gatavs reklāmai un publicēšanai.",
      en: "The client came without a unique angle. We shaped the payment logic, the bridge between the site and YouTube, and a workflow where content is ready for promotion and publishing.",
    },
    tags: ["Marketplace", "Payments", "YouTube bridge"],
  },
  {
    name: "HIDY",
    type: "Mobile game",
    url: "https://apps.apple.com/lv/app/hidy/id6757705595",
    color: "var(--pink)",
    summary: {
      ru: "Мобильная игра, которую мы полностью придумали, сделали и провели через App Store.",
      lv: "Mobilā spēle, kuru pilnībā izdomājām, izstrādājām un izvedām cauri App Store procesam.",
      en: "A mobile game we created, built and shipped through the App Store process.",
    },
    details: {
      ru: "Собрали идею, механику, платные режимы для монетизации, помогли с загрузкой в App Store и адаптировали проект под Android.",
      lv: "Izveidojām ideju, spēles mehāniku, maksas režīmus monetizācijai, palīdzējām ar App Store publicēšanu un pielāgojām projektu Android.",
      en: "We shaped the concept, gameplay, paid modes for monetization, App Store submission and Android adaptation.",
    },
    tags: ["Game design", "Subscriptions", "App Store"],
  },
  {
    name: "ISOLOGIC",
    type: "Company website",
    url: "https://www.isologic.lv/",
    color: "var(--lime)",
    summary: {
      ru: "Сайт-визитка для компании, которая помогает бизнесам с ISO и соответствием стандартам.",
      lv: "Vizītkartes lapa uzņēmumam, kas palīdz biznesiem ar ISO un atbilstības procesiem.",
      en: "A company website for an ISO and compliance support business.",
    },
    details: {
      ru: "У клиента был только примерный набросок. Мы придумали остальную структуру, подняли сайт, все настроили и сделали удобную админку для поддержки.",
      lv: "Klientam bija tikai aptuvens virziens. Mēs izdomājām struktūru, palaidām lapu, visu sakārtojām un izveidojām ērtu admin paneli uzturēšanai.",
      en: "The client had a rough direction. We shaped the structure, launched the site, configured everything and built a practical admin panel for support.",
    },
    tags: ["Website", "Admin panel", "Launch"],
  },
];
