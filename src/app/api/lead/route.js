import nodemailer from "nodemailer";
import { AUDIENCES, DEFAULT_RECIPIENT, MIN_FILL_MS } from "@/lib/leads";

export const runtime = "nodejs";

const MAX_BODY = 20000;
const MAX_FIELDS = 20;
const MAX_VALUE = 2000;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Límite de envíos por IP en memoria. En serverless cada instancia lleva su propio contador,
// así que frena el abuso básico; para un límite global conviene un almacén compartido (ver README).
const hits = new Map();
function limited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) for (const [k, v] of hits) if (!v.some((t) => now - t < WINDOW_MS)) hits.delete(k);
  return recent.length > MAX_PER_WINDOW;
}

const json = (body, status = 200) => Response.json(body, { status });
const oneLine = (s) => String(s).replace(/[\r\n]+/g, " ").trim();

export async function POST(request) {
  const ip = (request.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "unknown";
  const raw = await request.text();
  if (raw.length > MAX_BODY) return json({ error: "too_large" }, 413);
  let body;
  try {
    body = JSON.parse(raw);
  } catch {
    return json({ error: "invalid" }, 400);
  }

  const audience = AUDIENCES[body?.audience];
  if (!audience) return json({ error: "invalid" }, 400);

  // Honeypot o envío demasiado rápido: se responde éxito sin enviar nada.
  if (body.website || !(Number(body.elapsed) >= MIN_FILL_MS)) return json({ ok: true });

  if (body.consent !== true) return json({ error: "consent_required" }, 400);

  const fields = Array.isArray(body.fields) ? body.fields.slice(0, MAX_FIELDS) : [];
  const clean = [];
  for (const f of fields) {
    if (!f || typeof f.label !== "string" || typeof f.value !== "string") return json({ error: "invalid" }, 400);
    const value = f.value.trim().slice(0, MAX_VALUE);
    const label = oneLine(f.label).slice(0, 120);
    if (!value && !f.optional) return json({ error: "missing_field", field: label }, 400);
    if (value && f.type === "email" && !EMAIL.test(value)) return json({ error: "invalid_email", field: label }, 400);
    if (value) clean.push({ label, value, type: f.type });
  }
  if (clean.length < 1) return json({ error: "invalid" }, 400);

  // El límite cuenta solo los envíos que llegan hasta aquí (ya validados y sin honeypot).
  if (limited(ip)) return json({ error: "rate_limited" }, 429);

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("[lead] SMTP no configurado (SMTP_HOST, SMTP_USER, SMTP_PASS)");
    return json({ error: "not_configured" }, 503);
  }

  const to = process.env[audience.env] || process.env.LEAD_TO || DEFAULT_RECIPIENT;
  const replyTo = clean.find((f) => f.type === "email")?.value;
  const page = typeof body.page === "string" ? oneLine(body.page).slice(0, 200) : "";
  const text =
    clean.map((f) => `${f.label}: ${f.value}`).join("\n") +
    `\n\nAutorización de tratamiento de datos: sí\nPágina: ${page}\nFecha: ${new Date().toISOString()}`;

  try {
    const port = Number(SMTP_PORT) || 587;
    const transport = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });
    await transport.sendMail({
      from: SMTP_FROM || SMTP_USER,
      to,
      replyTo,
      subject: `[Sitio web] ${audience.label}`,
      text,
    });
  } catch (err) {
    console.error("[lead] fallo al enviar:", err?.code || err?.message);
    return json({ error: "send_failed" }, 502);
  }
  return json({ ok: true });
}
