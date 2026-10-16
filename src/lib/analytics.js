// Eventos personalizados en Vercel Web Analytics (sin cookies, sin datos personales).
// Vercel acepta valores de texto, número o booleano; no enviamos correos ni nombres.
import { track as vercelTrack } from "@vercel/analytics";

const INTERNAL_KEY = "solyon-interno";

// Un navegador del equipo se marca una vez entrando a cualquier página con ?interno=1
// (y se desmarca con ?interno=0). Sus visitas dejan de contar en Analytics y Speed Insights.
export function isInternal() {
  if (typeof window === "undefined") return false;
  try {
    const p = new URLSearchParams(window.location.search).get("interno");
    if (p === "1") return true;
    if (p === "0") return false;
    return window.localStorage.getItem(INTERNAL_KEY) === "1";
  } catch {
    return false;
  }
}

export function rememberInternalFlag() {
  try {
    const url = new URL(window.location.href);
    const p = url.searchParams.get("interno");
    if (p === null) return;
    if (p === "1") window.localStorage.setItem(INTERNAL_KEY, "1");
    if (p === "0") window.localStorage.removeItem(INTERNAL_KEY);
    url.searchParams.delete("interno");
    window.history.replaceState(null, "", url.pathname + url.search + url.hash);
  } catch {}
}

// Para Analytics y Speed Insights: descarta los eventos de navegadores internos.
export const dropInternal = (event) => (isInternal() ? null : event);

export function track(name, params = {}) {
  if (typeof window === "undefined" || isInternal()) return;
  try {
    vercelTrack(name, params);
  } catch {}
}
