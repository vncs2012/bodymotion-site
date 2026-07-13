import React from "react";
import GlassCard from "../ui/GlassCard";
import { benefits } from "../../data/benefits";

export default function Benefits() {
  return (
    <section id="beneficios" className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 scroll-mt-24">
      <div className="mb-12 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
        <div>
          <p className="section-eyebrow mb-3">Resultados</p>
        <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Resultados reais para sua rotina
        </h2>
        </div>
        <p className="max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300 lg:justify-self-end">
          Não é só sobre funcionalidades. É sobre reduzir atrito no dia a dia e melhorar acompanhamento.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((b, i) => (
          <GlassCard key={i} hover className={`flex flex-col border-t-4 border-t-bodymotion-blue ${i >= 3 ? "lg:col-span-1" : ""}`}>
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-[8px] bg-bodymotion-blue/10">
              <svg className="w-6 h-6 text-bodymotion-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
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
              <p className="text-xs font-bold uppercase tracking-wider text-bodymotion-blue dark:text-bodymotion-sky">
                {b.result}
              </p>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
