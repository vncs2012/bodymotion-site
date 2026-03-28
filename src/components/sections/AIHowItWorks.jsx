import React from "react";
import GlassCard from "../ui/GlassCard";
import { aiSteps } from "../../data/aiSteps";

export default function AIHowItWorks() {
  return (
    <section id="como-funciona-ia" className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 scroll-mt-24">
      {/* Em desenvolvimento banner */}
      <div className="mb-10 mx-auto max-w-3xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-violet-500/30 bg-violet-500/10 dark:bg-violet-500/[0.07] px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="flex h-3 w-3 shrink-0">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-violet-400 opacity-60"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-violet-500"></span>
            </span>
            <p className="text-sm font-semibold text-violet-800 dark:text-violet-300">
              <strong>Em desenvolvimento</strong> — Seja um dos primeiros a ter acesso antecipado.
            </p>
          </div>
          <a
            href="#contato"
            className="shrink-0 inline-flex items-center gap-1.5 text-sm font-bold text-violet-700 dark:text-violet-300 hover:text-violet-600 dark:hover:text-violet-200 transition-colors"
          >
            Solicitar acesso antecipado
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      <div className="text-center mb-12">
        <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Como vai funcionar a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
            IA de antropometria por foto
          </span>
        </h2>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Avaliação corporal automatizada em 3 passos simples. Sem equipamentos caros, sem complicação.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 relative">
        {/* Connecting lines (desktop only) */}
        <div className="hidden md:block absolute top-1/2 left-[33%] w-[34%] h-px bg-gradient-to-r from-cyan-500/30 via-violet-500/30 to-teal-500/30 -translate-y-1/2 z-0" />

        {aiSteps.map((step, i) => (
          <GlassCard key={i} hover className="text-center relative z-10">
            <span className="absolute -top-3 -right-2 font-display text-[5rem] font-extrabold leading-none text-cyan-500/[0.06] dark:text-cyan-400/[0.06] select-none">
              {step.n}
            </span>

            <div className={`mb-4 inline-flex items-center justify-center w-14 h-14 rounded-2xl ${step.iconBg}`}>
              <svg className={`w-7 h-7 ${step.iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d={step.iconPath} />
              </svg>
            </div>

            <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
              {step.title}
            </h3>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              {step.desc}
            </p>
          </GlassCard>
        ))}
      </div>

      {/* Important caveat */}
      <div className="mt-8 mx-auto max-w-3xl">
        <div className="flex gap-3 rounded-2xl border border-amber-500/20 bg-amber-500/5 dark:bg-amber-500/[0.03] p-5">
          <svg className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            <strong className="text-slate-800 dark:text-white">Importante:</strong>{" "}
            A avaliação por IA complementa — não substitui — a avaliação presencial.
            Resultados dependem de padronização na captura (iluminação, posicionamento, vestimenta).
            O profissional sempre valida e pode ajustar qualquer medida manualmente.
          </p>
        </div>
      </div>
    </section>
  );
}
