import React, { useState } from "react";
import Button from "../ui/Button";
import PricingToggle from "../ui/PricingToggle";
import { plans } from "../../data/plans";
import { startTrial } from "../../utils/trial";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [loadingPlanId, setLoadingPlanId] = useState(null);

  const handleClick = (plan) => {
    if (plan.isEnterprise) {
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
      alert("Configuração incompleta: defina `VITE_TRIAL_START_URL` para iniciar o teste grátis.");
    }
  };

  return (
    <section id="planos" className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 scroll-mt-24">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-4">
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
          Escolha seu plano
        </h2>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
          Planos pensados pelo tamanho da sua operação. Comece com 14 dias grátis sem cartão e escolha depois.
        </p>

        {/* Trial callout */}
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/5 px-5 py-2 text-sm font-medium text-teal-700 dark:text-teal-300">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          14 dias grátis para testar. Sem cartão e com escolha de plano depois.
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
          const aiFeature = plan.features.find((feature) => feature.name === "Avaliação por Foto + IA");
          const aiComingSoon = aiFeature?.included === "soon";

          /* Visible features — only included & soon, max 6 */
          const visible = plan.features
            .filter((f) => f.included === true || f.included === "soon")
            .slice(0, 6);

          return (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-3xl p-6 transition-all duration-300 ${
                plan.featured
                  ? "border-2 border-cyan-500/40 bg-gradient-to-b from-cyan-500/10 via-white/80 to-teal-500/5 shadow-glass-lg dark:from-cyan-500/15 dark:via-slate-900/50 dark:to-teal-500/10 lg:scale-105 z-10"
                  : "border border-slate-200/60 bg-white/70 shadow-glass dark:border-white/[0.08] dark:bg-slate-900/50 hover:border-cyan-500/20"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-[10px] font-bold uppercase tracking-widest py-1 px-4 rounded-full shadow-lg whitespace-nowrap">
                    Mais popular
                  </span>
                </div>
              )}

              {/* Header */}
              <p className={`text-[10px] font-bold uppercase tracking-[0.2em] ${plan.featured ? "text-cyan-600 dark:text-cyan-400" : "text-slate-400"}`}>
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
                  <svg className="w-3.5 h-3.5 inline mr-1 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <strong className="text-slate-700 dark:text-slate-200">{plan.activePatients}</strong> pacientes ativos
                </p>
                <p>
                  <svg className="w-3.5 h-3.5 inline mr-1 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <strong className="text-slate-700 dark:text-slate-200">{plan.professionals}</strong> {plan.professionals === "1" ? "profissional" : "profissionais"}
                </p>
                {plan.aiAssessmentsMonthly && (
                  <p>
                    <svg className="w-3.5 h-3.5 inline mr-1 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18l-.813-2.096a2 2 0 00-1.091-1.091L5 14l2.096-.813a2 2 0 001.091-1.091L9 10l.813 2.096a2 2 0 001.091 1.091L13 14l-2.096.813a2 2 0 00-1.091 1.091ZM18 13l.563 1.437L20 15l-1.437.563L18 17l-.563-1.437L16 15l1.437-.563L18 13ZM17 3l1.132 2.868L21 7l-2.868 1.132L17 11l-1.132-2.868L13 7l2.868-1.132L17 3Z" />
                    </svg>
                    <strong className="text-slate-700 dark:text-slate-200">{plan.aiAssessmentsMonthly}</strong> análises IA/mês
                    {aiComingSoon && (
                      <span className="ml-2 rounded-full bg-amber-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-600 dark:text-amber-300">
                        Em breve
                      </span>
                    )}
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-6 flex-1">
                {visible.map((f) => (
                  <li key={f.name} className="flex items-center text-sm text-slate-600 dark:text-slate-300 gap-2">
                    {f.included === "soon" ? (
                      <span className="text-amber-500 text-xs">🔜</span>
                    ) : (
                      <svg className="w-4 h-4 text-teal-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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
                {plan.cta}
              </Button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
