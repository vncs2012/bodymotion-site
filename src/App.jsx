import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import HowItWorks from "./components/sections/HowItWorks";
import Pricing from "./components/sections/Pricing";
import ComparisonTable from "./components/sections/ComparisonTable";
import Testimonials from "./components/sections/Testimonials";
import FAQ from "./components/sections/FAQ";
import Contact from "./components/sections/Contact";
import Toast from "./components/ui/Toast";
import useCheckout from "./hooks/useCheckout";

export default function App() {
  const { toast, closeToast } = useCheckout();

  return (
    <div className="relative min-h-screen overflow-hidden bg-neutral-800/10 dark:bg-bodymotion-midnight text-neutral-900 dark:text-white transition-colors duration-300">
      {/* Background blobs */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
        <div className="blob blob-cyan" />
        <div className="blob blob-teal" />
        <div className="blob blob-indigo" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Features />
          <HowItWorks />
          <Pricing />
          <ComparisonTable />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* Toast */}
      {toast && <Toast message={toast.message} type={toast.type} onClose={closeToast} />}
    </div>
  );
}
