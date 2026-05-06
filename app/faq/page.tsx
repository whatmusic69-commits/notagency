import { InfoPage } from "../components/InfoPage";

export default function FaqPage() {
  return (
    <InfoPage
      content={{
        en: {
          kicker: "Questions / No fog",
          title: "FAQ",
          text: "Answers for people who want a serious website, not a seven-month therapy session with a homepage attached.",
          sections: [
            { title: "What do you build?", body: "Websites, landing pages, web apps, MVPs, dashboards, client portals, launch pages, and design systems. If it lives in a browser and needs to work, we can talk." },
            { title: "Do you work with small budgets?", body: "Small is not the problem. Unserious is. If the budget is 200 EUR and the dream is everything, close the tab and protect everyone’s time." },
            { title: "How much does it cost?", body: "It depends on scope, speed, complexity, content, integrations, and how many decisions are already made. We estimate after context, not vibes." },
            { title: "How fast can you launch?", body: "A focused landing page can move fast. A custom app or content-heavy website needs more time. Rush without decisions is expensive panic." },
            { title: "Do you only design?", body: "No. We can handle strategy, UX, UI, motion direction, frontend, backend integrations, deploy, analytics, forms, and launch cleanup." },
            { title: "Can you fix an existing site?", body: "Yes, if the foundation is not a crime scene. We can audit, redesign, rebuild parts, improve performance, and stop the embarrassment." },
            { title: "What do you need from me?", body: "A clear business goal, examples, access to assets, fast feedback, one decision-maker, and honesty about what is broken. Mystery kills timelines." },
            { title: "Do you provide copywriting?", body: "We can shape structure, headlines, messaging, and conversion copy. If you bring corporate oatmeal, we will not pretend it tastes good." },
            { title: "What happens after launch?", body: "We can hand over, stay for support, add features, monitor issues, or iterate from analytics. Launch is where reality starts talking." },
            { title: "Can we meet first?", body: "Yes, but come with context. A call without goals, budget range, deadline, or decision-maker is just a podcast nobody asked for." },
          ],
        },
        ru: {
          kicker: "Вопросы / Без тумана",
          title: "FAQ",
          text: "Ответы для тех, кто хочет серьезный сайт, а не семимесячную терапию с главной страницей в конце.",
          sections: [
            { title: "Что вы делаете?", body: "Сайты, лендинги, web apps, MVP, дашборды, клиентские кабинеты, launch-страницы и дизайн-системы. Если это живет в браузере и должно работать — поговорим." },
            { title: "Работаете с маленьким бюджетом?", body: "Маленький бюджет не проблема. Несерьезность — проблема. Если 200 EUR и хочется все сразу, закрой вкладку и сохрани всем время." },
            { title: "Сколько стоит?", body: "Зависит от scope, скорости, сложности, контента, интеграций и количества уже принятых решений. Оцениваем после контекста, не по настроению." },
            { title: "Как быстро можно запустить?", body: "Сфокусированный лендинг можно двигать быстро. Кастомное приложение или большой сайт требуют больше времени. Срочность без решений — дорогая паника." },
            { title: "Вы только дизайните?", body: "Нет. Мы можем закрыть стратегию, UX, UI, motion, frontend, backend-интеграции, deploy, аналитику, формы и зачистку после запуска." },
            { title: "Можете починить старый сайт?", body: "Да, если фундамент не место преступления. Можем сделать аудит, редизайн, перестроить части, ускорить и убрать стыд." },
            { title: "Что нужно от меня?", body: "Цель бизнеса, примеры, доступы к материалам, быстрый фидбек, один decision-maker и честность о том, что сломано. Загадки убивают сроки." },
            { title: "Вы пишете тексты?", body: "Можем собрать структуру, заголовки, messaging и conversion copy. Если принесешь корпоративную кашу, мы не будем делать вид, что вкусно." },
            { title: "Что после запуска?", body: "Можем передать проект, остаться на поддержке, добавлять функции, мониторить проблемы или итерировать по аналитике. Запуск — это начало реальности." },
            { title: "Можно сначала созвон?", body: "Да, но приходи с контекстом. Созвон без целей, бюджета, дедлайна и ответственного — это подкаст, который никто не просил." },
          ],
        },
        lv: {
          kicker: "Jautājumi / Bez miglas",
          title: "FAQ",
          text: "Atbildes tiem, kas grib nopietnu mājaslapu, nevis septiņu mēnešu terapiju ar homepage beigās.",
          sections: [
            { title: "Ko jūs būvējat?", body: "Mājaslapas, landing lapas, web app, MVP, dashboardus, klientu portālus, launch lapas un dizaina sistēmas. Ja tas dzīvo pārlūkā un jāstrādā, runājam." },
            { title: "Strādājat ar mazu budžetu?", body: "Mazs budžets nav problēma. Nenopietnība ir problēma. Ja 200 EUR un gribas visu, aizver cilni un saudzē laiku." },
            { title: "Cik tas maksā?", body: "Atkarīgs no scope, ātruma, sarežģītības, satura, integrācijām un pieņemtiem lēmumiem. Vērtējam pēc konteksta, ne pēc sajūtām." },
            { title: "Cik ātri var palaist?", body: "Fokusētu landing lapu var virzīt ātri. Custom app vai liela satura lapa prasa vairāk laika. Steiga bez lēmumiem ir dārga panika." },
            { title: "Jūs tikai dizainējat?", body: "Nē. Varam nosegt stratēģiju, UX, UI, motion, frontend, backend integrācijas, deploy, analītiku, formas un launch cleanup." },
            { title: "Varat salabot esošu lapu?", body: "Jā, ja pamati nav nozieguma vieta. Varam auditēt, pārtaisīt dizainu, pārbūvēt daļas, uzlabot ātrumu un noņemt kaunu." },
            { title: "Ko vajag no manis?", body: "Biznesa mērķi, piemērus, pieejas materiāliem, ātru feedback, vienu lēmumu pieņēmēju un godīgumu par to, kas nestrādā." },
            { title: "Rakstāt tekstus?", body: "Varam sakārtot struktūru, virsrakstus, messaging un conversion copy. Ja atnesīsi korporatīvu putru, netēlosim, ka garšo." },
            { title: "Kas notiek pēc palaišanas?", body: "Varam nodot projektu, palikt supportā, pievienot funkcijas, monitorēt problēmas vai iterēt pēc analītikas. Palaišana ir realitātes sākums." },
            { title: "Varam vispirms sazvanīties?", body: "Jā, bet nāc ar kontekstu. Zvans bez mērķiem, budžeta, termiņa un lēmumu pieņēmēja ir podkāsts, ko neviens neprasīja." },
          ],
        },
      }}
    />
  );
}
