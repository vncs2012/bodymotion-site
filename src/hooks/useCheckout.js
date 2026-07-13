import { useState, useEffect } from "react";

const MESSAGES = {
  success: (plan) =>
    `Pagamento confirmado! Seu plano ${plan ?? ""} está ativo.`.trim(),
  pending: (plan) =>
    `Pagamento em processamento para ${plan ?? "seu plano"}. Você receberá uma confirmação por e-mail.`.trim(),
  cancel: () =>
    "Pagamento cancelado. Tente novamente quando quiser.",
};

export default function useCheckout() {
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const status = p.get("checkout");
    const plan = p.get("plan");

    if (status === "success") {
      setToast({ type: "success", message: MESSAGES.success(plan) });
      window.history.replaceState({}, "", window.location.pathname);
    } else if (status === "pending") {
      setToast({ type: "info", message: MESSAGES.pending(plan) });
      window.history.replaceState({}, "", window.location.pathname);
    } else if (status === "cancel") {
      setToast({ type: "error", message: MESSAGES.cancel() });
      window.history.replaceState({}, "", window.location.pathname);
    }
  }, []);

  const closeToast = () => setToast(null);

  return { toast, closeToast, showToast: setToast };
}
