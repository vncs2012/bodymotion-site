import React from "react";

/* ── Icons as tiny components ── */
const I = ({ d, color = "text-cyan-500" }) => (
  <svg className={`w-6 h-6 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
);

export const featureCategories = [
  {
    category: "Atendimento clínico",
    features: [
      {
        title: "Anamnese Digital",
        text: "Crie formulários de avaliação inicial personalizados para cada paciente.",
        icon: <I d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" color="text-teal-500" />,
      },
      {
        title: "Prontuário Eletrônico",
        text: "Histórico completo do paciente com notas, evolução e anexos em um só lugar.",
        icon: <I d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" color="text-indigo-500" />,
      },
      {
        title: "Prescrição em PDF",
        text: "Monte e envie prescrições com visual profissional e sua marca direto pelo sistema.",
        icon: <I d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" color="text-rose-500" />,
      },
    ],
  },
  {
    category: "Avaliação corporal",
    features: [
      {
        title: "Antropometria Manual",
        text: "Medições corporais com dobras cutâneas, circunferências e histórico de evolução.",
        icon: <I d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" color="text-indigo-500" />,
      },
      {
        title: "Comparativo Visual",
        text: "Compare fotos de evolução lado a lado para mostrar resultados reais ao paciente.",
        icon: <I d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" color="text-cyan-500" />,
      },
    ],
  },
  {
    category: "Treinos e Exercícios",
    features: [
      {
        title: "Prescrição de Treino",
        text: "Crie fichas de treino personalizadas com séries, repetições, cargas e descanso.",
        icon: <I d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" color="text-emerald-500" />,
      },
      {
        title: "Acompanhamento de Carga",
        text: "Histórico de evolução de carga por exercício e período para medir performance.",
        icon: <I d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" color="text-amber-500" />,
      },
      {
        title: "Biblioteca de Exercícios",
        text: "Banco de exercícios com instruções e referências visuais para facilitar a prescrição.",
        badge: "Em breve",
        icon: <I d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" color="text-sky-500" />,
      },
    ],
  },
  {
    category: "Acompanhamento do paciente",
    features: [
      {
        title: "Bate-papo",
        text: "Converse com seus pacientes e alunos direto pelo sistema em tempo real.",
        icon: <I d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" color="text-green-500" />,
      },
      {
        title: "Envio por E-mail e WhatsApp",
        text: "Envie documentos e mensagens para pacientes automaticamente.",
        badge: "Em breve",
        icon: <I d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" color="text-sky-500" />,
      },
      {
        title: "Aplicativo Mobile",
        text: "Acesse pelo celular — Android e iPhone, onde estiver.",
        badge: "Em breve",
        icon: <I d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" color="text-pink-500" />,
      },
    ],
  },
  {
    category: "Operação da clínica",
    features: [
      {
        title: "Gestão de Pacientes",
        text: "Cadastre, organize e acompanhe todos os seus pacientes e alunos em um só lugar.",
        icon: <I d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />,
      },
      {
        title: "Agenda Digital",
        text: "Organize consultas e atendimentos em um calendário inteligente.",
        badge: "Em breve",
        icon: <I d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" color="text-orange-500" />,
      },
      {
        title: "Painel de Resultados",
        text: "Veja indicadores: pacientes ativos, consultas realizadas e evolução geral.",
        icon: <I d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12 0a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" color="text-amber-500" />,
      },
      {
        title: "Relatórios Avançados",
        text: "Relatórios detalhados por profissional, período e indicadores de performance.",
        icon: <I d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" color="text-rose-500" />,
      },
    ],
  },
  {
    category: "Inteligência Artificial",
    badge: "Em breve",
    features: [
      {
        title: "Avaliação por Foto + IA",
        text: "Extração automática de medidas corporais por visão computacional. Tire fotos e a IA calcula circunferências e composição.",
        badge: "Em breve",
        icon: <I d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z" color="text-violet-500" />,
      },
      {
        title: "Anamnese + IA",
        text: "A IA analisa as respostas da anamnese, identifica padrões de risco e gera resumo clínico para o profissional.",
        badge: "Em breve",
        icon: <I d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" color="text-violet-500" />,
      },
      {
        title: "Sugestão de Prescrição com IA",
        text: "Com base na anamnese + avaliação + histórico, a IA sugere ajustes no plano para o profissional revisar e aprovar.",
        badge: "Em breve",
        icon: <I d="M13 10V3L4 14h7v7l9-11h-7z" color="text-violet-500" />,
      },
      {
        title: "Análise de Evolução com IA",
        text: "Compara dados ao longo do tempo, detecta tendências, alerta sobre estagnações e sugere intervenções.",
        badge: "Em breve",
        icon: <I d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" color="text-violet-500" />,
      },
      {
        title: "Assistente IA",
        text: "IA com contexto completo do paciente responde dúvidas do profissional: tendências, alertas de risco e sugestões.",
        badge: "Em breve",
        icon: <I d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" color="text-violet-500" />,
      },
      {
        title: "Periodização com IA",
        text: "Para Personal Trainers: sugere periodização de treino com base no objetivo e na evolução do aluno.",
        badge: "Em breve",
        icon: <I d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" color="text-violet-500" />,
      },
    ],
  },
];

/* Flat list for backward compatibility with ComparisonTable */
export const features = featureCategories.flatMap((cat) => cat.features);
