const DEFAULT_TRIAL_PLAN_ID = "pro_saude";
const DEFAULT_TRIAL_BILLING = "monthly";

export function buildTrialStartUrl({
  planId = DEFAULT_TRIAL_PLAN_ID,
  billing = DEFAULT_TRIAL_BILLING,
} = {}) {
  const baseUrl = import.meta.env.VITE_TRIAL_START_URL || "/registro";
  const url = new URL(baseUrl, window.location.origin);

  url.searchParams.set("plan", planId);
  url.searchParams.set("billing", billing);

  return url.toString();
}

export function startTrial(options = {}) {
  window.location.assign(buildTrialStartUrl(options));
}
