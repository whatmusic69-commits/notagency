"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  BadgeEuro,
  Clock3,
  Mail,
  MapPin,
  MessageSquareText,
  Send,
} from "lucide-react";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { type Lang, readStoredLang, storeLang } from "../lib/language";

const email = "hello@notagency.dev";

const copy = {
  en: {
    kicker: "Contact / Start",
    title: "Send context. Skip the fog.",
    text:
      "We answer faster when the message has a business problem, deadline, budget range and one person who can decide.",
    emailLabel: "Email",
    emailText: "Best first move. Send the context, then we can move to a call or chat.",
    location: "Riga / Remote",
    locationText: "Latvia based, Europe friendly, remote by default.",
    response: "Response",
    responseText: "Usually within 1 business day when the request is serious.",
    budget: "Budget signal",
    budgetText: "If the plan is a real site, app or MVP, bring a real range.",
    cta: "Email the brief",
    briefTitle: "What to send",
    brief: [
      "Who you are and what the business sells.",
      "What needs to be built: site, app, MVP, redesign or rescue.",
      "What exists now and what is broken.",
      "Deadline, budget range and who approves decisions.",
    ],
    noTitle: "Do not send",
    no: [
      "A mystery call with no goal.",
      "A 200 EUR dream for a custom product.",
      "A request for template WordPress noise.",
    ],
  },
  ru: {
    kicker: "Контакт / Старт",
    title: "Присылай контекст. Без тумана.",
    text:
      "Мы отвечаем быстрее, когда в сообщении есть бизнес-проблема, дедлайн, вилка бюджета и один человек, который принимает решения.",
    emailLabel: "Email",
    emailText: "Лучший первый шаг. Присылай контекст, дальше можно перейти в звонок или чат.",
    location: "Рига / Удаленно",
    locationText: "Базируемся в Латвии, работаем с Европой и удаленно по умолчанию.",
    response: "Ответ",
    responseText: "Обычно в течение 1 рабочего дня, если запрос серьезный.",
    budget: "Сигнал бюджета",
    budgetText: "Если нужен реальный сайт, приложение или MVP, приходи с реальной вилкой.",
    cta: "Отправить бриф",
    briefTitle: "Что отправить",
    brief: [
      "Кто ты и что продает бизнес.",
      "Что нужно построить: сайт, app, MVP, редизайн или спасение текущего сайта.",
      "Что уже есть и что сломано.",
      "Дедлайн, вилка бюджета и кто утверждает решения.",
    ],
    noTitle: "Что не отправлять",
    no: [
      "Загадочный созвон без цели.",
      "Мечту на 200 EUR про кастомный продукт.",
      "Запрос на шаблонный WordPress-шум.",
    ],
  },
  lv: {
    kicker: "Kontakti / Starts",
    title: "Atsūti kontekstu. Bez miglas.",
    text:
      "Mēs atbildam ātrāk, ja ziņā ir biznesa problēma, termiņš, budžeta diapazons un viens cilvēks, kurš pieņem lēmumus.",
    emailLabel: "Email",
    emailText: "Labākais pirmais solis. Atsūti kontekstu, pēc tam varam pāriet uz zvanu vai čatu.",
    location: "Rīga / Attālināti",
    locationText: "Bāzējamies Latvijā, strādājam ar Eiropu un attālināti pēc noklusējuma.",
    response: "Atbilde",
    responseText: "Parasti 1 darba dienas laikā, ja pieprasījums ir nopietns.",
    budget: "Budžeta signāls",
    budgetText: "Ja vajag īstu lapu, aplikāciju vai MVP, nāc ar īstu diapazonu.",
    cta: "Nosūtīt briefu",
    briefTitle: "Ko atsūtīt",
    brief: [
      "Kas tu esi un ko bizness pārdod.",
      "Kas jāuzbūvē: lapa, app, MVP, redesign vai esošās lapas glābšana.",
      "Kas jau eksistē un kas nestrādā.",
      "Termiņš, budžeta diapazons un kas apstiprina lēmumus.",
    ],
    noTitle: "Ko nesūtīt",
    no: [
      "Mistisku zvanu bez mērķa.",
      "200 EUR sapni par custom produktu.",
      "Pieprasījumu pēc šabloniska WordPress trokšņa.",
    ],
  },
};

const contactCards = [
  { icon: Mail, title: "emailLabel", text: "emailText", value: email },
  { icon: MapPin, title: "location", text: "locationText", value: "" },
  { icon: Clock3, title: "response", text: "responseText", value: "" },
  { icon: BadgeEuro, title: "budget", text: "budgetText", value: "" },
] as const;

export default function ContactsPage() {
  const [lang, setLang] = useState<Lang>("en");
  const t = copy[lang];
  const changeLang = (nextLang: Lang) => {
    storeLang(nextLang);
    setLang(nextLang);
  };

  useEffect(() => {
    setLang(readStoredLang());
  }, []);

  return (
    <main className={`contact-shell lang-${lang}`}>
      <div className="noise" />
      <SiteHeader lang={lang} onLangChange={changeLang} />

      <section className="contact-hero">
        <div className="contact-copy">
          <p className="kicker">
            <Send size={16} />
            {t.kicker}
          </p>
          <h1>{t.title}</h1>
          <p>{t.text}</p>
          <a
            className="primary"
            href={`mailto:${email}?subject=Project%20brief%20for%20NotAgency`}
          >
            {t.cta}
            <ArrowRight size={20} />
          </a>
        </div>

        <div className="contact-panel" aria-label="Contact details">
          {contactCards.map((card) => {
            const Icon = card.icon;
            const title = t[card.title];
            const text = t[card.text];

            return (
              <article className="contact-card" key={card.title}>
                <Icon size={24} />
                <div>
                  <h2>{title}</h2>
                  {card.value ? <a href={`mailto:${card.value}`}>{card.value}</a> : null}
                  <p>{text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="contact-brief">
        <article>
          <h2>{t.briefTitle}</h2>
          <ul>
            {t.brief.map((item) => (
              <li key={item}>
                <MessageSquareText size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="contact-no">
          <h2>{t.noTitle}</h2>
          <ul>
            {t.no.map((item) => (
              <li key={item}>
                <span>×</span>
                {item}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <SiteFooter lang={lang} />
    </main>
  );
}
