import React from "react";
import Header from "./components/layout/Header";
import AnnouncementBar from "./components/layout/AnnouncementBar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import AIHowItWorks from "./components/sections/AIHowItWorks";
import Benefits from "./components/sections/Benefits";
import Features from "./components/sections/Features";
import Segments from "./components/sections/Segments";
import HowItWorks from "./components/sections/HowItWorks";
import Security from "./components/sections/Security";
import Contact from "./components/sections/Contact";

export default function App() {
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
        <AnnouncementBar />
        <main>
          <Hero />
          <AIHowItWorks />
          <Benefits />
          <Features />
          <Segments />
          <HowItWorks />
          <Security />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
