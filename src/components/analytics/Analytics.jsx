"use client";

import { useEffect, useState } from "react";
import { track } from "@/lib/analytics";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const KEY = "solyon-consent-analytics";

function loadGa() {
  if (!GA_ID || document.getElementById("ga4-script")) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID, { anonymize_ip: true });
  const s = document.createElement("script");
  s.id = "ga4-script";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`;
  document.head.appendChild(s);
}

// GA4 solo se carga con consentimiento explícito. Sin NEXT_PUBLIC_GA_ID no se muestra nada.
export default function Analytics() {
  const [choice, setChoice] = useState("loading"); // loading | none | granted | denied

  useEffect(() => {
    let saved = null;
    try {
      saved = window.localStorage.getItem(KEY);
    } catch {}
    if (saved === "granted") {
      loadGa();
      setChoice("granted");
    } else {
      setChoice(saved === "denied" ? "denied" : "none");
    }
  }, []);

  // Clics en WhatsApp, Google Play y video (YouTube).
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest?.("a[href]");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      if (href.includes("wa.me")) track("click_whatsapp", { link_url: href });
      else if (href.includes("play.google.com")) track("click_google_play", { link_url: href });
      else if (href.includes("youtube.com") || href.includes("youtu.be")) track("click_video", { link_url: href });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const decide = (value) => {
    try {
      window.localStorage.setItem(KEY, value);
    } catch {}
    if (value === "granted") loadGa();
    setChoice(value);
  };

  if (!GA_ID || choice !== "none") return null;
  return (
    <section className="consent" aria-label="Cookies de analítica">
      <p>Usamos cookies de analítica (Google Analytics) para entender cómo se usa el sitio. Solo se activan si las aceptas.</p>
      <div className="row">
        <button className="btn btn-primary" type="button" onClick={() => decide("granted")}>Aceptar</button>
        <button className="btn btn-secondary" type="button" onClick={() => decide("denied")}>Rechazar</button>
      </div>
    </section>
  );
}
