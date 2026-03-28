import React from "react";

export default function AnnouncementBar() {
  return (
    <section aria-label="Aviso de lançamento" className="px-4 pt-4 sm:px-6">
      <div className="mx-auto max-w-7xl animate-fade-in-up overflow-hidden rounded-3xl border border-amber-400/30 bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-cyan-500/15 px-5 py-4 shadow-[0_24px_60px_-40px_rgba(245,158,11,0.8)] backdrop-blur-xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-amber-400/30 bg-amber-500/15 text-amber-700 dark:text-amber-300">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
              </svg>
            </div>

            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-amber-700 dark:text-amber-300">
                Lançamento em breve
              </p>
              <p className="mt-1 max-w-3xl text-sm font-medium leading-relaxed text-slate-700 dark:text-slate-200 sm:text-base">
                Estamos finalizando os últimos ajustes antes de abrir a BodyMotion. Deixe seu contato para receber o aviso quando os primeiros acessos forem liberados.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-amber-500/20 transition-all duration-200 hover:from-amber-400 hover:to-orange-400 active:scale-[0.98]"
          >
            Quero ser avisado
          </button>
        </div>
      </div>
    </section>
  );
}
