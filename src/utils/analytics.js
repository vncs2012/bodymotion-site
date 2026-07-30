import { track } from "@vercel/analytics";

export function trackSiteEvent(name, properties = {}) {
  track(name, properties);
}
