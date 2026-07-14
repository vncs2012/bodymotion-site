import React, { useState } from "react";
import useTheme from "../../hooks/useTheme";
import { trackSiteEvent } from "../../utils/analytics";
import Button from "../ui/Button";

const links = [
  { label: "Produto",          href: "#produto" },
  { label: "Nutricionistas",   href: "#nutricionistas" },
  { label: "Clínicas",         href: "#clinicas" },
  { label: "Planos",           href: "#planos" },
  { label: "Segurança",        href: "#seguranca" },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const scrollToContact = () => {
    trackSiteEvent("cta_demo_clicked", { placement: "header" });
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 px-4 backdrop-blur-xl dark:border-white/[0.08] dark:bg-bodymotion-midnight/90 sm:px-6">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between">
        <a
          href="#inicio"
          className="inline-flex items-center gap-2 font-display text-xl font-extrabold tracking-tight text-bodymotion-navy dark:text-white"
        >
          <span className="grid h-8 w-8 place-items-center rounded-[8px] bg-bodymotion-navy text-white dark:bg-bodymotion-blue" aria-hidden="true">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
              <path d="M4 16.5 9.4 7h3.2L18 16.5h-4.2L12 13.2l-1.8 3.3H4Z" fill="currentColor" />
              <path d="M14.2 7H20l-4.1 7.2-2.9-5.1 1.2-2.1Z" fill="currentColor" opacity=".72" />
            </svg>
          </span>
          BodyMotion
        </a>

        <nav className="hidden items-center gap-5 text-sm font-semibold lg:flex xl:gap-7" aria-label="Navegação principal">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-slate-600 transition-colors hover:text-bodymotion-blue dark:text-slate-300 dark:hover:text-bodymotion-sky">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-[8px] border border-slate-200 bg-white text-bodymotion-navy transition-colors hover:border-bodymotion-blue/40 hover:bg-bodymotion-blue/5 dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:hover:bg-white/[0.08]"
            aria-label="Alternar tema"
          >
            {theme === "dark" ? (
              <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.36-6.36-1.41 1.41M7.05 16.95l-1.41 1.41m12.72 0-1.41-1.41M7.05 7.05 5.64 5.64M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
              </svg>
            ) : (
              <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A8.5 8.5 0 1 1 11.21 3 6.5 6.5 0 0 0 21 12.79Z" />
              </svg>
            )}
          </button>

          <Button size="sm" className="hidden sm:inline-flex" onClick={scrollToContact}>
            Agendar demonstração
          </Button>

          <button
            className="grid h-10 w-10 place-items-center rounded-[8px] border border-slate-200 bg-white lg:hidden dark:border-white/10 dark:bg-white/[0.04]"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            <svg className="h-6 w-6 text-slate-700 dark:text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="absolute left-4 right-4 top-[5.25rem] z-40 rounded-[8px] border border-slate-200 bg-white p-5 shadow-xl animate-fade-in-up dark:border-white/10 dark:bg-bodymotion-midnight sm:left-6 sm:right-6 lg:hidden">
          <nav className="flex flex-col gap-3 text-center">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-base font-semibold text-slate-800 hover:text-bodymotion-blue dark:text-slate-200">
                {l.label}
              </a>
            ))}
            <Button className="w-full mt-2" onClick={() => {
              setOpen(false);
              scrollToContact();
            }}>
              Agendar demonstração
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
