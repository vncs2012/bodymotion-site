import { PLAN_BACKEND_IDS } from "../data/plans";

const DEFAULT_TRIAL_PLAN_ID = "pro_saude";
const DEFAULT_TRIAL_BILLING = "monthly";

/**
 * Constrói a URL de início de trial/checkout.
 *
 * O fluxo:
 *  1. Usuário clica num plano → redirecionado para VITE_TRIAL_START_URL
 *     com ?plan=<slug>&planId=<backendId>&billing=monthly|annual
 *  2. App autentica o usuário, chama POST /payment/checkout com planId e
 *     success_url/cancel_url apontando de volta ao site
 *  3. Stripe redireciona para STRIPE_SUCCESS_URL ou STRIPE_CANCEL_URL
 *  4. useCheckout detecta ?checkout=success|cancel|pending e exibe toast
 */
export function buildTrialStartUrl({
  planId = DEFAULT_TRIAL_PLAN_ID,
  billing = DEFAULT_TRIAL_BILLING,
} = {}) {
  const baseUrl = import.meta.env.VITE_TRIAL_START_URL || "/registro";
  const url = new URL(baseUrl, window.location.origin);

  url.searchParams.set("plan", planId);
  url.searchParams.set("billing", billing);

  // Passa o ID numérico do backend para facilitar o checkout
  const backendId = PLAN_BACKEND_IDS[planId];
  if (backendId) {
    url.searchParams.set("planId", String(backendId));
  }

  // URL de retorno para o site após pagamento
  const siteOrigin = window.location.origin;
  url.searchParams.set(
    "successUrl",
    `${siteOrigin}/?checkout=success&plan=${planId}`
  );
  url.searchParams.set(
    "cancelUrl",
    `${siteOrigin}/?checkout=cancel&plan=${planId}`
  );

  return url.toString();
}

export function startTrial(options = {}) {
  window.location.assign(buildTrialStartUrl(options));
}
