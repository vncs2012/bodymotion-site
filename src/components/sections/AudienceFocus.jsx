import React from "react";

const audiences = [
  {
    id: "nutricionistas",
    eyebrow: "Para nutricionistas",
    title: "Mais tempo para a decisão clínica, menos para montar e reenviar arquivos.",
    items: ["Prescrição alimentar com base TACO", "Avaliação e evolução corporal", "Agenda, teleconsulta e documentos em um fluxo"],
  },
  {
    id: "clinicas",
    eyebrow: "Para clínicas multidisciplinares",
    title: "Uma operação compartilhada sem perder a visão de cada paciente.",
    items: ["Equipe, pacientes e permissões organizados", "Nutrição e treino no mesmo acompanhamento", "Portal consistente para cada unidade de cuidado"],
  },
];

export default function AudienceFocus() {
  return (
    <section id="para-quem" className="bg-slate-50 px-4 py-20 sm:px-6 lg:py-28 dark:bg-white/[0.025] scroll-mt-24">
      <div className="mx-auto max-w-7xl">
        <p className="section-eyebrow">Feito para a rotina de saúde</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold tracking-[-0.035em] text-bodymotion-navy sm:text-5xl dark:text-white">
          Comece onde o BodyMotion gera mais clareza para sua operação.
        </h2>
        <div className="mt-12 grid border-y border-slate-200 dark:border-white/10 lg:grid-cols-2">
          {audiences.map((audience, index) => (
            <article
              id={audience.id}
              key={audience.id}
              className={`py-8 lg:px-10 ${index === 0 ? "lg:border-r lg:border-slate-200 dark:lg:border-white/10" : "lg:pl-10"}`}
            >
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-bodymotion-blue">{audience.eyebrow}</p>
              <h3 className="mt-4 max-w-lg font-display text-2xl font-extrabold leading-tight text-slate-900 dark:text-white">
                {audience.title}
              </h3>
              <ul className="mt-7 space-y-3 text-slate-600 dark:text-slate-300">
                {audience.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-bodymotion-blue" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
