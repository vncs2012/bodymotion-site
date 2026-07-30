import React, { useState } from "react";
import ProductFrame from "../ui/ProductFrame";
import Reveal from "../ui/Reveal";
import {
  DashboardMock,
  NutricaoMock,
  AntropometriaMock,
  TreinoMock,
  AgendaMock,
  PortalMock,
  RelacionamentoMock,
  OperacaoMock,
} from "../mock/compositions";
import { MODULES } from "../../data/landing";
import { screenshotFor } from "../../data/screens";
import { trackSiteEvent } from "../../utils/analytics";

const MOCKS = {
  clinica: DashboardMock,
  nutricao: NutricaoMock,
  antropometria: AntropometriaMock,
  treinos: TreinoMock,
  agenda: AgendaMock,
  portal: PortalMock,
  relacionamento: RelacionamentoMock,
  operacao: OperacaoMock,
};

export default function Modulos() {
  const [activeId, setActiveId] = useState(MODULES[0].id);
  const active = MODULES.find((m) => m.id === activeId);
  const Mock = MOCKS[active.id] ?? DashboardMock;

  const selectTab = (id) => {
    setActiveId(id);
    trackSiteEvent("module_tab_view", { module: id });
  };

  return (
    <section id="modulos" className="bg-bm-paper py-20 lg:py-28">
      <div className="shell">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">A plataforma</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-[-0.02em] text-bm-ink sm:text-[2.6rem]">
            Todos os módulos do atendimento, conectados de ponta a ponta.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-bm-slate">
            Não é um pacote de ferramentas separadas: é o mesmo paciente, o mesmo histórico e o
            mesmo fluxo — do prontuário ao check-in de treino.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Módulos da plataforma">
            {MODULES.map((mod) => (
              <button
                key={mod.id}
                type="button"
                role="tab"
                aria-selected={mod.id === activeId}
                aria-controls={`painel-${mod.id}`}
                id={`aba-${mod.id}`}
                onClick={() => selectTab(mod.id)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-extrabold transition-colors ${
                  mod.id === activeId
                    ? "bg-bm-ink text-white shadow-card"
                    : "border border-bm-mist bg-white text-bm-slate hover:border-bm-cyan hover:text-bm-ink"
                }`}
              >
                {mod.tab}
              </button>
            ))}
          </div>
        </Reveal>

        <div
          key={active.id}
          id={`painel-${active.id}`}
          role="tabpanel"
          aria-labelledby={`aba-${active.id}`}
          className="mt-8 grid animate-fade-up items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14"
        >
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-bm-cyan/15 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-bm-cyan-deep">
              <i className="h-1.5 w-1.5 rounded-full bg-bm-cyan-deep" aria-hidden="true" />
              {active.status}
            </span>
            <h3 className="mt-4 font-display text-2xl font-extrabold tracking-[-0.01em] text-bm-ink sm:text-3xl">
              {active.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-bm-slate">{active.description}</p>
            <ul className="mt-6 space-y-3">
              {active.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-sm font-semibold text-bm-ink">
                  <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0 text-bm-cyan-deep" fill="none" aria-hidden="true">
                    <circle cx="10" cy="10" r="9" className="fill-bm-cyan/15" />
                    <path d="M6 10.5l2.6 2.6L14 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          <ProductFrame
            screenshot={screenshotFor(active.id)}
            alt={`Tela do módulo ${active.tab} do Bodymotion`}
            caption={`Módulo ${active.tab} — dados de demonstração`}
          >
            <Mock />
          </ProductFrame>
        </div>
      </div>
    </section>
  );
}
