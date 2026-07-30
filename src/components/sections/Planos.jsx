import React, { useState } from "react";
import Reveal from "../ui/Reveal";
import {
  plans,
  freePlan,
  studentPlan,
  enterprisePlan,
  PLAN_HIGHLIGHTS,
} from "../../data/plans";
import { trackSiteEvent } from "../../utils/analytics";

const brl = (value) =>
  value.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

function Check() {
  return (
    <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0 text-bm-cyan-deep" fill="none" aria-hidden="true">
      <path d="M4 10.5l4 4L16 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Planos() {
  const [billing, setBilling] = useState("monthly");
  const annual = billing === "annual";

  const toggle = (value) => {
    setBilling(value);
    trackSiteEvent("pricing_billing_toggle", { billing: value });
  };

  return (
    <section id="planos" className="bg-bm-paper py-20 lg:py-28">
      <div className="shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Planos</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-[-0.02em] text-bm-ink sm:text-[2.6rem]">
            Comece grátis. Cresça com a sua operação.
          </h2>
          <p className="mt-4 text-lg text-bm-slate">
            Todos os planos incluem onboarding assistido e evoluem sem perder histórico.
          </p>
        </Reveal>

        {/* Faixa do teste grátis */}
        <Reveal delay={80}>
          <div className="mt-10 flex flex-col gap-5 rounded-2xl border-2 border-bm-cyan bg-white p-6 shadow-card sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-display text-2xl font-extrabold text-bm-ink">{freePlan.name}</h3>
                <span className="rounded-full bg-bm-cyan px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-bm-ink">
                  {freePlan.durationLabel}
                </span>
              </div>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-bm-slate">{freePlan.description}</p>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                {freePlan.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm font-semibold text-bm-ink">
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="#demonstracao"
              onClick={() => trackSiteEvent("pricing_cta_click", { plan: "gratis" })}
              className="btn-primary shrink-0"
            >
              {freePlan.cta}
            </a>
          </div>
        </Reveal>

        {/* Toggle de ciclo */}
        <Reveal delay={100}>
          <div className="mt-10 flex justify-center">
            <div className="inline-flex rounded-full border border-bm-mist bg-white p-1" role="group" aria-label="Ciclo de cobrança">
              {[
                ["monthly", "Mensal"],
                ["annual", "Anual · ~20% off"],
              ].map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  aria-pressed={billing === value}
                  onClick={() => toggle(value)}
                  className={`rounded-full px-5 py-2 text-sm font-extrabold transition-colors ${
                    billing === value ? "bg-bm-ink text-white" : "text-bm-slate hover:text-bm-ink"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Planos pagos */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 110}>
              <article
                className={`relative flex h-full flex-col rounded-2xl border bg-white p-7 shadow-card ${
                  plan.popular ? "border-bm-cyan ring-2 ring-bm-cyan/40" : "border-bm-mist"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-bm-cyan px-4 py-1 text-[11px] font-extrabold uppercase tracking-wide text-bm-ink shadow-cta">
                    Mais escolhido
                  </span>
                )}
                <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-bm-cyan-deep">
                  {plan.badge}
                </p>
                <h3 className="mt-1.5 font-display text-2xl font-extrabold text-bm-ink">{plan.name}</h3>
                <p className="mt-2 min-h-[3.4rem] text-sm leading-relaxed text-bm-slate">{plan.description}</p>
                <p className="mt-5 flex items-baseline gap-1.5">
                  <span className="text-sm font-bold text-bm-slate">R$</span>
                  <span className="font-display text-[2.75rem] font-extrabold leading-none tracking-tight text-bm-ink">
                    {brl(annual ? plan.annualPrice : plan.monthlyPrice)}
                  </span>
                  <span className="text-sm font-bold text-bm-slate">/mês</span>
                </p>
                <p className="mt-1 min-h-[1.25rem] text-xs font-bold text-bm-cyan-deep">
                  {annual ? "valor mensal equivalente no plano anual" : ""}
                </p>
                <ul className="mt-5 flex-1 space-y-3 border-t border-bm-mist pt-6">
                  {PLAN_HIGHLIGHTS[plan.id].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm font-semibold text-bm-ink">
                      <Check />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#demonstracao"
                  onClick={() => trackSiteEvent("pricing_cta_click", { plan: plan.id, billing })}
                  className={`mt-7 ${plan.popular ? "btn-primary" : "btn-ghost"} w-full`}
                >
                  Agendar demonstração
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Estudante + Enterprise */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Reveal delay={120}>
            <article className="flex h-full flex-col rounded-2xl border border-bm-mist bg-white p-7 shadow-card">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-xl font-extrabold text-bm-ink">{studentPlan.name}</h3>
                <p className="flex shrink-0 items-baseline gap-1">
                  <span className="text-xs font-bold text-bm-slate">R$</span>
                  <span className="font-display text-3xl font-extrabold tracking-tight text-bm-ink">
                    {brl(studentPlan.price)}
                  </span>
                  <span className="text-xs font-bold text-bm-slate">/mês</span>
                </p>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-bm-slate">{studentPlan.description}</p>
              <ul className="mt-4 space-y-2">
                {studentPlan.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm font-semibold text-bm-ink">
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 rounded-xl bg-bm-paper px-4 py-3 text-xs font-semibold leading-relaxed text-bm-slate">
                {studentPlan.requirement}
              </p>
              <a
                href="#demonstracao"
                onClick={() => trackSiteEvent("pricing_cta_click", { plan: "estudante" })}
                className="btn-ghost mt-5 w-full"
              >
                {studentPlan.cta}
              </a>
            </article>
          </Reveal>

          <Reveal delay={180}>
            <article className="flex h-full flex-col rounded-2xl bg-bm-ink p-7 text-white">
              <h3 className="font-display text-xl font-extrabold">{enterprisePlan.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                {enterprisePlan.description}
              </p>
              <ul className="mt-4 flex-1 space-y-2">
                {enterprisePlan.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm font-semibold text-white/90">
                    <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0 text-bm-cyan" fill="none" aria-hidden="true">
                      <path d="M4 10.5l4 4L16 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#demonstracao"
                onClick={() => trackSiteEvent("pricing_cta_click", { plan: "enterprise" })}
                className="btn-primary mt-5 w-full"
              >
                {enterprisePlan.cta}
              </a>
            </article>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <p className="mt-6 text-center text-xs font-semibold text-bm-slate">
            Recursos marcados como beta são liberados de forma controlada conforme o plano.
            Detalhamos limites e estados de cada recurso na demonstração.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
