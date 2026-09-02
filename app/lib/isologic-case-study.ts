import type { CaseStudyCopy } from "./hidy-case-study";
import type { Lang } from "./language";

export const isologicCaseStudyCopy: Record<Lang, CaseStudyCopy> = {
  en: {
    kicker: "Portfolio / Company website / ISOLOGIC",
    headline: "From a rough direction to a website built to stay current.",
    description: "A clean company website for ISO and compliance support — shaped from the initial structure through development, content management, SEO and launch.",
    imageAlt: "ISOLogic company website showing ISO and compliance services for Latvian businesses.",
    imageCaption: "A calm, multilingual company website designed to make specialist ISO support clear and accessible.",
    meta: [
      { label: "Type", value: "Company website" },
      { label: "Platform", value: "Web" },
      { label: "Work", value: "Structure / Development / Admin / Launch" },
      { label: "Systems", value: "Contact form / Autodeploy / SEO" },
    ],
    result: { mark: "→LIVE", label: "Edit to production", text: "Content changes made through the admin panel are connected to autodeploy and move onto the live website." },
    problem: {
      title: "The starting point",
      paragraphs: [
        "The client arrived with an idea, a clear vision and a reference for the direction. What did not exist yet was the complete website structure and the system needed to keep it useful after launch.",
        "The site had to explain specialist ISO and compliance work calmly, support enquiries and remain practical for the client to maintain.",
      ],
    },
    solution: {
      title: "The solution",
      paragraphs: [
        "We shaped the remaining structure and built a clean public website around the company's services. The work covered the domain, contact form, content administration and production setup.",
        "A practical admin panel lets the client edit content, while autodeploy moves those changes to the live site. SEO was prepared as part of the launch rather than added afterwards.",
      ],
    },
    flowTitle: "Content workflow",
    flow: ["Open admin", "Edit content", "Save changes", "Autodeploy", "Live website"],
    builtTitle: "What we built",
    features: [
      { title: "Site structure", text: "The initial direction became a complete, understandable company website." },
      { title: "Public website", text: "A clean interface presents ISO and compliance support without unnecessary complexity." },
      { title: "Admin panel", text: "The client can update website content through a practical editing workflow." },
      { title: "Autodeploy", text: "Saved content changes are connected to deployment on the live website." },
      { title: "Contact form", text: "A configured enquiry path turns the website into a working business touchpoint." },
      { title: "SEO + launch", text: "Domain setup, production configuration and search optimisation were handled together." },
    ],
    processTitle: "From direction to launch",
    process: [
      { title: "Direction", text: "Worked from the client's vision and reference." },
      { title: "Structure", text: "Turned the initial idea into a complete content system." },
      { title: "Build", text: "Developed and configured the public website." },
      { title: "Admin", text: "Created content editing and automatic deployment." },
      { title: "Launch", text: "Connected the domain, form, production setup and SEO." },
    ],
    techTitle: "Under the hood",
    systems: ["Admin panel", "Content editing", "Autodeploy", "Contact form", "Domain setup", "SEO", "Public website"],
    resultSection: {
      title: "The result",
      paragraphs: [
        "ISOLogic moved from an initial visual direction to a complete company website with the operational pieces required for everyday use.",
        "The client can manage content through the admin panel, publish changes through autodeploy and receive enquiries through the live website.",
      ],
    },
    cta: { title: "Need a website that remains useful after launch?", text: "Tell us what the business needs to communicate and manage.", action: "Start a project" },
  },
  ru: {
    kicker: "Портфолио / Сайт компании / ISOLOGIC",
    headline: "От общего направления к сайту, который удобно поддерживать.",
    description: "Спокойный сайт для компании в сфере ISO и соответствия требованиям — от структуры и разработки до управления контентом, SEO и запуска.",
    imageAlt: "Сайт ISOLogic с услугами ISO и поддержки соответствия требованиям для латвийских компаний.",
    imageCaption: "Спокойный многоязычный сайт, который понятно представляет специализированную помощь в сфере ISO.",
    meta: [
      { label: "Тип", value: "Сайт компании" },
      { label: "Платформа", value: "Веб" },
      { label: "Работа", value: "Структура / Разработка / Управление / Запуск" },
      { label: "Системы", value: "Форма / Автопубликация / SEO" },
    ],
    result: { mark: "→LIVE", label: "От правки до публикации", text: "Изменения контента из админ-панели связаны с автоматической публикацией и попадают на рабочий сайт." },
    problem: {
      title: "Исходная точка",
      paragraphs: [
        "Клиент пришёл с идеей, понятным видением и примером желаемого направления. Но полной структуры сайта и системы для его дальнейшей поддержки ещё не было.",
        "Сайт должен был спокойно объяснять специализированную работу с ISO, принимать обращения и оставаться удобным для самостоятельного обновления.",
      ],
    },
    solution: {
      title: "Решение",
      paragraphs: [
        "Мы собрали недостающую структуру и разработали чистый публичный сайт вокруг услуг компании. В работу вошли домен, контактная форма, управление контентом и настройка рабочей версии.",
        "Удобная админ-панель позволяет клиенту редактировать материалы, а автоматическая публикация переносит изменения на сайт. SEO подготовили сразу в рамках запуска.",
      ],
    },
    flowTitle: "Работа с контентом",
    flow: ["Открыть панель", "Изменить текст", "Сохранить", "Опубликовать", "Обновить сайт"],
    builtTitle: "Что мы разработали",
    features: [
      { title: "Структура сайта", text: "Исходное направление превратилось в полный и понятный сайт компании." },
      { title: "Публичный сайт", text: "Чистый интерфейс представляет услуги ISO без лишней сложности." },
      { title: "Админ-панель", text: "Клиент может самостоятельно обновлять материалы через удобный сценарий." },
      { title: "Автопубликация", text: "Сохранённые изменения контента автоматически попадают на рабочий сайт." },
      { title: "Контактная форма", text: "Настроенный путь обращения делает сайт рабочей точкой контакта с бизнесом." },
      { title: "SEO + запуск", text: "Домен, рабочая конфигурация и поисковая оптимизация подготовлены вместе." },
    ],
    processTitle: "От направления до запуска",
    process: [
      { title: "Направление", text: "Оттолкнулись от видения и примера клиента." },
      { title: "Структура", text: "Превратили исходную идею в полную систему контента." },
      { title: "Разработка", text: "Собрали и настроили публичный сайт." },
      { title: "Управление", text: "Создали редактирование и автоматическую публикацию." },
      { title: "Запуск", text: "Подключили домен, форму, рабочую среду и SEO." },
    ],
    techTitle: "Под капотом",
    systems: ["Админ-панель", "Редактирование контента", "Автопубликация", "Контактная форма", "Настройка домена", "SEO", "Публичный сайт"],
    resultSection: {
      title: "Результат",
      paragraphs: [
        "ISOLogic прошёл путь от общего визуального направления до полноценного сайта компании со всеми системами для повседневной работы.",
        "Клиент может управлять контентом через админ-панель, публиковать изменения автоматически и получать обращения через рабочий сайт.",
      ],
    },
    cta: { title: "Нужен сайт, который остаётся полезным после запуска?", text: "Расскажите, что бизнесу нужно показывать и обновлять.", action: "Обсудить проект" },
  },
  lv: {
    kicker: "Portfolio / Uzņēmuma mājaslapa / ISOLOGIC",
    headline: "No aptuvena virziena līdz mājaslapai, ko ir ērti uzturēt.",
    description: "Mierīga mājaslapa ISO un atbilstības uzņēmumam — no struktūras un izstrādes līdz satura pārvaldībai, SEO un palaišanai.",
    imageAlt: "ISOLogic mājaslapa ar ISO un atbilstības pakalpojumiem Latvijas uzņēmumiem.",
    imageCaption: "Mierīga daudzvalodu mājaslapa, kas skaidri parāda specializētu ISO atbalstu.",
    meta: [
      { label: "Tips", value: "Uzņēmuma mājaslapa" },
      { label: "Platforma", value: "Tīmeklis" },
      { label: "Darbs", value: "Struktūra / Izstrāde / Pārvaldība / Palaišana" },
      { label: "Sistēmas", value: "Forma / Autopublicēšana / SEO" },
    ],
    result: { mark: "→LIVE", label: "No labojuma līdz publikācijai", text: "Admin panelī veiktās satura izmaiņas ir savienotas ar automātisku publicēšanu un nonāk dzīvajā mājaslapā." },
    problem: {
      title: "Sākuma punkts",
      paragraphs: [
        "Klients atnāca ar ideju, skaidru vīziju un vēlamā virziena piemēru. Taču pilna mājaslapas struktūra un sistēma tās turpmākai uzturēšanai vēl nebija izveidota.",
        "Mājaslapai bija mierīgi jāizskaidro specializētais ISO darbs, jāpieņem pieteikumi un jāpaliek ērtai patstāvīgai atjaunošanai.",
      ],
    },
    solution: {
      title: "Risinājums",
      paragraphs: [
        "Mēs izveidojām trūkstošo struktūru un tīru publisko mājaslapu ap uzņēmuma pakalpojumiem. Darbs ietvēra domēnu, kontaktformu, satura pārvaldību un produkcijas vides iestatīšanu.",
        "Ērts admin panelis ļauj klientam rediģēt materiālus, bet automātiska publicēšana pārnes izmaiņas uz dzīvo lapu. SEO sagatavojām kā palaišanas daļu.",
      ],
    },
    flowTitle: "Darbs ar saturu",
    flow: ["Atvērt paneli", "Labot saturu", "Saglabāt", "Publicēt", "Atjaunot lapu"],
    builtTitle: "Ko mēs izstrādājām",
    features: [
      { title: "Lapas struktūra", text: "Sākotnējais virziens kļuva par pilnu un saprotamu uzņēmuma mājaslapu." },
      { title: "Publiskā lapa", text: "Tīrs interfeiss parāda ISO pakalpojumus bez liekas sarežģītības." },
      { title: "Admin panelis", text: "Klients var patstāvīgi atjaunot materiālus ērtā rediģēšanas plūsmā." },
      { title: "Autopublicēšana", text: "Saglabātās satura izmaiņas automātiski nonāk dzīvajā mājaslapā." },
      { title: "Kontaktforma", text: "Sakārtots pieteikuma ceļš padara lapu par strādājošu biznesa kontaktpunktu." },
      { title: "SEO + palaišana", text: "Domēns, produkcijas vide un meklētāju optimizācija tika sagatavoti kopā." },
    ],
    processTitle: "No virziena līdz palaišanai",
    process: [
      { title: "Virziens", text: "Sākām ar klienta vīziju un piemēru." },
      { title: "Struktūra", text: "Pārvērtām sākotnējo ideju pilnā satura sistēmā." },
      { title: "Izstrāde", text: "Uzbūvējām un sakārtojām publisko mājaslapu." },
      { title: "Pārvaldība", text: "Izveidojām rediģēšanu un automātisku publicēšanu." },
      { title: "Palaišana", text: "Pieslēdzām domēnu, formu, produkcijas vidi un SEO." },
    ],
    techTitle: "Tehniskā puse",
    systems: ["Admin panelis", "Satura rediģēšana", "Autopublicēšana", "Kontaktforma", "Domēna iestatīšana", "SEO", "Publiskā mājaslapa"],
    resultSection: {
      title: "Rezultāts",
      paragraphs: [
        "ISOLogic no aptuvena vizuālā virziena nonāca līdz pilnvērtīgai uzņēmuma mājaslapai ar ikdienas darbam vajadzīgajām sistēmām.",
        "Klients var pārvaldīt saturu admin panelī, automātiski publicēt izmaiņas un saņemt pieteikumus caur dzīvo mājaslapu.",
      ],
    },
    cta: { title: "Vajag mājaslapu, kas paliek noderīga pēc palaišanas?", text: "Pastāstiet, kas biznesam jārāda un jāatjauno.", action: "Sākt projektu" },
  },
};
