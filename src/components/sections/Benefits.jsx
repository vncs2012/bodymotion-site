import React from "react";
import GlassCard from "../ui/GlassCard";
import { benefits } from "../../data/benefits";

export default function Benefits() {
  return (
    <section id="beneficios" className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 scroll-mt-24">
      <div className="text-center mb-12">
        <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Resultados reais para sua rotina
        </h2>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Não é só sobre funcionalidades — é sobre o impacto no seu dia a dia e no resultado dos seus pacientes.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((b, i) => (
          <GlassCard key={i} hover className={`flex flex-col ${i >= 3 ? "lg:col-span-1" : ""}`}>
            <div className={`mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl ${b.iconBg}`}>
              <svg className={`w-6 h-6 ${b.iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d={b.iconPath} />
              </svg>
            </div>

            <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
              {b.title}
            </h3>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-1">
              {b.desc}
            </p>

            <div className="mt-4 pt-4 border-t border-slate-200/50 dark:border-white/[0.06]">
              <p className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                {b.result}
              </p>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
