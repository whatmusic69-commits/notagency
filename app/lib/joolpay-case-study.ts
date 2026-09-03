import type { CaseStudyCopy } from "./hidy-case-study";
import type { Lang } from "./language";

export const joolpayCaseStudyCopy: Record<Lang, CaseStudyCopy> = {
  en: {
    kicker: "Portfolio / Fintech / JOOLPAY",
    headline: "From a QR scan to a complete tipping system.",
    description: "A connected fintech product for cashless tips — combining a browser payment flow, business tools and mobile apps for iOS and Android.",
    imageAlt: "JoolPay cashless tipping interfaces showing an individual payment profile and a team selection flow on mobile phones.",
    imageCaption: "One product for individual earners, teams and the businesses managing them.",
    meta: [
      { label: "Type", value: "Cashless tipping fintech" },
      { label: "Market", value: "Latvia / Riga" },
      { label: "Platforms", value: "Web / iOS / Android" },
      { label: "Work", value: "Product / UX / Development" },
    ],
    result: {
      mark: "1 → 3",
      label: "One connected product",
      text: "The website, browser payment flow and mobile apps work as one system from the first QR scan to money management.",
    },
    problem: {
      title: "The problem",
      paragraphs: [
        "Cash tips depend on the customer having cash at exactly the right moment. For service businesses, that also leaves little structure around staff, payouts, feedback and reporting.",
        "The task was larger than building a payment screen: the customer flow had to stay immediate while the employee and business sides needed a complete operating system.",
      ],
    },
    solution: {
      title: "The solution",
      paragraphs: [
        "JoolPay gives each staff member a personal QR code. A customer scans it with the phone camera, opens a browser payment page and leaves a cashless tip without a terminal or a separate app.",
        "Behind that simple interaction is a connected product for profiles, teams, internal wallets, notifications, withdrawals, statistics, reviews and payout tracking across web, iOS and Android.",
      ],
    },
    flowTitle: "The tipping flow",
    flow: ["Scan QR", "Open profile", "Leave a tip", "Receive funds", "Manage payouts"],
    builtTitle: "What we built",
    features: [
      { title: "QR payment flow", text: "Customers move from a personal QR code to a browser-based tip payment without installing an app." },
      { title: "Staff profiles", text: "Each employee has a personal profile that connects identity, payments and their own QR code." },
      { title: "Team management", text: "Businesses can organise employees and manage team-based tipping scenarios in one system." },
      { title: "Wallets & withdrawals", text: "Internal wallets and withdrawal tools give recipients a clear path from tips to payouts." },
      { title: "Statistics & reviews", text: "Payment statistics and customer feedback make activity visible beyond a single transaction." },
      { title: "Mobile apps", text: "Android and iOS applications connect staff and business management to the wider JoolPay product." },
    ],
    processTitle: "From scan to system",
    process: [
      { title: "Product", text: "Structured the customer, employee and business sides as one connected product." },
      { title: "Payment UX", text: "Kept the QR-to-tip browser flow direct and understandable without a separate customer app." },
      { title: "Management", text: "Built the tools for staff, teams, wallets, payouts, statistics and reviews." },
      { title: "Mobile", text: "Extended the product into dedicated Android and iOS applications." },
      { title: "Connect", text: "Joined the website, payment interface and apps into one coherent ecosystem." },
    ],
    techTitle: "Under the hood",
    systems: ["QR payments", "Browser checkout", "Staff profiles", "Team management", "Internal wallets", "Notifications", "Statistics", "iOS & Android"],
    resultSection: {
      title: "The result",
      paragraphs: [
        "JoolPay became more than a cashless payment page. It is a connected fintech system serving the customer, the person receiving the tip and the business managing the process.",
        "One QR scan leads into a product spanning the browser, internal management tools and mobile apps for iOS and Android.",
      ],
    },
    serviceLink: { label: "Building a mobile product?", action: "Mobile app development" },
    cta: { title: "Have a system that needs to become a product?", text: "Tell us what you are building.", action: "Start a project" },
  },
  ru: {
    kicker: "Портфолио / Fintech / JOOLPAY",
    headline: "От QR-скана до полноценной системы чаевых.",
    description: "Связанный fintech-продукт для безналичных чаевых: оплата в браузере, инструменты для бизнеса и мобильные приложения для iOS и Android.",
    imageAlt: "Интерфейсы JoolPay для безналичных чаевых с личным платёжным профилем и выбором участника команды на смартфонах.",
    imageCaption: "Один продукт для самостоятельных специалистов, команд и управляющего ими бизнеса.",
    meta: [
      { label: "Тип", value: "Fintech для безналичных чаевых" },
      { label: "Рынок", value: "Латвия / Рига" },
      { label: "Платформы", value: "Web / iOS / Android" },
      { label: "Работа", value: "Продукт / UX / Разработка" },
    ],
    result: {
      mark: "1 → 3",
      label: "Один связанный продукт",
      text: "Сайт, браузерная оплата и мобильные приложения работают как единая система — от первого QR-скана до управления деньгами.",
    },
    problem: {
      title: "Задача",
      paragraphs: [
        "Наличные чаевые зависят от того, есть ли у клиента деньги в нужный момент. Для сервисного бизнеса такой процесс также не даёт цельной системы управления сотрудниками, выплатами, отзывами и статистикой.",
        "Задача была шире отдельного платёжного экрана: путь клиента должен был остаться моментальным, а сотрудникам и бизнесу требовался полноценный рабочий инструмент.",
      ],
    },
    solution: {
      title: "Решение",
      paragraphs: [
        "В JoolPay у каждого сотрудника есть личный QR-код. Клиент сканирует его камерой телефона, открывает страницу оплаты в браузере и оставляет чаевые без наличных, терминала и отдельного приложения.",
        "За этим простым действием работает связанный продукт с профилями, командами, внутренними кошельками, уведомлениями, выводом денег, статистикой, отзывами и учётом выплат на web, iOS и Android.",
      ],
    },
    flowTitle: "Путь чаевых",
    flow: ["Скан QR", "Профиль", "Оплата", "Получение", "Управление выплатами"],
    builtTitle: "Что мы разработали",
    features: [
      { title: "QR-оплата", text: "Клиент переходит от личного QR-кода к оплате чаевых в браузере без установки приложения." },
      { title: "Профили сотрудников", text: "Личный профиль связывает сотрудника, платежи и его собственный QR-код." },
      { title: "Управление командами", text: "Бизнес может организовать сотрудников и командные сценарии чаевых внутри одной системы." },
      { title: "Кошельки и вывод", text: "Внутренние кошельки и вывод средств создают понятный путь от чаевых до выплаты." },
      { title: "Статистика и отзывы", text: "Статистика платежей и обратная связь показывают больше, чем отдельная транзакция." },
      { title: "Мобильные приложения", text: "Приложения для Android и iOS связывают сотрудников и управление бизнесом со всей системой JoolPay." },
    ],
    processTitle: "От скана до системы",
    process: [
      { title: "Продукт", text: "Объединили клиентскую, рабочую и бизнес-части в один связанный продукт." },
      { title: "Платёжный UX", text: "Сделали путь от QR до чаевых прямым и понятным без отдельного приложения для клиента." },
      { title: "Управление", text: "Собрали инструменты для сотрудников, команд, кошельков, выплат, статистики и отзывов." },
      { title: "Mobile", text: "Расширили продукт полноценными приложениями для Android и iOS." },
      { title: "Связь", text: "Соединили сайт, платёжный интерфейс и приложения в одну цельную экосистему." },
    ],
    techTitle: "Под капотом",
    systems: ["QR-платежи", "Оплата в браузере", "Профили сотрудников", "Управление командами", "Внутренние кошельки", "Уведомления", "Статистика", "iOS и Android"],
    resultSection: {
      title: "Результат",
      paragraphs: [
        "JoolPay стал больше, чем страницей безналичной оплаты. Это связанная fintech-система для клиента, получателя чаевых и бизнеса, который управляет процессом.",
        "Один QR-скан ведёт в продукт, который охватывает браузер, внутренние инструменты управления и мобильные приложения для iOS и Android.",
      ],
    },
    serviceLink: { label: "Планируете мобильный продукт?", action: "Разработка мобильных приложений" },
    cta: { title: "Есть система, которую пора превратить в продукт?", text: "Расскажите, что вы создаёте.", action: "Обсудить проект" },
  },
  lv: {
    kicker: "Portfolio / Fintech / JOOLPAY",
    headline: "No QR skena līdz pilnvērtīgai dzeramnaudu sistēmai.",
    description: "Vienots fintech produkts bezskaidras naudas dzeramnaudām — maksājums pārlūkā, biznesa rīki un mobilās lietotnes iOS un Android.",
    imageAlt: "JoolPay bezskaidras naudas dzeramnaudu saskarnes ar individuālu maksājumu profilu un komandas dalībnieka izvēli viedtālruņos.",
    imageCaption: "Viens produkts individuāliem pakalpojumu sniedzējiem, komandām un uzņēmumiem.",
    meta: [
      { label: "Tips", value: "Bezskaidras naudas dzeramnaudu fintech" },
      { label: "Tirgus", value: "Latvija / Rīga" },
      { label: "Platformas", value: "Web / iOS / Android" },
      { label: "Darbs", value: "Produkts / UX / Izstrāde" },
    ],
    result: {
      mark: "1 → 3",
      label: "Viens vienots produkts",
      text: "Mājaslapa, maksājums pārlūkā un mobilās lietotnes darbojas kā viena sistēma — no pirmā QR skena līdz naudas pārvaldībai.",
    },
    problem: {
      title: "Uzdevums",
      paragraphs: [
        "Skaidras naudas dzeramnaudas ir atkarīgas no tā, vai klientam īstajā brīdī ir skaidra nauda. Servisa uzņēmumiem šāds process arī nedod vienotu sistēmu darbinieku, izmaksu, atsauksmju un statistikas pārvaldībai.",
        "Uzdevums bija plašāks par vienu maksājumu ekrānu: klienta ceļam bija jāpaliek tūlītējam, bet darbiniekiem un uzņēmumam bija vajadzīgs pilnvērtīgs darba rīks.",
      ],
    },
    solution: {
      title: "Risinājums",
      paragraphs: [
        "JoolPay katram darbiniekam ir personīgs QR kods. Klients to noskenē ar telefona kameru, pārlūkā atver maksājuma lapu un atstāj dzeramnaudu bez skaidras naudas, termināļa vai atsevišķas lietotnes.",
        "Aiz šīs vienkāršās darbības strādā vienots produkts ar profiliem, komandām, iekšējiem makiem, paziņojumiem, naudas izmaksu, statistiku, atsauksmēm un izmaksu uzskaiti web, iOS un Android vidē.",
      ],
    },
    flowTitle: "Dzeramnaudas ceļš",
    flow: ["Skenēt QR", "Atvērt profilu", "Atstāt dzeramnaudu", "Saņemt līdzekļus", "Pārvaldīt izmaksas"],
    builtTitle: "Ko mēs izstrādājām",
    features: [
      { title: "QR maksājums", text: "Klients no personīgā QR koda nonāk pie dzeramnaudas maksājuma pārlūkā bez lietotnes instalēšanas." },
      { title: "Darbinieku profili", text: "Personīgais profils savieno darbinieku, maksājumus un viņa QR kodu." },
      { title: "Komandu pārvaldība", text: "Uzņēmums vienā sistēmā var organizēt darbiniekus un komandu dzeramnaudu scenārijus." },
      { title: "Maki un izmaksa", text: "Iekšējie maki un naudas izmaksa veido skaidru ceļu no dzeramnaudas līdz izmaksai." },
      { title: "Statistika un atsauksmes", text: "Maksājumu statistika un klientu atsauksmes padara aktivitāti redzamu plašāk par vienu darījumu." },
      { title: "Mobilās lietotnes", text: "Android un iOS lietotnes savieno darbiniekus un biznesa pārvaldību ar visu JoolPay produktu." },
    ],
    processTitle: "No skena līdz sistēmai",
    process: [
      { title: "Produkts", text: "Apvienojām klienta, darbinieka un biznesa puses vienā saistītā produktā." },
      { title: "Maksājumu UX", text: "Padarījām ceļu no QR līdz dzeramnaudai tiešu un saprotamu bez atsevišķas klienta lietotnes." },
      { title: "Pārvaldība", text: "Izveidojām rīkus darbiniekiem, komandām, makiem, izmaksām, statistikai un atsauksmēm." },
      { title: "Mobile", text: "Paplašinājām produktu ar Android un iOS lietotnēm." },
      { title: "Savienošana", text: "Savienojām mājaslapu, maksājumu saskarni un lietotnes vienotā ekosistēmā." },
    ],
    techTitle: "Tehniskā puse",
    systems: ["QR maksājumi", "Maksājums pārlūkā", "Darbinieku profili", "Komandu pārvaldība", "Iekšējie maki", "Paziņojumi", "Statistika", "iOS un Android"],
    resultSection: {
      title: "Rezultāts",
      paragraphs: [
        "JoolPay kļuva par ko vairāk nekā bezskaidras naudas maksājumu lapu. Tā ir vienota fintech sistēma klientam, dzeramnaudas saņēmējam un uzņēmumam, kas pārvalda procesu.",
        "Viens QR skens ved uz produktu, kas aptver pārlūku, iekšējos pārvaldības rīkus un mobilās lietotnes iOS un Android.",
      ],
    },
    serviceLink: { label: "Plānojat mobilo produktu?", action: "Mobilo lietotņu izstrāde" },
    cta: { title: "Ir sistēma, kas jāpārvērš produktā?", text: "Pastāstiet, ko veidojat.", action: "Sākt projektu" },
  },
};
