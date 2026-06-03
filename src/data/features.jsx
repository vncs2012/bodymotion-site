import React from "react";

const I = ({ d, color = "text-cyan-500" }) => (
  <svg className={`w-6 h-6 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
);

export const featureStatus = {
  available: { label: "Disponível", variant: "teal" },
  beta: { label: "Beta", variant: "beta" },
  roadmap: { label: "Roadmap", variant: "roadmap" },
};

export const featureCategories = [
  {
    category: "Clínica",
    features: [
      {
        title: "Prontuário e timeline",
        text: "Histórico clínico, observações, consultas e evolução do paciente em uma linha do tempo.",
        status: "available",
        icon: <I d="M19 11H5m14 0a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2m14 0V9a2 2 0 0 0-2-2M5 11V9a2 2 0 0 1 2-2m0 0V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M7 7h10" color="text-indigo-500" />,
      },
      {
        title: "Anamnese digital",
        text: "Pacotes de perguntas, respostas estruturadas e fluxo conectado à avaliação e prescrição.",
        status: "available",
        icon: <I d="M9 12h6m-6 4h6M7 3h5.586a1 1 0 0 1 .707.293l5.414 5.414A1 1 0 0 1 19 9.414V21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" color="text-teal-500" />,
      },
      {
        title: "Agenda e teleconsulta",
        text: "Agenda, exportação ICS, sessão por vídeo via Jitsi, envio de link e aceite de TCLE.",
        status: "available",
        icon: <I d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Zm4-4 2 2 4-4" color="text-orange-500" />,
      },
    ],
  },
  {
    category: "Nutrição + IA",
    features: [
      {
        title: "Prescrição com PDF",
        text: "Editor rico, cópia de prescrições, envio ao paciente e PDF com identidade profissional.",
        status: "available",
        icon: <I d="M7 21h10a2 2 0 0 0 2-2V9.414a1 1 0 0 0-.293-.707l-5.414-5.414A1 1 0 0 0 12.586 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Z" color="text-rose-500" />,
      },
      {
        title: "Cálculo nutricional TACO",
        text: "Tabela nutricional automática com base TACO, cálculo de macros e persistência junto da prescrição.",
        status: "beta",
        icon: <I d="M3 7h18M7 7v14m10-14v14M5 21h14a2 2 0 0 0 2-2V7H3v12a2 2 0 0 0 2 2Zm4-10h6m-6 4h6" color="text-cyan-500" />,
      },
      {
        title: "IA com revisão profissional",
        text: "Parse de texto livre, busca semântica e candidatos ambíguos para o profissional validar.",
        status: "beta",
        icon: <I d="M13 10V3L4 14h7v7l9-11h-7Z" color="text-violet-500" />,
      },
    ],
  },
  {
    category: "Evolução corporal",
    features: [
      {
        title: "Antropometria completa",
        text: "Dobras, circunferências, métricas automáticas, histórico e impressão da avaliação.",
        status: "available",
        icon: <I d="M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2Zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2Z" color="text-indigo-500" />,
      },
      {
        title: "Captura remota por foto",
        text: "Link público com consentimento para o paciente enviar fotos frontal e lateral com segurança.",
        status: "beta",
        icon: <I d="M3 9a2 2 0 0 1 2-2h.93a2 2 0 0 0 1.664-.89l.812-1.22A2 2 0 0 1 10.07 4h3.86a2 2 0 0 1 1.664.89l.812 1.22A2 2 0 0 0 18.07 7H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z M15 13a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" color="text-cyan-500" />,
      },
      {
        title: "Modelo 3D e comparativos",
        text: "Visualização corporal e comparação de evolução para acompanhamento mais tangível.",
        status: "beta",
        icon: <I d="M12 3c2.5 0 4.5 2 4.5 4.5S14.5 12 12 12 7.5 10 7.5 7.5 9.5 3 12 3Zm0 9c3.5 0 6.5 2.2 6.5 5v2H5.5v-2c0-2.8 3-5 6.5-5Z" color="text-violet-500" />,
      },
    ],
  },
  {
    category: "Treinos",
    features: [
      {
        title: "Biblioteca de exercícios",
        text: "Cadastro de exercícios com filtros, grupos musculares, equipamentos e status ativo/inativo.",
        status: "available",
        icon: <I d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" color="text-sky-500" />,
      },
      {
        title: "Templates e planos",
        text: "Monte templates, atribua planos aos alunos e controle status, sessões, cargas e descanso.",
        status: "available",
        icon: <I d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" color="text-emerald-500" />,
      },
      {
        title: "Check-ins e progresso",
        text: "Aluno registra execução, profissional acompanha progresso e compartilha planos por link.",
        status: "available",
        icon: <I d="M4 19V5m0 14h16M8 17v-6m4 6V7m4 10v-4" color="text-amber-500" />,
      },
    ],
  },
  {
    category: "Paciente",
    features: [
      {
        title: "Portal do paciente",
        text: "Acesso por código, próximas consultas, prescrições, avaliações, TCLE, treinos e histórico.",
        status: "available",
        icon: <I d="M12 18h.01M8 21h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Z" color="text-pink-500" />,
      },
      {
        title: "Diário alimentar com foto",
        text: "Registro de refeições, humor, observações e upload de imagem pelo portal.",
        status: "beta",
        icon: <I d="M4 7h16M5 7l1 13h12l1-13M9 7V5a3 3 0 0 1 6 0v2M9 12h6" color="text-teal-500" />,
      },
      {
        title: "Hábitos e adesão",
        text: "Água, sono, peso e outros marcadores para acompanhar aderência entre consultas.",
        status: "beta",
        icon: <I d="M4.318 6.318a4.5 4.5 0 0 0 0 6.364L12 20.364l7.682-7.682a4.5 4.5 0 0 0-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 0 0-6.364 0Z" color="text-emerald-500" />,
      },
    ],
  },
  {
    category: "Gestão",
    features: [
      {
        title: "Relatórios e observabilidade",
        text: "Relatórios clínicos, agenda, prescrição, assinatura, chat e indicadores de uso da plataforma.",
        status: "available",
        icon: <I d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414A1 1 0 0 1 19 9.414V19a2 2 0 0 1-2 2Z" color="text-rose-500" />,
      },
      {
        title: "Usuários e permissões",
        text: "Perfis por permissão para separar visão clínica, operação, gestão e suporte.",
        status: "available",
        icon: <I d="M15 7a2 2 0 0 1 2 2m4 0a6 6 0 0 1-7.743 5.743L11 17H9v2H7v2H4a1 1 0 0 1-1-1v-2.586a1 1 0 0 1 .293-.707l5.964-5.964A6 6 0 1 1 21 9Z" color="text-cyan-500" />,
      },
      {
        title: "Assinatura e pagamentos",
        text: "Planos, checkout e webhooks para operar o SaaS com cobrança recorrente.",
        status: "available",
        icon: <I d="M3 10h18M7 15h.01M11 15h2M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z" color="text-amber-500" />,
      },
    ],
  },
];

export const features = featureCategories.flatMap((cat) => cat.features);
