import { track } from "@vercel/analytics";
import { registrarEventoRustrak } from "./rustrak";

export function trackSiteEvent(name, properties = {}) {
  registrarEventoRustrak(name);
  track(name, properties);
}
