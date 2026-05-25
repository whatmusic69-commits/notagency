import { ArrowRight, Mail, MapPin } from "lucide-react";

type Lang = "en" | "ru" | "lv";

const footerCopy = {
  en: {
    links: ["About", "Contacts", "FAQ", "Privacy Policy", "Terms"],
    titleEnd: "harder.",
    titleHit: "hit",
    titleStart: "Internet should",
    text: "Websites, apps and digital systems for people who are done paying for polite mediocrity.",
    location: "Riga / Remote",
    bottom: "No cheap templates were harmed. They deserved worse.",
  },
  ru: {
    links: ["О нас", "Контакты", "FAQ", "Приватность", "Условия"],
    titleEnd: "сильнее.",
    titleHit: "бить",
    titleStart: "Интернет должен",
    text: "Сайты, приложения и digital-системы для тех, кто устал платить за вежливую посредственность.",
    location: "Рига / Удаленно",
    bottom: "Дешевые шаблоны не пострадали. Хотя заслужили этого!",
  },
  lv: {
    links: ["Par mums", "Kontakti", "FAQ", "Privātums", "Noteikumi"],
    titleEnd: "stiprāk.",
    titleHit: "jāsit",
    titleStart: "Internetam",
    text: "Mājaslapas, aplikācijas un digital sistēmas tiem, kuriem apnikusi pieklājīga viduvējība.",
    location: "Rīga / Attālināti",
    bottom: "Lētie template necieta. Lai gan bija pelnījuši.",
  },
};

const footerHrefs = ["/about", "/contacts", "/faq", "/privacy", "/terms"];

export function SiteFooter({ lang = "en" }: { lang?: Lang }) {
  const t = footerCopy[lang];

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <a className="footer-brand" href="/#home">
          <span className="brand-mascot" aria-hidden="true">
            <span className="brand-eye left" />
            <span className="brand-eye right" />
            <span className="brand-mouth" />
          </span>
          NotAgency
        </a>
        <h2>
          {t.titleStart}{" "}
          <span className="footer-hit-word">{t.titleHit}</span>{" "}
          {t.titleEnd}
        </h2>
        <p>{t.text}</p>
      </div>

      <div className="footer-columns">
        <nav className="footer-nav" aria-label="Footer navigation">
          {t.links.map((label, index) => (
            <a href={footerHrefs[index]} key={footerHrefs[index]}>
              {label}
              <ArrowRight size={16} />
            </a>
          ))}
        </nav>

        <div className="footer-contact">
          <a href="mailto:hello@notagency.io">
            <Mail size={18} />
            hello@notagency.io
          </a>
          <span>
            <MapPin size={18} />
            {t.location}
          </span>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 NotAgency</span>
        <span>{t.bottom}</span>
      </div>
    </footer>
  );
}
