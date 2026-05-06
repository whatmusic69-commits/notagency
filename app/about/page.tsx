import { InfoPage } from "../components/InfoPage";

export default function AboutPage() {
  return (
    <InfoPage
      content={{
        en: {
          kicker: "Studio / About",
          title: "About NotAgency",
          text: "NotAgency is a web and app studio concept built around loud visuals, clear systems, and zero tolerance for dead digital products.",
          sections: [
            { title: "What we believe", body: "The internet got too polite, too beige, and too slow. We want digital products with a pulse and a reason to exist." },
            { title: "How we work", body: "Strategy first, design with intent, development that can survive launch, and communication that does not require chasing." },
            { title: "What we build", body: "Landing pages, company websites, web apps, client portals, MVPs, launch pages, and design systems." },
            { title: "Who fits", body: "Founders and teams who want a sharp result, can make decisions, and understand that cheap usually becomes expensive." },
          ],
        },
        ru: {
          kicker: "Студия / О нас",
          title: "О NotAgency",
          text: "NotAgency — концепт студии сайтов и приложений с громким визуалом, четкими системами и нулевой терпимостью к мертвым digital-продуктам.",
          sections: [
            { title: "Во что мы верим", body: "Интернет стал слишком вежливым, бежевым и медленным. Мы хотим продукты с пульсом и причиной существовать." },
            { title: "Как мы работаем", body: "Сначала стратегия, потом дизайн с намерением, разработка, которая переживет запуск, и коммуникация без погонь за ответом." },
            { title: "Что мы строим", body: "Лендинги, сайты компаний, web apps, клиентские кабинеты, MVP, launch-страницы и дизайн-системы." },
            { title: "Кому подходит", body: "Фаундерам и командам, которые хотят острый результат, умеют принимать решения и понимают, что дешевое часто становится дорогим." },
          ],
        },
        lv: {
          kicker: "Studija / Par mums",
          title: "Par NotAgency",
          text: "NotAgency ir mājaslapu un aplikāciju studijas koncepts ar skaļu vizuālo valodu, skaidrām sistēmām un nulles pacietību pret mirušiem digital produktiem.",
          sections: [
            { title: "Kam mēs ticam", body: "Internets ir kļuvis pārāk pieklājīgs, bēšs un lēns. Mēs gribam produktus ar pulsu un skaidru iemeslu eksistēt." },
            { title: "Kā mēs strādājam", body: "Vispirms stratēģija, tad dizains ar nolūku, izstrāde, kas pārdzīvo palaišanu, un komunikācija bez vajāšanas." },
            { title: "Ko mēs būvējam", body: "Landing lapas, uzņēmumu mājaslapas, web app, klientu portālus, MVP, launch lapas un dizaina sistēmas." },
            { title: "Kam tas der", body: "Founder komandām, kas grib asu rezultātu, spēj pieņemt lēmumus un saprot, ka lēti bieži kļūst dārgi." },
          ],
        },
      }}
    />
  );
}
