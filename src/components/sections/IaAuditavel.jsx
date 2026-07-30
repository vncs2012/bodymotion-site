import React from "react";
import Reveal from "../ui/Reveal";
import { AI_STEPS } from "../../data/landing";

export default function IaAuditavel() {
  return (
    <section id="ia" className="relative overflow-hidden bg-bm-night py-20 text-white lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/3 h-[420px] w-[420px] rounded-full bg-bm-cyan/15 blur-3xl"
      />
      <div className="shell relative">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow !text-bm-cyan">
              IA auditável · em beta
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-[-0.02em] sm:text-[2.6rem]">
              A IA sugere. A TACO calcula.{" "}
              <span className="text-bm-cyan">Você decide.</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              IA no Bodymotion existe para acelerar o seu trabalho — não para substituir o seu
              julgamento clínico. Cada sugestão fica registrada, revisável e sob o seu controle.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {AI_STEPS.map((item, i) => (
            <Reveal key={item.step} delay={i * 120}>
              <div className="relative h-full rounded-2xl border border-white/12 bg-white/[0.05] p-6 backdrop-blur-sm">
                <span className="font-display text-4xl font-extrabold text-bm-cyan/50">{item.step}</span>
                <h3 className="mt-3 font-display text-xl font-extrabold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160}>
          <div className="mt-10 grid gap-6 rounded-2xl border border-white/12 bg-white/[0.05] p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="font-display text-lg font-extrabold">Sem caixa preta</p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/65">
                A correspondência com a base TACO fica visível item a item. Quando o texto é
                ambíguo — “4 colheres de arroz” — a plataforma pede a sua revisão em vez de
                adivinhar. O que o paciente recebe é sempre o que você aprovou.
              </p>
            </div>
            <div className="rounded-xl border border-bm-cyan/40 bg-bm-ink px-5 py-4 font-mono text-xs leading-relaxed text-white/80">
              <p className="text-bm-cyan">“120 g de frango grelhado”</p>
              <p className="mt-1">→ TACO: Frango, peito, grelhado</p>
              <p>→ 191 kcal · P 38 g · G 3,7 g</p>
              <p className="mt-1 font-bold text-emerald-400">✓ validado pela profissional</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
