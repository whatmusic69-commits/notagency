import { InfoPage } from "../components/InfoPage";
import { getPageMetadata } from "../lib/page-metadata";
import { getInitialLang, type PageWithLangProps } from "../lib/server-language";

export function generateMetadata({ searchParams }: PageWithLangProps) {
  return getPageMetadata("about", searchParams);
}

export default async function AboutPage({ searchParams }: PageWithLangProps) {
  const initialLang = await getInitialLang(searchParams);

  return (
    <InfoPage
      initialLang={initialLang}
      pageClassName="about-info-page"
      content={{
        en: {
          kicker: "Studio / About",
          title: "About NotAgency",
          text: "NotAgency is an independent web & app studio run by two developers. We design and launch websites, apps and digital systems — from the first idea to a working product. No layer of managers between the client and the people actually building the work.",
          manifesto: ["2 developers", "Direct contact", "Design + code", "From idea to production"],
          sections: [
            { title: "Who we are", body: "A small team of two developers. We understand the problem ourselves, shape the product, write the code and take it all the way to launch. You communicate directly with the people making the decisions and responsible for the result." },
            { title: "How we work", body: "First we understand what the product needs to solve and who it is for. Then we turn that into structure, interface and a working system. Fewer meetings for the sake of meetings, more quick decisions, clear communication and real progress." },
            { title: "What we build", body: "Company websites, landing pages, web apps, mobile apps, SaaS and MVP products, client portals, admin panels, integrations, automation and other digital systems." },
            { title: "Who we work best with", body: "Founders and companies that need more than a good-looking screen — they need a product that can be launched, used and developed further. We work best with teams that value direct communication, speed and sensible decisions." },
          ],
        },
        ru: {
          kicker: "Студия / О нас",
          title: "О NotAgency",
          text: "NotAgency — независимая web & app студия из двух разработчиков. Мы проектируем и запускаем сайты, приложения и digital-системы — от первой идеи до работающего продукта. Без слоя менеджеров между клиентом и людьми, которые реально делают работу.",
          manifesto: ["2 developers", "Direct contact", "Design + code", "From idea to production"],
          sections: [
            { title: "Кто мы", body: "Небольшая команда из двух разработчиков. Мы сами разбираемся в задаче, проектируем продукт, пишем код и доводим его до запуска. Поэтому вы общаетесь напрямую с людьми, которые принимают решения и отвечают за результат." },
            { title: "Как мы работаем", body: "Сначала разбираемся, что продукт должен решить и кому он нужен. Потом превращаем это в структуру, интерфейс и работающую систему. Меньше созвонов ради созвонов, больше быстрых решений, понятной коммуникации и реального прогресса." },
            { title: "Что мы строим", body: "Сайты компаний, лендинги, web apps, мобильные приложения, SaaS и MVP, клиентские кабинеты, админ-панели, интеграции, автоматизации и другие digital-системы." },
            { title: "Кому мы подходим", body: "Фаундерам и компаниям, которым нужен не просто красивый экран, а продукт, который можно запустить, использовать и развивать. Лучше всего мы работаем с командами, которые ценят прямую коммуникацию, скорость и здравые решения." },
          ],
        },
        lv: {
          kicker: "Studija / Par mums",
          title: "Par NotAgency",
          text: "NotAgency ir neatkarīga web un lietotņu izstrādes studija, ko veido divi izstrādātāji. Mēs projektējam un palaižam mājaslapas, lietotnes un digitālās sistēmas — no pirmās idejas līdz strādājošam produktam. Bez menedžeru slāņa starp klientu un cilvēkiem, kuri produktu patiešām izstrādā.",
          manifesto: ["2 developers", "Direct contact", "Design + code", "From idea to production"],
          sections: [
            { title: "Kas mēs esam", body: "Neliela divu izstrādātāju komanda. Mēs paši iedziļināmies uzdevumā, veidojam produktu, rakstām kodu un aizvedam to līdz palaišanai. Tāpēc jūs sazināties tieši ar cilvēkiem, kuri pieņem lēmumus un atbild par rezultātu." },
            { title: "Kā mēs strādājam", body: "Vispirms saprotam, kādu problēmu produktam jāatrisina un kam tas ir paredzēts. Tad pārvēršam to struktūrā, saskarnē un strādājošā sistēmā. Mazāk sapulču sapulču pēc, vairāk ātru lēmumu, skaidras komunikācijas un reāla progresa." },
            { title: "Ko mēs veidojam", body: "Uzņēmumu mājaslapas, landing pages, web lietotnes, mobilās lietotnes, SaaS un MVP produktus, klientu portālus, administrācijas paneļus, integrācijas, automatizācijas un citas digitālās sistēmas." },
            { title: "Kam mēs esam piemēroti", body: "Dibinātājiem un uzņēmumiem, kuriem vajadzīgs ne tikai skaists interfeiss, bet produkts, ko var palaist, lietot un turpināt attīstīt. Vislabāk sadarbojamies ar komandām, kas novērtē tiešu komunikāciju, ātrumu un saprātīgus lēmumus." },
          ],
        },
      }}
    />
  );
}
