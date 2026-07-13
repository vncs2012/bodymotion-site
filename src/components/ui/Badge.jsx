import React from "react";

const look = {
  cyan: "bg-bodymotion-blue/10 text-bodymotion-navy border-bodymotion-blue/20 dark:text-bodymotion-sky",
  teal: "bg-bodymotion-blue/10 text-bodymotion-navy border-bodymotion-blue/20 dark:text-bodymotion-sky",
  beta: "bg-violet-500/10 text-violet-700 border-violet-500/20 dark:text-violet-300",
  roadmap: "bg-slate-500/10 text-slate-600 border-slate-500/20 dark:text-slate-300",
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
