import { useState, useEffect } from "react";

export default function useCheckout() {
  const [toast, setToast] = useState(null);

  /* Handle post-checkout redirects */
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const status = p.get("checkout");
    const plan = p.get("plan");
    if (status === "success") {
      setToast({ type: "success", message: `Pagamento concluído para ${plan ?? "seu plano"}!` });
      window.history.replaceState({}, "", window.location.pathname);
    }
    if (status === "cancel") {
      setToast({ type: "error", message: "Pagamento cancelado. Tente novamente quando quiser." });
      window.history.replaceState({}, "", window.location.pathname);
    }
  }, []);

  const closeToast = () => setToast(null);
  
  return { toast, closeToast, showToast: setToast };
}
