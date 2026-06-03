import React from "react";
import GlassCard from "../ui/GlassCard";

const steps = [
  {
    n: "01",
    title: "Cadastre o paciente",
    desc: "Centralize dados clínicos, contato, histórico e permissões de acesso.",
    iconColor: "text-cyan-500",
    iconPath: "M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
  },
  {
    n: "02",
    title: "Colete contexto",
    desc: "Use anamnese, antropometria, fotos, agenda e prontuário para montar o quadro real.",
    iconColor: "text-teal-500",
    iconPath: "M9 12h6m-6 4h6M7 3h5.586a1 1 0 0 1 .707.293l5.414 5.414A1 1 0 0 1 19 9.414V21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z",
  },
  {
    n: "03",
    title: "Prescreva dieta e treino",
    desc: "Monte prescrição, calcule macros com TACO e atribua treinos com check-ins.",
    iconColor: "text-indigo-500",
    iconPath: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
  },
  {
    n: "04",
    title: "Acompanhe pelo portal",
    desc: "Paciente acessa prescrições, treinos, consultas, TCLE, hábitos e diário alimentar.",
    iconColor: "text-rose-500",
    iconPath: "M12 18h.01M8 21h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Z",
  },
  {
    n: "05",
    title: "Revise evolução",
    desc: "Use relatórios, timeline e histórico corporal para ajustar o plano com base em dados.",
    iconColor: "text-amber-500",
    iconPath: "M4 19V5m0 14h16M8 17v-6m4 6V7m4 10v-4",
  },
];

export default function HowItWorks() {
  return (
    <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6">
      <div className="text-center mb-12">
        <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Um fluxo único para acompanhar progresso
        </h2>
        <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
          Do primeiro cadastro ao ajuste de conduta, sem espalhar dados entre planilhas, PDFs e conversas.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
        {steps.map((s) => (
          <GlassCard key={s.n} hover className="relative overflow-hidden text-center">
            <span className="absolute -right-2 -top-3 select-none font-display text-[4.5rem] font-extrabold leading-none text-cyan-500/[0.06] dark:text-cyan-400/[0.06]">
              {s.n}
            </span>
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800/60">
              <svg className={`h-7 w-7 ${s.iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d={s.iconPath} />
              </svg>
            </div>
            <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{s.desc}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
