import React, { useEffect } from "react";

const colors = {
  success: "border-teal-500/50 bg-teal-500/20 text-teal-100",
  error:   "border-rose-500/50 bg-rose-500/20 text-rose-100",
  info:    "border-cyan-500/50 bg-cyan-500/20 text-cyan-100",
};

export default function Toast({ message, type = "info", onClose, duration = 5000 }) {
  useEffect(() => {
    const t = setTimeout(onClose, duration);
    return () => clearTimeout(t);
  }, [duration, onClose]);

  if (!message) return null;

  return (
    <div className={`fixed bottom-5 right-5 z-[9999] max-w-sm rounded-2xl border px-5 py-4 shadow-2xl backdrop-blur-xl text-sm font-semibold animate-fade-in-up ${colors[type]}`}>
      <div className="flex items-start gap-3">
        <p className="flex-1">{message}</p>
        <button onClick={onClose} className="opacity-60 hover:opacity-100 text-lg leading-none" aria-label="Fechar">×</button>
      </div>
    </div>
  );
}
