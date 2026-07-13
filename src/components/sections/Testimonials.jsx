import React from "react";
import GlassCard from "../ui/GlassCard";

const metrics = [
  { value: "500+", label: "Profissionais ativos" },
  { value: "12.000+", label: "Avaliações realizadas" },
  { value: "40%", label: "Menos tempo por consulta" },
  { value: "4.9/5", label: "Nota média" },
];

const items = [
  {
    name: "Dra. Ana Costa",
    role: "Nutricionista Esportiva",
    text: "O BodyMotion otimizou meu tempo de consulta em 40%. A avaliação corporal com IA impressiona meus pacientes e me dá mais segurança no acompanhamento.",
    initials: "AC",
  },
  {
    name: "Clínica Bem Viver",
    role: "Equipe Multidisciplinar",
    text: "Conseguimos centralizar 5 profissionais em uma só plataforma. A gestão ficou muito mais simples e temos visão real da operação.",
    initials: "BV",
  },
  {
    name: "Dr. Marcos Silva",
    role: "Endocrinologista",
    text: "A prescrição em PDF é muito profissional. Meus pacientes adoram receber tudo organizado e com a minha identidade visual.",
    initials: "MS",
  },
  {
    name: "Dra. Camila Rocha",
    role: "Nutricionista Clínica",
    text: "Antes eu usava 3 ferramentas diferentes. Com o BodyMotion centralizo tudo: anamnese, avaliação, prescrição e chat com paciente.",
    initials: "CR",
  },
  {
    name: "Clínica Equilíbrio",
    role: "Rede com 3 unidades",
    text: "O dashboard gerencial nos deu visibilidade que não tínhamos. Conseguimos medir performance da equipe e melhorar a retenção de pacientes.",
    initials: "EQ",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6">
      <div className="text-center mb-12">
        <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Quem usa, recomenda
        </h2>
        <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
          Profissionais que já transformaram sua rotina com o BodyMotion.
        </p>
      </div>

      {/* Metrics bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="text-center rounded-[8px] border border-slate-200/60 dark:border-white/[0.06] bg-white/50 dark:bg-white/[0.02] p-5"
          >
            <p className="font-display text-2xl sm:text-3xl font-extrabold text-bodymotion-blue">
              {m.value}
            </p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 font-medium">
              {m.label}
            </p>
          </div>
        ))}
      </div>

      {/* Testimonial cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((t) => (
          <GlassCard key={t.name} hover className="flex flex-col">
            {/* Stars */}
            <div className="flex gap-0.5 mb-4 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.07 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.28-3.957z" />
                </svg>
              ))}
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-sm italic leading-relaxed flex-1">"{t.text}"</p>

            <div className="flex items-center gap-3 mt-6 pt-5 border-t border-slate-200/50 dark:border-white/[0.06]">
              <div className="w-10 h-10 rounded-full bg-bodymotion-navy flex items-center justify-center text-white font-bold text-xs dark:bg-bodymotion-blue">
                {t.initials}
              </div>
              <div>
                <p className="font-bold text-sm text-slate-900 dark:text-white">{t.name}</p>
                <p className="text-xs text-slate-400">{t.role}</p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
