import React from "react";
import Reveal from "../ui/Reveal";
import { PERSONAS } from "../../data/landing";

const PERSONA_ICONS = [
  <path key="0" d="M7 3v8M5 3v5a2 2 0 004 0V3M7 11v10M17 3c-2 1-3 3-3 6v12M17 3v18" />,
  <React.Fragment key="1">
    <path d="M16 19v-1a4 4 0 00-8 0v1" />
    <circle cx="12" cy="9" r="3" />
    <path d="M20 19v-1a3 3 0 00-2-2.8M4 19v-1a3 3 0 012-2.8" />
  </React.Fragment>,
  <path key="2" d="M3 12h4l3-7 4 14 3-7h4" />,
];

export default function ParaQuem() {
  return (
    <section id="para-quem" className="bg-bm-paper py-14 lg:py-24">
      <div className="shell grid gap-10 lg:grid-cols-[380px_1fr] lg:items-start lg:gap-[72px]">
        <Reveal className="flex flex-col gap-4">
          <p className="eyebrow">Para quem é</p>
          <h2 className="font-display text-3xl font-extrabold leading-tight tracking-[-0.02em] text-bm-ink sm:text-[2.6rem]">
            Feito para quem acompanha evolução de verdade.
          </h2>
          <p className="text-lg leading-relaxed text-bm-slate">
            Do consultório solo à clínica com equipe, o mesmo padrão de atendimento.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5">
          {PERSONAS.map((persona, i) => (
            <Reveal key={persona.title} delay={i * 100}>
              <article className="card-surface flex h-full items-center gap-4 p-5 lg:flex-col lg:items-start lg:gap-4 lg:p-7">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bm-cyan-soft text-bm-ink">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {PERSONA_ICONS[i]}
                  </svg>
                </span>
                <div className="flex flex-col gap-1.5">
                  <p className="font-display text-[22px] font-extrabold leading-snug text-bm-ink">
                    {persona.title}
                  </p>
                  <p className="text-sm leading-relaxed text-bm-slate">{persona.detail}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
