import React from "react";
import Button from "../ui/Button";

const proofPoints = [
  "Base TACO 4a edição",
  "Portal do paciente",
  "Teleconsulta com TCLE",
  "Treinos e check-ins",
];

const moduleRows = [
  { label: "Prontuário", value: "Timeline clínica", toneClass: "text-cyan-300" },
  { label: "Nutrição", value: "Macros calculados", toneClass: "text-teal-300" },
  { label: "Corporal", value: "Foto + medidas", toneClass: "text-violet-300" },
  { label: "Treino", value: "Plano ativo", toneClass: "text-emerald-300" },
];

function ProductPreview() {
  return (
    <div className="relative z-10 w-full min-w-0">
      <div className="rounded-3xl border border-slate-200/70 bg-white/85 p-3 shadow-[0_28px_80px_-46px_rgba(15,23,42,0.65)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/75 sm:p-4">
        <div className="overflow-hidden rounded-2xl border border-slate-200/70 bg-slate-950 text-white dark:border-white/10">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div>
              <p className="text-xs font-semibold uppercase text-cyan-300">BodyMotion</p>
              <p className="text-sm font-bold">Paciente em acompanhamento</p>
            </div>
            <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">
              Ativo
            </span>
          </div>

          <div className="grid gap-0 lg:grid-cols-[0.78fr_1.22fr]">
            <aside className="hidden border-r border-white/10 bg-white/[0.03] p-4 lg:block">
              {["Dashboard", "Pacientes", "Prescrição", "Antropometria", "Treinos"].map((item, index) => (
                <div
                  key={item}
                  className={`mb-2 rounded-xl px-3 py-2 text-xs font-semibold ${
                    index === 2 ? "bg-cyan-400/15 text-cyan-100" : "text-slate-400"
                  }`}
                >
                  {item}
                </div>
              ))}
            </aside>

            <div className="min-w-0 p-4 sm:p-5">
              <div className="grid gap-3 sm:grid-cols-2">
                {moduleRows.map((row) => (
                  <div key={row.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-xs font-semibold text-slate-400">{row.label}</p>
                    <p className={`mt-1 text-base font-extrabold ${row.toneClass}`}>{row.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase text-cyan-200">Prescrição com IA auditável</p>
                    <p className="mt-1 text-sm text-slate-200">A IA interpreta o texto, a TACO calcula e o profissional valida.</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-cyan-300 px-3 py-1 text-xs font-bold text-slate-950">
                    Beta
                  </span>
                </div>

                <div className="mt-4 space-y-2">
                  {[
                    ["Proteína", "128 g"],
                    ["Carboidratos", "248 g"],
                    ["Gorduras", "62 g"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between rounded-xl bg-slate-950/45 px-3 py-2 text-sm">
                      <span className="text-slate-300">{label}</span>
                      <strong>{value}</strong>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {["TCLE aceito", "Treino enviado", "Próxima consulta"].map((item) => (
                  <div key={item} className="rounded-xl border border-white/10 bg-white/[0.035] px-3 py-2 text-xs font-semibold text-slate-300">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="inicio" className="relative px-3 pb-24 pt-16 sm:px-6 lg:pb-32 lg:pt-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="relative z-10 min-w-0 animate-fade-in-up">
          <div className="mb-7 inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase text-cyan-700 dark:text-cyan-300">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
            </span>
            Nutrição, treino e evolução corporal
          </div>

          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Dieta, treino e evolução corporal{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500">
              em uma única plataforma
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xl">
            BodyMotion conecta prontuário, anamnese, antropometria, prescrição com cálculo nutricional TACO, teleconsulta, treinos e portal do paciente para profissionais que acompanham progresso de verdade.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button size="lg" className="w-full shadow-lg shadow-cyan-500/25 sm:w-auto" onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}>
              Solicitar acesso antecipado
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto" onClick={() => document.getElementById("funcionalidades")?.scrollIntoView({ behavior: "smooth" })}>
              Ver módulos da plataforma
            </Button>
          </div>

          <div className="mt-7 grid gap-2 text-sm text-slate-600 dark:text-slate-300 sm:grid-cols-2">
            {proofPoints.map((point) => (
              <span key={point} className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/65 px-3 py-2 font-semibold dark:border-white/10 dark:bg-white/[0.04]">
                <svg className="h-4 w-4 shrink-0 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {point}
              </span>
            ))}
          </div>
        </div>

        <ProductPreview />
      </div>
    </section>
  );
}
