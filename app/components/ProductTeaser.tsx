"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { ArrowDownRight, Asterisk, Smile } from "lucide-react";
import type { Lang } from "../lib/language";
import comingSoon from "../src/comingsoon.png";

const copy = {
  en: {
    label: "Currently cooking", title: "We’re building", accent: "something big.",
    lines: ["Not for a client.", "Not for a portfolio piece.", "Our own. A real product."],
    aside: "And yeah — we think it’s going to be pretty fucking good.",
    soon: "Coming soon. Keep an eye out.", secret: "Can’t show yet", try: "Nice try.",
    hint: "A little peek?", preview: "Try to peek at our upcoming product", status: "In development",
  },
  ru: {
    label: "Кое-что готовим", title: "Мы делаем", accent: "что-то большое.",
    lines: ["Не для клиента.", "Не ради кейса в портфолио.", "Своё. Настоящий продукт."],
    aside: "И да — кажется, получится чертовски круто.",
    soon: "Скоро. Следи за нами.", secret: "Пока нельзя", try: "Хорошая попытка.",
    hint: "Одним глазком?", preview: "Попробовать подсмотреть наш будущий продукт", status: "В разработке",
  },
  lv: {
    label: "Kaut ko gatavojam", title: "Mēs radām", accent: "kaut ko lielu.",
    lines: ["Ne klientam.", "Ne portfolio papildināšanai.", "Savu. Īstu produktu."],
    aside: "Un jā — šķiet, tas būs sasodīti labs.",
    soon: "Drīzumā. Seko līdzi.", secret: "Vēl nedrīkst", try: "Labs mēģinājums.",
    hint: "Tikai palūrēt?", preview: "Mēģināt ieskatīties mūsu topošajā produktā", status: "Izstrādē",
  },
} satisfies Record<Lang, {
  label: string; title: string; accent: string; lines: string[]; aside: string;
  soon: string; secret: string; try: string; hint: string; preview: string; status: string;
}>;

export function ProductTeaser({ lang }: { lang: Lang }) {
  const sectionRef = useRef<HTMLElement>(null);
  const t = copy[lang];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      section.classList.add("is-visible");
      observer.disconnect();
    }, { threshold: 0.15 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="product-teaser" aria-labelledby="product-teaser-title" ref={sectionRef}>
      <div className="product-teaser-copy">
        <p className="kicker"><Asterisk size={20} aria-hidden="true" /> NOTAGENCY / {t.label}</p>
        <h2 id="product-teaser-title">{t.title} <span>{t.accent}</span></h2>
        <p className="product-teaser-description">
          {t.lines.map((line) => <span key={line}>{line}</span>)}
        </p>
        <p className="product-teaser-aside">{t.aside}</p>
        <p className="product-teaser-status"><span aria-hidden="true" />{t.status}</p>
      </div>

      <div className="product-teaser-visual">
        <span className="product-teaser-sticker" aria-hidden="true">TOP SECRET</span>
        <button type="button" className="product-teaser-preview" aria-label={t.preview}>
          <span className="product-teaser-window" aria-hidden="true">
            <span className="product-teaser-dots"><i /><i /><i /></span>
            <span>PROJECT <span className="product-teaser-redacted" /></span>
            <Smile size={24} />
          </span>
          <span className="product-teaser-screen" aria-hidden="true">
            <Image src={comingSoon} alt="" fill sizes="(max-width: 900px) 90vw, 560px" />
            <span className="product-teaser-tint" />
            <span className="product-teaser-censor">
              <span className="product-teaser-secret">{t.secret}</span>
              <span className="product-teaser-rebuff">{t.try}</span>
            </span>
            <span className="product-teaser-small-censor" />
          </span>
          <span className="product-teaser-caption" aria-hidden="true"><span>NOTAGENCY ORIGINAL</span><span>01 / ???</span></span>
        </button>
        <div className="product-teaser-note" aria-hidden="true"><span>{t.hint}</span><ArrowDownRight size={34} /></div>
        <p className="product-teaser-soon"><Asterisk size={22} aria-hidden="true" />{t.soon}</p>
      </div>
    </section>
  );
}
