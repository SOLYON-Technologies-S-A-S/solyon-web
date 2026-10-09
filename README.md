# SOLYON Technologies · sitio web

Next.js 14 (App Router), desplegado en Vercel. Rediseño 2026 "Cartografía Operacional".
Fuentes de verdad del diseño: `design/solyon-design/` (`SPEC.md`, `screens/`, `styles/`).

## Comandos

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # next build + chequeo de placeholders
```

## Rutas

`/` · `/soluciones/retail` · `/soluciones/gobierno` · `/solyon-move` · `/en/insurance` ·
`/tecnologia` · `/tecnologia/arcanum` · `/modelo` · `/aliados` · `/investigacion` ·
`/investigacion/propiedad-intelectual` · `/publicaciones` · `/impacto` · `/reporte-barreras` ·
`/nosotros` · `/prensa` · `/contacto` · `/politica-de-datos` · `POST /api/lead`

Redirecciones 301: `/technology`→`/tecnologia`, `/impact`→`/impacto`, `/about`→`/nosotros`,
`/ecosystem`→`/tecnologia`, `/contact`→`/contacto`, `/investors`→`/investigacion`, `/store`→`/`.

## Variables de entorno (Vercel)

| Variable | Uso |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL base para canonical, sitemap y Open Graph. Por defecto `https://www.solyontechnologies.com`. |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` | Servidor SMTP para los formularios. Puerto 465 usa TLS directo; otros puertos usan STARTTLS. Con Google Workspace, `SMTP_PASS` es una contraseña de aplicación. |
| `SMTP_FROM` | Remitente (opcional; por defecto `SMTP_USER`). |
| `LEAD_TO` | Destinatario de todos los formularios (opcional; por defecto `sergio@solyontechnologies.com`). |
| `LEAD_TO_RETAIL`, `LEAD_TO_GOBIERNO`, `LEAD_TO_INSURANCE`, `LEAD_TO_ALIADOS`, `LEAD_TO_PUBLICACIONES`, `LEAD_TO_REPORTE` | Destinatario por audiencia (opcionales). Sirven para pasar a `ventas@`, `gobierno@`, `partners@` cuando existan. |
| `NEXT_PUBLIC_GA_ID` | ID de medición de GA4 (`G-XXXXXXX`). Sin esta variable no se carga analítica ni se muestra el aviso de cookies. Es de build: tras cambiarla hay que redesplegar. |

## Formularios

Siete formularios (retail, gobierno, insurance, aliados, publicaciones, reporte y los cuatro perfiles de contacto)
envían a `POST /api/lead`: validación nativa en cliente y autoritativa en servidor, casilla de autorización de datos
obligatoria (Ley 1581 de 2012), honeypot, tiempo mínimo de llenado y límite de 5 envíos por IP cada 10 minutos.

El límite de envíos vive en memoria de cada instancia serverless: frena abuso básico, pero no es global.
Para un límite compartido habría que usar un almacén externo (por ejemplo Upstash Redis o Vercel KV).

## Analítica (GA4)

Solo se carga si el visitante acepta las cookies. Eventos: `lead_retail`, `lead_gobierno`, `lead_insurance`,
`lead_aliado`, `descarga_reporte`, `suscripcion`, `click_whatsapp`, `click_google_play`, `click_video`.

## Placeholders pendientes

Los textos entre corchetes `[ ... ]` son datos que debe entregar el fundador. Quedan visibles en desarrollo y preview.
`npm run build` ejecuta `scripts/check-placeholders.mjs`, que revisa el HTML generado y **falla el build cuando
`VERCEL_ENV=production`** si queda alguno (con `CHECK_PLACEHOLDERS=strict` se puede forzar en local).

| Página | Placeholder |
|---|---|
| `/` | `[FOTO DEL PRODUCTO]` |
| `/soluciones/retail` | `[FOTO DEL PRODUCTO]`, `[N.º]`, `[BENEFICIOS]`, `[CONFIRMAR POLÍTICA DE PROPIEDAD Y TRATAMIENTO DE DATOS]` |
| `/soluciones/gobierno` | `[FOTO · taller con la comunidad]`, `[CONFIRMAR FORMATOS]`, `[N.º]` |
| `/en/insurance` | `[PARTNER TERMS]`, `[N]` |
| `/tecnologia/arcanum` | `[ENLACE A NOTA TÉCNICA]` |
| `/modelo` | `[VALOR]` |
| `/investigacion/propiedad-intelectual` | `[N.º DE REGISTRO]`, `[N.º DE EXPEDIENTE]`, `[PUBLICAR SOLO CON CONFIRMACIÓN DEL ABOGADO]` |
| `/publicaciones` | `[AGREGAR AL SOMETER]` |
| `/impacto` | `[RESUMEN O ENLACE A LA METODOLOGÍA]`, `[FOTO · taller con la comunidad]`, `[ENLACE]` |
| `/reporte-barreras` | `[DEFINIR LICENCIA ABIERTA]`, `[MAPA REAL DE LAS 378 BARRERAS]` |
| `/nosotros` | `[FOTO REAL · Sergio Andrés Murillo]`, `[FOTO REAL · Elizabeth Tamayo]`, `[FOTO REAL · equipo en el laboratorio]` |
| `/prensa` | `[FECHA]`, `[MEDIO]`, `[AGREGAR CADA NUEVA MENCIÓN]`, `[prensa@solyontechnologies.com]` |
| `/contacto` | `[ventas@solyontechnologies.com]`, `[gobierno@solyontechnologies.com]`, `[N.º]` |
| `/politica-de-datos` | `[TEXTO LEGAL DE LA POLÍTICA DE TRATAMIENTO DE DATOS · PENDIENTE]` |

## Qué no se publica

Sin "Patent Pending" ni números de patente sin confirmación escrita del abogado; sin logos de terceros; sin
testimonios, cifras de ventas, TAM/SOM ni valoraciones; sin fotos de personas sin autorización escrita.
Detalle en `design/solyon-design/SPEC.md`.
