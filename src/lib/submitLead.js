// Envía cualquier formulario del sitio a /api/lead.
// Lee la audiencia de data-audience, arma los campos con el texto de cada <label for>,
// marca los opcionales (sin required) y dispara el evento de GA4 de esa audiencia.
import { AUDIENCES } from "@/lib/leads";
import { track } from "@/lib/analytics";

const t0 = typeof performance !== "undefined" ? performance.now() : 0;

function labelFor(form, el) {
  const l = el.id && form.querySelector(`label[for="${CSS.escape(el.id)}"]`);
  return (l ? l.textContent : el.name).replace(/\*/g, "").replace(/\s+/g, " ").trim();
}

function showError(form, msg) {
  let box = form.querySelector(".form-err");
  if (!box) {
    box = document.createElement("p");
    box.className = "form-err full";
    box.setAttribute("role", "alert");
    form.appendChild(box);
  }
  box.innerHTML = "";
  box.append(msg + " ");
  const a = document.createElement("a");
  a.className = "lnk";
  a.href = "https://wa.me/573147903517";
  a.textContent = "Escríbenos por WhatsApp";
  box.append(a);
}

const MESSAGES = {
  consent_required: "Falta autorizar el tratamiento de datos.",
  invalid_email: "Revisa el correo: no parece válido.",
  missing_field: "Falta completar un campo obligatorio.",
  rate_limited: "Recibimos varios envíos seguidos. Intenta de nuevo en unos minutos o",
};

export async function submitLead(form) {
  if (!form || !form.checkValidity()) {
    form?.reportValidity();
    return false;
  }
  const audience = form.dataset.audience;
  const button = form.querySelector('button[type="submit"]');
  const fields = [];
  let consent = false;
  for (const el of form.querySelectorAll("input, select, textarea")) {
    if (el.type === "checkbox") {
      if (el.name === "consent") consent = el.checked;
      continue;
    }
    if (!el.name) continue;
    fields.push({ label: labelFor(form, el), value: el.value || "", type: el.type === "email" ? "email" : el.type, optional: !el.required });
  }
  if (button) {
    button.disabled = true;
    button.dataset.label = button.textContent;
    button.textContent = "Enviando…";
  }
  try {
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        audience,
        fields,
        consent,
        page: window.location.pathname,
        elapsed: Math.round(performance.now() - t0),
      }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.ok) {
      showError(form, MESSAGES[data.error] || "No pudimos enviar tu mensaje.");
      return false;
    }
    track(AUDIENCES[audience]?.event || "lead", { form: audience, page: window.location.pathname });
    return true;
  } catch {
    showError(form, "No pudimos enviar tu mensaje por un problema de conexión.");
    return false;
  } finally {
    if (button) {
      button.disabled = false;
      button.textContent = button.dataset.label;
    }
  }
}
