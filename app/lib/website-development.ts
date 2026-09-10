import type { Lang } from "./language";

type WebsiteCopy = {
  title: string; description: string; heading: string; intro: string;
  action: string; work: string; buildTitle: string;
  build: { title: string; text: string }[];
  casesTitle: string; caseText: string; imageAlt: string;
  processTitle: string; steps: { title: string; text: string }[];
  handoverTitle: string; handover: string; faqTitle: string;
  faq: { question: string; answer: string }[];
  cta: string; appLink: string;
};

export const websiteCopy: Record<Lang, WebsiteCopy> = {
  en: {
    title: "Website Design & Development — NotAgency",
    description: "Business websites, landing pages and websites with content management. Structure, design, development and launch with a two-developer studio based in Riga.",
    heading: "Website development. From first screen to launch.",
    intro: "We build websites that explain your business and give visitors a clear way to get in touch. Work directly with two developers in Riga, from the first structure to the live website. Available worldwide.",
    action: "Discuss your website", work: "Explore the ISOLOGIC case study",
    buildTitle: "A website with a clear job.",
    build: [
      { title: "Company websites", text: "Present your services, experience and team with a clear structure and an enquiry path." },
      { title: "Landing & product pages", text: "Explain one offer or product, answer the main questions and guide visitors to a relevant action." },
      { title: "Websites with a CMS", text: "Manage agreed content through an admin panel, with an editing workflow suited to your team." },
    ],
    casesTitle: "From direction to a working website.",
    caseText: "For ISOLOGIC, we turned the client's direction into a company website for ISO and compliance services. We built content administration, a contact form and automatic deployment of content updates, and handled the domain, SEO and launch.",
    imageAlt: "ISOLOGIC company website presenting ISO and compliance services",
    processTitle: "What goes into the launch.",
    steps: [
      { title: "Structure & content", text: "Define the audience, pages, enquiry path and required materials. Agree on who supplies the text and translations." },
      { title: "Design & development", text: "Shape the visual direction and build responsive pages for mobile and desktop. Add the agreed forms and content editing." },
      { title: "SEO & checks", text: "Prepare titles, descriptions and indexing settings. Check links, forms and mobile layouts; agree on analytics requirements." },
      { title: "Launch & handover", text: "Connect the domain, prepare hosting and hand over the agreed code, access and content editing instructions." },
    ],
    handoverTitle: "Know what you are getting.",
    handover: "Before development, we agree on pages, languages, content management, integrations and deliverables. These choices determine the estimate and timeline. Domain, hosting, paid services and ongoing support are discussed separately so responsibilities are clear after launch.",
    faqTitle: "Before your new website.",
    faq: [
      { question: "What affects the price?", answer: "The number of page types, design scope, content readiness, languages, CMS and integrations. Send your existing site or a description of the project so we can estimate the actual work." },
      { question: "How long does a website take?", answer: "We set milestones after reviewing the scope and available content. A single landing page and a multilingual company website with an admin panel need different schedules." },
      { question: "Can I update the website myself?", answer: "Yes, when content management is included. We agree on editable sections and show you how to publish changes." },
      { question: "Who prepares the text and domain?", answer: "We agree on responsibility for text, translations and images at the start. We can help connect an existing domain or set up a new one, with ownership and access agreed with you." },
      { question: "Can you rebuild an existing website?", answer: "Yes. We review the existing content, URLs and enquiry flows, agree on what to keep and plan redirects where addresses change." },
      { question: "What happens after launch?", answer: "We hand over the agreed access and instructions. Maintenance, content changes and further development are scoped separately." },
    ],
    cta: "Tell us what your website needs to do.", appLink: "Need accounts, payments or business workflows? Explore web app development.",
  },
  ru: {
    title: "Разработка сайтов для бизнеса — NotAgency",
    description: "Сайты компаний, лендинги и сайты с управлением контентом. Структура, дизайн, разработка и запуск напрямую с командой из двух разработчиков в Риге.",
    heading: "Разработка сайтов. От первого экрана до запуска.",
    intro: "Создаём сайты, которые понятно представляют ваш бизнес и помогают посетителю связаться с вами. Работаем напрямую: два разработчика в Риге, от первой структуры до запуска. Принимаем проекты со всего мира.",
    action: "Обсудить сайт", work: "Посмотреть кейс ISOLOGIC",
    buildTitle: "Сайт под конкретную задачу.",
    build: [
      { title: "Сайты компаний", text: "Услуги, опыт и команда в понятной структуре с удобным способом отправить заявку." },
      { title: "Лендинги и сайты продуктов", text: "Одно предложение или продукт: объясняем суть, отвечаем на основные вопросы и ведём к целевому действию." },
      { title: "Сайты с CMS", text: "Управление согласованными разделами через административную панель с удобным для вашей команды процессом публикации." },
    ],
    casesTitle: "От идеи к работающему сайту.",
    caseText: "Для ISOLOGIC мы превратили направление клиента в сайт компании, которая занимается ISO и соответствием требованиям. Создали управление контентом, контактную форму и автоматическую публикацию обновлений. Настроили домен, SEO и запуск.",
    imageAlt: "Сайт ISOLOGIC с услугами по ISO и соответствию требованиям",
    processTitle: "Что входит в путь до запуска.",
    steps: [
      { title: "Структура и контент", text: "Определяем аудиторию, страницы, путь до заявки и необходимые материалы. Согласуем, кто готовит тексты и переводы." },
      { title: "Дизайн и разработка", text: "Формируем визуальное направление и создаём адаптивные страницы для телефона и компьютера. Подключаем согласованные формы и управление контентом." },
      { title: "SEO и проверка", text: "Готовим заголовки, описания и настройки индексации. Проверяем ссылки, формы и мобильную версию; согласуем требования к аналитике." },
      { title: "Запуск и передача", text: "Подключаем домен, готовим размещение и передаём согласованный код, доступы и инструкции по работе с контентом." },
    ],
    handoverTitle: "Понятный состав работ.",
    handover: "До разработки фиксируем страницы, языки, управление контентом, интеграции и результат передачи. От этого зависят оценка и сроки. Домен, хостинг, платные сервисы и дальнейшую поддержку обсуждаем отдельно, чтобы после запуска было понятно, кто за что отвечает.",
    faqTitle: "До начала работы.",
    faq: [
      { question: "От чего зависит стоимость сайта?", answer: "От числа типов страниц, объёма дизайна, готовности контента, языков, CMS и интеграций. Пришлите текущий сайт или описание проекта — оценим конкретный объём работ." },
      { question: "Сколько времени занимает разработка?", answer: "Определяем этапы после изучения задачи и материалов. Один лендинг и многоязычный сайт компании с административной панелью требуют разных сроков." },
      { question: "Можно редактировать сайт самостоятельно?", answer: "Да, если в проект включено управление контентом. Согласуем редактируемые разделы и покажем, как публиковать изменения." },
      { question: "Кто готовит тексты и домен?", answer: "Ответственность за тексты, переводы и изображения согласуем в начале. Поможем подключить существующий домен или настроить новый, заранее обсудив владение и доступы." },
      { question: "Можно переделать существующий сайт?", answer: "Да. Изучим контент, текущие адреса страниц и путь до заявки. Определим, что сохранить, и запланируем редиректы для изменённых адресов." },
      { question: "Что происходит после запуска?", answer: "Передаём согласованные доступы и инструкции. Обслуживание, изменения контента и дальнейшую разработку согласуем отдельно." },
    ],
    cta: "Какую задачу должен решить ваш сайт?", appLink: "Нужны кабинеты, платежи или бизнес-процессы? Посмотрите разработку веб-приложений.",
  },
  lv: {
    title: "Mājaslapu izstrāde uzņēmumiem — NotAgency",
    description: "Uzņēmumu mājaslapas, reklāmas lapas un vietnes ar satura pārvaldību. Struktūra, dizains, izstrāde un palaišana ar divu izstrādātāju komandu Rīgā.",
    heading: "Mājaslapu izstrāde. No pirmā ekrāna līdz palaišanai.",
    intro: "Veidojam mājaslapas, kas skaidri iepazīstina ar jūsu uzņēmumu un palīdz apmeklētājam sazināties. Strādājiet tieši ar diviem izstrādātājiem Rīgā — no struktūras līdz publicētai vietnei. Sadarbojamies ar klientiem visā pasaulē.",
    action: "Apspriest mājaslapu", work: "Apskatīt ISOLOGIC projektu",
    buildTitle: "Mājaslapa konkrētam uzdevumam.",
    build: [
      { title: "Uzņēmumu mājaslapas", text: "Pakalpojumi, pieredze un komanda saprotamā struktūrā ar ērtu iespēju nosūtīt pieteikumu." },
      { title: "Reklāmas un produktu lapas", text: "Viens piedāvājums vai produkts: izskaidrojam būtību, atbildam uz galvenajiem jautājumiem un palīdzam veikt nākamo soli." },
      { title: "Vietnes ar CMS", text: "Pārvaldiet saskaņoto saturu administrēšanas panelī ar jūsu komandai piemērotu publicēšanas procesu." },
    ],
    casesTitle: "No ieceres līdz strādājošai vietnei.",
    caseText: "ISOLOGIC klienta ieceri pārvērtām uzņēmuma mājaslapā par ISO un atbilstības pakalpojumiem. Izveidojām satura pārvaldību, saziņas formu un automātisku satura atjauninājumu publicēšanu. Sagatavojām domēnu, SEO un palaišanu.",
    imageAlt: "ISOLOGIC uzņēmuma mājaslapa ar ISO un atbilstības pakalpojumiem",
    processTitle: "Ceļš līdz palaišanai.",
    steps: [
      { title: "Struktūra un saturs", text: "Nosakām auditoriju, lapas, pieteikšanās ceļu un materiālus. Vienojamies, kurš sagatavo tekstus un tulkojumus." },
      { title: "Dizains un izstrāde", text: "Veidojam vizuālo virzienu un pielāgojam lapas telefonam un datoram. Pievienojam saskaņotās formas un satura pārvaldību." },
      { title: "SEO un pārbaude", text: "Sagatavojam virsrakstus, aprakstus un indeksēšanas iestatījumus. Pārbaudām saites, formas un mobilo versiju; vienojamies par analītikas prasībām." },
      { title: "Palaišana un nodošana", text: "Pieslēdzam domēnu, sagatavojam mitināšanu un nododam saskaņoto kodu, piekļuves un satura rediģēšanas instrukcijas." },
    ],
    handoverTitle: "Skaidrs darba apjoms.",
    handover: "Pirms izstrādes vienojamies par lapām, valodām, satura pārvaldību, integrācijām un nododamo rezultātu. Šīs izvēles nosaka tāmi un termiņus. Domēnu, mitināšanu, maksas servisus un turpmāko atbalstu apspriežam atsevišķi, lai pēc palaišanas atbildība būtu skaidra.",
    faqTitle: "Pirms sākam.",
    faq: [
      { question: "Kas nosaka mājaslapas cenu?", answer: "Lapu veidu skaits, dizaina apjoms, satura gatavība, valodas, CMS un integrācijas. Atsūtiet esošo vietni vai projekta aprakstu, lai varam novērtēt konkrēto darbu." },
      { question: "Cik ilga ir izstrāde?", answer: "Posmus nosakām pēc uzdevuma un materiālu izvērtēšanas. Vienai reklāmas lapai un daudzvalodu uzņēmuma vietnei ar administrēšanas paneli vajadzīgi atšķirīgi termiņi." },
      { question: "Vai varēšu rediģēt vietni pats?", answer: "Jā, ja projektā iekļauta satura pārvaldība. Vienojamies par rediģējamām sadaļām un parādām, kā publicēt izmaiņas." },
      { question: "Kurš sagatavo tekstus un domēnu?", answer: "Par tekstiem, tulkojumiem un attēliem vienojamies sākumā. Palīdzam pieslēgt esošu domēnu vai sagatavot jaunu, iepriekš vienojoties par īpašumtiesībām un piekļuvi." },
      { question: "Vai varat pārveidot esošu mājaslapu?", answer: "Jā. Izvērtējam saturu, esošās adreses un pieteikšanās ceļu. Nosakām, ko saglabāt, un plānojam novirzīšanu mainītajām adresēm." },
      { question: "Kas notiek pēc palaišanas?", answer: "Nododam saskaņotās piekļuves un instrukcijas. Uzturēšanu, satura izmaiņas un turpmāko izstrādi saskaņojam atsevišķi." },
    ],
    cta: "Kādu uzdevumu atrisinās jūsu mājaslapa?", appLink: "Vajadzīgi klientu konti, maksājumi vai biznesa procesi? Apskatiet tīmekļa lietotņu izstrādi.",
  },
};
