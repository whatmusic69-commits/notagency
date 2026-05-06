import { InfoPage } from "../components/InfoPage";

export default function TermsPage() {
  return (
    <InfoPage
      content={{
        en: {
          kicker: "Legal / Terms",
          title: "Terms",
          text: "Simple rules: we work seriously, communicate clearly, and do not pretend chaos is a strategy.",
          sections: [
            { title: "Website use", body: "You can browse this website and contact us. You cannot attack it, scrape it aggressively, copy it as your own, or use it for spam, malware, or nonsense." },
            { title: "Project work", body: "Client work is governed by a separate proposal, statement of work, invoice, or agreement covering scope, timeline, payments, responsibilities, revisions, and delivery." },
            { title: "Content and assets", body: "Clients must have rights to logos, copy, images, videos, fonts, datasets, product information, credentials, and third-party materials they provide." },
            { title: "Payments", body: "Fees, deposits, milestones, taxes, and payment deadlines are defined in the proposal or invoice. Late payment may pause work. Rush work and scope changes may cost extra." },
            { title: "Revisions and scope", body: "We work inside agreed scope. New pages, features, integrations, major direction changes, or missing client materials are extra work unless agreed otherwise." },
            { title: "Client responsibilities", body: "Clients must provide feedback, accurate information, access, content, approvals, and a decision-maker who can actually decide. Slow feedback moves deadlines." },
            { title: "Intellectual property", body: "Unless agreed otherwise, final paid deliverables transfer after full payment. Our pre-existing tools, code patterns, know-how, and reusable components remain ours." },
            { title: "Third-party tools", body: "Sites and apps may depend on hosting, domains, analytics, CMS tools, APIs, plugins, or payments. Their pricing, uptime, rules, and failures are outside our control." },
            { title: "Launch and maintenance", body: "Launch means the agreed deliverable is deployed or handed over. Ongoing support, monitoring, content changes, and new features require a separate agreement." },
            { title: "No fake guarantees", body: "We do not guarantee revenue, rankings, virality, investor interest, or market success. Those depend on offer, traffic, pricing, timing, and execution." },
            { title: "Liability", body: "To the maximum extent allowed by law, we are not liable for indirect losses, lost profits, lost data, reputational damage, third-party outages, or bad client inputs." },
            { title: "Changes to terms", body: "We may update these Terms when the website, services, business model, or legal requirements change. The published version applies to website use." },
          ],
        },
        ru: {
          kicker: "Юридическое / Условия",
          title: "Условия",
          text: "Простые правила: работаем серьезно, общаемся понятно и не делаем вид, что хаос — это стратегия.",
          sections: [
            { title: "Использование сайта", body: "Можно смотреть сайт и писать нам. Нельзя атаковать его, агрессивно парсить, копировать как свой или использовать для спама, вредного кода и ерунды." },
            { title: "Проектная работа", body: "Клиентская работа регулируется отдельным предложением, счетом или договором: scope, сроки, платежи, ответственность, правки и доставка." },
            { title: "Контент и материалы", body: "Клиент отвечает за права на логотипы, тексты, фото, видео, шрифты, данные, информацию о продукте, доступы и сторонние материалы." },
            { title: "Оплата", body: "Стоимость, депозиты, этапы, налоги и сроки оплаты фиксируются в предложении или счете. Просрочка может остановить работу. Срочность и расширение scope стоят отдельно." },
            { title: "Правки и scope", body: "Мы работаем внутри согласованного scope. Новые страницы, функции, интеграции, смена направления или недостающие материалы — дополнительная работа." },
            { title: "Ответственность клиента", body: "Клиент дает фидбек, точную информацию, доступы, контент, согласования и человека, который реально принимает решения. Медленный фидбек двигает сроки." },
            { title: "Интеллектуальные права", body: "Если не согласовано иначе, финальные оплаченные материалы переходят клиенту после полной оплаты. Наши инструменты, подходы и reusable-компоненты остаются нашими." },
            { title: "Сторонние сервисы", body: "Сайты и приложения могут зависеть от хостинга, доменов, аналитики, CMS, API, плагинов и оплат. Их цены, uptime, правила и сбои вне нашего контроля." },
            { title: "Запуск и поддержка", body: "Запуск — это deploy или передача согласованного результата. Поддержка, мониторинг, контентные изменения и новые функции требуют отдельного соглашения." },
            { title: "Без фейковых гарантий", body: "Мы не гарантируем выручку, SEO-позиции, вирусность, инвесторов или рыночный успех. Это зависит от оффера, трафика, цены, момента и исполнения." },
            { title: "Ограничение ответственности", body: "Насколько позволяет закон, мы не отвечаем за косвенные убытки, потерю прибыли, данных, репутации, сбои сторонних сервисов или плохие вводные клиента." },
            { title: "Изменения условий", body: "Мы можем обновлять условия, когда меняется сайт, услуги, модель работы или закон. Для сайта действует опубликованная версия." },
          ],
        },
        lv: {
          kicker: "Juridiski / Noteikumi",
          title: "Noteikumi",
          text: "Vienkārši noteikumi: strādājam nopietni, komunicējam skaidri un neizliekamies, ka haoss ir stratēģija.",
          sections: [
            { title: "Lapas lietošana", body: "Vari skatīt lapu un sazināties ar mums. Nedrīkst to uzbrukt, agresīvi scrape, kopēt kā savu vai izmantot spamam un muļķībām." },
            { title: "Projektu darbs", body: "Klienta darbs tiek regulēts ar atsevišķu piedāvājumu, rēķinu vai līgumu: scope, termiņi, maksājumi, atbildība, labojumi un piegāde." },
            { title: "Saturs un materiāli", body: "Klients atbild par tiesībām izmantot logo, tekstus, foto, video, fontus, datus, produkta info, pieejas un trešo pušu materiālus." },
            { title: "Maksājumi", body: "Cena, depozīti, posmi, nodokļi un termiņi tiek noteikti piedāvājumā vai rēķinā. Kavēti maksājumi var apturēt darbu." },
            { title: "Labojumi un scope", body: "Strādājam saskaņotā scope. Jaunas lapas, funkcijas, integrācijas, virziena maiņa vai trūkstoši materiāli ir papildu darbs." },
            { title: "Klienta atbildība", body: "Klients sniedz feedback, precīzu informāciju, pieejas, saturu, apstiprinājumus un lēmumu pieņēmēju. Lēns feedback pārbīda termiņus." },
            { title: "Intelektuālais īpašums", body: "Ja nav noteikts citādi, pilnībā apmaksāti gala materiāli pāriet klientam. Mūsu rīki, metodes un atkārtoti lietojamās komponentes paliek mūsu." },
            { title: "Trešo pušu rīki", body: "Lapas un aplikācijas var būt atkarīgas no hostinga, domēniem, analītikas, CMS, API, pluginiem un maksājumiem. To cenas un kļūmes nav mūsu kontrolē." },
            { title: "Palaišana un support", body: "Palaišana nozīmē deploy vai saskaņota rezultāta nodošanu. Support, monitorings, satura izmaiņas un jaunas funkcijas prasa atsevišķu vienošanos." },
            { title: "Bez viltus garantijām", body: "Negarantējam ieņēmumus, SEO pozīcijas, viralitāti, investorus vai tirgus veiksmi. Tas atkarīgs no piedāvājuma, trafika, cenas un izpildes." },
            { title: "Atbildības ierobežojums", body: "Ciktāl atļauj likums, neatbildam par netiešiem zaudējumiem, peļņas vai datu zudumu, reputāciju, trešo pušu kļūmēm vai sliktu klienta informāciju." },
            { title: "Izmaiņas", body: "Varam atjaunināt noteikumus, ja mainās lapa, pakalpojumi, darba modelis vai likums. Lapas lietošanai spēkā ir publicētā versija." },
          ],
        },
      }}
    />
  );
}
