import React from "react";
import Button from "../ui/Button";

const proofPoints = [
  "Prescrição com TACO 4a edição",
  "Portal do paciente e check-ins",
  "Teleconsulta com TCLE",
  "Antropometria e fotos remotas",
];

const moduleRows = [
  { label: "Prontuário", value: "Timeline clínica", width: "w-[72%]" },
  { label: "Nutrição", value: "Macros revisáveis", width: "w-[88%]" },
  { label: "Corporal", value: "Medidas + fotos", width: "w-[64%]" },
  { label: "Treino", value: "Plano ativo", width: "w-[78%]" },
];

function ProductPreview() {
  return (
    <div className="relative z-10 w-full min-w-0 animate-[slide-in-right_0.75s_ease-out_forwards]">
      <div className="absolute -left-6 top-10 hidden h-24 w-24 rounded-full border-[18px] border-bodymotion-yellow/80 lg:block" aria-hidden="true" />
      <div className="absolute -bottom-8 -right-7 hidden h-28 w-28 rounded-full border-[18px] border-bodymotion-sky/70 lg:block" aria-hidden="true" />

      <div className="relative overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-[0_42px_90px_-54px_rgba(4,56,115,0.75)] dark:border-white/10 dark:bg-[#082448]">
        <div className="blue-panel px-5 py-5 sm:px-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-bodymotion-sky">Painel clínico</p>
              <p className="mt-1 font-display text-xl font-extrabold">Paciente em acompanhamento</p>
            </div>
            <span className="rounded-[8px] bg-bodymotion-yellow px-3 py-1 text-xs font-extrabold text-bodymotion-navy">
              Ativo
            </span>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-4">
            {[
              ["Adesão", "84%"],
              ["Macros", "3/3"],
              ["Check-ins", "12"],
              ["Retorno", "7 dias"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-[8px] bg-white/10 p-3">
                <p className="text-[11px] font-semibold text-blue-100">{label}</p>
                <p className="mt-1 font-display text-2xl font-extrabold">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-0 lg:grid-cols-[0.74fr_1.26fr]">
          <aside className="hidden border-r border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/[0.03] lg:block">
            {["Dashboard", "Pacientes", "Prescrição", "Antropometria", "Treinos"].map((item, index) => (
              <div
                key={item}
                className={`mb-2 rounded-[8px] px-3 py-2 text-xs font-bold ${
                  index === 2
                    ? "bg-bodymotion-blue text-white"
                    : "text-slate-500 dark:text-slate-400"
                }`}
              >
                {item}
              </div>
            ))}
          </aside>

          <div className="min-w-0 p-4 sm:p-5">
            <div className="grid gap-3 sm:grid-cols-2">
              {moduleRows.map((row) => (
                <div key={row.label} className="rounded-[8px] border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/[0.04]">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400">{row.label}</p>
                    <p className="text-sm font-extrabold text-bodymotion-navy dark:text-white">{row.value}</p>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-100 dark:bg-white/10">
                    <div className={`h-full rounded-full bg-bodymotion-blue ${row.width}`} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-[8px] border border-bodymotion-blue/25 bg-bodymotion-blue/10 p-4 dark:border-bodymotion-sky/20 dark:bg-bodymotion-blue/10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-bodymotion-navy dark:text-bodymotion-sky">Prescrição com IA auditável</p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-200">A IA organiza, a TACO calcula e o profissional valida antes de enviar.</p>
                </div>
                <span className="shrink-0 rounded-[8px] bg-bodymotion-yellow px-3 py-1 text-xs font-extrabold text-bodymotion-navy">
                  Beta
                </span>
              </div>

              <div className="mt-4 grid gap-2 sm:grid-cols-3">
                {[
                  ["Proteína", "128 g"],
                  ["Carboidratos", "248 g"],
                  ["Gorduras", "62 g"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-[8px] bg-white px-3 py-2 text-sm shadow-sm dark:bg-[#071D3A]">
                    <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400">{label}</span>
                    <strong className="text-bodymotion-navy dark:text-white">{value}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {["TCLE aceito", "Treino enviado", "Próxima consulta"].map((item) => (
                <div key={item} className="rounded-[8px] border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-600 dark:border-white/10 dark:bg-white/[0.035] dark:text-slate-300">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="inicio" className="relative px-4 pb-16 pt-12 sm:px-6 lg:pb-16 lg:pt-16">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative z-10 min-w-0 animate-fade-in-up">
          <p className="section-eyebrow mb-5">Nutrição, treino e evolução corporal</p>

          <h1 className="font-display text-5xl font-extrabold leading-[1.02] text-bodymotion-navy dark:text-white sm:text-6xl lg:text-7xl">
            <span className="block">BodyMotion</span>
            <span className="mt-4 block text-3xl leading-[1.1] text-bodymotion-ink dark:text-slate-100 sm:text-4xl lg:text-5xl">
              A plataforma para acompanhar progresso de verdade.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xl">
            Centralize prontuário, anamnese, antropometria, prescrição nutricional, teleconsulta, treinos e portal do paciente em um único fluxo operacional.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button size="lg" className="w-full shadow-lg shadow-bodymotion-blue/20 sm:w-auto" onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}>
              Solicitar acesso antecipado
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto" onClick={() => document.getElementById("funcionalidades")?.scrollIntoView({ behavior: "smooth" })}>
              Ver módulos da plataforma
            </Button>
          </div>

          <div className="mt-8 hidden gap-3 text-sm text-slate-600 dark:text-slate-300 sm:grid sm:grid-cols-2">
            {proofPoints.map((point) => (
              <span key={point} className="inline-flex items-center gap-2 font-semibold">
                <svg className="h-5 w-5 shrink-0 text-bodymotion-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {point}
              </span>
            ))}
          </div>

          <dl className="mt-10 hidden max-w-xl grid-cols-3 divide-x divide-slate-200 border-y border-slate-200 py-4 dark:divide-white/10 dark:border-white/10 sm:grid">
            {[
              ["4", "fluxos unidos"],
              ["TACO", "cálculo revisável"],
              ["Beta", "IA assistida"],
            ].map(([value, label]) => (
              <div key={label} className="px-4 first:pl-0 last:pr-0">
                <dt className="font-display text-xl font-extrabold text-bodymotion-navy dark:text-white">{value}</dt>
                <dd className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <ProductPreview />
      </div>
    </section>
  );
}
