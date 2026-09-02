import type { CaseStudyCopy } from "./hidy-case-study";
import type { Lang } from "./language";

export const underbpmCaseStudyCopy: Record<Lang, CaseStudyCopy> = {
  en: {
    kicker: "Portfolio / Beats marketplace / UNDERBPM",
    headline: "From a beat storefront to a connected creator system.",
    description: "A beats marketplace designed and built from scratch — with direct artist payments, subscriptions, creator tools and an automated bridge from audio upload to YouTube publishing.",
    imageAlt: "UNDERBPM marketplace interface showing top beatmakers and trending beats available for purchase.",
    imageCaption: "The marketplace brings beat discovery, creator profiles and sales into one dark, focused product.",
    meta: [
      { label: "Type", value: "Beats marketplace" },
      { label: "Platform", value: "Web" },
      { label: "Work", value: "Product / UX / Development / Integrations" },
      { label: "Systems", value: "Stripe / YouTube / Subscriptions" },
    ],
    result: { mark: "→YT", label: "Audio to YouTube", text: "A custom tool turns an audio file and cover into video, publishes it to YouTube and carries the marketplace description with it." },
    problem: {
      title: "The problem",
      paragraphs: [
        "The client wanted a practical platform for publishing and selling beats. As an experienced musician, he knew where existing marketplaces felt clumsy, but the product still needed a sharper reason to exist.",
        "A simple track catalogue would not be enough. Publishing, promotion, payments and creator tools were still fragmented across separate workflows.",
      ],
    },
    solution: {
      title: "The solution",
      paragraphs: [
        "We shaped UNDERBPM as more than a storefront: a marketplace connected to YouTube through a custom publishing tool, with direct Stripe payments and new systems for artists.",
        "The product later expanded with plagiarism search, a monthly subscription and a direct-order flow built around a 50% prepayment and the remaining 50% after delivery.",
      ],
    },
    flowTitle: "Publishing flow",
    flow: ["Upload audio", "Add cover", "Build video", "Publish to YouTube", "Sell on UNDERBPM"],
    builtTitle: "What we built",
    features: [
      { title: "Beat marketplace", text: "A product for discovering, publishing and selling beats through creator profiles and listings." },
      { title: "YouTube bridge", text: "Marketplace content moves into a creator's YouTube publishing workflow through one custom tool." },
      { title: "Video conversion", text: "The server combines an audio file and cover art into a video ready for publishing." },
      { title: "Stripe payments", text: "Artists receive sales money directly without manual payouts after commission calculations." },
      { title: "Plagiarism search", text: "A dedicated search tool gives artists another way to check and protect their work." },
      { title: "Subscriptions + orders", text: "Monthly access and a 50/50 direct-order payment flow support additional product models." },
    ],
    processTitle: "From marketplace to system",
    process: [
      { title: "Product", text: "Defined a stronger product angle around real creator workflows." },
      { title: "UX", text: "Shaped marketplace, publishing, payments and ordering flows." },
      { title: "Build", text: "Developed the interface and the server-side creator tools." },
      { title: "Connect", text: "Integrated Stripe payments and automated YouTube publishing." },
      { title: "Expand", text: "Added subscriptions, plagiarism search and direct orders." },
    ],
    techTitle: "Under the hood",
    systems: ["Stripe", "YouTube publishing", "Audio processing", "Video conversion", "Subscriptions", "Direct payments", "Marketplace tools"],
    resultSection: {
      title: "The result",
      paragraphs: [
        "UNDERBPM grew from a straightforward beat marketplace into a connected product for discovery, publishing, promotion and payments.",
        "Artists can sell through Stripe, publish audio and artwork as YouTube video, use subscription tools and manage direct orders through one product ecosystem.",
      ],
    },
    cta: { title: "Have a product that needs more than a storefront?", text: "Tell us what should work behind the interface.", action: "Start a project" },
  },
  ru: {
    kicker: "Портфолио / Платформа битов / UNDERBPM",
    headline: "От витрины битов к связанной системе для артистов.",
    description: "Платформа для продажи битов, спроектированная и разработанная с нуля — с прямыми выплатами артистам, подписками, инструментами для авторов и автоматическим путём от загрузки аудио до публикации на YouTube.",
    imageAlt: "Интерфейс UNDERBPM с топом битмейкеров и популярными битами, доступными для покупки.",
    imageCaption: "Marketplace объединяет поиск битов, профили авторов и продажи в одном сфокусированном продукте.",
    meta: [
      { label: "Тип", value: "Платформа битов" },
      { label: "Платформа", value: "Веб" },
      { label: "Работа", value: "Продукт / UX / Разработка / Интеграции" },
      { label: "Системы", value: "Stripe / YouTube / Подписки" },
    ],
    result: { mark: "→YT", label: "От аудио до YouTube", text: "Специальный инструмент превращает аудиофайл и обложку в видео, публикует его на YouTube и переносит описание с платформы." },
    problem: {
      title: "Задача",
      paragraphs: [
        "Клиент хотел создать удобную платформу для публикации и продажи битов. Как опытный музыкант, он понимал слабые места существующих площадок, но продукту всё ещё требовалась более сильная причина существовать.",
        "Обычной витрины треков было недостаточно. Публикация, продвижение, платежи и инструменты артистов оставались разрозненными процессами.",
      ],
    },
    solution: {
      title: "Решение",
      paragraphs: [
        "Мы превратили UNDERBPM в нечто большее, чем витрина: платформу со своим инструментом публикации на YouTube, прямыми платежами через Stripe и новыми системами для артистов.",
        "Позже продукт дополнили поиском плагиата, ежемесячной подпиской и прямыми заказами с 50% предоплатой и оставшимися 50% после получения результата.",
      ],
    },
    flowTitle: "Путь публикации",
    flow: ["Загрузить аудио", "Добавить обложку", "Собрать видео", "Опубликовать на YouTube", "Продавать в UNDERBPM"],
    builtTitle: "Что мы разработали",
    features: [
      { title: "Платформа битов", text: "Продукт для поиска, публикации и продажи битов через каталог и профили авторов." },
      { title: "Связка с YouTube", text: "Контент с платформы попадает в канал автора через один специальный инструмент." },
      { title: "Конвертация видео", text: "Сервер соединяет аудиофайл и обложку в готовое к публикации видео." },
      { title: "Платежи Stripe", text: "Артисты получают деньги напрямую без ручных выплат после расчёта комиссии." },
      { title: "Поиск плагиата", text: "Отдельный инструмент помогает артистам проверять и защищать свою работу." },
      { title: "Подписки + заказы", text: "Ежемесячный доступ и схема прямого заказа 50/50 поддерживают дополнительные модели продукта." },
    ],
    processTitle: "От платформы к системе",
    process: [
      { title: "Продукт", text: "Нашли более сильную позицию вокруг реальных процессов артистов." },
      { title: "UX", text: "Собрали сценарии каталога, публикации, платежей и заказов." },
      { title: "Разработка", text: "Создали интерфейс и серверные инструменты для авторов." },
      { title: "Интеграции", text: "Подключили Stripe и автоматическую публикацию на YouTube." },
      { title: "Развитие", text: "Добавили подписки, поиск плагиата и прямые заказы." },
    ],
    techTitle: "Под капотом",
    systems: ["Stripe", "Публикация на YouTube", "Обработка аудио", "Конвертация видео", "Подписки", "Прямые платежи", "Инструменты платформы"],
    resultSection: {
      title: "Результат",
      paragraphs: [
        "UNDERBPM вырос из обычной витрины битов в связанный продукт для поиска, публикации, продвижения и платежей.",
        "Артисты могут продавать через Stripe, публиковать аудио и обложки как YouTube-видео, использовать подписные инструменты и работать с прямыми заказами внутри одной экосистемы.",
      ],
    },
    cta: { title: "Нужен продукт, а не просто витрина?", text: "Расскажите, что должно работать за интерфейсом.", action: "Обсудить проект" },
  },
  lv: {
    kicker: "Portfolio / Bītu platforma / UNDERBPM",
    headline: "No bītu vitrīnas līdz savienotai sistēmai artistiem.",
    description: "No nulles projektēta un izstrādāta bītu platforma — ar tiešiem maksājumiem artistiem, abonementiem, autoru rīkiem un automatizētu ceļu no audio augšupielādes līdz YouTube publikācijai.",
    imageAlt: "UNDERBPM interfeiss ar labākajiem bītmeikeriem un populāriem bītiem, kas pieejami iegādei.",
    imageCaption: "Marketplace apvieno bītu atrašanu, autoru profilus un pārdošanu vienā fokusētā produktā.",
    meta: [
      { label: "Tips", value: "Bītu platforma" },
      { label: "Platforma", value: "Tīmeklis" },
      { label: "Darbs", value: "Produkts / UX / Izstrāde / Integrācijas" },
      { label: "Sistēmas", value: "Stripe / YouTube / Abonementi" },
    ],
    result: { mark: "→YT", label: "No audio līdz YouTube", text: "Īpašs rīks pārvērš audio failu un vāku video, publicē to YouTube un pārnes platformas aprakstu." },
    problem: {
      title: "Uzdevums",
      paragraphs: [
        "Klients vēlējās izveidot ērtu platformu bītu publicēšanai un pārdošanai. Kā pieredzējis mūziķis viņš zināja esošo platformu trūkumus, taču produktam vēl bija vajadzīgs spēcīgāks pastāvēšanas iemesls.",
        "Ar vienkāršu track vitrīnu nepietika. Publicēšana, popularizēšana, maksājumi un artistu rīki joprojām bija sadrumstaloti procesi.",
      ],
    },
    solution: {
      title: "Risinājums",
      paragraphs: [
        "Mēs izveidojām UNDERBPM par ko vairāk nekā vitrīnu: platformu ar īpašu YouTube publicēšanas rīku, tiešiem Stripe maksājumiem un jaunām sistēmām artistiem.",
        "Vēlāk produktu papildināja plaģiāta meklēšana, ikmēneša abonements un tiešo pasūtījumu plūsma ar 50% priekšapmaksu un atlikušajiem 50% pēc rezultāta saņemšanas.",
      ],
    },
    flowTitle: "Publicēšanas plūsma",
    flow: ["Augšupielādēt audio", "Pievienot vāku", "Izveidot video", "Publicēt YouTube", "Pārdot UNDERBPM"],
    builtTitle: "Ko mēs izstrādājām",
    features: [
      { title: "Bītu platforma", text: "Produkts bītu atrašanai, publicēšanai un pārdošanai ar katalogu un autoru profiliem." },
      { title: "YouTube saikne", text: "Platformas saturs nonāk autora YouTube plūsmā caur vienu īpašu rīku." },
      { title: "Video konvertēšana", text: "Serveris apvieno audio failu un vāku publicēšanai gatavā video." },
      { title: "Stripe maksājumi", text: "Artisti saņem naudu tieši bez manuālām izmaksām pēc komisijas aprēķina." },
      { title: "Plaģiāta meklēšana", text: "Atsevišķs rīks palīdz artistiem pārbaudīt un aizsargāt savu darbu." },
      { title: "Abonementi + pasūtījumi", text: "Ikmēneša pieeja un 50/50 tiešo pasūtījumu plūsma atbalsta papildu produkta modeļus." },
    ],
    processTitle: "No platformas līdz sistēmai",
    process: [
      { title: "Produkts", text: "Atradām spēcīgāku virzienu reāliem artistu procesiem." },
      { title: "UX", text: "Izveidojām kataloga, publicēšanas, maksājumu un pasūtījumu plūsmas." },
      { title: "Izstrāde", text: "Uzbūvējām interfeisu un servera rīkus autoriem." },
      { title: "Integrācijas", text: "Pieslēdzām Stripe un automatizētu YouTube publicēšanu." },
      { title: "Attīstība", text: "Pievienojām abonementus, plaģiāta meklēšanu un tiešos pasūtījumus." },
    ],
    techTitle: "Tehniskā puse",
    systems: ["Stripe", "YouTube publicēšana", "Audio apstrāde", "Video konvertēšana", "Abonementi", "Tiešie maksājumi", "Marketplace rīki"],
    resultSection: {
      title: "Rezultāts",
      paragraphs: [
        "UNDERBPM no vienkāršas bītu vitrīnas kļuva par savienotu produktu atrašanai, publicēšanai, popularizēšanai un maksājumiem.",
        "Artisti var pārdot ar Stripe, publicēt audio un vāku kā YouTube video, izmantot abonēšanas rīkus un apstrādāt tiešos pasūtījumus vienā ekosistēmā.",
      ],
    },
    cta: { title: "Vajag produktu, ne tikai vitrīnu?", text: "Pastāstiet, kam jādarbojas aiz interfeisa.", action: "Sākt projektu" },
  },
};
