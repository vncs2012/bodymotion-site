import React from "react";
import Button from "../ui/Button";
import { trackSiteEvent } from "../../utils/analytics";

const plans = [
  { name: "Starter", price: "R$ 79", note: "para começar a centralizar a rotina", emphasis: false },
  { name: "Pro Saúde", price: "R$ 149", note: "para acompanhamento clínico contínuo", emphasis: true },
  { name: "Pro+ Saúde", price: "R$ 249", note: "para equipes e operação ampliada", emphasis: false },
];

export default function Offer() {
  const scrollToContact = (plan) => {
    trackSiteEvent("plan_interest_clicked", { plan });
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="planos" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28 scroll-mt-24">
      <div className="grid gap-8 lg:grid-cols-[0.76fr_1.24fr] lg:items-end">
        <div>
          <p className="section-eyebrow">Planos claros</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-[-0.035em] text-bodymotion-navy sm:text-5xl dark:text-white">
            Escolha a estrutura que acompanha o tamanho da sua rotina.
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-slate-600 dark:text-slate-300">
            A entrada é assistida: entendemos seu fluxo, indicamos os módulos adequados e combinamos o onboarding antes da ativação.
          </p>
        </div>
        <div className="border-y border-slate-200 dark:border-white/10">
          {plans.map((plan) => (
            <div key={plan.name} className={`grid gap-4 py-5 sm:grid-cols-[1fr_auto_auto] sm:items-center ${plan.emphasis ? "border-y border-bodymotion-blue/25 bg-bodymotion-blue/[0.06] px-4 sm:px-5" : ""}`}>
              <div>
                <p className="font-display text-xl font-extrabold text-slate-900 dark:text-white">{plan.name}</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{plan.note}</p>
              </div>
              <p className="font-display text-2xl font-extrabold text-bodymotion-navy dark:text-white">
                {plan.price}<span className="text-sm font-semibold text-slate-500 dark:text-slate-400">/mês</span>
              </p>
              <Button variant={plan.emphasis ? "primary" : "secondary"} onClick={() => scrollToContact(plan.name)}>
                Falar com a equipe
              </Button>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-5 text-sm text-slate-500 dark:text-slate-400">
        Valores de referência para contratação mensal. A equipe confirma escopo, onboarding e condições antes da ativação.
      </p>
    </section>
  );
}
