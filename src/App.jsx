import React, { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import ComoFunciona from "./components/sections/ComoFunciona";
import Plataforma from "./components/sections/Plataforma";
import ParaQuem from "./components/sections/ParaQuem";
import Confianca from "./components/sections/Confianca";
import Planos from "./components/sections/Planos";
import Faq from "./components/sections/Faq";
import CtaFinal from "./components/sections/CtaFinal";
import DemoDrawer from "./components/DemoDrawer";
import StickyCta from "./components/ui/StickyCta";
import Toast from "./components/ui/Toast";
import useCheckout from "./hooks/useCheckout";

export default function App() {
  const { toast, closeToast } = useCheckout();
  const [demoOpen, setDemoOpen] = useState(false);

  // Qualquer link para a demonstração (Header, Footer) é interceptado aqui
  // para abrir a gaveta sem depender da navegação nativa por hash — assim
  // evitamos o salto de rolagem que o navegador faz ao tentar focar uma
  // âncora "#demonstracao" que não existe mais como seção da página.
  useEffect(() => {
    const onClick = (event) => {
      const link = event.target.closest?.('a[href="#demonstracao"]');
      if (!link) return;
      event.preventDefault();
      setDemoOpen(true);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const openDemo = () => setDemoOpen(true);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white text-bm-ink">
      <a href="#inicio" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />
      <main>
        <Hero />
        <ComoFunciona />
        <Plataforma />
        <ParaQuem />
        <Confianca />
        <Planos onOpenDemo={openDemo} />
        <Faq />
        <CtaFinal onOpenDemo={openDemo} />
      </main>
      <Footer />

      <DemoDrawer open={demoOpen} onOpenChange={setDemoOpen} />
      <StickyCta drawerOpen={demoOpen} />

      {toast && <Toast message={toast.message} type={toast.type} onClose={closeToast} />}

      <Analytics />
    </div>
  );
}
