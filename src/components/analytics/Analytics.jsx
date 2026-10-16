"use client";

import { useEffect } from "react";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { track, dropInternal, rememberInternalFlag } from "@/lib/analytics";

// Vercel Web Analytics: visitas y eventos agregados, sin cookies ni identificadores personales,
// por eso no hace falta aviso de cookies. Se activa en Vercel > proyecto > Analytics.
export default function Analytics() {
  // ?interno=1 marca este navegador como del equipo; ?interno=0 lo desmarca.
  useEffect(() => {
    rememberInternalFlag();
  }, []);

  // Clics en WhatsApp, Google Play y video (YouTube).
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest?.("a[href]");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      const page = window.location.pathname;
      if (href.includes("wa.me")) track("click_whatsapp", { page });
      else if (href.includes("play.google.com")) track("click_google_play", { page });
      else if (href.includes("youtube.com") || href.includes("youtu.be")) track("click_video", { page });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // Speed Insights mide la velocidad real de carga (Core Web Vitals) de cada visita, sin cookies.
  return (
    <>
      <VercelAnalytics beforeSend={dropInternal} />
      <SpeedInsights beforeSend={dropInternal} />
    </>
  );
}
