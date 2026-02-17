import React from "react";

const look = {
  cyan: "bg-cyan-500/10 text-cyan-700 border-cyan-500/20 dark:text-cyan-300",
  teal: "bg-teal-500/10 text-teal-700 border-teal-500/20 dark:text-teal-300",
  soon: "bg-amber-500/10 text-amber-700 border-amber-500/20 dark:text-amber-300",
  default: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
};

export default function Badge({ children, variant = "default", className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest leading-none ${look[variant] ?? look.default} ${className}`}
    >
      {children}
    </span>
  );
}
