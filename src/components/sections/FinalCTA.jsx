import React from "react";
import Button from "../ui/Button";
import { startTrial } from "../../utils/trial";

export default function FinalCTA() {
  const trialEnabled = Boolean(import.meta.env.VITE_TRIAL_START_URL);
  const handlePrimaryClick = () => {
    if (trialEnabled) {
      startTrial();
      return;
    }
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6">
      <div className="blue-panel relative overflow-hidden rounded-[8px]">
        <div className="relative z-10 px-6 py-16 text-center sm:px-12 sm:py-20">
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-bodymotion-yellow">Próximo passo</p>
          <h2 className="mx-auto max-w-3xl font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Pronto para operar dieta, treino e evolução no mesmo lugar?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-blue-100">
            Solicite acesso para avaliarmos módulos, plano e etapa de implantação ideal para sua operação.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              onClick={handlePrimaryClick}
            >
              {trialEnabled ? "Começar teste grátis" : "Solicitar acesso"}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
            >
              Agendar demonstração
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
            >
              Falar com consultor
            </Button>
          </div>

          <p className="mt-8 text-xs font-medium tracking-wide text-blue-100/80">
            Onboarding assistido | Módulos beta identificados | Suporte em português
          </p>
        </div>
      </div>
    </section>
  );
}
