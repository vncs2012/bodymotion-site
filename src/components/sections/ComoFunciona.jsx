import React from "react";
import Reveal from "../ui/Reveal";
import { STEPS } from "../../data/landing";

export default function ComoFunciona() {
  return (
    <section id="fluxo" className="bg-white py-20 lg:py-28">
      <div className="shell">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Como funciona</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-[-0.02em] text-bm-ink sm:text-[2.6rem]">
            Um fluxo que acompanha a semana real de atendimento.
          </h2>
        </Reveal>

        <ol className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {/* trilho de conexão no desktop */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-bm-cyan/60 to-transparent lg:block"
          />
          {STEPS.map((step, i) => (
            <Reveal key={step.title} as="li" delay={i * 110} className="relative">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-bm-cyan bg-white font-display text-lg font-extrabold text-bm-cyan-deep shadow-card">
                {i + 1}
              </div>
              <h3 className="mt-4 font-display text-lg font-extrabold text-bm-ink">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-bm-slate">{step.detail}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
