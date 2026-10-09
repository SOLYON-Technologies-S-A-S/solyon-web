// Audiencias de los formularios: evento GA4, etiqueta del correo y variable con el destinatario.
// Mientras solo exista sergio@, todos llegan a LEAD_TO (o a ese buzón por defecto).
export const DEFAULT_RECIPIENT = "sergio@solyontechnologies.com";

export const AUDIENCES = {
  retail: { event: "lead_retail", label: "Retail de alto ticket", env: "LEAD_TO_RETAIL" },
  gobierno: { event: "lead_gobierno", label: "Gobierno y territorio", env: "LEAD_TO_GOBIERNO" },
  insurance: { event: "lead_insurance", label: "Insurance (design partners)", env: "LEAD_TO_INSURANCE" },
  aliados: { event: "lead_aliado", label: "Aliados, academia e inversión", env: "LEAD_TO_ALIADOS" },
  publicaciones: { event: "suscripcion", label: "Suscripción a publicaciones", env: "LEAD_TO_PUBLICACIONES" },
  reporte: { event: "descarga_reporte", label: "Descarga del reporte de barreras", env: "LEAD_TO_REPORTE" },
};

export const MIN_FILL_MS = 2000; // un formulario enviado antes de 2 s se trata como bot
