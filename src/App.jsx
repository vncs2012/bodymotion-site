import React from "react";
import { Analytics } from "@vercel/analytics/react";
import Header from "./components/layout/Header";
import AnnouncementBar from "./components/layout/AnnouncementBar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import AIHowItWorks from "./components/sections/AIHowItWorks";
import Benefits from "./components/sections/Benefits";
import Features from "./components/sections/Features";
import Segments from "./components/sections/Segments";
import HowItWorks from "./components/sections/HowItWorks";
import Pricing from "./components/sections/Pricing";
import ComparisonTable from "./components/sections/ComparisonTable";
import Security from "./components/sections/Security";
import FAQ from "./components/sections/FAQ";
import FinalCTA from "./components/sections/FinalCTA";
import Contact from "./components/sections/Contact";
import Toast from "./components/ui/Toast";
import useCheckout from "./hooks/useCheckout";

export default function App() {
  const { toast, closeToast } = useCheckout();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white text-bodymotion-ink transition-colors duration-300 dark:bg-bodymotion-midnight dark:text-white">
      <a href="#inicio" className="skip-link">Pular para o conteúdo</a>
      <div className="relative z-10">
        <AnnouncementBar />
        <Header />
        <main>
          <Hero />
          <AIHowItWorks />
          <Benefits />
          <Features />
          <Segments />
          <HowItWorks />
          <Pricing />
          <ComparisonTable />
          <Security />
          <FAQ />
          <FinalCTA />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* Toast */}
      {toast && <Toast message={toast.message} type={toast.type} onClose={closeToast} />}

      {/* Vercel Analytics */}
      <Analytics />
    </div>
  );
}
