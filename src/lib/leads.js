// Audiencias de los formularios: evento GA4, etiqueta del correo, variable con el destinatario
// y la confirmación que recibe quien escribe. Mientras solo exista sergio@, todo llega a LEAD_TO.
export const DEFAULT_RECIPIENT = "sergio@solyontechnologies.com";

// `doc` es la variable de entorno con la URL del documento que se envía en la confirmación
// (ficha técnica, memo, dataset). Si no está configurada, la confirmación sale sin enlace.
export const AUDIENCES = {
  contacto: {
    event: "lead_contacto", label: "Contacto general", env: "LEAD_TO_CONTACTO",
    reply: "Recibimos tu mensaje. Te escribimos en máximo 3 días hábiles con un siguiente paso concreto.",
  },
  gobierno: {
    event: "lead_gobierno", label: "Gobierno y territorio", env: "LEAD_TO_GOBIERNO", doc: "DOC_FICHA_GOBIERNO_URL",
    replyNoDoc: "Recibimos su solicitud. En máximo 3 días hábiles le enviamos la ficha técnica con una propuesta para su municipio.",
    reply: "Recibimos su solicitud. Aquí está la ficha técnica del tablero de control de barreras. En máximo 3 días hábiles le escribimos con una propuesta para su municipio.",
  },
  empresas: {
    event: "lead_empresas", label: "Empresas (SOLYON OS)", env: "LEAD_TO_EMPRESAS",
    reply: "Recibimos tu solicitud de diagnóstico. Te escribimos en máximo 3 días hábiles para agendarlo.",
  },
  retail: {
    event: "lead_retail", label: "Retail de alto ticket", env: "LEAD_TO_RETAIL",
    reply: "Recibimos tu postulación. Te escribimos por WhatsApp en máximo 3 días hábiles para agendar tu diagnóstico de 30 minutos.",
  },
  insurance: {
    event: "lead_insurance", label: "Insurance (design partners)", env: "LEAD_TO_INSURANCE",
    reply: "We received your application. We will reply within 3 business days to schedule the discovery call.",
  },
  aliados: {
    event: "lead_aliado", label: "Aliados, academia y prensa", env: "LEAD_TO_ALIADOS",
    reply: "Recibimos tu mensaje. Te responde el fundador en máximo 3 días hábiles.",
  },
  inversion: {
    event: "lead_inversion", label: "Inversionistas (memo)", env: "LEAD_TO_INVERSION", doc: "DOC_MEMO_URL",
    replyNoDoc: "Recibimos su solicitud. El fundador le envía el memo y le escribe en máximo 3 días hábiles.",
    reply: "Recibimos su solicitud. Aquí está el memo de inversión de SOLYON Technologies. El fundador le escribe en máximo 3 días hábiles.",
  },
  publicaciones: {
    event: "suscripcion", label: "Suscripción a publicaciones", env: "LEAD_TO_PUBLICACIONES",
    reply: "Quedaste suscrito. Te avisaremos cuando publiquemos algo nuevo.",
  },
  reporte: {
    event: "descarga_reporte", label: "Reporte de barreras", env: "LEAD_TO_REPORTE", doc: "DOC_REPORTE_URL",
    replyNoDoc: "Recibimos tu solicitud. Te enviamos el reporte en máximo 3 días hábiles.",
    reply: "Aquí está el reporte de barreras del piloto SOLYON Move. Puedes usarlo citando la fuente; para uso comercial, escríbenos.",
  },
};

export const MIN_FILL_MS = 2000; // un formulario enviado antes de 2 s se trata como bot
