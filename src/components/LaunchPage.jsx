import React from "react";
import MotionLine from "./ui/MotionLine";
import InterestForm from "./InterestForm";
import ProductPreview from "./ProductPreview";
import { getLaunchScreens } from "../data/screens";

export default function LaunchPage() {
  const screens = getLaunchScreens();
  return (
    <div className="launch-page">
      <a href="#inicio" className="skip-link">Pular para o conteúdo</a>
      <header className="launch-shell launch-header">
        <a href="#inicio" aria-label="Bodymotion — início">
          <img src="/brand/logo-branca.svg" alt="Bodymotion" className="h-10 w-auto sm:h-12" />
        </a>
      </header>
      <main id="inicio" className="launch-shell launch-main">
        <div className="launch-intro">
          <p className="launch-eyebrow flex flex-wrap items-center gap-2">
            <svg viewBox="0 0 20 20" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="m10 2 2.2 5.8L18 10l-5.8 2.2L10 18l-2.2-5.8L2 10l5.8-2.2L10 2Z" /></svg>
            Avaliação física com IA
            <span className="rounded-full border border-bm-cyan/30 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">Beta</span>
          </p>
          <h1 className="launch-title">
            Prontuário, avaliação física e dieta{" "}
            <span className="relative inline-block">em um só lugar.<MotionLine className="absolute -bottom-1 left-0 h-[0.3em] w-full" /></span>
          </h1>
          <p className="launch-description">Da consulta à dieta, tudo no mesmo histórico. Avaliação por fotos com IA e revisão das medidas pelo profissional.</p>
          <a href="#interesse" className="launch-mobile-cta">Quero conhecer <span aria-hidden="true">↓</span></a>
          <ProductPreview screens={screens} />
        </div>
        <InterestForm />
      </main>
      <footer className="launch-shell launch-footer"><span>© 2026 Bodymotion.</span><span>Feito no Brasil. Pensado para a sua rotina.</span></footer>
    </div>
  );
}
