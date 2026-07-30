import React from "react";
import Reveal from "../ui/Reveal";
import { FRAGMENTS, PAINS } from "../../data/landing";

export default function Problema() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="shell">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow">O problema</p>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-[-0.02em] text-bm-ink sm:text-[2.6rem]">
                O acompanhamento do seu paciente não deveria morar em cinco lugares.
              </h2>
            </Reveal>
            <div className="mt-8 space-y-6">
              {PAINS.map((pain, i) => (
                <Reveal key={pain.title} delay={i * 90}>
                  <div className="flex gap-4">
                    <span className="mt-1 h-8 w-1 shrink-0 rounded-full bg-bm-cyan" aria-hidden="true" />
                    <div>
                      <h3 className="font-display text-lg font-extrabold text-bm-ink">{pain.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-bm-slate">{pain.detail}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={140}>
            <div className="relative">
              {/* ferramentas fragmentadas */}
              <div className="flex flex-wrap justify-center gap-3">
                {FRAGMENTS.map((f) => (
                  <span
                    key={f.label}
                    className="rounded-xl border border-dashed border-slate-300 bg-bm-paper px-4 py-3 text-sm font-bold text-slate-400"
                    style={{ transform: `rotate(${f.rot})` }}
                  >
                    {f.label}
                  </span>
                ))}
              </div>

              <div className="my-6 flex justify-center" aria-hidden="true">
                <svg viewBox="0 0 40 48" className="h-12 w-10">
                  <path
                    d="M20 2v34M8 26l12 12 12-12"
                    fill="none"
                    stroke="#50b4e6"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* um fluxo só */}
              <div className="rounded-2xl bg-bm-ink p-6 text-white shadow-frame sm:p-8">
                <div className="flex items-center gap-2.5">
                  <img src="/brand/favicon-branca.png" alt="" className="h-6 w-6 object-contain" />
                  <p className="font-display text-lg font-extrabold">
                    Um histórico só, do primeiro dia ao resultado
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm font-bold">
                  {["Consulta", "Dieta", "Treino", "Portal", "Evolução"].map((step, i, arr) => (
                    <React.Fragment key={step}>
                      <span className="rounded-full bg-white/10 px-3.5 py-1.5">{step}</span>
                      {i < arr.length - 1 && (
                        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-bm-cyan" aria-hidden="true">
                          <path d="M5 3l6 5-6 5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </React.Fragment>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-relaxed text-white/65">
                  Cada consulta, medida, refeição e sessão de treino alimenta a mesma linha do
                  tempo — a evolução aparece, para você e para o paciente.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
