import React from "react";
import Button from "../ui/Button";
import { plans } from "../../data/plans";
import { trackSiteEvent } from "../../utils/analytics";

const featuredPlans = plans.filter((plan) => !plan.isEnterprise);

export default function Offer() {
  const scrollToContact = (plan) => {
    trackSiteEvent("plan_interest_clicked", { plan: plan.name });
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
          <a href="#comparar-planos" className="mt-6 inline-flex font-semibold text-bodymotion-blue underline-offset-4 hover:underline">
            Comparar tudo que cada plano inclui
          </a>
        </div>
        <div className="border-y border-slate-200 dark:border-white/10">
          {featuredPlans.map((plan) => (
            <div key={plan.id} className={`grid gap-4 py-5 sm:grid-cols-[1fr_auto_auto] sm:items-center ${plan.featured ? "border-y border-bodymotion-blue/25 bg-bodymotion-blue/[0.06] px-4 sm:px-5" : ""}`}>
              <div>
                <p className="font-display text-xl font-extrabold text-slate-900 dark:text-white">{plan.name}</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{plan.description}</p>
              </div>
              <p className="font-display text-2xl font-extrabold text-bodymotion-navy dark:text-white">
                R$ {plan.monthlyPrice}<span className="text-sm font-semibold text-slate-500 dark:text-slate-400">/mês</span>
              </p>
              <Button variant={plan.featured ? "primary" : "secondary"} onClick={() => scrollToContact(plan)}>
                Falar com a equipe
              </Button>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-5 text-sm text-slate-500 dark:text-slate-400">
        Valores mensais de referência. Veja abaixo os limites e recursos de cada plano antes de solicitar uma demonstração.
      </p>
    </section>
  );
}
