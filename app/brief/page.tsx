"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Check, Send, X } from "lucide-react";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { type Lang, readStoredLang, storeLang } from "../lib/language";

const email = "hello@notagency.dev";

const copy = {
  en: {
    kicker: "Brief / Start properly",
    title: "Tell us what we are building.",
    text:
      "A good brief saves everyone from fake discovery calls. Give us the project, the pain, the deadline and the budget range.",
    name: "Who are you?",
    contact: "Where do we write?",
    company: "Company / project",
    details: "What are we building?",
    namePlaceholder: "Founder, CEO, owner of the mess",
    contactPlaceholder: "you@company.com or Telegram handle",
    companyPlaceholder: "Company, product or project name",
    detailsPlaceholder:
      "What exists now, what is broken, what needs to go live, and what result should the site or app create.",
    projectType: "Project type",
    budget: "Budget",
    send: "Email the brief",
    note:
      "This opens your email client with the brief filled in. Real form delivery can be wired next with Resend, Telegram or a CRM.",
    options: ["Landing", "Web app", "E-commerce", "Brand + site", "Rescue / redesign"],
  },
  ru: {
    kicker: "Бриф / Нормальный старт",
    title: "Расскажи, что строим.",
    text:
      "Хороший бриф спасает всех от пустых созвонов. Дай проект, боль, дедлайн и вилку бюджета.",
    name: "Кто ты?",
    contact: "Куда писать?",
    company: "Компания / проект",
    details: "Что строим?",
    namePlaceholder: "Фаундер, CEO, владелец хаоса",
    contactPlaceholder: "you@company.com или Telegram",
    companyPlaceholder: "Название компании, продукта или проекта",
    detailsPlaceholder:
      "Что уже есть, что сломано, что должно выйти в жизнь и какой результат сайт или app должен принести.",
    projectType: "Тип проекта",
    budget: "Бюджет",
    send: "Отправить бриф",
    note:
      "Кнопка откроет почту с заполненным брифом. Реальную отправку формы можно следующим шагом подключить через Resend, Telegram или CRM.",
    options: ["Лендинг", "Web app", "E-commerce", "Бренд + сайт", "Спасение / редизайн"],
  },
  lv: {
    kicker: "Briefs / Normāls starts",
    title: "Pastāsti, ko būvējam.",
    text:
      "Labs briefs pasargā visus no tukšiem zvaniem. Iedod projektu, sāpi, termiņu un budžeta diapazonu.",
    name: "Kas tu esi?",
    contact: "Kur rakstīt?",
    company: "Uzņēmums / projekts",
    details: "Ko būvējam?",
    namePlaceholder: "Founder, CEO, haosa īpašnieks",
    contactPlaceholder: "you@company.com vai Telegram",
    companyPlaceholder: "Uzņēmuma, produkta vai projekta nosaukums",
    detailsPlaceholder:
      "Kas jau eksistē, kas nestrādā, kam jāiet gaisā un kādu rezultātu lapai vai app jāatnes.",
    projectType: "Projekta tips",
    budget: "Budžets",
    send: "Nosūtīt briefu",
    note:
      "Poga atvērs e-pastu ar aizpildītu briefu. Īstu formas piegādi nākamajā solī var pieslēgt caur Resend, Telegram vai CRM.",
    options: ["Landing", "Web app", "E-commerce", "Zīmols + lapa", "Glābšana / redesign"],
  },
};

const budgets = ["< 1k", "1k-3k", "3k-8k", "8k+"];

export default function BriefPage() {
  const [lang, setLang] = useState<Lang>("en");
  const [projectType, setProjectType] = useState(1);
  const [budget, setBudget] = useState(2);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [company, setCompany] = useState("");
  const [details, setDetails] = useState("");
  const t = copy[lang];

  const changeLang = (nextLang: Lang) => {
    storeLang(nextLang);
    setLang(nextLang);
  };

  useEffect(() => {
    setLang(readStoredLang());
  }, []);

  const mailHref = useMemo(() => {
    const body = [
      `Name: ${name}`,
      `Contact: ${contact}`,
      `Company / project: ${company}`,
      `Project type: ${t.options[projectType]}`,
      `Budget: ${budgets[budget]}`,
      "",
      "Project context:",
      details,
    ].join("\n");

    return `mailto:${email}?subject=${encodeURIComponent(
      "Project brief for NotAgency",
    )}&body=${encodeURIComponent(body)}`;
  }, [budget, company, contact, details, name, projectType, t.options]);

  return (
    <main className={`brief-page-shell lang-${lang}`}>
      <div className="noise" />
      <SiteHeader lang={lang} onLangChange={changeLang} />

      <section className="brief-page">
        <div className="brief-page-copy">
          <p className="kicker">
            <Send size={16} />
            {t.kicker}
          </p>
          <h1>{t.title}</h1>
          <p>{t.text}</p>
          <div className="brief-page-mascot" aria-hidden="true">
            <span className="eye left" />
            <span className="eye right" />
            <span className="mouth" />
          </div>
        </div>

        <form className="brief-form brief-page-form">
          <label>
            {t.name}
            <input
              onChange={(event) => setName(event.target.value)}
              placeholder={t.namePlaceholder}
              value={name}
            />
          </label>
          <label>
            {t.contact}
            <input
              onChange={(event) => setContact(event.target.value)}
              placeholder={t.contactPlaceholder}
              value={contact}
            />
          </label>
          <label>
            {t.company}
            <input
              onChange={(event) => setCompany(event.target.value)}
              placeholder={t.companyPlaceholder}
              value={company}
            />
          </label>
          <label>
            {t.details}
            <textarea
              onChange={(event) => setDetails(event.target.value)}
              placeholder={t.detailsPlaceholder}
              value={details}
            />
          </label>

          <div className="brief-fieldset">
            <span>{t.projectType}</span>
            <div className="option-group">
              {t.options.map((item, index) => (
                <button
                  className={projectType === index ? "selected" : ""}
                  key={item}
                  onClick={() => setProjectType(index)}
                  type="button"
                >
                  {projectType === index && <Check size={16} />}
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="brief-fieldset">
            <span>{t.budget}</span>
            <div className="budget-group">
              {budgets.map((item, index) => (
                <button
                  className={budget === index ? "selected" : ""}
                  key={item}
                  onClick={() => setBudget(index)}
                  type="button"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <a className="submit" href={mailHref}>
            {t.send}
            <ArrowRight size={18} />
          </a>
          <p className="brief-note">
            <X size={16} />
            {t.note}
          </p>
        </form>
      </section>

      <SiteFooter lang={lang} />
    </main>
  );
}
