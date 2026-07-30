import React, { useState } from "react";
import Reveal from "../ui/Reveal";
import { plans } from "../../data/plans";
import { trackSiteEvent } from "../../utils/analytics";

const HIGHLIGHTS = {
  starter: ["Prontuário, anamnese e prescrição em PDF", "Antropometria com histórico", "Treinos e check-ins", "1 profissional · até 50 pacientes ativos"],
  pro_saude: ["Tudo do Starter", "Portal do paciente e agenda com teleconsulta", "Envio por e-mail/WhatsApp e relatórios", "Até 5 profissionais · 200 pacientes ativos"],
  pro_plus: ["Tudo do Pro Saúde", "IA nutricional + TACO e avaliação por foto (beta)", "Permissões avançadas e app mobile (beta)", "Até 15 profissionais · 500 pacientes ativos"],
};

export default function Planos() {
  const [billing, setBilling] = useState("monthly");
  const visible = plans.filter((p) => !p.isEnterprise);
  const enterprise = plans.find((p) => p.isEnterprise);
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
            Comece pequeno, cresça com a sua operação.
          </h2>
          <p className="mt-4 text-lg text-bm-slate">
            Todos os planos incluem onboarding assistido e evoluem sem perda de histórico.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-8 flex justify-center">
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

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {visible.map((plan, i) => {
            const price = annual ? plan.annualPrice : plan.monthlyPrice;
            return (
              <Reveal key={plan.id} delay={i * 110}>
                <article
                  className={`relative flex h-full flex-col rounded-2xl border bg-white p-7 shadow-card ${
                    plan.popular ? "border-bm-cyan ring-2 ring-bm-cyan/40" : "border-bm-mist"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-bm-cyan px-4 py-1 text-[11px] font-extrabold uppercase tracking-wide text-bm-ink shadow-cta">
                      Mais popular
                    </span>
                  )}
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-bm-cyan-deep">
                    {plan.popular ? "Equilíbrio ideal" : plan.badge}
                  </p>
                  <h3 className="mt-1.5 font-display text-2xl font-extrabold text-bm-ink">{plan.name}</h3>
                  <p className="mt-2 min-h-[2.7rem] text-sm leading-relaxed text-bm-slate">{plan.description}</p>
                  <p className="mt-5 flex items-baseline gap-1.5">
                    <span className="text-sm font-bold text-bm-slate">R$</span>
                    <span className="font-display text-5xl font-extrabold tracking-tight text-bm-ink">{price}</span>
                    <span className="text-sm font-bold text-bm-slate">/mês</span>
                  </p>
                  {annual && (
                    <p className="mt-1 text-xs font-bold text-bm-cyan-deep">
                      valor mensal equivalente no plano anual
                    </p>
                  )}
                  <ul className="mt-6 flex-1 space-y-3 border-t border-bm-mist pt-6">
                    {HIGHLIGHTS[plan.id].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm font-semibold text-bm-ink">
                        <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0 text-bm-cyan-deep" fill="none" aria-hidden="true">
                          <path d="M4 10.5l4 4L16 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
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
            );
          })}
        </div>

        {enterprise && (
          <Reveal delay={140}>
            <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl bg-bm-ink p-7 text-white sm:flex-row sm:items-center sm:p-8">
              <div>
                <p className="font-display text-xl font-extrabold">{enterprise.name} — redes e operações maiores</p>
                <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-white/65">
                  Profissionais e pacientes sob contrato, ambiente dedicado e onboarding
                  consultivo para times multidisciplinares.
                </p>
              </div>
              <a
                href="#demonstracao"
                className="btn-primary shrink-0"
                onClick={() => trackSiteEvent("pricing_cta_click", { plan: "enterprise" })}
              >
                Falar com especialista
              </a>
            </div>
          </Reveal>
        )}

        <Reveal delay={160}>
          <p className="mt-6 text-center text-xs font-semibold text-bm-slate">
            Recursos marcados como beta são liberados de forma controlada conforme o plano.
            Detalhamos limites e estados de cada recurso na demonstração.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
