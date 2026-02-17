import React, { useState } from "react";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import PricingToggle from "../ui/PricingToggle";
import { plans } from "../../data/plans";
import useCheckout from "../../hooks/useCheckout";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const { initiateCheckout, loadingPlanId } = useCheckout();

  const handleClick = (plan) => {
    if (plan.isEnterprise) {
      document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    initiateCheckout(plan.id);
  };

  return (
    <section id="planos" className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 scroll-mt-24">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-4">
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
          Escolha seu plano
        </h2>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
          Comece gratuitamente e escale quando precisar. Cancele a qualquer momento.
        </p>
        <PricingToggle isAnnual={isAnnual} onChange={setIsAnnual} />
      </div>

      {/* Cards */}
      <div className="mt-10 grid gap-6 lg:grid-cols-5 items-stretch">
        {plans.map((plan) => {
          const price = plan.isEnterprise
            ? null
            : isAnnual
              ? plan.annualPrice
              : plan.monthlyPrice;
          const loading = loadingPlanId === plan.id;

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

              {/* Price */}
              <div className="mt-4 mb-1">
                {plan.isEnterprise ? (
                  <p className="text-2xl font-extrabold text-slate-900 dark:text-white">Sob consulta</p>
                ) : (
                  <>
                    <p className="text-3xl font-extrabold text-slate-900 dark:text-white">
                      {price === 0 ? "Grátis" : `R$ ${price}`}
                      {price > 0 && <span className="text-sm font-medium text-slate-400">/{plan.period}</span>}
                    </p>
                    {isAnnual && price > 0 && (
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Total R$ {price * 12}/ano
                      </p>
                    )}
                    {price === 0 && <p className="text-[11px] text-slate-400 mt-0.5">{plan.period}</p>}
                  </>
                )}
              </div>

              {/* Límites */}
              <div className="mt-3 mb-4 text-xs text-slate-500 dark:text-slate-400 space-y-1">
                <p>👤 Até <strong className="text-slate-700 dark:text-slate-200">{plan.patients}</strong> pacientes</p>
                <p>🩺 <strong className="text-slate-700 dark:text-slate-200">{plan.professionals}</strong> {plan.professionals === "1" ? "profissional" : "profissionais"}</p>
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
