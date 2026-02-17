import React from "react";

export default function PricingToggle({ isAnnual, onChange }) {
  return (
    <div className="flex items-center justify-center gap-4 mt-6">
      <span className={`text-sm font-semibold transition-colors ${!isAnnual ? "text-slate-900 dark:text-white" : "text-slate-400 dark:text-slate-500"}`}>
        Mensal
      </span>

      <button
        onClick={() => onChange(!isAnnual)}
        className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 dark:focus:ring-offset-bodymotion-midnight ${
          isAnnual ? "bg-gradient-to-r from-cyan-500 to-teal-500" : "bg-slate-300 dark:bg-slate-700"
        }`}
        aria-label="Alternar plano anual"
      >
        <span className={`inline-block h-6 w-6 rounded-full bg-white shadow-md transform transition-transform ${isAnnual ? "translate-x-7" : "translate-x-1"}`} />
      </button>

      <span className={`text-sm font-semibold transition-colors ${isAnnual ? "text-slate-900 dark:text-white" : "text-slate-400 dark:text-slate-500"}`}>
        Anual
        <span className="ml-1.5 inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/30 px-2 py-0.5 text-[10px] font-bold text-green-700 dark:text-green-300">
          –20%
        </span>
      </span>
    </div>
  );
}
