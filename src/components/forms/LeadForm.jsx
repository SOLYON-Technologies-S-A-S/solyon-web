"use client";

import { useEffect, useRef, useState } from "react";
import { AUDIENCES } from "@/lib/leads";
import { track } from "@/lib/analytics";

const TEXT = {
  es: { sending: "Enviando…", ok: "Recibimos tu mensaje. Gracias.", error: "No pudimos enviar el formulario. Inténtalo de nuevo o escríbenos por WhatsApp." },
  en: { sending: "Sending…", ok: "We received your message. Thank you.", error: "We couldn't send the form. Please try again." },
};

const SR_ONLY = { position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)", whiteSpace: "nowrap" };

// Formulario con validación nativa en cliente (required, type=email), honeypot y envío a /api/lead.
// La validación autoritativa está en el servidor.
export default function LeadForm({ audience, lang = "es", children, ...rest }) {
  const text = TEXT[lang] || TEXT.es;
  const [status, setStatus] = useState("idle"); // idle | sending | ok | error
  const startedAt = useRef(0);
  const formRef = useRef(null);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  async function onSubmit(e) {
    e.preventDefault();
    const form = formRef.current;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const fields = [];
    for (const el of form.elements) {
      if (!el.name || el.name === "consent" || el.name === "website" || el.type === "submit") continue;
      const label = form.querySelector(`label[for="${el.id}"]`)?.textContent?.trim() || el.name;
      fields.push({ label, value: String(data.get(el.name) ?? ""), type: el.type, optional: !el.required });
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          audience,
          page: window.location.pathname,
          consent: data.get("consent") === "on",
          website: data.get("website") || "",
          elapsed: Date.now() - startedAt.current,
          fields,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      track(AUDIENCES[audience].event, { audience });
      form.reset();
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  }

  const message = status === "sending" ? text.sending : status === "ok" ? text.ok : status === "error" ? text.error : "";

  return (
    <form ref={formRef} onSubmit={onSubmit} lang={lang === "en" ? "en" : undefined} {...rest}>
      {children}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}>
        <label htmlFor={`hp-${audience}`}>No completar este campo</label>
        <input id={`hp-${audience}`} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      {message ? (
        <p className="hint" aria-hidden="true" style={status === "error" ? { color: "#B84A12" } : undefined}>
          {message}
        </p>
      ) : null}
      <span role="status" aria-live="polite" style={SR_ONLY}>{message}</span>
    </form>
  );
}
