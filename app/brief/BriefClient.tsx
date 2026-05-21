"use client";

import { type FormEvent, useState } from "react";
import { ArrowRight, Check, Send } from "lucide-react";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { type Lang, storeLang } from "../lib/language";

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
    contactPlaceholder: "you@company.com",
    companyPlaceholder: "Company, product or project name",
    detailsPlaceholder:
      "What exists now, what is broken, what needs to go live, and what result should the site or app create.",
    projectType: "Project type",
    budget: "Budget",
    customProject: "Custom",
    customProjectPlaceholder: "Write the project type",
    send: "Email the brief",
    sending: "Sending...",
    sent: "Brief sent. We will reply by email.",
    error: "Could not send. Write to hello@notagency.io.",
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
    contactPlaceholder: "you@company.com",
    companyPlaceholder: "Название компании, продукта или проекта",
    detailsPlaceholder:
      "Что уже есть, что сломано, что должно выйти в жизнь и какой результат сайт или app должен принести.",
    projectType: "Тип проекта",
    budget: "Бюджет",
    customProject: "Свой вариант",
    customProjectPlaceholder: "Напиши тип проекта",
    send: "Отправить бриф",
    sending: "Отправляем...",
    sent: "Бриф ушел. Ответим на почту.",
    error: "Не получилось отправить. Напиши на hello@notagency.io.",
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
    contactPlaceholder: "you@company.com",
    companyPlaceholder: "Uzņēmuma, produkta vai projekta nosaukums",
    detailsPlaceholder:
      "Kas jau eksistē, kas nestrādā, kam jāiet gaisā un kādu rezultātu lapai vai app jāatnes.",
    projectType: "Projekta tips",
    budget: "Budžets",
    customProject: "Savs variants",
    customProjectPlaceholder: "Ieraksti projekta tipu",
    send: "Nosūtīt briefu",
    sending: "Sūtām...",
    sent: "Briefs aizgāja. Atbildēsim uz email.",
    error: "Neizdevās nosūtīt. Raksti uz hello@notagency.io.",
    options: ["Landing", "Web app", "E-commerce", "Zīmols + lapa", "Glābšana / redesign"],
  },
};

const budgets = ["< 1k", "1k-3k", "3k-8k", "8k+"];

type BriefClientProps = {
  initialLang: Lang;
};

export default function BriefClient({ initialLang }: BriefClientProps) {
  const [lang, setLang] = useState<Lang>(initialLang);
  const [projectType, setProjectType] = useState<number | "custom">(1);
  const [budget, setBudget] = useState(2);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [company, setCompany] = useState("");
  const [details, setDetails] = useState("");
  const [customProjectType, setCustomProjectType] = useState("");
  const [submitStatus, setSubmitStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const t = copy[lang];

  const changeLang = (nextLang: Lang) => {
    storeLang(nextLang);
    setLang(nextLang);
  };

  const submitBrief = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          form: "brief",
          lang,
          name,
          email: contact,
          company,
          details,
          projectType:
            projectType === "custom" ? customProjectType : t.options[projectType],
          budget: budgets[budget],
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setName("");
      setContact("");
      setCompany("");
      setDetails("");
      setCustomProjectType("");
      setProjectType(1);
      setSubmitStatus("sent");
    } catch {
      setSubmitStatus("error");
    }
  };

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

        <form className="brief-form brief-page-form" onSubmit={submitBrief}>
          <label>
            {t.name}
            <input
              onChange={(event) => setName(event.target.value)}
              placeholder={t.namePlaceholder}
              required
              value={name}
            />
          </label>
          <label>
            {t.contact}
            <input
              onChange={(event) => setContact(event.target.value)}
              placeholder={t.contactPlaceholder}
              required
              type="email"
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
              required
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
              <button
                className={projectType === "custom" ? "selected" : ""}
                onClick={() => setProjectType("custom")}
                type="button"
              >
                {projectType === "custom" && <Check size={16} />}
                {t.customProject}
              </button>
            </div>
            {projectType === "custom" ? (
              <input
                className="custom-project-input"
                onChange={(event) => setCustomProjectType(event.target.value)}
                placeholder={t.customProjectPlaceholder}
                required
                value={customProjectType}
              />
            ) : null}
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

          <button className="submit" disabled={submitStatus === "sending"} type="submit">
            {submitStatus === "sending" ? t.sending : t.send}
            <ArrowRight size={18} />
          </button>
          {submitStatus !== "idle" ? (
            <p className={`form-status ${submitStatus}`} role="status">
              {submitStatus === "sent" ? t.sent : submitStatus === "error" ? t.error : t.sending}
            </p>
          ) : null}
        </form>
      </section>

      <SiteFooter lang={lang} />
    </main>
  );
}
