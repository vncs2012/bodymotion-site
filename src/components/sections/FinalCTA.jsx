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
      <div className="relative rounded-3xl overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-teal-500/10 dark:from-cyan-500/[0.07] dark:to-teal-500/[0.07]" />
        <div className="absolute inset-0 glass" />

        <div className="relative z-10 py-16 sm:py-20 px-6 sm:px-12 text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white max-w-3xl mx-auto">
            Pronto para operar dieta, treino e evolução no mesmo lugar?
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
            Solicite acesso para avaliarmos módulos, plano e etapa de implantação ideal para sua operação.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="shadow-lg shadow-cyan-500/25"
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

          <p className="mt-8 text-xs text-slate-500 dark:text-slate-400 font-medium tracking-wide">
            Onboarding assistido &middot; Módulos beta identificados &middot; Suporte em português
          </p>
        </div>
      </div>
    </section>
  );
}
