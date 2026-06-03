import React from "react";

export default function AnnouncementBar() {
  return (
    <section aria-label="Acesso antecipado BodyMotion" className="px-3 pt-3 sm:px-6 sm:pt-4">
      <div className="mx-auto max-w-7xl animate-fade-in-up overflow-hidden rounded-2xl border border-cyan-500/20 bg-white/70 px-4 py-4 shadow-[0_24px_60px_-46px_rgba(14,116,144,0.8)] backdrop-blur-xl dark:bg-slate-900/60 sm:px-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>

            <div>
              <p className="text-xs font-extrabold uppercase text-cyan-700 dark:text-cyan-300">
                Acesso antecipado controlado
              </p>
              <p className="mt-1 max-w-3xl text-sm font-medium leading-relaxed text-slate-700 dark:text-slate-200 sm:text-base">
                A plataforma ja combina prescricao, antropometria, treinos, portal do paciente e IA nutricional auditavel. Estamos abrindo turmas com onboarding assistido.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-200 hover:from-cyan-400 hover:to-teal-400 active:scale-[0.98]"
          >
            Solicitar acesso
          </button>
        </div>
      </div>
    </section>
  );
}
