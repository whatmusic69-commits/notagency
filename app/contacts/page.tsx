import { InfoPage } from "../components/InfoPage";

export default function ContactsPage() {
  return (
    <InfoPage
      content={{
        en: {
          kicker: "Contact / Start",
          title: "Contacts",
          text: "Send the idea, the deadline, the budget range, and the business problem. Skip the mystery.",
          sections: [
            { title: "Email", body: "hello@notagency.dev" },
            { title: "Location", body: "Riga based, remote friendly. We can work with clients across Latvia, Europe, and anywhere with sane communication." },
            { title: "What to send", body: "Tell us who you are, what you want to build, what exists now, what hurts, and when it needs to go live." },
            { title: "Budget note", body: "If the budget is 200 EUR, close the tab. If you want a real site or app, bring context and we will talk." },
          ],
        },
        ru: {
          kicker: "Контакт / Старт",
          title: "Контакты",
          text: "Отправь идею, дедлайн, вилку бюджета и бизнес-проблему. Без загадочного тумана.",
          sections: [
            { title: "Email", body: "hello@notagency.dev" },
            { title: "Локация", body: "Мы базируемся в Риге и спокойно работаем удаленно с клиентами из Латвии, Европы и везде, где есть нормальная коммуникация." },
            { title: "Что отправить", body: "Кто ты, что хочешь построить, что уже есть, что болит и когда это должно выйти в жизнь." },
            { title: "Про бюджет", body: "Если бюджет 200 EUR — закрой вкладку. Если хочешь реальный сайт или приложение, принеси контекст и поговорим." },
          ],
        },
        lv: {
          kicker: "Kontakti / Starts",
          title: "Kontakti",
          text: "Atsūti ideju, termiņu, budžeta diapazonu un biznesa problēmu. Bez mistērijas.",
          sections: [
            { title: "Email", body: "hello@notagency.dev" },
            { title: "Lokācija", body: "Bāzējamies Rīgā, strādājam attālināti ar klientiem Latvijā, Eiropā un visur, kur ir normāla komunikācija." },
            { title: "Ko atsūtīt", body: "Kas tu esi, ko gribi būvēt, kas jau eksistē, kas sāp un kad tam jāiet gaisā." },
            { title: "Par budžetu", body: "Ja budžets ir 200 EUR, aizver cilni. Ja gribi īstu lapu vai aplikāciju, atnes kontekstu un runāsim." },
          ],
        },
      }}
    />
  );
}
