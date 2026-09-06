import React from "react";
import Reveal from "../ui/Reveal";
import { startTrial } from "../../utils/trial";
import { trackSiteEvent } from "../../utils/analytics";

export default function CtaFinal({ onOpenDemo }) {
  return (
    <section id="testar" className="bg-bm-night py-20">
      <div className="shell mx-auto flex max-w-[820px] flex-col items-center gap-5 text-center">
        <Reveal>
          <h2 className="font-display text-3xl font-extrabold leading-tight tracking-[-0.02em] text-white sm:text-[2.6rem]">
            Veja o Bodymotion com os seus próprios pacientes.
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="text-lg leading-relaxed text-white/70">
            Crie a conta, cadastre um paciente e rode uma consulta de verdade. Se preferir ver antes, a
            equipe mostra a plataforma na sua rotina em 30 minutos.
          </p>
        </Reveal>
        <Reveal delay={140}>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              className="btn-primary"
              onClick={() => {
                trackSiteEvent("final_cta_trial_click");
                startTrial({ planId: "pro" });
              }}
            >
              Testar grátis por 14 dias
            </button>
            <button
              type="button"
              className="btn-ghost-dark"
              onClick={() => {
                trackSiteEvent("final_cta_demo_click");
                onOpenDemo();
              }}
            >
              Agendar demonstração
            </button>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-sm font-semibold text-white/60">
            Acesso completo · até 10 pacientes no teste · sem compromisso
          </p>
        </Reveal>
      </div>
    </section>
  );
}
