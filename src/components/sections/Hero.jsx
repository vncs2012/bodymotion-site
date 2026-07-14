import React from "react";
import Button from "../ui/Button";
import patientPortal from "../../../../output/playwright/bodymotion-visual-refactor/portal-paciente-dashboard-desktop.png";
import { trackSiteEvent } from "../../utils/analytics";

const proofPoints = [
  "TACO rastreável",
  "Portal por OTP",
  "Treinos e check-ins",
  "Teleconsulta + TCLE",
];

export default function Hero() {
  const scrollToContact = () => {
    trackSiteEvent("cta_demo_clicked", { placement: "hero" });
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-bodymotion-navy text-white scroll-mt-24"
    >
      <div
        className="absolute inset-0 -z-10 opacity-70"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(79,156,249,.48), transparent 31%), radial-gradient(circle at 12% 78%, rgba(167,206,252,.22), transparent 26%)",
        }}
      />
      <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
        <div className="max-w-xl motion-safe:animate-fade-in-up">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-bodymotion-yellow">
            Plataforma clínica para evolução corporal
          </p>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Nutrição, treino e evolução corporal no mesmo acompanhamento.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-blue-100 sm:text-xl">
            O BodyMotion organiza a rotina do profissional e transforma o
            plano do paciente em um acompanhamento claro, seguro e contínuo.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" onClick={scrollToContact}>
              Agendar uma demonstração
            </Button>
            <a
              href="#produto"
              onClick={() => trackSiteEvent("product_explored", { placement: "hero" })}
              className="inline-flex items-center justify-center rounded-[8px] border border-white/30 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Conhecer o produto
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-blue-100" aria-label="Recursos principais">
            {proofPoints.map((point) => (
              <li key={point} className="flex items-center gap-2">
                <svg className="h-4 w-4 text-bodymotion-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m5 12 4 4L19 6" />
                </svg>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative motion-safe:animate-[fade-in-up_.7s_ease-out_.12s_both]">
          <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-bodymotion-blue/25 blur-2xl" aria-hidden="true" />
          <img
            src={patientPortal}
            alt="Portal do paciente BodyMotion exibindo agenda, plano alimentar e treinos"
            className="w-full rounded-2xl border border-white/20 shadow-2xl shadow-bodymotion-midnight/50"
          />
          <p className="mt-4 text-center text-xs font-medium text-blue-200">
            Tela real do portal do paciente com dados demonstrativos.
          </p>
        </div>
      </div>
    </section>
  );
}
