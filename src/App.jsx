import React from "react";
import { Analytics } from "@vercel/analytics/react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Problema from "./components/sections/Problema";
import Modulos from "./components/sections/Modulos";
import ComoFunciona from "./components/sections/ComoFunciona";
import IaAuditavel from "./components/sections/IaAuditavel";
import Personas from "./components/sections/Personas";
import Planos from "./components/sections/Planos";
import Seguranca from "./components/sections/Seguranca";
import Faq from "./components/sections/Faq";
import Demonstracao from "./components/sections/Demonstracao";
import Toast from "./components/ui/Toast";
import useCheckout from "./hooks/useCheckout";

export default function App() {
  const { toast, closeToast } = useCheckout();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white text-bm-ink">
      <a href="#inicio" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />
      <main>
        <Hero />
        <Problema />
        <Modulos />
        <ComoFunciona />
        <IaAuditavel />
        <Personas />
        <Planos />
        <Seguranca />
        <Faq />
        <Demonstracao />
      </main>
      <Footer />

      {toast && <Toast message={toast.message} type={toast.type} onClose={closeToast} />}

      <Analytics />
    </div>
  );
}
