import type { CaseStudyCopy } from "./hidy-case-study";
import type { Lang } from "./language";

export const coinerHeroCaseStudyCopy: Record<Lang, CaseStudyCopy> = {
  en: {
    kicker: "Portfolio / Web3 platform / COINER HERO",
    headline: "One wallet. Multiple networks. One clear swap flow.",
    description: "A cross-chain crypto platform designed and built from scratch — with wallet connection, asset selection and swap routing through Li.Fi in one responsive interface.",
    imageAlt: "Coiner Hero cross-chain swap interface with wallet connection, asset selection and source and destination networks.",
    imageCaption: "The core product flow: connect a wallet, select what moves and route the swap across networks through one interface.",
    meta: [
      { label: "Type", value: "Web3 bridge platform" },
      { label: "Platform", value: "Web" },
      { label: "Work", value: "Product / Interface / Development / Integration" },
      { label: "System", value: "Wallet connection / Li.Fi routing" },
    ],
    result: { mark: "1 → N", label: "Across networks", text: "One interface connects the user's wallet to Li.Fi swap routing for moving assets between different blockchain networks." },
    problem: {
      title: "The problem",
      paragraphs: [
        "The client needed a simple service for working with crypto through the user's own wallet. The difficult part was not drawing a swap form, but making movement between different networks understandable.",
        "Wallet connection, asset choices and cross-network routing had to feel like one product instead of a sequence of disconnected technical actions.",
      ],
    },
    solution: {
      title: "The solution",
      paragraphs: [
        "We designed and developed a unified interface around the user's wallet. The product brings asset and network selection into one focused exchange flow.",
        "Li.Fi handles swap routing between networks, while Coiner Hero keeps the interaction clear, responsive and usable across different devices.",
      ],
    },
    flowTitle: "The swap flow",
    flow: ["Connect wallet", "Choose asset", "Select networks", "Route through Li.Fi", "Confirm swap"],
    builtTitle: "What we built",
    features: [
      { title: "Wallet connection", text: "Users enter the product through their own crypto wallet." },
      { title: "Cross-chain swaps", text: "The interface supports moving assets between different blockchain networks." },
      { title: "Li.Fi routing", text: "Swap routes are configured through Li.Fi inside the product flow." },
      { title: "Asset selection", text: "Spend and receive assets are selected in one clear exchange interface." },
      { title: "Network selection", text: "Source and destination networks are handled as part of the same action." },
      { title: "Responsive interface", text: "The product was adapted to remain usable across different device sizes." },
    ],
    processTitle: "From task to transaction flow",
    process: [
      { title: "Product", text: "Reduced a technical cross-chain task to one understandable flow." },
      { title: "UX", text: "Structured wallet, asset, network and swap decisions." },
      { title: "Interface", text: "Designed a focused exchange experience around the core action." },
      { title: "Integration", text: "Connected wallet access and Li.Fi route handling." },
      { title: "Adapt", text: "Prepared the product for different devices and screen sizes." },
    ],
    techTitle: "Under the hood",
    systems: ["Wallet connection", "Li.Fi", "Cross-chain routing", "Asset selection", "Network selection", "Swap flow", "Responsive UI"],
    resultSection: {
      title: "The result",
      paragraphs: [
        "Coiner Hero turned cross-network crypto movement into one focused interface built around the user's own wallet.",
        "Wallet connection, asset choices and Li.Fi routing now work as one product flow instead of separate technical steps.",
      ],
    },
    cta: { title: "Building a product with complex logic?", text: "Tell us what needs to become clear and usable.", action: "Start a project" },
  },
  ru: {
    kicker: "Портфолио / Web3-платформа / COINER HERO",
    headline: "Один кошелёк. Разные сети. Один понятный обмен.",
    description: "Платформа для кроссчейн-обмена, спроектированная и разработанная с нуля — с подключением кошелька, выбором активов и маршрутизацией через Li.Fi в одном адаптивном интерфейсе.",
    imageAlt: "Интерфейс Coiner Hero для кроссчейн-обмена с подключением кошелька, выбором активов и исходной и целевой сетей.",
    imageCaption: "Основной сценарий: подключить кошелёк, выбрать активы и провести обмен между сетями через один интерфейс.",
    meta: [
      { label: "Тип", value: "Web3-платформа" },
      { label: "Платформа", value: "Веб" },
      { label: "Работа", value: "Продукт / Интерфейс / Разработка / Интеграция" },
      { label: "Система", value: "Подключение кошелька / Li.Fi" },
    ],
    result: { mark: "1 → N", label: "Между разными сетями", text: "Один интерфейс связывает кошелёк пользователя с маршрутизацией Li.Fi для перевода активов между блокчейн-сетями." },
    problem: {
      title: "Задача",
      paragraphs: [
        "Клиенту был нужен простой сервис для работы с криптовалютами через собственный кошелёк пользователя. Сложность заключалась не в форме обмена, а в понятном движении активов между разными сетями.",
        "Подключение кошелька, выбор активов и межсетевой маршрут должны были ощущаться одним продуктом, а не набором разрозненных технических действий.",
      ],
    },
    solution: {
      title: "Решение",
      paragraphs: [
        "Мы спроектировали и разработали единый интерфейс вокруг кошелька пользователя. Выбор активов и сетей собран в одном сфокусированном сценарии обмена.",
        "Li.Fi отвечает за маршрутизацию между сетями, а Coiner Hero делает взаимодействие понятным, быстрым и удобным на разных устройствах.",
      ],
    },
    flowTitle: "Путь обмена",
    flow: ["Подключить кошелёк", "Выбрать актив", "Указать сети", "Построить маршрут", "Подтвердить обмен"],
    builtTitle: "Что мы разработали",
    features: [
      { title: "Подключение кошелька", text: "Пользователь входит в продукт через собственный криптокошелёк." },
      { title: "Кроссчейн-обмен", text: "Интерфейс поддерживает перевод активов между различными блокчейн-сетями." },
      { title: "Маршрутизация Li.Fi", text: "Маршруты обмена настроены через Li.Fi внутри единого сценария." },
      { title: "Выбор активов", text: "Отдаваемый и получаемый актив выбираются в одном понятном интерфейсе." },
      { title: "Выбор сетей", text: "Исходная и целевая сети становятся частью одного действия." },
      { title: "Адаптивный интерфейс", text: "Продукт остаётся удобным на разных устройствах и размерах экрана." },
    ],
    processTitle: "От задачи до обмена",
    process: [
      { title: "Продукт", text: "Собрали сложную межсетевую задачу в один понятный сценарий." },
      { title: "UX", text: "Выстроили решения вокруг кошелька, активов, сетей и обмена." },
      { title: "Интерфейс", text: "Сфокусировали продукт на основном действии пользователя." },
      { title: "Интеграция", text: "Подключили кошелёк и обработку маршрутов через Li.Fi." },
      { title: "Адаптация", text: "Подготовили продукт для разных устройств и экранов." },
    ],
    techTitle: "Под капотом",
    systems: ["Подключение кошелька", "Li.Fi", "Кроссчейн-маршруты", "Выбор активов", "Выбор сетей", "Сценарий обмена", "Адаптивный интерфейс"],
    resultSection: {
      title: "Результат",
      paragraphs: [
        "Coiner Hero превратил перевод криптоактивов между сетями в один сфокусированный интерфейс вокруг собственного кошелька пользователя.",
        "Подключение, выбор активов и маршрутизация через Li.Fi работают как единый продукт, а не отдельные технические шаги.",
      ],
    },
    cta: { title: "Строите продукт со сложной логикой?", text: "Расскажите, что нужно сделать понятным и удобным.", action: "Обсудить проект" },
  },
  lv: {
    kicker: "Portfolio / Web3 platforma / COINER HERO",
    headline: "Viens maks. Dažādi tīkli. Viena skaidra apmaiņa.",
    description: "No nulles projektēta un izstrādāta starptīklu kriptovalūtu apmaiņas platforma — ar maka pieslēgšanu, aktīvu izvēli un maršrutēšanu caur Li.Fi vienā adaptīvā interfeisā.",
    imageAlt: "Coiner Hero starptīklu apmaiņas interfeiss ar maka pieslēgšanu, aktīvu un sākuma un mērķa tīklu izvēli.",
    imageCaption: "Galvenā plūsma: pieslēgt maku, izvēlēties aktīvus un veikt apmaiņu starp tīkliem vienā interfeisā.",
    meta: [
      { label: "Tips", value: "Web3 platforma" },
      { label: "Platforma", value: "Tīmeklis" },
      { label: "Darbs", value: "Produkts / Interfeiss / Izstrāde / Integrācija" },
      { label: "Sistēma", value: "Maka pieslēgšana / Li.Fi" },
    ],
    result: { mark: "1 → N", label: "Starp dažādiem tīkliem", text: "Viens interfeiss savieno lietotāja maku ar Li.Fi maršrutēšanu aktīvu pārvietošanai starp blokķēžu tīkliem." },
    problem: {
      title: "Uzdevums",
      paragraphs: [
        "Klientam bija vajadzīgs vienkāršs serviss darbam ar kriptovalūtām caur lietotāja paša maku. Sarežģītā daļa nebija apmaiņas forma, bet saprotama aktīvu kustība starp dažādiem tīkliem.",
        "Maka pieslēgšanai, aktīvu izvēlei un starptīklu maršrutam bija jājūtas kā vienam produktam, nevis atsevišķām tehniskām darbībām.",
      ],
    },
    solution: {
      title: "Risinājums",
      paragraphs: [
        "Mēs projektējām un izstrādājām vienotu interfeisu ap lietotāja maku. Aktīvu un tīklu izvēle ir apvienota vienā fokusētā apmaiņas plūsmā.",
        "Li.Fi nodrošina maršrutēšanu starp tīkliem, bet Coiner Hero padara mijiedarbību skaidru, ātru un ērtu dažādās ierīcēs.",
      ],
    },
    flowTitle: "Apmaiņas plūsma",
    flow: ["Pieslēgt maku", "Izvēlēties aktīvu", "Norādīt tīklus", "Izveidot maršrutu", "Apstiprināt apmaiņu"],
    builtTitle: "Ko mēs izstrādājām",
    features: [
      { title: "Maka pieslēgšana", text: "Lietotājs ieiet produktā caur savu kriptovalūtu maku." },
      { title: "Starptīklu apmaiņa", text: "Interfeiss atbalsta aktīvu pārvietošanu starp dažādiem blokķēžu tīkliem." },
      { title: "Li.Fi maršrutēšana", text: "Apmaiņas maršruti ir konfigurēti caur Li.Fi vienotā produkta plūsmā." },
      { title: "Aktīvu izvēle", text: "Atdodamais un saņemamais aktīvs tiek izvēlēts vienā skaidrā interfeisā." },
      { title: "Tīklu izvēle", text: "Sākuma un mērķa tīkli ir vienas darbības daļa." },
      { title: "Adaptīvs interfeiss", text: "Produkts paliek ērts dažādās ierīcēs un ekrānu izmēros." },
    ],
    processTitle: "No uzdevuma līdz apmaiņai",
    process: [
      { title: "Produkts", text: "Salikām sarežģītu starptīklu uzdevumu vienā skaidrā plūsmā." },
      { title: "UX", text: "Sakārtojām lēmumus ap maku, aktīviem, tīkliem un apmaiņu." },
      { title: "Interfeiss", text: "Fokusējām produktu uz lietotāja galveno darbību." },
      { title: "Integrācija", text: "Pieslēdzām maku un Li.Fi maršrutu apstrādi." },
      { title: "Adaptācija", text: "Sagatavojām produktu dažādām ierīcēm un ekrāniem." },
    ],
    techTitle: "Tehniskā puse",
    systems: ["Maka pieslēgšana", "Li.Fi", "Starptīklu maršruti", "Aktīvu izvēle", "Tīklu izvēle", "Apmaiņas plūsma", "Adaptīvs interfeiss"],
    resultSection: {
      title: "Rezultāts",
      paragraphs: [
        "Coiner Hero pārvērta kriptoaktīvu pārvietošanu starp tīkliem vienā fokusētā interfeisā ap lietotāja paša maku.",
        "Pieslēgšana, aktīvu izvēle un Li.Fi maršrutēšana darbojas kā viens produkts, nevis atsevišķi tehniski soļi.",
      ],
    },
    cta: { title: "Veidojat produktu ar sarežģītu loģiku?", text: "Pastāstiet, kam jākļūst skaidram un ērtam.", action: "Sākt projektu" },
  },
};
