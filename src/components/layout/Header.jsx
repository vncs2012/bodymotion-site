import React, { useState } from "react";
import useTheme from "../../hooks/useTheme";
import Button from "../ui/Button";

const links = [
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Planos",          href: "#planos" },
  { label: "FAQ",             href: "#faq" },
  { label: "Contato",         href: "#contato" },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl glass-strong px-5 py-3 shadow-glass">
        {/* Logo */}
        <a
          href="#inicio"
          className="font-display text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-teal-500"
        >
          BodyMotion
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
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
            className="w-9 h-9 rounded-full border border-slate-200/60 dark:border-white/10 bg-white/50 dark:bg-slate-800/60 flex items-center justify-center text-base transition-colors hover:bg-white dark:hover:bg-slate-800"
            aria-label="Alternar tema"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          <a href="#planos" className="hidden sm:inline-flex">
            <Button size="sm">Teste grátis</Button>
          </a>

          {/* Mobile hamburger */}
          <button className="md:hidden p-1.5" onClick={() => setOpen(!open)} aria-label="Menu">
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
        <div className="md:hidden absolute left-4 right-4 top-[4.5rem] rounded-2xl glass-strong p-5 shadow-xl animate-fade-in-up z-40">
          <nav className="flex flex-col gap-3 text-center">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-cyan-500">
                {l.label}
              </a>
            ))}
            <a href="#planos" onClick={() => setOpen(false)}>
              <Button className="w-full mt-2">Começar Agora</Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
