import React from "react";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-white px-4 pb-10 pt-10 dark:border-white/[0.08] dark:bg-bodymotion-midnight sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="font-display text-lg font-extrabold text-bodymotion-navy dark:text-white">BodyMotion</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              © 2026 - Plataforma para nutrição, treino e evolução corporal.
            </p>
          </div>

          <nav className="flex flex-wrap gap-5 text-sm font-medium text-slate-500 dark:text-slate-400">
            <a href="#inicio"          className="transition-colors hover:text-bodymotion-blue">Início</a>
            <a href="#produto"         className="transition-colors hover:text-bodymotion-blue">Produto</a>
            <a href="#para-quem"       className="transition-colors hover:text-bodymotion-blue">Para quem</a>
            <a href="#planos"          className="transition-colors hover:text-bodymotion-blue">Planos</a>
            <a href="#seguranca"       className="transition-colors hover:text-bodymotion-blue">Segurança</a>
            <a href="#contato"         className="transition-colors hover:text-bodymotion-blue">Contato</a>
            <a href="#privacidade"     className="transition-colors hover:text-bodymotion-blue">Privacidade</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
