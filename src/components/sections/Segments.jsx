import React from "react";
import GlassCard from "../ui/GlassCard";

const segments = [
  {
    title: "Nutricionistas esportivos",
    subtitle: "Dieta, composição corporal e adesão",
    iconPath: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    pains: [
      "Perde tempo com planilhas e fichas em papel",
      "Falta cálculo nutricional estruturado e revisável",
      "Não consegue acompanhar evolução entre consultas",
      "Dificuldade em conectar dieta, treino e composição corporal",
    ],
    solutions: [
      "Anamnese, prescrição, TACO e antropometria no mesmo fluxo",
      "PDF, portal e histórico do paciente",
      "Diário alimentar, hábitos e evolução corporal",
      "Treinos e check-ins conectados à conduta nutricional",
    ],
  },
  {
    title: "Personal Trainers / Ed. Físico",
    subtitle: "Prescrição e acompanhamento de treinos",
    iconPath: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
    pains: [
      "Fichas de treino em papel ou planilhas dispersas",
      "Sem histórico de carga por exercício",
      "Contato com aluno só presencialmente",
      "Difícil mostrar evolução de forma visual",
    ],
    solutions: [
      "Fichas de treino digitais com séries, cargas e descanso",
      "Histórico de evolução de carga por exercício",
      "Chat com aluno entre sessões",
      "Comparativo visual de evolução corporal",
    ],
  },
  {
    title: "Clínica Multidisciplinar",
    subtitle: "Equipe com diferentes especialidades",
    iconPath: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    pains: [
      "Cada profissional usa uma ferramenta diferente",
      "Sem visão gerencial da operação",
      "Dados dos pacientes espalhados em vários sistemas",
      "Difícil medir performance da equipe",
    ],
    solutions: [
      "Plataforma única para todos os profissionais",
      "Dashboard gerencial com indicadores",
      "Prontuário centralizado e compartilhado",
      "Relatórios por profissional e período",
    ],
  },
  {
    title: "Médicos / Fisioterapeutas",
    subtitle: "Consultório ou ambulatório",
    iconPath: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
    pains: [
      "Prontuário genérico sem campos clínicos específicos",
      "Teleconsulta e TCLE em fluxos separados",
      "Sem integração entre avaliação e acompanhamento",
      "Dificuldade de gestão de retornos e evolução",
    ],
    solutions: [
      "Prontuário clínico com anamnese customizável",
      "Teleconsulta integrada à agenda e ao portal",
      "Histórico de evolução integrado ao prontuário",
      "Agenda, retornos e evolução em uma timeline",
    ],
  },
];

export default function Segments() {
  return (
    <section id="para-quem" className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 scroll-mt-24">
      <div className="mb-12 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
        <div>
          <p className="section-eyebrow mb-3">Para quem</p>
        <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Feito para quem leva saúde a sério
        </h2>
        </div>
        <p className="max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300 lg:justify-self-end">
          O foco inicial é acompanhamento recorrente: nutrição, treino, evolução corporal e operação clínica em um mesmo sistema.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {segments.map((seg) => (
          <GlassCard key={seg.title} hover>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-[8px] bg-bodymotion-blue/10">
                <svg className="w-8 h-8 text-bodymotion-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d={seg.iconPath} />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                  {seg.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{seg.subtitle}</p>
              </div>
            </div>

            {/* Dores */}
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Desafios comuns</p>
              <ul className="space-y-2">
                {seg.pains.map((pain) => (
                  <li key={pain} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <svg className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {pain}
                  </li>
                ))}
              </ul>
            </div>

            {/* Soluções */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-bodymotion-blue dark:text-bodymotion-sky mb-3">Com o BodyMotion</p>
              <ul className="space-y-2">
                {seg.solutions.map((sol) => (
                  <li key={sol} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <svg className="w-4 h-4 text-bodymotion-blue shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {sol}
                  </li>
                ))}
              </ul>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
