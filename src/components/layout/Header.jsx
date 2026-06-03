import React, { useState } from "react";
import useTheme from "../../hooks/useTheme";
import Button from "../ui/Button";

const links = [
  { label: "IA/TACO",          href: "#como-funciona-ia" },
  { label: "Módulos",          href: "#funcionalidades" },
  { label: "Para quem",        href: "#para-quem" },
  { label: "Planos",           href: "#planos" },
  { label: "Segurança",        href: "#seguranca" },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const scrollToContact = () => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl glass-strong px-4 py-3 shadow-glass sm:px-5">
        {/* Logo */}
        <a
          href="#inicio"
          className="font-display text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-teal-500"
        >
          BodyMotion
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-5 text-sm font-semibold lg:flex xl:gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/60 bg-white/50 text-base transition-colors hover:bg-white dark:border-white/10 dark:bg-slate-800/60 dark:hover:bg-slate-800"
            aria-label="Alternar tema"
          >
            {theme === "dark" ? "☀" : "◐"}
          </button>

          <Button size="sm" className="hidden sm:inline-flex" onClick={scrollToContact}>
            Solicitar acesso
          </Button>

          {/* Mobile hamburger */}
          <button className="p-1.5 lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            <svg className="w-6 h-6 text-slate-700 dark:text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="absolute left-3 right-3 top-[4rem] z-40 rounded-2xl glass-strong p-5 shadow-xl animate-fade-in-up sm:left-4 sm:right-4 lg:hidden">
          <nav className="flex flex-col gap-3 text-center">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-cyan-500">
                {l.label}
              </a>
            ))}
            <Button className="w-full mt-2" onClick={() => {
              setOpen(false);
              scrollToContact();
            }}>
              Solicitar acesso
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
