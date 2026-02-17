import React from "react";

export default function Footer() {
  return (
    <footer className="px-4 pb-10 sm:px-6 mt-24">
      <div className="mx-auto max-w-7xl rounded-2xl glass-strong px-6 py-6 shadow-glass">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="font-display font-bold text-slate-900 dark:text-white">BodyMotion</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              © 2026 — Plataforma para gestão em nutrição e saúde.
            </p>
          </div>

          <nav className="flex flex-wrap gap-5 text-sm font-medium text-slate-500 dark:text-slate-400">
            <a href="#inicio"          className="hover:text-cyan-500 transition-colors">Início</a>
            <a href="#funcionalidades" className="hover:text-cyan-500 transition-colors">Funcionalidades</a>
            <a href="#planos"          className="hover:text-cyan-500 transition-colors">Planos</a>
            <a href="#faq"             className="hover:text-cyan-500 transition-colors">FAQ</a>
            <a href="#contato"         className="hover:text-cyan-500 transition-colors">Contato</a>
            <a href="#"                className="hover:text-cyan-500 transition-colors">Privacidade</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
