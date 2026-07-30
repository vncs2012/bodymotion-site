import React from "react";
import Reveal from "../ui/Reveal";
import { PERSONAS } from "../../data/landing";

export default function Personas() {
  return (
    <section id="para-quem" className="bg-white py-20 lg:py-28">
      <div className="shell">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Para quem é</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-[-0.02em] text-bm-ink sm:text-[2.6rem]">
            Feito para quem acompanha evolução de verdade.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {PERSONAS.map((persona, i) => (
            <Reveal key={persona.title} delay={i * 120}>
              <article className="card-surface flex h-full flex-col p-7 sm:p-9">
                <p className="eyebrow">{persona.eyebrow}</p>
                <h3 className="mt-3 font-display text-2xl font-extrabold text-bm-ink">
                  {persona.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-bm-slate">{persona.detail}</p>
                <ul className="mt-6 space-y-3 border-t border-bm-mist pt-6">
                  {persona.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-sm font-semibold text-bm-ink">
                      <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0 text-bm-cyan-deep" fill="none" aria-hidden="true">
                        <circle cx="10" cy="10" r="9" className="fill-bm-cyan/15" />
                        <path d="M6 10.5l2.6 2.6L14 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <a
                  href="#demonstracao"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-bm-cyan-deep underline-offset-4 hover:underline"
                >
                  Ver na demonstração
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden="true">
                    <path d="M5 3l6 5-6 5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
