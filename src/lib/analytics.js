// Eventos personalizados en Vercel Web Analytics (sin cookies, sin datos personales).
// Vercel acepta valores de texto, número o booleano; no enviamos correos ni nombres.
import { track as vercelTrack } from "@vercel/analytics";

export function track(name, params = {}) {
  if (typeof window === "undefined") return;
  try {
    vercelTrack(name, params);
  } catch {}
}
