import type { Lang } from "./language";

type LocalizedText = Record<Lang, string>;

export type CaseStudyCopy = {
  kicker: string;
  headline: string;
  description: string;
  imageAlt: string;
  imageCaption: string;
  meta: Array<{ label: string; value: string }>;
  result: { mark: string; label: string; text: string };
  resultProof?: { alt: string; caption: string };
  problem: { title: string; paragraphs: string[] };
  solution: { title: string; paragraphs: string[] };
  flowTitle: string;
  flow: string[];
  builtTitle: string;
  features: Array<{ title: string; text: string }>;
  processTitle: string;
  process: Array<{ title: string; text: string }>;
  techTitle: string;
  systems: string[];
  resultSection: { title: string; paragraphs: string[] };
  serviceLink?: { label: string; action: string };
  cta: { title: string; text: string; action: string };
};

const manifesto: LocalizedText = {
  en: "From a real-world game to #4 in the App Store.",
  ru: "От игры в реальном мире до #4 в App Store.",
  lv: "No spēles reālajā pasaulē līdz #4 App Store.",
};

export const hidyCaseStudyCopy: Record<Lang, CaseStudyCopy> = {
  en: {
    kicker: "Portfolio / Mobile game / HIDY",
    headline: manifesto.en,
    description: "A real-time location-based mobile game built from the ground up — from product logic and UX to development, launch and App Store release.",
    imageAlt: "HIDY App Store page and mobile game screens showing friends, rankings, player role, lobby and map zone selection.",
    imageCaption: "The released product: social play, progression, lobbies and the live game map in one mobile experience.",
    meta: [
      { label: "Type", value: "Mobile game" },
      { label: "Platform", value: "iOS / Android adaptation" },
      { label: "Work", value: "Product / Game logic / Development / Launch" },
      { label: "Release", value: "App Store / Play Market preparation" },
    ],
    result: { mark: "#4", label: "In the App Store", text: "Reached #4 in the App Store charts during the first month after launch." },
    resultProof: {
      alt: "App Store Top Free Apps chart showing HIDY in fourth place.",
      caption: "The receipt: HIDY at #4 in the App Store chart during its first month.",
    },
    problem: {
      title: "The problem",
      paragraphs: [
        "The game already worked in the real world: friends played hide-and-seek with cars. But organising it meant drawing the play zone manually in Google Maps and coordinating everything through WhatsApp.",
        "The challenge was not simply to make an app. It was to turn that fragmented routine into one complete mobile game.",
      ],
    },
    solution: {
      title: "The solution",
      paragraphs: [
        "We moved the key game processes into HIDY: an in-app map, live player locations in the lobby, zone and radius selection, game modes and alerts when a player leaves the allowed area.",
        "Achievements, premium modes and a monetisation plan turned the core mechanic into a product designed to keep developing after launch.",
      ],
    },
    flowTitle: "The game flow",
    flow: ["Create a lobby", "Set the zone", "Players join", "Choose the mode", "Play live"],
    builtTitle: "What we built",
    features: [
      { title: "Live game map", text: "The playing zone and live player locations are handled directly inside the game." },
      { title: "Lobby system", text: "Players can create a game, join a lobby and prepare the match in one flow." },
      { title: "Zone logic", text: "The host selects the area and radius while the product monitors its boundaries." },
      { title: "Game modes", text: "Different modes shape how each real-world hide-and-seek session is played." },
      { title: "Progression", text: "Achievements and player progression give the game structure beyond one match." },
      { title: "Premium system", text: "Paid modes and a monetisation plan support the product beyond release." },
    ],
    processTitle: "From idea to store",
    process: [
      { title: "Product", text: "Turned a real-world habit into a complete digital game flow." },
      { title: "UX", text: "Shaped the paths for lobbies, maps, zones and active gameplay." },
      { title: "Build", text: "Developed the mobile product and its live location systems." },
      { title: "Test", text: "Prepared the game for real-world play and release fixes." },
      { title: "Ship", text: "Handled registration, builds, review, corrections and App Store launch." },
    ],
    techTitle: "Under the hood",
    systems: ["In-app maps", "Live locations", "Lobby system", "Zone alerts", "Premium modes", "App Store builds", "Android adaptation"],
    resultSection: {
      title: "The result",
      paragraphs: [
        "HIDY went from a car hide-and-seek game coordinated through Google Maps and WhatsApp to a complete mobile experience released through the App Store.",
        "During its first month after launch, the game reached #4 in the App Store charts.",
      ],
    },
    serviceLink: { label: "Planning a mobile product?", action: "Mobile app development" },
    cta: { title: "Have something we should build?", text: "Tell us what you are working on.", action: "Start a project" },
  },
  ru: {
    kicker: "Портфолио / Мобильная игра / HIDY",
    headline: manifesto.ru,
    description: "Мобильная игра с real-time механикой и реальной картой, созданная с нуля — от продуктовой логики и UX до разработки, запуска и публикации в App Store.",
    imageAlt: "Страница HIDY в App Store и экраны мобильной игры с друзьями, рейтингом, ролью игрока, лобби и выбором зоны на карте.",
    imageCaption: "Запущенный продукт: социальная игра, прогресс, лобби и живая игровая карта в одном мобильном опыте.",
    meta: [
      { label: "Тип", value: "Мобильная игра" },
      { label: "Платформа", value: "iOS / адаптация под Android" },
      { label: "Работа", value: "Продукт / Игровая логика / Разработка / Запуск" },
      { label: "Релиз", value: "App Store / подготовка к Play Market" },
    ],
    result: { mark: "#4", label: "В App Store", text: "В течение первого месяца после запуска HIDY поднялся до #4 в чартах App Store." },
    resultProof: {
      alt: "Чарт бесплатных приложений App Store, где HIDY занимает четвёртое место.",
      caption: "Доказательство: HIDY на #4 в чарте App Store в течение первого месяца.",
    },
    problem: {
      title: "Задача",
      paragraphs: [
        "Игра уже работала в реальном мире: друзья играли в прятки на машинах. Но для её организации приходилось вручную отмечать зону в Google Maps и координировать всё через WhatsApp.",
        "Задача была не просто в том, чтобы сделать приложение, а в том, чтобы превратить разрозненный процесс в одну полноценную мобильную игру.",
      ],
    },
    solution: {
      title: "Решение",
      paragraphs: [
        "Мы перенесли ключевые процессы внутрь HIDY: карту, живые локации игроков в лобби, выбор зоны и радиуса, игровые режимы и оповещения о выходе за допустимые границы.",
        "Достижения, премиум-режимы и план монетизации превратили базовую механику в продукт, который можно развивать после запуска.",
      ],
    },
    flowTitle: "Игровой путь",
    flow: ["Создать лобби", "Задать зону", "Собрать игроков", "Выбрать режим", "Играть вживую"],
    builtTitle: "Что мы разработали",
    features: [
      { title: "Живая карта", text: "Игровая зона и живые локации игроков работают прямо внутри игры." },
      { title: "Система лобби", text: "Игроки создают игру, присоединяются к лобби и готовят матч в одном flow." },
      { title: "Логика зоны", text: "Организатор выбирает область и радиус, а продукт следит за её границами." },
      { title: "Игровые режимы", text: "Разные режимы определяют сценарий каждой реальной игры в прятки." },
      { title: "Прогресс", text: "Достижения и развитие игрока создают более длинный цикл за пределами одного матча." },
      { title: "Premium-система", text: "Платные режимы и план монетизации поддерживают развитие продукта после релиза." },
    ],
    processTitle: "От идеи до App Store",
    process: [
      { title: "Продукт", text: "Превратили реальную игровую привычку в цельный digital-flow." },
      { title: "UX", text: "Спроектировали пути лобби, карты, зон и активной игры." },
      { title: "Разработка", text: "Собрали мобильный продукт и системы живых локаций." },
      { title: "Тест", text: "Подготовили игру к реальным сценариям и релизным правкам." },
      { title: "Запуск", text: "Прошли регистрацию, сборки, review, правки и публикацию в App Store." },
    ],
    techTitle: "Под капотом",
    systems: ["Карты внутри игры", "Живые локации", "Система лобби", "Контроль зоны", "Premium-режимы", "App Store builds", "Android-адаптация"],
    resultSection: {
      title: "Результат",
      paragraphs: [
        "HIDY прошёл путь от автомобильных пряток, организованных через Google Maps и WhatsApp, до полноценной мобильной игры, выпущенной в App Store.",
        "В течение первого месяца после запуска игра поднялась до #4 в чартах App Store.",
      ],
    },
    serviceLink: { label: "Планируете мобильный продукт?", action: "Разработка мобильных приложений" },
    cta: { title: "Есть идея, которую стоит собрать?", text: "Расскажите, над чем вы работаете.", action: "Обсудить проект" },
  },
  lv: {
    kicker: "Portfolio / Mobilā spēle / HIDY",
    headline: manifesto.lv,
    description: "Reāllaika mobilā spēle ar atrašanās vietas un kartes funkcionalitāti, izveidota no nulles — no produkta loģikas un UX līdz izstrādei, palaišanai un publicēšanai App Store.",
    imageAlt: "HIDY App Store lapa un mobilās spēles ekrāni ar draugiem, reitingu, spēlētāja lomu, lobby un zonas izvēli kartē.",
    imageCaption: "Palaistais produkts: sociāla spēle, progress, lobby un dzīvā spēles karte vienā mobilajā pieredzē.",
    meta: [
      { label: "Tips", value: "Mobilā spēle" },
      { label: "Platforma", value: "iOS / Android adaptācija" },
      { label: "Darbs", value: "Produkts / Spēles loģika / Izstrāde / Palaišana" },
      { label: "Relīze", value: "App Store / gatavošana Play Market" },
    ],
    result: { mark: "#4", label: "App Store", text: "Pirmajā mēnesī pēc palaišanas HIDY sasniedza #4 vietu App Store čartos." },
    resultProof: {
      alt: "App Store bezmaksas lietotņu tops, kurā HIDY ieņem ceturto vietu.",
      caption: "Pierādījums: HIDY #4 vietā App Store topā pirmajā mēnesī.",
    },
    problem: {
      title: "Uzdevums",
      paragraphs: [
        "Spēle jau darbojās reālajā pasaulē: draugi spēlēja paslēpes ar mašīnām. Taču tās organizēšanai zona bija manuāli jāiezīmē Google Maps un viss jāsaskaņo WhatsApp čatā.",
        "Uzdevums nebija vienkārši izveidot lietotni, bet pārvērst sadrumstaloto procesu vienotā mobilajā spēlē.",
      ],
    },
    solution: {
      title: "Risinājums",
      paragraphs: [
        "Mēs pārcēlām galvenos spēles procesus uz HIDY: karti, spēlētāju dzīvās lokācijas lobby, zonas un rādiusa izvēli, spēles režīmus un paziņojumus par izbraukšanu ārpus zonas.",
        "Achievements, premium režīmi un monetizācijas plāns pārvērta pamata mehāniku produktā, ko iespējams attīstīt pēc palaišanas.",
      ],
    },
    flowTitle: "Spēles plūsma",
    flow: ["Izveidot lobby", "Noteikt zonu", "Pievienot spēlētājus", "Izvēlēties režīmu", "Spēlēt dzīvajā"],
    builtTitle: "Ko mēs izstrādājām",
    features: [
      { title: "Dzīvā karte", text: "Spēles zona un spēlētāju dzīvās lokācijas darbojas pašā spēlē." },
      { title: "Lobby sistēma", text: "Spēlētāji izveido spēli, pievienojas lobby un sagatavo maču vienā plūsmā." },
      { title: "Zonas loģika", text: "Organizators izvēlas teritoriju un rādiusu, bet produkts uzrauga robežas." },
      { title: "Spēles režīmi", text: "Dažādi režīmi nosaka katras reālās paslēpju spēles scenāriju." },
      { title: "Progress", text: "Achievements un spēlētāja attīstība veido plašāku ciklu ārpus viena mača." },
      { title: "Premium sistēma", text: "Maksas režīmi un monetizācijas plāns atbalsta produkta attīstību pēc relīzes." },
    ],
    processTitle: "No idejas līdz App Store",
    process: [
      { title: "Produkts", text: "Pārvērtām reālu spēles paradumu pilnā digitālā plūsmā." },
      { title: "UX", text: "Izveidojām lobby, karšu, zonu un aktīvās spēles ceļus." },
      { title: "Izstrāde", text: "Uzbūvējām mobilo produktu un dzīvo lokāciju sistēmas." },
      { title: "Tests", text: "Sagatavojām spēli reāliem scenārijiem un relīzes labojumiem." },
      { title: "Palaišana", text: "Izgājām reģistrāciju, buildus, review, labojumus un App Store relīzi." },
    ],
    techTitle: "Tehniskā puse",
    systems: ["Kartes lietotnē", "Dzīvās lokācijas", "Lobby sistēma", "Zonas paziņojumi", "Premium režīmi", "App Store buildi", "Android adaptācija"],
    resultSection: {
      title: "Rezultāts",
      paragraphs: [
        "HIDY no auto paslēpju spēles, kas tika organizēta Google Maps un WhatsApp, kļuva par pilnvērtīgu mobilo spēli, kas izlaista App Store.",
        "Pirmajā mēnesī pēc palaišanas spēle sasniedza #4 vietu App Store čartos.",
      ],
    },
    serviceLink: { label: "Plānojat mobilo produktu?", action: "Mobilo lietotņu izstrāde" },
    cta: { title: "Ir ideja, ko vajag izveidot?", text: "Pastāstiet, pie kā strādājat.", action: "Sākt projektu" },
  },
};
