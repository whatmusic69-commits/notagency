import { InfoPage } from "../components/InfoPage";
import { getPageMetadata } from "../lib/page-metadata";
import { getInitialLang, type PageWithLangProps } from "../lib/server-language";

export function generateMetadata({ searchParams }: PageWithLangProps) {
  return getPageMetadata("privacy", searchParams);
}

const enSections = [
  { title: "What we collect", body: "We may collect your name, company name, email, phone or messenger handle, project notes, budget range, deadlines, files you send us, and messages submitted through the website or email." },
  { title: "How we use it", body: "We use this information to reply, prepare proposals, estimate scope, plan project work, send updates, record decisions, and improve the website and intake process." },
  { title: "Legal basis", body: "We process data to respond to requests, prepare or perform contracts, comply with legal obligations, and support legitimate business interests like security and analytics." },
  { title: "Analytics and cookies", body: "The website may use basic analytics, cookies, or similar tools to understand visits and performance. No creepy surveillance. No selling your attention to strangers." },
  { title: "Service providers", body: "Hosting, email, analytics, forms, project tools, payments, and file storage providers may process limited data so we can run the site and deliver work." },
  { title: "Data retention", body: "We keep data only as long as needed for communication, delivery, accounting, legal records, dispute prevention, or useful business history." },
  { title: "Security", body: "We use reasonable technical and organizational measures to protect data from unauthorized access, misuse, loss, or disclosure." },
  { title: "International work", body: "Digital tools are often global, so data may be processed outside your country with appropriate providers and safeguards." },
  { title: "Your rights", body: "You can ask to access, correct, export, restrict, or delete your personal data by writing to hello@notagency.io." },
  { title: "Policy updates", body: "We may update this Privacy Policy when tools, legal requirements, or business processes change. The latest version on this page applies." },
];

export default async function PrivacyPage({ searchParams }: PageWithLangProps) {
  const initialLang = await getInitialLang(searchParams);

  return (
    <InfoPage
      initialLang={initialLang}
      content={{
        en: {
          kicker: "Legal / Privacy",
          title: "Privacy Policy",
          text: "We collect only what we need to answer you, run the project, and avoid building nonsense in the dark.",
          sections: enSections,
        },
        ru: {
          kicker: "Юридическое / Приватность",
          title: "Политика приватности",
          text: "Мы собираем только то, что нужно, чтобы ответить тебе, вести проект и не строить ерунду в темноте.",
          sections: [
            { title: "Что мы собираем", body: "Имя, компанию, email, телефон или мессенджер, заметки по проекту, бюджет, сроки, файлы и сообщения, которые ты отправляешь через сайт или почту." },
            { title: "Как используем", body: "Чтобы ответить, подготовить предложение, оценить объем, спланировать работу, отправлять обновления, фиксировать решения и улучшать сайт." },
            { title: "Правовая основа", body: "Мы обрабатываем данные для ответа на запросы, подготовки или исполнения договоров, выполнения закона и нормальных бизнес-задач вроде безопасности и аналитики." },
            { title: "Analytics и cookies", body: "Сайт может использовать базовую аналитику, cookies или похожие инструменты для понимания посещений и производительности. Без жуткой слежки и продажи внимания." },
            { title: "Сервисы", body: "Хостинг, email, аналитика, формы, проектные инструменты, платежи и хранение файлов могут обрабатывать ограниченные данные, чтобы сайт и работа функционировали." },
            { title: "Срок хранения", body: "Мы храним данные только пока они нужны для коммуникации, проекта, бухгалтерии, юридических записей, предотвращения споров или полезной истории." },
            { title: "Безопасность", body: "Мы используем разумные технические и организационные меры для защиты данных от доступа, потери, злоупотребления или раскрытия." },
            { title: "Международная работа", body: "Digital-инструменты часто глобальные, поэтому данные могут обрабатываться за пределами твоей страны через подходящих провайдеров." },
            { title: "Твои права", body: "Ты можешь запросить доступ, исправление, экспорт, ограничение или удаление персональных данных через hello@notagency.io." },
            { title: "Обновления", body: "Мы можем обновлять эту политику, когда меняются инструменты, закон или процессы. Актуальная версия опубликована здесь." },
          ],
        },
        lv: {
          kicker: "Juridiski / Privātums",
          title: "Privātuma politika",
          text: "Mēs vācam tikai to, kas vajadzīgs, lai atbildētu, vadītu projektu un nebūvētu muļķības tumsā.",
          sections: [
            { title: "Ko mēs vācam", body: "Vārdu, uzņēmumu, email, telefonu vai messenger, projekta piezīmes, budžetu, termiņus, failus un ziņas, ko sūti caur lapu vai email." },
            { title: "Kā izmantojam", body: "Lai atbildētu, sagatavotu piedāvājumu, novērtētu apjomu, plānotu darbu, sūtītu update, fiksētu lēmumus un uzlabotu lapu." },
            { title: "Juridiskais pamats", body: "Datus apstrādājam, lai atbildētu uz pieprasījumiem, sagatavotu vai izpildītu līgumus, ievērotu likumu un nodrošinātu drošību vai analītiku." },
            { title: "Analytics un cookies", body: "Lapa var izmantot pamata analītiku, cookies vai līdzīgus rīkus apmeklējumu un veiktspējas izpratnei. Bez dīvainas izsekošanas." },
            { title: "Servisi", body: "Hostings, email, analītika, formas, projektu rīki, maksājumi un failu glabāšana var apstrādāt ierobežotus datus, lai mēs varētu strādāt." },
            { title: "Glabāšanas laiks", body: "Datus glabājam tikai tik ilgi, cik vajag komunikācijai, projektam, grāmatvedībai, juridiskiem ierakstiem vai strīdu novēršanai." },
            { title: "Drošība", body: "Izmantojam saprātīgus tehniskus un organizatoriskus pasākumus, lai pasargātu datus no piekļuves, zuduma vai ļaunprātīgas izmantošanas." },
            { title: "Starptautisks darbs", body: "Digital rīki bieži ir globāli, tāpēc dati var tikt apstrādāti ārpus tavas valsts ar atbilstošiem pakalpojumu sniedzējiem." },
            { title: "Tavas tiesības", body: "Vari prasīt piekļuvi, labošanu, eksportu, ierobežošanu vai dzēšanu, rakstot uz hello@notagency.io." },
            { title: "Atjauninājumi", body: "Šī politika var mainīties, ja mainās rīki, likums vai procesi. Spēkā ir šeit publicētā versija." },
          ],
        },
      }}
    />
  );
}
