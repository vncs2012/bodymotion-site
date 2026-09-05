import React from "react";

const CONTACT_EMAIL = "comercial@bodymotion.pro";
const APP_URL = "https://app.bodymotion.pro";

const LINKS = [
  { label: "Plataforma", href: "#plataforma" },
  { label: "Planos", href: "#planos" },
  { label: "Perguntas", href: "#perguntas" },
  { label: "Privacidade", href: "#privacidade" },
  { label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { label: "Entrar", href: APP_URL },
];

export default function Footer() {
  return (
    <footer className="bg-bm-night text-white">
      <div className="shell flex flex-col gap-8 py-10 pb-28 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:pb-10">
        <div className="flex items-center gap-4">
          <img src="/brand/logo-branca.svg" alt="Bodymotion" className="h-7 w-auto shrink-0" />
          <p className="text-sm text-white/60">
            Acompanhamento clínico, corporal e nutricional no mesmo histórico.
          </p>
        </div>

        <nav aria-label="Rodapé" className="grid grid-cols-2 gap-x-6 gap-y-1 sm:flex sm:flex-wrap sm:items-center sm:gap-6">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex min-h-11 items-center text-sm font-semibold text-white/80 transition-colors hover:text-bm-cyan sm:min-h-0"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="shell py-6">
          <p id="privacidade" className="text-[13px] leading-relaxed text-white/60">
            © 2026 Bodymotion. Feito no Brasil. Os dados enviados nos formulários são usados apenas
            para contato comercial. Para acessar ou excluir seus dados, escreva para{" "}
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
