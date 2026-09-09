import React from "react";
import MotionLine from "../ui/MotionLine";
import ProductFrame from "../ui/ProductFrame";
import Reveal from "../ui/Reveal";
import { HERO_FACTS } from "../../data/landing";
import { getScreen } from "../../data/screens";
import { startTrial } from "../../utils/trial";
import { trackSiteEvent } from "../../utils/analytics";

const FACT_ICONS = [
  // macros / TACO
  <path key="0" d="M7 3v8M5 3v5a2 2 0 004 0V3M7 11v10M17 3c-2 1-3 3-3 6v12M17 3v18" />,
  // portal sem app
  <React.Fragment key="1">
    <rect x="7" y="2" width="10" height="20" rx="2" />
    <path d="M11 18h2" />
  </React.Fragment>,
  // teleconsulta
  <React.Fragment key="2">
    <path d="M15 10l5-3v10l-5-3" />
    <rect x="3" y="6" width="12" height="12" rx="2" />
  </React.Fragment>,
  // LGPD
  <React.Fragment key="3">
    <path d="M12 3l7 3v5c0 4.4-3 8.4-7 10-4-1.6-7-5.6-7-10V6l7-3z" />
    <path d="M9 12l2 2 4-4" />
  </React.Fragment>,
];

export default function Hero() {
  const heroDesktop = getScreen("hero");
  const heroMobile = getScreen("heroMobile");

  return (
    <>
      <section id="inicio" className="relative overflow-hidden bg-bm-night pb-16 pt-28 lg:pb-0 lg:pt-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-bm-cyan/[0.18] blur-3xl"
        />

        <div className="shell relative">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:items-center lg:gap-14">
            <div className="max-w-[520px]">
              <Reveal>
                <p className="eyebrow !text-bm-cyan">
                  Para nutricionistas, clínicas e profissionais de avaliação física
                </p>
              </Reveal>

              <Reveal delay={90}>
                <h1 className="mt-5 font-display text-[38px] font-extrabold leading-[1.05] tracking-[-0.03em] text-white lg:text-[64px] lg:leading-[1.02]">
                  Prontuário, avaliação física e dieta{" "}
                  <span className="relative inline-block whitespace-nowrap">
                    em um só lugar
                    <MotionLine className="absolute -bottom-1 left-0 h-[0.3em] w-full" />
                  </span>
                  .
                </h1>
              </Reveal>

              <Reveal delay={180}>
                <p className="mt-6 text-lg leading-relaxed text-white/70">
                  Consulta, medidas, fotos de evolução, plano alimentar e treino no mesmo histórico.
                  O paciente acompanha tudo pelo celular, sem instalar nada.
                </p>
              </Reveal>

              <Reveal delay={260}>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    className="btn-primary text-base"
                    onClick={() => {
                      trackSiteEvent("hero_primary_cta_click");
                      startTrial({ planId: "pro" });
                    }}
                  >
                    Testar grátis por 14 dias
                    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M7 4l6 6-6 6" />
                    </svg>
                  </button>
                  <a
                    href="#plataforma"
                    className="btn-ghost-dark text-base"
                    onClick={() => trackSiteEvent("hero_secondary_cta_click")}
                  >
                    Conhecer a plataforma
                  </a>
                </div>
                <p className="mt-4 text-sm font-semibold text-white/60">
                  Acesso completo · até 10 pacientes no teste · sem compromisso
                </p>
              </Reveal>
            </div>

            <Reveal delay={200}>
              {heroMobile && (
                <ProductFrame
                  priority
                  screenshot={heroMobile.src}
                  width={heroMobile.width}
                  height={heroMobile.height}
                  sources={
                    heroDesktop
                      ? [
                          {
                            media: "(min-width: 1024px)",
                            src: heroDesktop.src,
                            width: heroDesktop.width,
                            height: heroDesktop.height,
                          },
                        ]
                      : []
                  }
                  alt="Ficha do paciente no Bodymotion: estado do cuidado, risco, adesão e retorno"
                  className="-mr-5 rounded-r-none border-r-0 sm:-mr-8 lg:-mr-[220px]"
                />
              )}
            </Reveal>
          </div>
        </div>
      </section>

      <div className="bg-bm-paper">
        <Reveal delay={120} className="shell">
          <dl className="grid grid-cols-2 gap-x-4 gap-y-5 border-t border-bm-mist py-7 lg:grid-cols-4 lg:gap-6">
            {HERO_FACTS.map((fact, i) => (
              <div key={fact.title} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-bm-cyan-soft text-bm-ink">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {FACT_ICONS[i]}
                  </svg>
                </span>
                <div>
                  <dt className="font-display text-[15px] font-extrabold text-bm-ink">{fact.title}</dt>
                  <dd className="mt-0.5 hidden text-sm font-medium leading-snug text-bm-slate lg:block">{fact.detail}</dd>
                </div>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </>
  );
}
