import React, { useState } from "react";
import Reveal from "../ui/Reveal";
import { plans, studentPlan, enterprisePlan, PLAN_HIGHLIGHTS } from "../../data/plans";
import { startTrial } from "../../utils/trial";
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

// Linha compacta (abaixo de lg) para os planos que não são o recomendado —
// nome + resumo de profissionais/pacientes à esquerda, preço à direita.
function PlanoCompacto({ plan, billing }) {
  const annual = billing === "annual";
  const plural = plan.professionals !== "1";
  const summary = `${plan.professionals} ${plural ? "profissionais" : "profissional"} · ${
    plan.activePatients
  } pacientes${plan.id === "pro_saude" ? " · IA (beta)" : ""}`;

  return (
    <button
      type="button"
      onClick={() => {
        trackSiteEvent("pricing_cta_click", { plan: plan.id, billing });
        startTrial({ planId: plan.id, billing });
      }}
      className="card-surface flex min-h-[44px] w-full items-center justify-between gap-3 px-5 py-4 text-left"
    >
      <span className="min-w-0">
        <span className="block font-display text-base font-extrabold text-bm-ink">{plan.name}</span>
        <span className="mt-0.5 block text-xs font-semibold text-bm-slate">{summary}</span>
      </span>
      <span className="flex shrink-0 items-baseline gap-1">
        <span className="text-xs font-bold text-bm-slate">R$</span>
        <span className="font-display text-xl font-extrabold leading-none text-bm-ink">
          {brl(annual ? plan.annualPrice : plan.monthlyPrice)}
        </span>
        <span className="text-xs font-bold text-bm-slate">/mês</span>
      </span>
    </button>
  );
}

export default function Planos({ onOpenDemo }) {
  const [billing, setBilling] = useState("monthly");
  const annual = billing === "annual";

  const toggle = (value) => {
    setBilling(value);
    trackSiteEvent("pricing_billing_toggle", { billing: value });
  };

  return (
    <section id="planos" className="bg-bm-paper py-14 lg:py-28">
      <div className="shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Planos</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-[-0.02em] text-bm-ink sm:text-[2.6rem]">
            Comece grátis. Escolha o plano quando fizer sentido.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-bm-slate">
            14 dias com acesso completo. Depois, o plano cresce com a sua clínica, sem perder histórico.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 flex justify-center">
            <div
              className="inline-flex rounded-full border border-bm-mist bg-white p-1"
              role="group"
              aria-label="Ciclo de cobrança"
            >
              {[
                ["monthly", "Mensal"],
                ["annual", "Anual · até 20% off"],
              ].map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  aria-pressed={billing === value}
                  onClick={() => toggle(value)}
                  className={`inline-flex min-h-[44px] items-center justify-center rounded-full px-5 py-2 text-sm font-extrabold transition-colors lg:min-h-0 ${
                    billing === value ? "bg-bm-ink text-white" : "text-bm-slate hover:text-bm-ink"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => {
            const isPro = plan.id === "pro";
            return (
              <Reveal key={plan.id} delay={i * 110} className={isPro ? "" : "hidden lg:block"}>
                <article
                  className={`card-surface relative flex h-full flex-col p-7 ${
                    isPro ? "border-2 border-bm-cyan" : ""
                  }`}
                >
                  {isPro && (
                    <span className="absolute -top-3.5 left-7 rounded-full bg-bm-cyan px-4 py-1 text-xs font-extrabold uppercase tracking-wide text-bm-ink shadow-cta">
                      Recomendado
                    </span>
                  )}
                  <h3 className="font-display text-2xl font-extrabold text-bm-ink">{plan.name}</h3>
                  <p className="mt-2 min-h-[3.4rem] text-sm leading-relaxed text-bm-slate">{plan.description}</p>
                  <p className="mt-5 flex items-baseline gap-1.5">
                    <span className="text-sm font-bold text-bm-slate">R$</span>
                    <span className="font-display text-[44px] font-extrabold leading-none tracking-tight text-bm-ink">
                      {brl(annual ? plan.annualPrice : plan.monthlyPrice)}
                    </span>
                    <span className="text-sm font-bold text-bm-slate">/mês</span>
                  </p>
                  <ul className="mt-5 flex-1 space-y-3 border-t border-bm-mist pt-6">
                    {PLAN_HIGHLIGHTS[plan.id].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm font-semibold text-bm-ink">
                        <Check />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => {
                      trackSiteEvent("pricing_cta_click", { plan: plan.id, billing });
                      startTrial({ planId: plan.id, billing });
                    }}
                    className={`mt-7 w-full ${isPro ? "btn-primary" : "btn-ghost"}`}
                  >
                    {isPro ? "Testar grátis por 14 dias" : "Testar grátis"}
                  </button>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={300} className="mt-4 flex flex-col gap-3 lg:hidden">
          {plans
            .filter((plan) => plan.id !== "pro")
            .map((plan) => (
              <PlanoCompacto key={plan.id} plan={plan} billing={billing} />
            ))}
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-8 text-center text-sm font-semibold text-bm-slate">
            Estudante: R$ {brl(studentPlan.price)}/mês com comprovante de matrícula · Rede ou franquia:
            plano {enterprisePlan.name} sob contrato,{" "}
            <button
              type="button"
              onClick={onOpenDemo}
              className="inline-flex min-h-[44px] items-center lg:min-h-0 font-bold text-bm-cyan-deep underline underline-offset-4"
            >
              fale com a equipe
            </button>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
