import { useState, useEffect } from "react";

const API = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8000";
const CHECKOUT = import.meta.env.VITE_CHECKOUT_ENDPOINT ?? "/payment/checkout";
const STRIPE_PK = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY ?? "";

export default function useCheckout() {
  const [loadingPlanId, setLoadingPlanId] = useState(null);
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

  const initiateCheckout = async (planId) => {
    setLoadingPlanId(planId);
    try {
      const res = await fetch(`${API}${CHECKOUT}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          plan_id: planId,
          provider: "stripe",
          origin: location.origin,
          success_url: `${location.origin}${location.pathname}?checkout=success&plan=${planId}`,
          cancel_url: `${location.origin}${location.pathname}?checkout=cancel&plan=${planId}`,
        }),
      });
      if (!res.ok) throw new Error(`Erro (${res.status})`);
      const data = await res.json();

      if (data.checkout_url) return void (location.href = data.checkout_url);
      if (data.session_id && window.Stripe && STRIPE_PK) {
        const s = window.Stripe(STRIPE_PK);
        const r = await s.redirectToCheckout({ sessionId: data.session_id });
        if (r.error) throw new Error(r.error.message);
        return;
      }
      if (data.redirect_url) return void (location.href = data.redirect_url);
      throw new Error("Resposta inesperada do servidor.");
    } catch (e) {
      setToast({ type: "error", message: e.message ?? "Falha ao iniciar pagamento." });
    } finally {
      setLoadingPlanId(null);
    }
  };

  const closeToast = () => setToast(null);
  return { loadingPlanId, toast, initiateCheckout, closeToast, showToast: setToast };
}
