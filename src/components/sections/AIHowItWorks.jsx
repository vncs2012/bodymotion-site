import React from "react";
import GlassCard from "../ui/GlassCard";
import { aiSteps } from "../../data/aiSteps";

export default function AIHowItWorks() {
  return (
    <section id="como-funciona-ia" className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 scroll-mt-24">
      <div className="mb-10 mx-auto max-w-3xl">
        <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-cyan-500/25 bg-cyan-500/10 px-5 py-4 dark:bg-cyan-500/[0.07] sm:flex-row sm:items-center sm:px-6">
          <div className="flex items-center gap-3">
            <span className="flex h-3 w-3 shrink-0">
              <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-cyan-400 opacity-60" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-500" />
            </span>
            <p className="text-sm font-semibold text-cyan-800 dark:text-cyan-300">
              <strong>Beta assistido</strong> - IA para acelerar o trabalho, com validação final do profissional.
            </p>
          </div>
          <a
            href="#contato"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-bold text-cyan-700 transition-colors hover:text-cyan-600 dark:text-cyan-300 dark:hover:text-cyan-200"
          >
            Entrar no beta
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      <div className="text-center mb-12">
        <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          IA auditável para{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
            nutrição e evolução corporal
          </span>
        </h2>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          A promessa não é substituir sua decisão clínica. A plataforma organiza dados, calcula com referência TACO e destaca pontos que precisam de revisão.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 relative">
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
            a IA complementa a decisão profissional. Cálculos nutricionais, candidatos ambíguos e medidas corporais devem ser revisados antes de qualquer orientação ao paciente.
          </p>
        </div>
      </div>
    </section>
  );
}
