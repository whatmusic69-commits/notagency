"use client";

import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import {
  type Lang,
  persistLang,
  readStoredLang,
  localizedHref,
} from "../lib/language";

const navCopy = {
  en: ["Home", "Work", "Portfolio", "Process", "Brief"],
  ru: ["Главная", "Что делаем", "Портфолио", "Процесс", "Заявка"],
  lv: ["Sākums", "Pakalpojumi", "Portfolio", "Process", "Pieteikums"],
};

const navHrefs = ["/#home", "/#work", "/#portfolio", "/#process", "/#brief"];

type SiteHeaderProps = {
  className?: string;
  lang?: Lang;
  onLangChange?: (lang: Lang) => void;
};

export function SiteHeader({
  className = "page-topbar",
  lang: controlledLang,
}: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [internalLang] = useState<Lang>(readStoredLang);
  const lang = controlledLang ?? internalLang;
  const pathname = usePathname();
  const navLinks = navCopy[lang].map((label, index) => ({
    href: localizedHref(navHrefs[index], lang),
    label,
  }));

  useEffect(() => {
    persistLang(lang);
  }, [lang]);

  return (
    <header className={`topbar ${className}`.trim()}>
      <a className="brand" href={localizedHref("/", lang)}>
        <span className="brand-mascot" aria-hidden="true">
          <span className="brand-eye left" />
          <span className="brand-eye right" />
          <span className="brand-mouth" />
        </span>
        NotAgency
      </a>
      <nav className="desktop-nav">
        {navLinks.map((link) => (
          <a href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <div className="top-actions">
        <div className={`language-switcher ${languageOpen ? "open" : ""}`}>
          <button
            className="language-trigger active"
            onClick={() => setLanguageOpen((open) => !open)}
            type="button"
            aria-expanded={languageOpen}
            aria-label="Change language"
          >
            {lang.toUpperCase()}
          </button>
          <div className="language-menu">
            {(["en", "ru", "lv"] as Lang[]).map((item) => (
              <a
                className={item === lang ? "active" : ""}
                key={item}
                href={localizedHref(pathname, item)}
                hrefLang={item}
                aria-current={item === lang ? "page" : undefined}
              >
                {item.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
        <button
          className={`menu-button ${menuOpen ? "active" : ""}`}
          type="button"
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <a href={link.href} key={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}
