import React from "react";

const variants = {
  primary:
    "btn-gradient rounded-[8px]",
  secondary:
    "rounded-[8px] border border-bodymotion-blue/35 bg-white text-bodymotion-navy hover:border-bodymotion-blue hover:bg-bodymotion-blue/5 dark:border-white/15 dark:bg-white/[0.05] dark:text-white dark:hover:bg-white/[0.08] transition-colors",
  ghost:
    "rounded-[8px] text-slate-600 hover:bg-slate-100 hover:text-bodymotion-navy dark:text-slate-300 dark:hover:bg-white/[0.06] dark:hover:text-white transition-colors",
};

const sizes = {
  sm: "px-4 py-2 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  className = "",
  ...props
}) {
  return (
    <button
      className={`inline-flex items-center justify-center font-semibold transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? (
        <>
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Processando…
        </>
      ) : (
        children
      )}
    </button>
  );
}
