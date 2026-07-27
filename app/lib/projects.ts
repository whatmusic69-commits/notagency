import type { StaticImageData } from "next/image";
import coinerHeroScreenshot from "../src/COINER HERO.png";
import hidyScreenshot from "../src/hidy-case.jpg";
import isologicScreenshot from "../src/isologic-case.jpg";
import joolpayScreenshot from "../src/Joolpay2.png";
import splitMergeScreenshot from "../src/Split&Merge.png";
import underbpmScreenshot from "../src/underbpm-case.jpg";
import type { Lang } from "./language";

export type Project = {
  name: string;
  slug: string;
  type: string;
  url: string;
  color: string;
  summary: Record<Lang, string>;
  details: Record<Lang, string>;
  seoDescription: Record<Lang, string>;
  imageAlt: Record<Lang, string>;
  modalDetails?: Record<Lang, string>;
  modalImage?: StaticImageData;
  tags: string[];
};

export const projects: Project[] = [
  {
    name: "JOOLPAY",
    slug: "joolpay",
    type: "Cashless tips fintech",
    url: "https://joolpay.com/",
    color: "var(--lime)",
    summary: {
      ru: "Латвийский fintech для безналичных чаевых через QR-коды, где сайт, Android и iOS работают как один продукт.",
      lv: "Latvijas fintech risinājums bezskaidras naudas dzeramnaudām ar QR kodiem, kur mājaslapa, Android un iOS strādā kā viens produkts.",
      en: "A Latvian fintech product for cashless QR-code tips, with the website, Android and iOS working as one system.",
    },
    details: {
      ru: "Собрали цифровую витрину и продуктовую систему для JoolPay: QR-оплата чаевых в браузере, личные профили сотрудников, бизнес-управление, статистика, отзывы и мобильные приложения для Android и iOS.",
      lv: "Izveidojām JoolPay digitālo vitrīnu un produktu sistēmu: QR dzeramnaudas apmaksa pārlūkā, darbinieku profili, biznesa pārvaldība, statistika, atsauksmes un mobilās aplikācijas Android un iOS.",
      en: "We shaped JoolPay's digital storefront and product system: browser-based QR tip payments, staff profiles, business management, statistics, reviews and mobile apps for Android and iOS.",
    },
    seoDescription: {
      ru: "Кейс JoolPay: fintech-система безналичных чаевых через QR-коды, сайт и мобильные приложения для Android и iOS от NotAgency.",
      lv: "JoolPay case: bezskaidras naudas QR dzeramnaudu fintech sistēma, mājaslapa un Android un iOS aplikācijas no NotAgency.",
      en: "JoolPay case study: a cashless QR tipping fintech system, website and Android and iOS apps built by NotAgency.",
    },
    imageAlt: {
      ru: "Интерфейс JoolPay, fintech-сервиса для безналичных чаевых через QR-коды, разработанный NotAgency.",
      lv: "JoolPay interfeiss, fintech serviss bezskaidras naudas dzeramnaudām ar QR kodiem, ko izstrādāja NotAgency.",
      en: "JoolPay interface, a fintech service for cashless QR-code tips developed by NotAgency.",
    },
    modalDetails: {
      ru: "JoolPay — наш самый крупный кейс на данный момент. Это латвийская fintech-компания из Риги, которая делает безналичные чаевые нормальным, быстрым и понятным сценарием для ресторанов, кафе, гостиниц, курьеров, салонов красоты и других сервисных бизнесов. Логика простая: у сотрудника есть личный QR-код, клиент сканирует его обычной камерой телефона, открывает страницу оплаты в браузере и оставляет чаевые без наличных, терминала и отдельного приложения. Со стороны бизнеса это уже не просто страница оплаты, а система: сотрудники, внутренние кошельки, уведомления, вывод денег, статистика, отзывы клиентов и прозрачный учет выплат. Мы работали не с одним экраном, а с целой экосистемой JoolPay: сайтом, продуктовым интерфейсом и мобильными приложениями для Android и iOS, чтобы весь путь от первого скана QR-кода до управления деньгами ощущался как один собранный продукт.",
      lv: "JoolPay šobrīd ir mūsu lielākais case. Tā ir Latvijas fintech kompānija no Rīgas, kas padara bezskaidras naudas dzeramnaudas par normālu, ātru un saprotamu scenāriju restorāniem, kafejnīcām, viesnīcām, kurjeriem, skaistumkopšanas saloniem un citiem servisa biznesiem. Loģika ir vienkārša: darbiniekam ir personīgs QR kods, klients to noskenē ar telefona kameru, pārlūkā atver maksājuma lapu un atstāj dzeramnaudu bez skaidras naudas, termināļa un atsevišķas aplikācijas. Biznesa pusē tā vairs nav tikai maksājuma lapa, bet sistēma: darbinieki, iekšējie maki, paziņojumi, naudas izmaksa, statistika, klientu atsauksmes un caurspīdīga izmaksu uzskaite. Mēs strādājām nevis ar vienu ekrānu, bet ar visu JoolPay ekosistēmu: mājaslapu, produkta interfeisu un mobilajām aplikācijām Android un iOS, lai viss ceļš no pirmā QR skena līdz naudas pārvaldībai justos kā viens sakārtots produkts.",
      en: "JoolPay is our largest case so far. It is a Latvian fintech company from Riga that turns cashless tips into a fast, clear and normal flow for restaurants, cafes, hotels, couriers, beauty salons and other service businesses. The logic is simple: a staff member has a personal QR code, the customer scans it with the phone camera, opens a browser payment page and leaves a tip without cash, a terminal or a separate app. For the business, this is no longer just a payment page, but a system: staff management, internal wallets, notifications, withdrawals, statistics, customer reviews and transparent payout tracking. We worked not on one screen, but on the JoolPay ecosystem: the website, product interface and mobile apps for Android and iOS, so the whole path from the first QR scan to money management feels like one coherent product.",
    },
    modalImage: joolpayScreenshot,
    tags: ["Fintech", "QR payments", "Cashless tips", "Android", "iOS"],
  },
  {
    name: "SPLIT & MERGE",
    slug: "split-merge",
    type: "Mobile puzzle game",
    url: "https://apps.apple.com/lv/app/split-merge/id6763852350",
    color: "var(--orange)",
    summary: {
      ru: "Мобильная puzzle-игра в духе 2048, но с прокачкой, улучшениями и полноценным путем до App Store.",
      lv: "Mobilā puzzle spēle 2048 garā, bet ar progresu, uzlabojumiem un pilnu ceļu līdz App Store.",
      en: "A mobile puzzle game in the spirit of 2048, expanded with progression, upgrades and a full App Store launch.",
    },
    details: {
      ru: "Собрали механику split-and-merge, визуальный стиль, систему улучшений, рекламную монетизацию и полностью прошли публикацию iOS-версии в App Store.",
      lv: "Izveidojām split-and-merge mehāniku, vizuālo stilu, uzlabojumu sistēmu, reklāmu monetizāciju un pilnībā izgājām iOS publicēšanu App Store.",
      en: "We built the split-and-merge mechanic, visual style, upgrade system, ad monetization and carried the iOS version through the full App Store release.",
    },
    seoDescription: {
      ru: "Кейс Split & Merge: разработка мобильной puzzle-игры, механики, дизайна, монетизации и запуск iOS-версии в App Store.",
      lv: "Split & Merge case: mobilās puzzle spēles mehānika, dizains, monetizācija un iOS versijas palaišana App Store.",
      en: "Split & Merge case study: mobile puzzle game mechanics, design, ad monetization and an iOS launch in the App Store.",
    },
    imageAlt: {
      ru: "Интерфейс мобильной puzzle-игры Split & Merge с игровым полем, прогрессом и улучшениями, созданный NotAgency.",
      lv: "Split & Merge mobilās puzzle spēles interfeiss ar spēles laukumu, progresu un uzlabojumiem, ko izveidoja NotAgency.",
      en: "Split & Merge mobile puzzle game interface with the game board, progression and upgrades created by NotAgency.",
    },
    modalDetails: {
      ru: "Split & Merge началась как простая мобильная игра по логике, знакомой игрокам 2048, но мы не остановились на базовом объединении чисел. Мы добавили механику разделения и объединения, прокачку, улучшения и игровой ритм, который держит интерес дольше одной короткой сессии. По визуалу игра намеренно близка к характеру NotAgency: яркая, быстрая, немного наглая и без ощущения шаблонного mobile UI. Отдельно собрали рекламную монетизацию, подготовили iOS-сборку и полностью прошли путь публикации в App Store: аккаунт, настройки, билды, ревью и релиз. Android-версия уже сделана и готовится к выходу на Android-платформах в ближайшем будущем.",
      lv: "Split & Merge sākās kā vienkārša mobilā spēle ar 2048 spēlētājiem pazīstamu loģiku, bet mēs neapstājāmies pie parastas skaitļu apvienošanas. Pievienojām dalīšanas un apvienošanas mehāniku, progresu, uzlabojumus un spēles ritmu, kas notur uzmanību ilgāk par vienu īsu sesiju. Vizuāli spēle apzināti ir tuva NotAgency raksturam: spilgta, ātra, mazliet nekaunīga un bez šabloniska mobile UI sajūtas. Atsevišķi sakārtojām reklāmu monetizāciju, sagatavojām iOS buildu un pilnībā izgājām App Store publicēšanas ceļu: konts, iestatījumi, buildi, review un release. Android versija jau ir izstrādāta un tuvākajā laikā gatavojas iznākšanai Android platformās.",
      en: "Split & Merge started as a simple mobile game built around the logic players know from 2048, but we pushed it beyond basic number merging. We added split-and-merge mechanics, progression, upgrades and a game rhythm that holds attention longer than one short session. Visually, the game stays close to NotAgency's character: bright, fast, slightly aggressive and far from generic mobile UI. We also implemented ad monetization, prepared the iOS build and carried the release through the full App Store path: account setup, configuration, builds, review and launch. The Android version is already built and is being prepared for Android platforms in the near future.",
    },
    modalImage: splitMergeScreenshot,
    tags: ["Mobile game", "Game design", "Ad monetization", "App Store"],
  },
  {
    name: "COINER HERO",
    slug: "coiner-hero",
    type: "Web3 bridge platform",
    url: "https://coinerhero.com/",
    color: "var(--violet)",
    summary: {
      ru: "Платформа для кроссчейн-обмена криптовалют, которую мы спроектировали и собрали с нуля.",
      lv: "Kriptovalūtu cross-chain apmaiņas platforma, kuru projektējām un uzbūvējām no nulles.",
      en: "A cross-chain crypto exchange platform designed and built from scratch.",
    },
    details: {
      ru: "Разработали интерфейс, интегрировали подключение кошельков и настроили маршрутизацию обменов через Li.Fi для переводов активов между разными сетями.",
      lv: "Izstrādājām interfeisu, integrējām wallet pieslēgšanu un sakārtojām apmaiņas maršrutēšanu caur Li.Fi aktīvu pārskaitījumiem starp dažādiem tīkliem.",
      en: "We designed the interface, integrated wallet connection and configured swap routing through Li.Fi for moving assets across different networks.",
    },
    seoDescription: {
      ru: "Кейс Coiner Hero: дизайн и разработка Web3-платформы для кроссчейн-обмена криптовалют с подключением кошельков и Li.Fi.",
      lv: "Coiner Hero case: Web3 cross-chain kriptovalūtu apmaiņas platformas dizains un izstrāde ar wallet un Li.Fi integrāciju.",
      en: "Coiner Hero case study: a Web3 cross-chain crypto exchange platform with wallet connection and Li.Fi integration.",
    },
    imageAlt: {
      ru: "Интерфейс Coiner Hero, Web3-платформы для обмена и перевода криптовалют между различными блокчейн-сетями, спроектированный и разработанный NotAgency.",
      lv: "Coiner Hero interfeiss, Web3 platforma kriptovalūtu apmaiņai un pārskaitījumiem starp dažādiem blockchain tīkliem, ko projektēja un izstrādāja NotAgency.",
      en: "Coiner Hero interface, a Web3 platform for exchanging and transferring crypto between different blockchain networks, designed and developed by NotAgency.",
    },
    modalDetails: {
      ru: "Клиент пришел с задачей создать простой и понятный сервис для работы с криптовалютами через собственный кошелек пользователя. Мы разработали интерфейс, интегрировали подключение кошельков и настроили маршрутизацию обменов через Li.Fi, чтобы пользователи могли переводить активы между различными сетями через единый интерфейс. Особое внимание уделили удобству использования, скорости работы и адаптации под разные устройства.",
      lv: "Klients atnāca ar uzdevumu izveidot vienkāršu un saprotamu servisu darbam ar kriptovalūtām caur paša lietotāja wallet. Mēs izstrādājām interfeisu, integrējām wallet pieslēgšanu un sakārtojām apmaiņas maršrutēšanu caur Li.Fi, lai lietotāji varētu pārvietot aktīvus starp dažādiem tīkliem vienā interfeisā. Īpašu uzmanību pievērsām lietošanas ērtumam, darbības ātrumam un adaptācijai dažādām ierīcēm.",
      en: "The client came with the task of creating a simple, understandable service for working with crypto through the user's own wallet. We designed the interface, integrated wallet connection and configured exchange routing through Li.Fi so users could transfer assets between different networks from one interface. We paid particular attention to usability, performance and adaptation across different devices.",
    },
    modalImage: coinerHeroScreenshot,
    tags: ["Web3", "Wallet integration", "Cross-chain swaps"],
  },
  {
    name: "UNDERBPM",
    slug: "underbpm",
    type: "Beats marketplace",
    url: "https://underbpm.com/",
    color: "var(--cyan)",
    summary: {
      ru: "Платформа для покупки и продажи битов, которую мы спроектировали и собрали с нуля.",
      lv: "Bītu pirkšanas un pārdošanas platforma, kuru izdomājām un uzbūvējām no nulles.",
      en: "A beats marketplace designed and built from scratch.",
    },
    details: {
      ru: "Клиент пришел без уникальной идеи. Мы придумали платежную механику, связку с YouTube, обновили дизайн marketplace и добавили новые инструменты для артистов.",
      lv: "Klients atnāca bez unikālas idejas. Mēs izdomājām maksājumu loģiku, saikni ar YouTube, atjaunojām marketplace dizainu un pievienojām jaunus rīkus artistiem.",
      en: "The client came without a unique angle. We shaped the payment logic, connected YouTube, refreshed the marketplace design and added new tools for artists.",
    },
    seoDescription: {
      ru: "Кейс UNDERBPM: marketplace для покупки и продажи битов с платежами, подписками, Stripe и автоматической публикацией на YouTube.",
      lv: "UNDERBPM case: bītu marketplace ar maksājumiem, abonementiem, Stripe un automatizētu publicēšanu YouTube.",
      en: "UNDERBPM case study: a beats marketplace with payments, subscriptions, Stripe and automated publishing to YouTube.",
    },
    imageAlt: {
      ru: "Интерфейс UNDERBPM, marketplace для покупки и продажи битов, спроектированный и разработанный NotAgency.",
      lv: "UNDERBPM bītu pirkšanas un pārdošanas marketplace interfeiss, ko projektēja un izstrādāja NotAgency.",
      en: "UNDERBPM beats marketplace interface designed and developed by NotAgency.",
    },
    modalDetails: {
      ru: "Клиент пришел с идеей создать простую и удобную платформу для публикации и продажи битов. Он сам музыкант со стажем, поэтому хорошо понимал, где существующие площадки работают неудобно. Мы предложили сделать не просто витрину треков, а связать marketplace с YouTube через отдельный инструмент: он отправляет на сервер аудиофайл и обложку, конвертирует их в видео, загружает ролик на YouTube и переносит описание с сайта. Позже мы обновили дизайн marketplace, чтобы продукт выглядел сильнее и лучше держал новые сценарии. Добавили инструмент для поиска плагиата, оформили к нему ежемесячную подписку и сделали отдельный flow для заказа товара напрямую: 50% предоплаты при заказе и оставшиеся 50% после получения товара. Для монетизации продаж мы выбрали современный сценарий со Stripe, чтобы артисты получали деньги напрямую, без ручных выплат владельцем платформы после подсчета комиссии.",
      lv: "Klients atnāca ar ideju izveidot vienkāršu un ērtu platformu bītu publicēšanai un pārdošanai. Viņš pats ir pieredzējis mūziķis, tāpēc labi saprata, kur esošās platformas ir neērtas. Mēs piedāvājām veidot ne tikai track vitrīnu, bet sasaistīt marketplace ar YouTube caur atsevišķu rīku: tas nosūta uz serveri audio failu un vāku, pārveido tos video, augšupielādē video YouTube un pārnes aprakstu no lapas. Vēlāk atjaunojām marketplace dizainu, lai produkts izskatītos spēcīgāk un labāk turētu jaunos scenārijus. Pievienojām plaģiāta meklēšanas rīku, izveidojām tam ikmēneša abonementu un uzbūvējām atsevišķu flow preces pasūtīšanai tieši: 50% priekšapmaksa pasūtījuma brīdī un atlikušie 50% pēc preces saņemšanas. Pārdošanas monetizācijai izvēlējāmies modernu Stripe scenāriju, lai artisti par pārdošanu saņemtu naudu tieši, bez lēniem manuāliem izmaksu un komisiju aprēķiniem.",
      en: "The client came with the idea of building a simple, practical platform for publishing and selling beats. He is an experienced musician himself, so he knew exactly where existing platforms felt clumsy. We proposed more than a track storefront: we connected the marketplace to YouTube through a custom tool that sends an audio file and cover art to the server, converts them into a video, uploads it to YouTube and copies the description from the site. Later, we refreshed the marketplace design so the product felt stronger and could support new workflows better. We added a plagiarism search tool, built a monthly subscription around it and created a separate flow for ordering a product directly: 50% prepayment when the order is placed and the remaining 50% after the product is received. For sales monetization, we designed a modern Stripe flow so artists receive money directly, without slow manual payouts after the platform owner calculates commission.",
    },
    modalImage: underbpmScreenshot,
    tags: ["Marketplace", "Payments", "YouTube bridge", "Subscriptions"],
  },
  {
    name: "HIDY",
    slug: "hidy",
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
    seoDescription: {
      ru: "Кейс HIDY: мобильная игра в прятки на машинах с живой картой, игровыми режимами, монетизацией и запуском в App Store.",
      lv: "HIDY case: mobilā paslēpju spēle ar auto, dzīvo karti, spēles režīmiem, monetizāciju un palaišanu App Store.",
      en: "HIDY case study: a mobile car hide-and-seek game with a live map, game modes, monetization and an App Store launch.",
    },
    imageAlt: {
      ru: "Интерфейс мобильной игры HIDY с картой и игровыми сценариями, созданный NotAgency.",
      lv: "HIDY mobilās spēles interfeiss ar karti un spēles scenārijiem, ko izveidoja NotAgency.",
      en: "HIDY mobile game interface with map and gameplay flows created by NotAgency.",
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
    slug: "isologic",
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
    seoDescription: {
      ru: "Кейс ISOLOGIC: разработка сайта для ISO и compliance-компании с удобной админкой, контактной формой, автодеплоем и SEO.",
      lv: "ISOLOGIC case: ISO un compliance uzņēmuma mājaslapa ar admin paneli, kontaktformu, autodeploy un SEO.",
      en: "ISOLOGIC case study: an ISO and compliance company website with an admin panel, contact form, autodeploy and SEO.",
    },
    imageAlt: {
      ru: "Сайт ISOLOGIC для компании в сфере ISO и compliance, разработанный NotAgency.",
      lv: "ISOLOGIC mājaslapa ISO un compliance uzņēmumam, ko izstrādāja NotAgency.",
      en: "ISOLOGIC company website for ISO and compliance services developed by NotAgency.",
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

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
