import React from "react";
import GlassCard from "../ui/GlassCard";

const steps = [
  {
    n: "01",
    title: "Crie sua conta",
    desc: "Teste grátis por 14 dias, sem cartão de crédito.",
    icon: (
      <svg className="w-7 h-7 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Cadastre seus pacientes",
    desc: "Importe dados ou adicione manualmente em poucos cliques.",
    icon: (
      <svg className="w-7 h-7 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Atenda e prescreva",
    desc: "Anamnese, avaliação corporal e prescrição em um único fluxo.",
    icon: (
      <svg className="w-7 h-7 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    n: "04",
    title: "Acompanhe a evolução",
    desc: "Histórico, relatórios e comunicação direta com o paciente.",
    icon: (
      <svg className="w-7 h-7 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="mx-auto mt-20 max-w-7xl px-4 sm:px-6">
      <div className="text-center mb-12">
        <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Como funciona
        </h2>
        <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
          Do cadastro ao resultado, em 4 passos simples.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((s, i) => (
          <GlassCard key={i} hover className="text-center relative overflow-hidden">
            <span className="absolute -top-3 -right-2 font-display text-[5rem] font-extrabold leading-none text-cyan-500/[0.06] dark:text-cyan-400/[0.06] select-none">
              {s.n}
            </span>
            <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800/60">
              {s.icon}
            </div>
            <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">{s.title}</h3>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{s.desc}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
