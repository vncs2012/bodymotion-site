import React from "react";

export default function AnnouncementBar() {
  return (
    <section aria-label="Acesso antecipado BodyMotion" className="bg-bodymotion-navy px-4 text-white dark:bg-[#052B58] sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 py-3 text-sm font-semibold sm:flex-row sm:items-center sm:justify-between">
        <p className="leading-relaxed">
          Acesso antecipado com onboarding assistido para nutrição, treino, portal do paciente e IA auditável.
        </p>
        <button
          type="button"
          onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
          className="inline-flex w-fit items-center gap-2 rounded-[8px] bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-bodymotion-yellow transition hover:bg-white/15"
        >
          Entrar na turma
          <svg aria-hidden="true" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
