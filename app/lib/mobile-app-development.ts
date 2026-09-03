import type { Lang } from "./language";

export type ServiceCard = { title: string; text: string };
export type ServiceStep = { title: string; text: string };
export type ServiceFaq = { question: string; answer: string };

export type MobileAppDevelopmentCopy = {
  hero: {
    label: string;
    title: [string, string];
    description: string;
    primary: string;
    secondary: string;
    imageAlt: string;
    imageCaption: string;
  };
  proof: {
    appStore: string;
    context: string;
    platforms: string;
    path: string;
    live: string;
    text: string;
  };
  build: { label: string; title: [string, string]; items: ServiceCard[] };
  hidy: { label: string; title: string; text: string; action: string; imageAlt: string };
  capabilities: { label: string; title: string; items: ServiceCard[] };
  team: { label: string; title: string; paragraphs: string[] };
  process: { label: string; title: string; steps: ServiceStep[]; action: string };
  secondary: { label: string; title: string; text: string; action: string; imageAlt: string };
  faq: { label: string; title: string; items: ServiceFaq[] };
  cta: { title: [string, string]; text: string; action: string };
};

export const mobileAppDevelopmentCopy: Record<Lang, MobileAppDevelopmentCopy> = {
  en: {
    hero: {
      label: "Mobile app development",
      title: ["Apps people", "actually use."],
      description: "We design, build and launch mobile products for iOS and Android — from the first product decision to production.",
      primary: "Start a mobile project",
      secondary: "See HIDY",
      imageAlt: "HIDY mobile game screens showing player profiles, a lobby and a live game map.",
      imageCaption: "Real product screens. Real game logic. Released through the App Store.",
    },
    proof: {
      appStore: "App Store",
      context: "HIDY / first month",
      platforms: "iOS / Android",
      path: "Product → UX → Code → Launch",
      live: "Live products / production",
      text: "We don't stop at Figma. We build the product, deal with production and get it into users' hands.",
    },
    build: {
      label: "What we build",
      title: ["Not just", "an app icon."],
      items: [
        { title: "MVPs & new products", text: "Turn an idea into a product that can be tested, launched and developed further." },
        { title: "iOS & Android apps", text: "Mobile products built around real user flows, not a stack of pretty screens." },
        { title: "Real-time products", text: "Location, live updates, multiplayer logic and other systems where the product needs to react now." },
        { title: "Existing products", text: "New features, redesigns, integrations and further development of mobile products that are already live." },
      ],
    },
    hidy: {
      label: "Case study / HIDY",
      title: "From a real-world game to #4 in the App Store.",
      text: "HIDY started as a real-world game coordinated through external tools. We turned it into a complete mobile product with its own game flow, real-time systems and App Store release.",
      action: "Explore the case study",
      imageAlt: "HIDY mobile product interface with social, ranking, lobby and location-based game screens.",
    },
    capabilities: {
      label: "Mobile development capabilities",
      title: "What actually goes into it.",
      items: [
        { title: "Product logic", text: "Define the problem, user roles, states and rules before screens turn into expensive guesses." },
        { title: "UX / UI", text: "Structure real flows and design the interface around what the product needs to do." },
        { title: "Mobile frontend", text: "Build responsive application interfaces and connect them to working product logic." },
        { title: "Backend & data", text: "Connect accounts, product data, business rules and the systems that keep the app useful." },
        { title: "Payments", text: "Implement payment and monetisation flows where the product requires them." },
        { title: "Notifications", text: "Deliver product and gameplay updates at the moment users need them." },
        { title: "Maps & location", text: "Build location-based flows, live positions, zones and map interactions." },
        { title: "Release", text: "Prepare builds, handle review feedback and take the product through store release." },
      ],
    },
    team: {
      label: "Small by design",
      title: "The people in the call are the people in the code.",
      paragraphs: [
        "NotAgency is run by two developers. There is no handoff from salesperson to account manager to project manager to somebody you've never spoken to.",
        "You work directly with the people making product and technical decisions.",
      ],
    },
    process: {
      label: "Process",
      title: "From idea to store",
      steps: [
        { title: "Define", text: "What should the product actually solve?" },
        { title: "Structure", text: "Flows, functionality and technical decisions." },
        { title: "Design", text: "Build an interface around the real product." },
        { title: "Develop", text: "Turn it into working software." },
        { title: "Test", text: "Real devices, real flows, real problems." },
        { title: "Ship", text: "Production and store release." },
      ],
      action: "See our full process",
    },
    secondary: {
      label: "More mobile work",
      title: "Split & Merge",
      text: "A mobile puzzle game with split-and-merge mechanics, progression, upgrades, ad monetisation and an iOS App Store release.",
      action: "View the project",
      imageAlt: "Split & Merge mobile puzzle game screens showing gameplay, progression and upgrades.",
    },
    faq: {
      label: "Mobile app development FAQ",
      title: "Questions before the build.",
      items: [
        { question: "Do you develop apps for both iOS and Android?", answer: "Yes. We build mobile products for iOS and Android and decide the right release approach around the product, scope and existing systems." },
        { question: "Can you build an MVP from an idea?", answer: "Yes. We can turn an early idea into a defined product flow, interface and working MVP that is ready to test and develop further." },
        { question: "Do you also design the app?", answer: "Yes. Product structure, UX and UI are part of the work. We design around real states and user flows, then build what was designed." },
        { question: "Can you help publish an app to the App Store?", answer: "Yes. Our project work includes production builds, store preparation, review feedback, corrections and launch. HIDY and Split & Merge both went through the App Store process." },
        { question: "Do you work with existing mobile applications?", answer: "Yes. We can add features, rethink flows, redesign interfaces, connect integrations and continue development of an existing product after reviewing its current foundation." },
        { question: "How much does mobile app development cost?", answer: "Cost depends on scope, platforms, backend, integrations, product states and how much needs to be defined. A brief gives us enough context to prepare a realistic estimate." },
        { question: "How long does it take to build an app?", answer: "Timing depends on whether the goal is a focused MVP or a broader product and which systems it needs. We estimate the timeline after defining the scope and release path." },
      ],
    },
    cta: {
      title: ["Have an app idea?", "Make it real."],
      text: "Tell us what you're trying to build, where you are now and what the product needs to do.",
      action: "Start a project",
    },
  },
  ru: {
    hero: {
      label: "Разработка мобильных приложений",
      title: ["Приложения,", "которыми пользуются."],
      description: "Мы проектируем, разрабатываем и запускаем мобильные продукты для iOS и Android — от первых продуктовых решений до production.",
      primary: "Обсудить приложение",
      secondary: "Смотреть HIDY",
      imageAlt: "Экраны мобильной игры HIDY с профилями игроков, лобби и живой игровой картой.",
      imageCaption: "Реальные экраны продукта. Реальная игровая логика. Выпущено через App Store.",
    },
    proof: {
      appStore: "App Store",
      context: "HIDY / первый месяц",
      platforms: "iOS / Android",
      path: "Продукт → UX → Код → Запуск",
      live: "Работающие продукты / production",
      text: "Мы не останавливаемся на Figma. Мы разрабатываем продукт, доводим его до production и выпускаем для реальных пользователей.",
    },
    build: {
      label: "Что мы разрабатываем",
      title: ["Не просто", "иконка приложения."],
      items: [
        { title: "MVP и новые продукты", text: "Превращаем идею в продукт, который можно протестировать, запустить и развивать дальше." },
        { title: "iOS и Android", text: "Мобильные продукты, построенные вокруг реальных пользовательских сценариев, а не набора красивых экранов." },
        { title: "Real-time продукты", text: "Геолокация, live-обновления, multiplayer-логика и другие системы, где продукт должен реагировать здесь и сейчас." },
        { title: "Существующие продукты", text: "Новые функции, редизайн, интеграции и дальнейшая разработка уже работающих мобильных продуктов." },
      ],
    },
    hidy: {
      label: "Кейс / HIDY",
      title: "От игры в реальном мире до #4 в App Store.",
      text: "HIDY начинался как игра в реальном мире, организационные процессы которой происходили через сторонние инструменты. Мы превратили её в полноценный мобильный продукт с собственной игровой логикой, real-time системами и запуском в App Store.",
      action: "Смотреть кейс",
      imageAlt: "Интерфейс мобильного продукта HIDY с социальными функциями, рейтингом, лобби и геолокационными игровыми экранами.",
    },
    capabilities: {
      label: "Возможности mobile-разработки",
      title: "Что на самом деле входит в разработку.",
      items: [
        { title: "Продуктовая логика", text: "Определяем задачу, роли, состояния и правила до того, как экраны станут дорогими догадками." },
        { title: "UX / UI", text: "Собираем реальные сценарии и проектируем интерфейс вокруг задач продукта." },
        { title: "Mobile frontend", text: "Разрабатываем интерфейсы приложения и связываем их с работающей продуктовой логикой." },
        { title: "Backend и данные", text: "Соединяем аккаунты, данные, бизнес-правила и системы, на которых держится продукт." },
        { title: "Платежи", text: "Реализуем платежные и монетизационные сценарии там, где они нужны продукту." },
        { title: "Уведомления", text: "Доставляем продуктовые и игровые обновления в нужный пользователю момент." },
        { title: "Карты и геолокация", text: "Строим сценарии с локацией, живыми позициями, зонами и взаимодействием с картой." },
        { title: "Публикация", text: "Готовим сборки, проходим review, вносим правки и доводим продукт до релиза в store." },
      ],
    },
    team: {
      label: "Маленькая команда — сознательно",
      title: "Люди на созвоне — те же люди в коде.",
      paragraphs: [
        "NotAgency — команда из двух разработчиков. Здесь нет передачи проекта от продавца к account manager, затем project manager, а потом человеку, которого вы никогда не видели.",
        "Вы работаете напрямую с людьми, которые принимают продуктовые и технические решения.",
      ],
    },
    process: {
      label: "Процесс",
      title: "От идеи до App Store",
      steps: [
        { title: "Определить", text: "Какую задачу на самом деле должен решить продукт?" },
        { title: "Структура", text: "Сценарии, функциональность и технические решения." },
        { title: "Дизайн", text: "Интерфейс вокруг реального продукта." },
        { title: "Разработка", text: "Превращаем решения в работающий софт." },
        { title: "Тестирование", text: "Реальные устройства, сценарии и проблемы." },
        { title: "Запуск", text: "Production и публикация в store." },
      ],
      action: "Посмотреть полный процесс",
    },
    secondary: {
      label: "Другие мобильные проекты",
      title: "Split & Merge",
      text: "Мобильная puzzle-игра с механикой разделения и объединения, прогрессом, улучшениями, рекламной монетизацией и релизом iOS-версии в App Store.",
      action: "Смотреть проект",
      imageAlt: "Экраны мобильной puzzle-игры Split & Merge с игровым процессом, прогрессом и улучшениями.",
    },
    faq: {
      label: "FAQ по разработке приложений",
      title: "Вопросы до начала разработки.",
      items: [
        { question: "Вы разрабатываете приложения для iOS и Android?", answer: "Да. Мы создаём мобильные продукты для iOS и Android, а подход к релизу определяем по продукту, объёму и существующим системам." },
        { question: "Можете создать MVP из идеи?", answer: "Да. Мы можем превратить раннюю идею в понятный продуктовый сценарий, интерфейс и работающий MVP для тестирования и дальнейшего развития." },
        { question: "Вы также проектируете дизайн приложения?", answer: "Да. Структура продукта, UX и UI входят в работу. Мы проектируем реальные состояния и сценарии, а затем разрабатываем созданный интерфейс." },
        { question: "Можете помочь с публикацией в App Store?", answer: "Да. Работа может включать production-сборки, подготовку store, прохождение review, исправления и запуск. HIDY и Split & Merge прошли процесс публикации в App Store." },
        { question: "Вы работаете с существующими мобильными приложениями?", answer: "Да. После оценки текущей основы можем добавлять функции, пересобирать сценарии, обновлять интерфейс, подключать интеграции и продолжать разработку продукта." },
        { question: "Сколько стоит разработка мобильного приложения?", answer: "Стоимость зависит от объёма, платформ, backend, интеграций, состояний продукта и количества неопределённых решений. Бриф даёт достаточно контекста для реалистичной оценки." },
        { question: "Сколько времени занимает разработка приложения?", answer: "Срок зависит от того, нужен ли сфокусированный MVP или более широкий продукт, и от набора систем внутри. Мы оцениваем сроки после определения scope и пути релиза." },
      ],
    },
    cta: {
      title: ["Есть идея приложения?", "Сделаем её реальной."],
      text: "Расскажите, что хотите создать, на каком этапе находитесь сейчас и что должен уметь продукт.",
      action: "Обсудить проект",
    },
  },
  lv: {
    hero: {
      label: "Mobilo lietotņu izstrāde",
      title: ["Lietotnes,", "kuras patiešām lieto."],
      description: "Mēs projektējam, izstrādājam un palaižam mobilos produktus iOS un Android platformām — no pirmajiem produkta lēmumiem līdz production videi.",
      primary: "Sākt mobilās lietotnes projektu",
      secondary: "Skatīt HIDY",
      imageAlt: "HIDY mobilās spēles ekrāni ar spēlētāju profiliem, lobby un dzīvo spēles karti.",
      imageCaption: "Reāli produkta ekrāni. Reāla spēles loģika. Publicēts App Store.",
    },
    proof: {
      appStore: "App Store",
      context: "HIDY / pirmais mēnesis",
      platforms: "iOS / Android",
      path: "Produkts → UX → Kods → Palaišana",
      live: "Darbojošies produkti / production",
      text: "Mēs neapstājamies pie Figma. Mēs izstrādājam produktu, nogādājam to production vidē un izlaižam reāliem lietotājiem.",
    },
    build: {
      label: "Ko mēs izstrādājam",
      title: ["Ne tikai", "lietotnes ikona."],
      items: [
        { title: "MVP un jauni produkti", text: "Pārvēršam ideju produktā, ko var testēt, palaist un turpināt attīstīt." },
        { title: "iOS un Android", text: "Mobilie produkti, kas veidoti ap reāliem lietotāju scenārijiem, nevis tikai skaistu ekrānu komplektu." },
        { title: "Reāllaika produkti", text: "Atrašanās vieta, tiešraides atjauninājumi, multiplayer loģika un citas sistēmas, kur produktam jāreaģē reāllaikā." },
        { title: "Esoši produkti", text: "Jaunas funkcijas, pārveide, integrācijas un jau palaistu mobilo produktu turpmāka attīstība." },
      ],
    },
    hidy: {
      label: "Case study / HIDY",
      title: "No spēles reālajā pasaulē līdz #4 App Store.",
      text: "HIDY sākās kā spēle reālajā pasaulē, kuras organizēšanai tika izmantoti ārēji rīki. Mēs to pārvērtām pilnvērtīgā mobilajā produktā ar savu spēles loģiku, reāllaika sistēmām un publicēšanu App Store.",
      action: "Izpētīt case study",
      imageAlt: "HIDY mobilā produkta interfeiss ar sociālajiem, reitinga, lobby un atrašanās vietas spēles ekrāniem.",
    },
    capabilities: {
      label: "Mobilo lietotņu izstrādes iespējas",
      title: "Kas patiesībā ietilpst izstrādē.",
      items: [
        { title: "Produkta loģika", text: "Definējam problēmu, lietotāju lomas, stāvokļus un noteikumus pirms ekrāni kļūst par dārgiem minējumiem." },
        { title: "UX / UI", text: "Veidojam reālus scenārijus un projektējam interfeisu ap produkta uzdevumiem." },
        { title: "Mobilais frontend", text: "Izstrādājam lietotnes interfeisus un savienojam tos ar strādājošu produkta loģiku." },
        { title: "Backend un dati", text: "Savienojam kontus, datus, biznesa noteikumus un sistēmas, uz kurām balstās produkts." },
        { title: "Maksājumi", text: "Ieviešam maksājumu un monetizācijas plūsmas, kur tās produktam nepieciešamas." },
        { title: "Paziņojumi", text: "Piegādājam produkta un spēles atjauninājumus brīdī, kad lietotājam tie vajadzīgi." },
        { title: "Kartes un lokācija", text: "Veidojam lokācijas plūsmas, dzīvās pozīcijas, zonas un mijiedarbību ar karti." },
        { title: "Publicēšana", text: "Sagatavojam buildus, apstrādājam review labojumus un novedam produktu līdz store relīzei." },
      ],
    },
    team: {
      label: "Maza komanda — apzināti",
      title: "Cilvēki sarunā ir tie paši cilvēki kodā.",
      paragraphs: [
        "NotAgency veido divi izstrādātāji. Projekts netiek nodots no pārdevēja account manager, pēc tam project manager un visbeidzot cilvēkam, ar kuru jūs nekad neesat runājuši.",
        "Jūs strādājat tieši ar cilvēkiem, kuri pieņem produkta un tehniskos lēmumus.",
      ],
    },
    process: {
      label: "Process",
      title: "No idejas līdz App Store",
      steps: [
        { title: "Definēt", text: "Kāda problēma produktam patiesībā jāatrisina?" },
        { title: "Struktūra", text: "Plūsmas, funkcionalitāte un tehniskie lēmumi." },
        { title: "Dizains", text: "Interfeiss ap reālo produktu." },
        { title: "Izstrāde", text: "Pārvēršam to strādājošā programmatūrā." },
        { title: "Testēšana", text: "Reālas ierīces, plūsmas un problēmas." },
        { title: "Palaišana", text: "Production un store relīze." },
      ],
      action: "Skatīt pilnu procesu",
    },
    secondary: {
      label: "Citi mobilie darbi",
      title: "Split & Merge",
      text: "Mobilā puzzle spēle ar dalīšanas un apvienošanas mehāniku, progresu, uzlabojumiem, reklāmu monetizāciju un iOS relīzi App Store.",
      action: "Skatīt projektu",
      imageAlt: "Split & Merge mobilās puzzle spēles ekrāni ar gameplay, progresu un uzlabojumiem.",
    },
    faq: {
      label: "Mobilo lietotņu izstrādes FAQ",
      title: "Jautājumi pirms izstrādes.",
      items: [
        { question: "Vai izstrādājat lietotnes gan iOS, gan Android?", answer: "Jā. Mēs veidojam mobilos produktus iOS un Android, bet pareizo relīzes pieeju nosakām pēc produkta, scope un esošajām sistēmām." },
        { question: "Vai varat izveidot MVP no idejas?", answer: "Jā. Varam pārvērst agrīnu ideju definētā produkta plūsmā, interfeisā un strādājošā MVP, ko var testēt un attīstīt tālāk." },
        { question: "Vai jūs arī projektējat lietotnes dizainu?", answer: "Jā. Produkta struktūra, UX un UI ir daļa no darba. Projektējam reālus stāvokļus un plūsmas un pēc tam izstrādājam izveidoto interfeisu." },
        { question: "Vai varat palīdzēt publicēt lietotni App Store?", answer: "Jā. Darbs var ietvert production buildus, store sagatavošanu, review atgriezenisko saiti, labojumus un palaišanu. HIDY un Split & Merge izgāja App Store publicēšanas procesu." },
        { question: "Vai strādājat ar esošām mobilajām lietotnēm?", answer: "Jā. Pēc pašreizējā pamata izvērtēšanas varam pievienot funkcijas, pārveidot plūsmas, atjaunot interfeisu, pieslēgt integrācijas un turpināt produkta izstrādi." },
        { question: "Cik maksā mobilās lietotnes izstrāde?", answer: "Cena ir atkarīga no scope, platformām, backend, integrācijām, produkta stāvokļiem un vēl nepieņemto lēmumu skaita. Briefs dod kontekstu reālistiskam novērtējumam." },
        { question: "Cik ilgi aizņem lietotnes izstrāde?", answer: "Termiņš ir atkarīgs no tā, vai vajadzīgs fokusēts MVP vai plašāks produkts, un nepieciešamajām sistēmām. Laiku novērtējam pēc scope un relīzes ceļa definēšanas." },
      ],
    },
    cta: {
      title: ["Ir lietotnes ideja?", "Pārvērtīsim to realitātē."],
      text: "Pastāstiet, ko vēlaties izveidot, kurā posmā pašlaik atrodaties un kas produktam ir jādara.",
      action: "Sākt projektu",
    },
  },
};
