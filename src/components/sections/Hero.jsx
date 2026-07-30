import React from "react";
import MotionLine from "../ui/MotionLine";
import ProductFrame from "../ui/ProductFrame";
import Reveal from "../ui/Reveal";
import { DashboardMock } from "../mock/compositions";
import { PROOFS } from "../../data/landing";
import { heroScreenshot } from "../../data/screens";
import { trackSiteEvent } from "../../utils/analytics";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-bm-paper pb-16 pt-28 sm:pt-36 lg:pb-24">
      {/* fundo: grade pontilhada + brilho ciano */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(rgba(34,37,90,0.10) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage: "radial-gradient(ellipse 90% 70% at 50% 0%, black 30%, transparent 72%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 70% at 50% 0%, black 30%, transparent 72%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-12%] h-[480px] w-[480px] rounded-full bg-bm-cyan/20 blur-3xl"
      />

      <div className="shell relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div>
            <Reveal>
              <p className="eyebrow">
                <img src="/brand/favicon.png" alt="" className="h-4 w-4 object-contain" />
                Do atendimento ao relacionamento com o paciente
              </p>
            </Reveal>

            <Reveal delay={90}>
              <h1 className="mt-5 font-display text-[2.6rem] font-extrabold leading-[1.04] tracking-[-0.03em] text-bm-ink sm:text-6xl lg:text-[4.1rem]">
                <span className="relative inline-block whitespace-nowrap">
                  A clínica inteira
                  <MotionLine className="absolute -bottom-2 left-0 h-[0.35em] w-full" />
                </span>{" "}
                em um só fluxo.
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-bm-slate">
                Prontuário, anamnese, antropometria, prescrição, treinos, teleconsulta, portal
                do paciente e o relacionamento da clínica — protocolos, retorno e feedback —
                sem espalhar a rotina entre planilhas, PDFs e WhatsApp.
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#demonstracao"
                  className="btn-primary text-base"
                  onClick={() => trackSiteEvent("hero_primary_cta_click")}
                >
                  Agendar demonstração
                  <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                    <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a
                  href="#modulos"
                  className="btn-ghost text-base"
                  onClick={() => trackSiteEvent("hero_secondary_cta_click")}
                >
                  Ver os módulos
                </a>
              </div>
              <p className="mt-4 text-sm font-semibold text-bm-slate">
                14 dias grátis para testar · Planos a partir de R$ 47,90/mês
              </p>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-bm-cyan/25 via-transparent to-transparent blur-2xl"
            />
            <ProductFrame
              screenshot={heroScreenshot()}
              alt="Painel do Bodymotion com agenda do dia, pacientes ativos e evolução de peso"
              caption="Visão do painel — dados de demonstração"
              className="relative"
            >
              <DashboardMock />
            </ProductFrame>

            <div className="absolute -bottom-6 -left-10 hidden animate-float-soft rounded-xl border border-bm-mist bg-white px-3.5 py-2.5 shadow-card md:block">
              <p className="text-[10px] font-extrabold uppercase tracking-wide text-bm-cyan-deep">Check-in recebido</p>
              <p className="text-xs font-bold text-bm-ink">Treino B concluído · RPE 8</p>
            </div>
            <div
              className="absolute -right-6 -top-7 hidden animate-float-soft rounded-xl border border-bm-mist bg-white px-3.5 py-2.5 shadow-card md:block"
              style={{ animationDelay: "1.8s" }}
            >
              <p className="text-[10px] font-extrabold uppercase tracking-wide text-bm-cyan-deep">Feedback do paciente</p>
              <p className="text-xs font-bold text-bm-ink">Camila avaliou o protocolo ★ 5</p>
            </div>
          </Reveal>
        </div>

        {/* Prova factual */}
        <Reveal delay={120}>
          <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-bm-mist bg-bm-mist lg:grid-cols-4">
            {PROOFS.map((proof) => (
              <div key={proof.title} className="bg-white px-5 py-4">
                <dt className="font-display text-sm font-extrabold text-bm-ink">{proof.title}</dt>
                <dd className="mt-1 text-xs font-semibold leading-relaxed text-bm-slate">{proof.detail}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
