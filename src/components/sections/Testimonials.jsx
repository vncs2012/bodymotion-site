import React from "react";
import GlassCard from "../ui/GlassCard";

const items = [
  {
    name: "Dra. Ana Costa",
    role: "Nutricionista Esportiva",
    text: "O BodyMotion otimizou meu tempo de consulta em 40%. A avaliação corporal com IA impressiona meus pacientes.",
    initials: "AC",
  },
  {
    name: "Clínica Bem Viver",
    role: "Equipe Multidisciplinar",
    text: "Conseguimos centralizar 5 profissionais em uma só plataforma. A gestão ficou muito mais simples.",
    initials: "BV",
  },
  {
    name: "Dr. Marcos Silva",
    role: "Endocrinologista",
    text: "A prescrição em PDF é muito profissional. Meus pacientes adoram receber tudo organizado.",
    initials: "MS",
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

      <div className="grid gap-6 md:grid-cols-3">
        {items.map((t) => (
          <GlassCard key={t.name} hover className="flex flex-col">
            {/* Stars */}
            <div className="flex gap-0.5 mb-4 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.07 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.28-3.957z" />
                </svg>
              ))}
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-sm italic leading-relaxed flex-1">"{t.text}"</p>

            <div className="flex items-center gap-3 mt-6 pt-5 border-t border-slate-200/50 dark:border-white/[0.06]">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-white font-bold text-xs">
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
