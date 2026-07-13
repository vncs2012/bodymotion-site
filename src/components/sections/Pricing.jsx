import React, { useState } from "react";
import Button from "../ui/Button";
import PricingToggle from "../ui/PricingToggle";
import { plans } from "../../data/plans";
import { startTrial } from "../../utils/trial";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [loadingPlanId, setLoadingPlanId] = useState(null);
  const trialEnabled = Boolean(import.meta.env.VITE_TRIAL_START_URL);

  const handleClick = (plan) => {
    if (plan.isEnterprise || !trialEnabled) {
      document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    setLoadingPlanId(plan.id);
    try {
      startTrial({
        planId: plan.id,
        billing: isAnnual ? "annual" : "monthly",
      });
    } catch (_error) {
      setLoadingPlanId(null);
      document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="planos" className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 scroll-mt-24">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-4">
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
          Planos para cada estágio da operação
        </h2>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
          Comece com o essencial e avance para portal, teleconsulta, relatórios e IA auditável conforme sua operação cresce.
        </p>

        <div className="mt-4 inline-flex items-center gap-2 rounded-[8px] border border-bodymotion-blue/20 bg-bodymotion-blue/10 px-5 py-2 text-sm font-semibold text-bodymotion-navy dark:text-bodymotion-sky">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          {trialEnabled ? "Teste grátis configurado para este ambiente." : "Acesso antecipado com onboarding assistido."}
        </div>

        <PricingToggle isAnnual={isAnnual} onChange={setIsAnnual} />
      </div>

      {/* Cards */}
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-stretch">
        {plans.map((plan) => {
          const price = plan.isEnterprise
            ? null
            : isAnnual
              ? plan.annualPrice
              : plan.monthlyPrice;
          const loading = loadingPlanId === plan.id;
          const aiFeature = plan.features.find((feature) => feature.name === "IA nutricional + TACO");
          const aiBeta = aiFeature?.included === "beta";

          /* Visible features: included, beta, and roadmap items. */
          const visible = plan.features
            .filter((f) => f.included === true || f.included === "beta" || f.included === "roadmap")
            .slice(0, 7);
          const ctaText = plan.isEnterprise ? plan.cta : trialEnabled ? "Começar teste grátis" : plan.cta;

          return (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-[8px] p-6 transition-all duration-300 ${
                plan.featured
                  ? "z-10 border-2 border-bodymotion-navy bg-white shadow-glass-lg dark:border-bodymotion-blue dark:bg-white/[0.05] lg:scale-105"
                  : "border border-slate-200 bg-white shadow-glass hover:border-bodymotion-blue/30 dark:border-white/[0.08] dark:bg-white/[0.035]"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="whitespace-nowrap rounded-[8px] bg-bodymotion-navy px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-bodymotion-yellow shadow-lg dark:bg-bodymotion-blue dark:text-white">
                    Mais popular
                  </span>
                </div>
              )}

              {/* Header */}
              <p className={`text-[10px] font-bold uppercase tracking-[0.2em] ${plan.featured ? "text-bodymotion-blue" : "text-slate-400"}`}>
                {plan.badge}
              </p>
              <h3 className="mt-1 font-display text-xl font-extrabold text-slate-900 dark:text-white">
                {plan.name}
              </h3>

              {/* Description */}
              {plan.description && (
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {plan.description}
                </p>
              )}

              {/* Price */}
              <div className="mt-4 mb-1">
                {plan.isEnterprise ? (
                  <p className="text-2xl font-extrabold text-slate-900 dark:text-white">Sob consulta</p>
                ) : (
                  <>
                    <p className="text-3xl font-extrabold text-slate-900 dark:text-white">
                      R$ {price}
                      <span className="text-sm font-medium text-slate-400">/{plan.period}</span>
                    </p>
                    {isAnnual && (
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Total R$ {price * 12}/ano
                      </p>
                    )}
                  </>
                )}
              </div>

              {/* Limits */}
              <div className="mt-3 mb-4 text-xs text-slate-500 dark:text-slate-400 space-y-1">
                <p>
                  <svg className="w-3.5 h-3.5 inline mr-1 text-bodymotion-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <strong className="text-slate-700 dark:text-slate-200">{plan.activePatients}</strong> pacientes ativos
                </p>
                <p>
                  <svg className="w-3.5 h-3.5 inline mr-1 text-bodymotion-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <strong className="text-slate-700 dark:text-slate-200">{plan.professionals}</strong> {plan.professionals === "1" ? "profissional" : "profissionais"}
                </p>
                {plan.aiAssessmentsMonthly && (
                  <p>
                    <svg className="w-3.5 h-3.5 inline mr-1 text-bodymotion-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18l-.813-2.096a2 2 0 00-1.091-1.091L5 14l2.096-.813a2 2 0 001.091-1.091L9 10l.813 2.096a2 2 0 001.091 1.091L13 14l-2.096.813a2 2 0 00-1.091 1.091ZM18 13l.563 1.437L20 15l-1.437.563L18 17l-.563-1.437L16 15l1.437-.563L18 13ZM17 3l1.132 2.868L21 7l-2.868 1.132L17 11l-1.132-2.868L13 7l2.868-1.132L17 3Z" />
                    </svg>
                    <strong className="text-slate-700 dark:text-slate-200">{plan.aiAssessmentsMonthly}</strong> análises IA/mês
                    {aiBeta && (
                      <span className="ml-2 rounded-full bg-violet-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase text-violet-600 dark:text-violet-300">
                        Beta
                      </span>
                    )}
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-6 flex-1">
                {visible.map((f) => (
                  <li key={f.name} className="flex items-center text-sm text-slate-600 dark:text-slate-300 gap-2">
                    {f.included === "beta" ? (
                      <span className="rounded-full bg-violet-500/10 px-2 py-0.5 text-[10px] font-bold uppercase text-violet-600 dark:text-violet-300">Beta</span>
                    ) : f.included === "roadmap" ? (
                      <span className="rounded-full bg-slate-500/10 px-2 py-0.5 text-[10px] font-bold uppercase text-slate-500 dark:text-slate-300">Roadmap</span>
                    ) : (
                      <svg className="w-4 h-4 text-bodymotion-blue shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                    <span>{f.name}{f.note ? ` (${f.note})` : ""}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.featured ? "primary" : "secondary"}
                className="w-full"
                loading={loading}
                onClick={() => handleClick(plan)}
              >
                {ctaText}
              </Button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
