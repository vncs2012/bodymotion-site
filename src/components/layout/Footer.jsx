import React from "react";

const CONTACT_EMAIL = "comercial@bodymotion.pro";

const COLUMNS = [
  {
    title: "Produto",
    links: [
      { label: "Módulos", href: "#modulos" },
      { label: "Como funciona", href: "#fluxo" },
      { label: "IA auditável", href: "#ia" },
      { label: "Segurança", href: "#seguranca" },
    ],
  },
  {
    title: "Comercial",
    links: [
      { label: "Planos", href: "#planos" },
      { label: "Agendar demonstração", href: "#demonstracao" },
      { label: "FAQ", href: "#faq" },
      { label: "Entrar na plataforma", href: "https://app.bodymotion.pro" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-bm-night text-white">
      <div className="shell grid gap-12 py-16 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-8">
        <div>
          <img src="/brand/logo-branca.png" alt="Bodymotion" className="h-9 w-auto" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            Plataforma de acompanhamento clínico e performance: nutrição, treino e evolução
            corporal no mesmo fluxo.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-5 inline-block text-sm font-bold text-bm-cyan underline-offset-4 hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
        </div>

        {COLUMNS.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-white/40">
              {col.title}
            </p>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-semibold text-white/75 transition-colors hover:text-bm-cyan"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="shell flex flex-col gap-4 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Bodymotion. Todos os direitos reservados. Feito no Brasil.</p>
          <p id="privacidade" className="max-w-md leading-relaxed">
            Privacidade: os dados enviados no formulário são usados apenas para contato
            comercial. Para acessar ou excluir seus dados, escreva para{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-white/70 hover:text-bm-cyan">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
