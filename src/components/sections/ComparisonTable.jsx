import React from "react";
import Button from "../ui/Button";
import { plans } from "../../data/plans";
import { trackSiteEvent } from "../../utils/analytics";

const featureGroups = [
  {
    name: "Base clínica",
    items: ["Gestão de pacientes", "Anamnese digital", "Prontuário e timeline", "Prescrição em PDF", "Antropometria e histórico", "Treinos e check-ins"],
  },
  {
    name: "Acompanhamento do paciente",
    items: ["Portal do paciente", "Agenda e teleconsulta", "Envio por e-mail / WhatsApp", "Relatórios avançados", "Marca personalizada"],
  },
  {
    name: "Equipe e inteligência",
    items: ["Permissões avançadas", "Aplicativo mobile", "IA nutricional + TACO", "Avaliação por foto + IA", "Modelo 3D corporal", "Resumo de anamnese com IA", "Periodização com IA", "Ambiente dedicado"],
  },
];

function FeatureCell({ state }) {
  if (state === true) {
    return <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-bodymotion-blue/10 text-bodymotion-blue" aria-label="Incluído">✓</span>;
  }
  if (state === "beta") return <span className="text-xs font-extrabold uppercase tracking-wide text-violet-600 dark:text-violet-300">Beta</span>;
  if (state === "roadmap") return <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Em breve</span>;
  return <span className="text-slate-300 dark:text-slate-600" aria-label="Não incluído">—</span>;
}

function PlanCell({ plan }) {
  const scrollToContact = () => {
    trackSiteEvent("plan_interest_clicked", { plan: plan.name, placement: "comparison" });
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <th scope="col" className={`min-w-[150px] px-4 py-5 text-center align-top ${plan.featured ? "bg-bodymotion-blue/[0.12]" : ""}`}>
      <p className="font-display text-base font-extrabold text-slate-900 dark:text-white">{plan.name}</p>
      <p className="mt-1 text-sm font-bold text-bodymotion-navy dark:text-white">
        {plan.isEnterprise ? "Sob consulta" : `R$ ${plan.monthlyPrice}/mês`}
      </p>
      <Button size="sm" variant={plan.featured ? "primary" : "secondary"} className="mt-4 whitespace-nowrap" onClick={scrollToContact}>
        {plan.isEnterprise ? "Falar com a equipe" : "Quero este plano"}
      </Button>
    </th>
  );
}

function FeatureRow({ name, index }) {
  return (
    <tr className={index % 2 === 0 ? "bg-slate-50/70 dark:bg-white/[0.02]" : ""}>
      <th scope="row" className="sticky left-0 z-10 min-w-[230px] border-b border-slate-200 bg-inherit px-5 py-3 text-left text-sm font-semibold text-slate-700 dark:border-white/10 dark:text-slate-300 sm:px-7">
        {name}
      </th>
      {plans.map((plan) => {
        const feature = plan.features.find((item) => item.name === name);
        return (
          <td key={plan.id} className={`border-b border-slate-200 px-4 py-3 text-center dark:border-white/10 ${plan.featured ? "bg-bodymotion-blue/[0.035]" : ""}`}>
            <FeatureCell state={feature?.included} />
          </td>
        );
      })}
    </tr>
  );
}

export default function ComparisonTable() {
  return (
    <section id="comparar-planos" className="bg-slate-50 px-4 py-20 sm:px-6 lg:py-28 dark:bg-white/[0.025] scroll-mt-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="section-eyebrow">Comparativo completo</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-[-0.035em] text-bodymotion-navy sm:text-5xl dark:text-white">
            Tudo que cada plano inclui, sem letras miúdas.
          </h2>
          <p className="mt-5 leading-relaxed text-slate-600 dark:text-slate-300">
            Os recursos em beta fazem parte do onboarding assistido. Os marcados como “Em breve” ainda não devem orientar uma decisão de contratação.
          </p>
        </div>

        <div className="mt-10 overflow-x-auto border-y border-slate-200 bg-white dark:border-white/10 dark:bg-bodymotion-midnight">
          <table className="min-w-[860px] w-full border-collapse text-sm">
            <thead>
              <tr className="bg-bodymotion-navy text-white">
                <th scope="col" className="sticky left-0 z-20 min-w-[230px] bg-bodymotion-navy px-5 py-5 text-left font-display text-base font-extrabold sm:px-7">Recursos e limites</th>
                {plans.map((plan) => <PlanCell key={plan.id} plan={plan} />)}
              </tr>
            </thead>
            <tbody>
              <tr className="bg-slate-100 dark:bg-white/[0.06]">
                <th scope="row" className="sticky left-0 z-10 bg-slate-100 px-5 py-3 text-left font-semibold text-slate-700 dark:bg-white/[0.06] dark:text-slate-300 sm:px-7">Pacientes ativos</th>
                {plans.map((plan) => <td key={plan.id} className={`px-4 py-3 text-center font-bold text-slate-800 dark:text-slate-100 ${plan.featured ? "bg-bodymotion-blue/[0.08]" : ""}`}>{plan.activePatients}</td>)}
              </tr>
              <tr>
                <th scope="row" className="sticky left-0 z-10 bg-white px-5 py-3 text-left font-semibold text-slate-700 dark:bg-bodymotion-midnight dark:text-slate-300 sm:px-7">Profissionais</th>
                {plans.map((plan) => <td key={plan.id} className={`px-4 py-3 text-center font-bold text-slate-800 dark:text-slate-100 ${plan.featured ? "bg-bodymotion-blue/[0.035]" : ""}`}>{plan.professionals}</td>)}
              </tr>
              <tr className="bg-slate-100 dark:bg-white/[0.06]">
                <th scope="row" className="sticky left-0 z-10 bg-slate-100 px-5 py-3 text-left font-semibold text-slate-700 dark:bg-white/[0.06] dark:text-slate-300 sm:px-7">Suporte</th>
                {plans.map((plan) => <td key={plan.id} className={`px-4 py-3 text-center text-slate-700 dark:text-slate-300 ${plan.featured ? "bg-bodymotion-blue/[0.08]" : ""}`}>{plan.supportLevel}</td>)}
              </tr>
              <tr>
                <th scope="row" className="sticky left-0 z-10 bg-white px-5 py-3 text-left font-semibold text-slate-700 dark:bg-bodymotion-midnight dark:text-slate-300 sm:px-7">Análises com IA/mês</th>
                {plans.map((plan) => <td key={plan.id} className={`px-4 py-3 text-center text-slate-700 dark:text-slate-300 ${plan.featured ? "bg-bodymotion-blue/[0.035]" : ""}`}>{plan.aiAssessmentsMonthly || "—"}</td>)}
              </tr>
              {featureGroups.map((group) => (
                <React.Fragment key={group.name}>
                  <tr className="border-y border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/[0.04]">
                    <th colSpan={plans.length + 1} scope="colgroup" className="px-5 py-3 text-left text-xs font-extrabold uppercase tracking-[0.16em] text-bodymotion-blue sm:px-7">{group.name}</th>
                  </tr>
                  {group.items.map((name, index) => <FeatureRow key={name} name={name} index={index} />)}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">No celular, deslize a tabela para comparar todos os planos.</p>
      </div>
    </section>
  );
}
