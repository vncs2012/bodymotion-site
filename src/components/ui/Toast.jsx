import React, { useEffect } from "react";

const colors = {
  success: "border-bm-cyan/50 bg-bm-ink text-white",
  error: "border-rose-500/50 bg-rose-600 text-white",
  info: "border-bm-cyan/50 bg-bm-ink text-white",
};

export default function Toast({ message, type = "info", onClose, duration = 5000 }) {
  useEffect(() => {
    const t = setTimeout(onClose, duration);
    return () => clearTimeout(t);
  }, [duration, onClose]);

  if (!message) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-5 right-5 z-[9999] max-w-sm animate-fade-up rounded-xl border px-5 py-4 text-sm font-semibold shadow-2xl backdrop-blur-xl ${colors[type]}`}
    >
      <div className="flex items-start gap-3">
        <p className="flex-1">{message}</p>
        <button
          onClick={onClose}
          className="text-lg leading-none opacity-60 hover:opacity-100"
          aria-label="Fechar"
        >
          ×
        </button>
      </div>
    </div>
  );
}
