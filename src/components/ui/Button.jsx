import React from "react";

const variants = {
  primary: "btn-primary",
  ghost: "btn-ghost",
  ghostDark: "btn-ghost-dark",
};

const sizes = {
  md: "",
  lg: "px-8 py-4 text-base",
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
      className={`${variants[variant]} ${sizes[size]} disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? (
        <>
          <svg className="-ml-1 mr-2 h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
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
