import React from "react";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section id="inicio" className="relative px-4 pt-20 pb-32 sm:px-6 lg:pt-32 lg:pb-40">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2 gap-16 items-center">
        
        {/* ── Left: Content ── */}
        <div className="max-w-2xl relative z-10 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-300 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Nova Plataforma 2026
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            O futuro com a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
              BodyMotion + IA
            </span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg">
            Anamnese, avaliação antropométrica com IA e prescrição em um único lugar. 
            Simples, bonito e feito para você crescer.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button size="lg" className="shadow-lg shadow-cyan-500/25" onClick={() => document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" })}>
              Começar Teste Grátis
            </Button>
            <Button variant="secondary" size="lg" onClick={() => document.getElementById("funcionalidades")?.scrollIntoView({ behavior: "smooth" })}>
              Ver Demonstração
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 font-medium">
            <div className="flex -space-x-3">
               {[1,2,3,4].map(i => (
                 <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-50 dark:border-bodymotion-midnight bg-slate-200 dark:bg-slate-700 overflow-hidden">
                   <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i*123}`} alt="User" />
                 </div>
               ))}
            </div>
            <p>Junte-se a +500 profissionais</p>
          </div>
        </div>

        {/* ── Right: Visual Composition ── */}
        <div className="relative z-10 hidden lg:block perspective-1000">
          {/* Main Interface Floating Card */}
          <div className="relative z-20 rounded-3xl border border-white/10 bg-neutral-900/15 dark:bg-slate-900/50 backdrop-blur-xl shadow-2xl animate-floaty" style={{ animationDuration: '20s' }}>
            {/* Fake Header */}
            <div className="flex items-center justify-between border-b border-white/5 p-6">
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-rose-500/50" />
                <div className="h-3 w-3 rounded-full bg-amber-500/50" />
                <div className="h-3 w-3 rounded-full bg-emerald-500/50" />
              </div>
              <div className="h-2 w-20 rounded-full bg-white/10" />
            </div>
            
            {/* Fake Content */}
            <div className="p-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  JP
                </div>
                <div>
                  <div className="h-4 w-40 rounded bg-white/20 mb-2" />
                  <div className="h-3 w-24 rounded bg-white/10" />
                </div>
                <div className="ml-auto px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                  Ativo
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/5 p-4 border border-white/5">
                  <div className="dark:text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Peso Atual</div>
                  <div className="text-2xl font-bold text-white">72.4 kg</div>
                  <div className="dark:text-emerald-400 text-emerald-600 text-xs mt-1">↓ 1.2kg (30 dias)</div>
                </div>
                <div className="rounded-2xl bg-white/5 p-4 border border-white/5">
                  <div className="dark:text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Próxima Consulta</div>
                  <div className="text-2xl font-bold text-white">24 Out</div>
                  <div className="dark:text-cyan-400 text-cyan-600 text-xs mt-1">14:00 - Presencial</div>
                </div>
              </div>

              <div className="h-32 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/5 relative overflow-hidden">
                 {/* Chart decoration */}
                 <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-cyan-500/20 to-transparent" />
                 <svg className="absolute bottom-0 left-0 right-0 h-16 w-full text-cyan-500" preserveAspectRatio="none">
                    <path d="M0,50 Q50,10 100,40 T200,30 T300,60 L300,100 L0,100 Z" fill="currentColor" opacity="0.2" />
                    <path d="M0,50 Q50,10 100,40 T200,30 T300,60" fill="none" stroke="currentColor" strokeWidth="2" />
                 </svg>
              </div>
            </div>
          </div>

          {/* Floating Widget 1: Prescription */}
          <div className="absolute -right-12 top-20 z-30 rounded-2xl border border-white/20 bg-white/40 dark:bg-slate-800/80 backdrop-blur-md p-4 shadow-xl animate-floaty" style={{ animationDelay: '-2s', animationDuration: '15s' }}>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/20 text-teal-400">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </div>
              <div>
                <p className="text-sm font-bold dark:text-white">Prescrição Enviada</p>
                <p className="text-xs text-slate-700 dark:text-slate-400">Plano Alimentar • PDF</p>
              </div>
            </div>
          </div>

           {/* Floating Widget 2: Appointment */}
           <div className="absolute -left-12 bottom-32 z-30 rounded-2xl border border-white/20 bg-white/40 dark:bg-slate-800/80 backdrop-blur-md p-4 shadow-xl animate-floaty" style={{ animationDelay: '-5s', animationDuration: '18s' }}>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-500/20">
                 <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" className="w-8 h-8 rounded-full" alt="Patient" />
              </div>
              <div>
                <p className="text-sm font-bold dark:text-white">Nova Anamnese</p>
                <p className="text-xs text-slate-700 dark:text-slate-400">Maria S. respondeu agora</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
