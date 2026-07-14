import React from "react";
import prescription from "../../../../bodymotion-mobile/output/playwright/mobile-prescription-detail-redesign.png";
import timeline from "../../../../bodymotion-mobile/output/playwright/mobile-patient-timeline-redesign.png";

const steps = [
  {
    number: "01",
    title: "Estruture a consulta",
    text: "Anamnese, avaliação corporal, prescrição, TACO e documentos clínicos ficam ligados ao mesmo prontuário.",
  },
  {
    number: "02",
    title: "Entregue um plano que o paciente usa",
    text: "Alimentação, treino, agenda e materiais chegam em um portal com acesso por código temporário.",
  },
  {
    number: "03",
    title: "Acompanhe sem perder o contexto",
    text: "Check-ins, medidas e evolução ajudam a orientar a próxima conversa, sem espalhar a operação em várias ferramentas.",
  },
];

export default function ProductStory() {
  return (
    <section id="produto" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28 scroll-mt-24">
      <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
        <div>
          <p className="section-eyebrow">Da consulta ao acompanhamento</p>
          <h2 className="mt-3 max-w-lg font-display text-3xl font-extrabold leading-tight tracking-[-0.035em] text-bodymotion-navy sm:text-5xl dark:text-white">
            Uma experiência contínua para o profissional e para o paciente.
          </h2>
          <div className="mt-9 divide-y divide-slate-200 border-y border-slate-200 dark:divide-white/10 dark:border-white/10">
            {steps.map((step) => (
              <article key={step.number} className="grid grid-cols-[3rem_1fr] gap-4 py-5">
                <span className="font-display text-lg font-extrabold text-bodymotion-blue">{step.number}</span>
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">{step.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-slate-600 dark:text-slate-300">{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <figure className="relative mx-auto w-full max-w-2xl">
          <div className="absolute inset-x-12 bottom-2 h-20 rounded-full bg-bodymotion-blue/15 blur-2xl" aria-hidden="true" />
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-[0_24px_70px_-32px_rgba(4,56,115,.6)] dark:border-white/15 dark:bg-white/5">
            <img
              src={timeline}
              alt="Timeline clínica do BodyMotion com avaliações, anamnese e prescrições"
              className="aspect-[16/10] w-full object-cover object-top"
              loading="lazy"
            />
          </div>
          <img
            src={prescription}
            alt="Prescrição alimentar no BodyMotion em um dispositivo móvel"
            className="relative -mt-24 ml-auto mr-5 w-[45%] rounded-[1.5rem] border border-slate-200 shadow-[0_24px_70px_-28px_rgba(4,56,115,.65)] transition-transform duration-500 hover:-translate-y-2 dark:border-white/15 sm:-mt-36 sm:mr-8"
            loading="lazy"
          />
          <figcaption className="mt-4 text-center text-sm text-slate-500 dark:text-slate-400">
            Telas reais com dados demonstrativos: histórico clínico e prescrição no mesmo fluxo.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
