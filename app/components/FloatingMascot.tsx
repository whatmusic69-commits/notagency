"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import {
  isLang,
  languageChangeEventName,
  readStoredLang,
  type Lang,
} from "../lib/language";

const mascotDelayMs = 5 * 30 * 1000;
const mascotDismissedAtKey = "notagency-floating-mascot-dismissed-at";
const mascotDismissCooldownMs = 60 * 60 * 1000;

const copy: Record<
  Lang,
  {
    text: string;
    cta: string;
    close: string;
  }
> = {
  en: {
    text: "Any questions? Send us context and we will tell you what makes sense.",
    cta: "Write to us",
    close: "Close mascot message",
  },
  ru: {
    text: "Есть вопросы? Напиши нам контекст, и мы скажем, что имеет смысл делать.",
    cta: "Написать нам",
    close: "Закрыть сообщение персонажа",
  },
  lv: {
    text: "Ir jautājumi? Atsūti kontekstu, un pateiksim, ko ir vērts darīt.",
    cta: "Rakstīt mums",
    close: "Aizvērt tēla ziņu",
  },
};

export function FloatingMascot() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    setLang(readStoredLang());
    const dismissedAt = Number(
      window.localStorage.getItem(mascotDismissedAtKey) ?? 0,
    );
    const shouldWaitForCooldown =
      Date.now() - dismissedAt < mascotDismissCooldownMs;

    const updateLang = (event: Event) => {
      const nextLang = (event as CustomEvent).detail;

      if (isLang(nextLang)) {
        setLang(nextLang);
      }
    };

    window.addEventListener(languageChangeEventName, updateLang);

    if (shouldWaitForCooldown) {
      return () => {
        window.removeEventListener(languageChangeEventName, updateLang);
      };
    }

    const timer = window.setTimeout(() => {
      setVisible(true);
    }, mascotDelayMs);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener(languageChangeEventName, updateLang);
    };
  }, []);

  if (!visible || dismissed) {
    return null;
  }

  const t = copy[lang];
  const dismiss = () => {
    window.localStorage.setItem(mascotDismissedAtKey, String(Date.now()));
    setDismissed(true);
  };

  return (
    <aside className="floating-mascot-widget" aria-label="Contact prompt">
      <div className="floating-mascot-bubble">
        <button
          aria-label={t.close}
          className="floating-mascot-close"
          onClick={dismiss}
          type="button"
        >
          <X size={16} />
        </button>
        <p>{t.text}</p>
        <a href="/contacts">{t.cta}</a>
      </div>
      <a className="floating-mascot" href="/contacts" aria-label={t.cta}>
        <span className="floating-eye left" />
        <span className="floating-eye right" />
        <span className="floating-mouth" />
      </a>
    </aside>
  );
}
