import type { Lang } from "./language";

type Copy = {
  title: string; description: string; heading: string; intro: string;
  action: string; work: string; buildTitle: string;
  build: { title: string; text: string }[];
  casesTitle: string; cases: { slug: string; name: string; text: string; alt: string }[];
  processTitle: string; steps: { title: string; text: string }[];
  teamTitle: string; team: string; faqTitle: string;
  faq: { question: string; answer: string }[]; cta: string;
};

export const webAppCopy: Record<Lang, Copy> = {
  en: {
    title: "Web Application Development Studio — NotAgency",
    description: "Custom web apps, customer portals and marketplaces for businesses worldwide. Product design, development and launch directly with the NotAgency team.",
    heading: "Complex workflows. Usable products.",
    intro: "We design and build web applications around how your business works — from customer portals to marketplaces and connected payment flows. Based in Riga. Working worldwide.",
    action: "Discuss your web app", work: "Explore the case study", buildTitle: "What does your product need to do?",
    build: [
      { title: "Customer portals", text: "Give customers a place to manage accounts, documents and requests, with clear access for each role." },
      { title: "Marketplaces & subscriptions", text: "Connect discovery, creator tools, payments and recurring access in one product." },
      { title: "Business tools", text: "Replace disconnected manual steps with dashboards, team workflows and integrations." },
    ],
    casesTitle: "Built by us. See how it works.",
    cases: [
      { slug: "underbpm", name: "UNDERBPM", text: "A music marketplace connecting beat sales, subscriptions, Stripe payments and automated YouTube publishing. Creator tools and the storefront work as one system.", alt: "UNDERBPM music marketplace interface" },
      { slug: "joolpay", name: "JoolPay", text: "A cashless tipping product connecting QR codes, browser payments, staff profiles and team management with mobile apps. A simple customer flow backed by business tools.", alt: "JoolPay cashless tipping product interfaces" },
    ],
    processTitle: "From the first workflow to launch.",
    steps: [
      { title: "Define the first release", text: "Map users, roles and the main journey. Agree on scope, dependencies and what can wait." },
      { title: "Design the product", text: "Shape screens and interactions around real tasks before committing to implementation." },
      { title: "Build & validate", text: "Develop the interface, data flows and integrations. Check permissions, error states and complete user journeys." },
      { title: "Launch & hand over", text: "Prepare deployment, access and handover. Agree on support and the next iteration." },
    ],
    teamTitle: "Work directly with the people building it.",
    team: "We are an independent team of two developers based in Riga, working with clients worldwide. Scope, milestones, communication and time zone overlap are agreed at the start. Send your existing workflow or product idea — we will use it to define a practical first release.",
    faqTitle: "Before we build.",
    faq: [
      { question: "Can we start with an MVP?", answer: "Yes. We can scope a first release around the core user journey, with a clear boundary between launch requirements and later features." },
      { question: "How much does a web app cost?", answer: "The estimate depends on user roles, workflows, integrations and the existing system. Share your requirements and budget range so we can propose a realistic scope." },
      { question: "How long will development take?", answer: "We agree on a timeline after reviewing the scope and dependencies. A focused first release and a marketplace with multiple roles need different plans." },
      { question: "Can you connect an existing service?", answer: "We review its API, documentation and access requirements first, then define the integration work and any limitations." },
      { question: "Do you work with clients outside Latvia?", answer: "Yes. We work remotely with clients worldwide and agree on communication, review points and meeting times before the project begins." },
    ], cta: "Tell us what your web app needs to solve.",
  },
  ru: {
    title: "Разработка веб-приложений для бизнеса — NotAgency",
    description: "Веб-приложения, личные кабинеты и маркетплейсы для бизнеса по всему миру. Проектирование, разработка и запуск напрямую с командой NotAgency.",
    heading: "Сложные процессы. Понятные продукты.",
    intro: "Проектируем и разрабатываем веб-приложения под задачи бизнеса: личные кабинеты, маркетплейсы и платёжные сервисы. Мы в Риге, наши клиенты — по всему миру.",
    action: "Обсудить веб-приложение", work: "Посмотреть кейс", buildTitle: "Что должен делать ваш продукт?",
    build: [
      { title: "Личные кабинеты", text: "Аккаунты, документы и обращения в одном месте, с понятными правами доступа для каждой роли." },
      { title: "Маркетплейсы и подписки", text: "Каталог, инструменты авторов, оплата и доступ по подписке в одном продукте." },
      { title: "Инструменты для бизнеса", text: "Панели управления, командные процессы и интеграции вместо разрозненных ручных операций." },
    ],
    casesTitle: "Наши продукты в деталях.",
    cases: [
      { slug: "underbpm", name: "UNDERBPM", text: "Музыкальный маркетплейс: продажа битов, подписки, платежи Stripe и автоматическая публикация на YouTube. Витрина и инструменты авторов связаны в одну систему.", alt: "Интерфейс музыкального маркетплейса UNDERBPM" },
      { slug: "joolpay", name: "JoolPay", text: "Сервис безналичных чаевых: QR-коды, оплата в браузере, профили сотрудников и управление командами связаны с мобильными приложениями. Простой путь клиента и инструменты для бизнеса.", alt: "Интерфейсы сервиса безналичных чаевых JoolPay" },
    ],
    processTitle: "От первого сценария до запуска.",
    steps: [
      { title: "Определяем первую версию", text: "Разбираем пользователей, роли и основной сценарий. Фиксируем объём, зависимости и то, что можно отложить." },
      { title: "Проектируем продукт", text: "Продумываем экраны и взаимодействия под реальные задачи до начала разработки." },
      { title: "Разрабатываем и проверяем", text: "Собираем интерфейс, работу с данными и интеграции. Проверяем права доступа, ошибки и полные пользовательские сценарии." },
      { title: "Запускаем и передаём", text: "Готовим размещение, доступы и передачу проекта. Согласуем поддержку и следующую итерацию." },
    ],
    teamTitle: "Общайтесь с теми, кто создаёт продукт.",
    team: "Мы — независимая команда из двух разработчиков в Риге. Работаем с клиентами по всему миру. В начале проекта согласуем объём, этапы, коммуникацию и время встреч с учётом часовых поясов. Пришлите идею или описание текущего процесса — на этой основе определим первую версию.",
    faqTitle: "До начала работы.",
    faq: [
      { question: "Можно начать с MVP?", answer: "Да. Определим первую версию вокруг основного пользовательского сценария и отделим необходимое для запуска от будущих функций." },
      { question: "Сколько стоит веб-приложение?", answer: "Оценка зависит от ролей, сценариев, интеграций и существующей системы. Пришлите требования и диапазон бюджета — предложим реалистичный объём работ." },
      { question: "Сколько времени занимает разработка?", answer: "Сроки согласуем после изучения объёма и зависимостей. Компактная первая версия и маркетплейс с несколькими ролями требуют разных планов." },
      { question: "Можно подключить существующий сервис?", answer: "Сначала изучим API, документацию и требования к доступу. Затем определим работы по интеграции и ограничения." },
      { question: "Вы работаете с клиентами за пределами Латвии?", answer: "Да, удалённо работаем с клиентами по всему миру. До старта согласуем общение, этапы проверки и время встреч." },
    ], cta: "Какую задачу должно решить ваше приложение?",
  },
  lv: {
    title: "Tīmekļa lietotņu izstrāde uzņēmumiem — NotAgency",
    description: "Individuālas tīmekļa lietotnes, klientu portāli un tirdzniecības platformas uzņēmumiem visā pasaulē. No projektēšanas līdz palaišanai ar NotAgency.",
    heading: "Sarežģīti procesi. Ērti produkti.",
    intro: "Projektējam un izstrādājam tīmekļa lietotnes jūsu biznesa vajadzībām: klientu portālus, tirdzniecības platformas un maksājumu risinājumus. Strādājam no Rīgas ar klientiem visā pasaulē.",
    action: "Apspriest tīmekļa lietotni", work: "Apskatīt projektu", buildTitle: "Kas jūsu produktam ir jāpaveic?",
    build: [
      { title: "Klientu portāli", text: "Konti, dokumenti un pieprasījumi vienuviet ar skaidrām piekļuves tiesībām katrai lomai." },
      { title: "Tirdzniecība un abonementi", text: "Katalogs, autoru rīki, maksājumi un abonementu piekļuve vienā produktā." },
      { title: "Biznesa rīki", text: "Vadības paneļi, komandas darba procesi un integrācijas atsevišķu manuālu darbību vietā." },
    ],
    casesTitle: "Mūsu darbi tuvplānā.",
    cases: [
      { slug: "underbpm", name: "UNDERBPM", text: "Mūzikas tirdzniecības platforma, kas apvieno bītu pārdošanu, abonementus, Stripe maksājumus un automātisku publicēšanu YouTube. Veikals un autoru rīki darbojas vienā sistēmā.", alt: "UNDERBPM mūzikas tirdzniecības platformas saskarne" },
      { slug: "joolpay", name: "JoolPay", text: "Bezskaidras naudas dzeramnaudas produkts: QR kodi, maksājumi pārlūkā, darbinieku profili un komandu pārvaldība ir savienoti ar mobilajām lietotnēm. Ērts klienta ceļš un rīki uzņēmumam.", alt: "JoolPay bezskaidras naudas dzeramnaudas produkta saskarnes" },
    ],
    processTitle: "No pirmā scenārija līdz palaišanai.",
    steps: [
      { title: "Nosakām pirmās versijas apjomu", text: "Apzinām lietotājus, lomas un galveno scenāriju. Vienojamies par apjomu, atkarībām un vēlākām funkcijām." },
      { title: "Projektējam produktu", text: "Pirms izstrādes veidojam ekrānus un mijiedarbību atbilstoši reāliem uzdevumiem." },
      { title: "Izstrādājam un pārbaudām", text: "Veidojam saskarni, datu plūsmas un integrācijas. Pārbaudām piekļuves tiesības, kļūdu situācijas un pilnus lietotāju scenārijus." },
      { title: "Palaižam un nododam", text: "Sagatavojam izvietošanu, piekļuves un projekta nodošanu. Vienojamies par atbalstu un nākamo izstrādes posmu." },
    ],
    teamTitle: "Sadarbojieties tieši ar izstrādātājiem.",
    team: "Esam neatkarīga divu izstrādātāju komanda Rīgā un strādājam ar klientiem visā pasaulē. Projekta sākumā vienojamies par apjomu, posmiem, saziņu un tikšanās laikiem, ņemot vērā laika joslas. Atsūtiet ideju vai pašreizējā procesa aprakstu — tas palīdzēs noteikt praktisku pirmo versiju.",
    faqTitle: "Pirms sākam.",
    faq: [
      { question: "Vai varam sākt ar MVP?", answer: "Jā. Pirmo versiju varam veidot ap galveno lietotāja scenāriju, skaidri nošķirot palaišanai nepieciešamo no nākotnes funkcijām." },
      { question: "Cik maksā tīmekļa lietotne?", answer: "Tāme ir atkarīga no lomām, scenārijiem, integrācijām un esošās sistēmas. Atsūtiet prasības un budžeta diapazonu, lai varam piedāvāt reālistisku darba apjomu." },
      { question: "Cik ilga ir izstrāde?", answer: "Par termiņu vienojamies pēc apjoma un atkarību izvērtēšanas. Nelielai pirmajai versijai un platformai ar vairākām lomām vajadzīgi atšķirīgi plāni." },
      { question: "Vai varat pieslēgt esošu pakalpojumu?", answer: "Vispirms izvērtējam API, dokumentāciju un piekļuves prasības. Tad nosakām integrācijas darbus un ierobežojumus." },
      { question: "Vai strādājat ar klientiem ārpus Latvijas?", answer: "Jā, attālināti strādājam ar klientiem visā pasaulē. Pirms sākuma vienojamies par saziņu, pārskatīšanas posmiem un tikšanās laikiem." },
    ], cta: "Kādu uzdevumu atrisinās jūsu lietotne?",
  },
};
