import type { StaticImageData } from "next/image";
import hidyScreenshot from "../src/hidy 1.png";
import isologicScreenshot from "../src/isologic 1.png";
import underbpmScreenshot from "../src/underbpm 1.png";
import type { Lang } from "./language";

export type Project = {
  name: string;
  type: string;
  url: string;
  color: string;
  summary: Record<Lang, string>;
  details: Record<Lang, string>;
  modalDetails?: Record<Lang, string>;
  modalImage?: StaticImageData;
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
    modalDetails: {
      ru: "Клиент пришел с идеей создать простую и удобную платформу для публикации и продажи битов. Он сам музыкант со стажем, поэтому хорошо понимал, где существующие площадки работают неудобно. Мы предложили сделать не просто витрину треков, а связать marketplace с YouTube через отдельный инструмент: он отправляет на сервер аудиофайл и обложку, конвертирует их в видео, загружает ролик на YouTube и переносит описание с сайта. Для монетизации мы выбрали современный сценарий со Stripe, чтобы артисты получали деньги за продажи напрямую, без ручных выплат владельцем платформы после подсчета комиссии.",
      lv: "Klients atnāca ar ideju izveidot vienkāršu un ērtu platformu bītu publicēšanai un pārdošanai. Viņš pats ir pieredzējis mūziķis, tāpēc labi saprata, kur esošās platformas ir neērtas. Mēs piedāvājām veidot ne tikai track vitrīnu, bet sasaistīt marketplace ar YouTube caur atsevišķu rīku: tas nosūta uz serveri audio failu un vāku, pārveido tos video, augšupielādē video YouTube un pārnes aprakstu no lapas. Monetizācijai izvēlējāmies modernu Stripe scenāriju, lai artisti par pārdošanu saņemtu naudu tieši, bez lēniem manuāliem izmaksu un komisiju aprēķiniem.",
      en: "The client came with the idea of building a simple, practical platform for publishing and selling beats. He is an experienced musician himself, so he knew exactly where existing platforms felt clumsy. We proposed more than a track storefront: we connected the marketplace to YouTube through a custom tool that sends an audio file and cover art to the server, converts them into a video, uploads it to YouTube and copies the description from the site. For monetization, we designed a modern Stripe flow so artists receive money from sales directly, without slow manual payouts after the platform owner calculates commission.",
    },
    modalImage: underbpmScreenshot,
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
    modalDetails: {
      ru: "Клиент пришел с историей из жизни: он с друзьями любит играть в прятки на машинах, но для игры им приходилось вручную отмечать зону на Google Maps и координироваться через WhatsApp. Мы предложили превратить это в полноценное приложение-игру: карта внутри продукта, живые локации игроков в лобби, выбор зоны и радиуса, разные игровые режимы и система оповещений, если игрок выходит за пределы зоны. Добавили достижения, премиум-режимы и план монетизации. Отдельно прошли с клиентом путь публикации в App Store: регистрация, сборки, ревью, правки и вся рутина, которая обычно съедает недели. Дальше проект готовится к Play Market, а для игры мы также сделали сайт-визитку с privacy policy. В первый месяц HIDY поднялась до 7 места в чартах App Store.",
      lv: "Klients atnāca ar stāstu no dzīves: viņš ar draugiem spēlē paslēpes ar mašīnām, bet līdz tam viņiem bija manuāli jāiezīmē zona Google Maps un jāsaskaņojas WhatsApp čatā. Mēs piedāvājām to pārvērst pilnvērtīgā spēles aplikācijā: karte pašā produktā, dzīvas spēlētāju lokācijas lobby, zonas un rādiusa izvēle, dažādi spēles režīmi un paziņojumi, ja spēlētājs izbrauc ārpus zonas. Pievienojām achievements, premium režīmus un monetizācijas plānu. Atsevišķi kopā ar klientu izgājām App Store publicēšanas procesu: reģistrāciju, buildus, review, labojumus un visu rutīnu, kas parasti apēd nedēļas. Tālāk projekts tiek gatavots Play Market, un spēlei izveidojām arī vizītkartes lapu ar privacy policy. Pirmajā mēnesī HIDY App Store čartos pacēlās līdz 7. vietai.",
      en: "The client came with a real-life story: he and his friends play hide-and-seek with cars, but they had to mark the play zone manually in Google Maps and coordinate everything through a WhatsApp chat. We proposed turning that habit into a full mobile game: an in-app map, live player locations in the lobby, zone and radius selection, different game modes and alerts when a player leaves the allowed area. We added achievements, premium modes and a monetization plan. We also went through the App Store release process with the client: registration, builds, reviews, fixes and all the slow routine that usually eats weeks. Next, the project is being prepared for Play Market, and we also built a landing site with a privacy policy for the game. In its first month, HIDY reached #7 in the App Store charts.",
    },
    modalImage: hidyScreenshot,
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
    modalDetails: {
      ru: "Самый спокойный кейс в нашем портфолио. Клиент пришел с идеей, видением и даже примером того, что хотел видеть, а такое мы ценим. Мы сделали чистый, спокойный и удобный сайт для компании, которая занимается ISO и compliance-процессами. Провели проект от начала до конца: подняли домен, настроили контактную форму, создали удобную админку для редактирования контента и связали ее с автодеплоем на живой сайт после правок текстов. Полностью настроили работу админки и публичного сайта, а также подготовили SEO-оптимизацию под современные стандарты.",
      lv: "Mierīgākais case mūsu portfolio. Klients atnāca ar ideju, vīziju un pat piemēru tam, ko grib redzēt, un mēs to ļoti novērtējam. Mēs izveidojām tīru, mierīgu un ērtu mājaslapu uzņēmumam, kas strādā ar ISO un compliance procesiem. Izvedām projektu no sākuma līdz beigām: pacēlām domēnu, sakārtojām kontaktformu, izveidojām ērtu admin paneli satura labošanai un pieslēdzām autodeploy uz dzīvo lapu pēc teksta izmaiņām. Pilnībā sakārtojām admin paneļa un publiskās lapas darbu, kā arī sagatavojām SEO optimizāciju pēc mūsdienu standartiem.",
      en: "The calmest case in our portfolio. The client came with an idea, a clear vision and even a reference for what they wanted to see, which we value. We built a clean, calm and practical website for a company working with ISO and compliance processes. We carried the project from start to finish: set up the domain, configured the contact form, created a convenient admin panel for editing site content and connected it to autodeploy so text changes go live. We fully configured the admin workflow and public website, then prepared SEO optimization according to modern standards.",
    },
    modalImage: isologicScreenshot,
    tags: ["Website", "Admin panel", "Launch"],
  },
];
