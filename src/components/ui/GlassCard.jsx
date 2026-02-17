import React from "react";

export default function GlassCard({ children, className = "", hover = false, ...props }) {
  return (
    <div
      className={`glass rounded-3xl p-6 sm:p-8 transition-all duration-300 ${hover ? "hover:-translate-y-1 hover:shadow-glass-lg" : ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
