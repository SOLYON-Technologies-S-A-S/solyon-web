// Envía un evento a GA4 solo si el visitante aceptó cookies de analítica (gtag existe).
export function track(name, params = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}
