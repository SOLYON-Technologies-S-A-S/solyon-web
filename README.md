# SOLYON Technologies · sitio web

Next.js 14 (App Router), desplegado en Vercel. Rediseño 2026 v3 "Tres anillos".
Fuente de verdad del diseño: el canvas de Claude Design **«SOLYON Technologies — Sitio web 2026»**, copiado en
`design/v3/canvas/`. Las páginas se generan desde ese canvas; ver `design/v3/README.md`.
Reglas de contenido y de datos: `CLAUDE.md`.

## Comandos

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # next build + chequeo de placeholders y documentos
python3 design/v3/tools/convert.py design/v3 .      # regenera vistas y componentes desde el canvas
python3 design/v3/tools/gen_routes.py design/v3 .   # regenera rutas, metadatos y JSON-LD
```

## Despliegue y vista previa

Cada push a una rama distinta de `main` genera una vista previa en Vercel (variables del entorno Preview).
`main` es la rama de producción: allí el build falla mientras queden placeholders `[ ... ]` o falten los documentos
que los formularios prometen enviar (ver abajo).

## Rutas

| Ruta | Página del canvas |
|---|---|
| `/` | `Main` |
| `/soluciones/gobierno` | `Gobierno` |
| `/soluciones/empresas` | `Empresas` |
| `/soluciones/retail` | `Retail` |
| `/solyon-move` | `Move` |
| `/en/insurance` | `Insurance` (inglés) |
| `/tecnologia` · `/tecnologia/arcanum` · `/modelo` | `Tecnologia` · `Arcanum` · `Modelo` |
| `/investigacion` · `/investigacion/propiedad-intelectual` · `/publicaciones` | `Investigacion` · `PI` · `Publicaciones` |
| `/impacto` · `/reporte-barreras` | `Impacto` · `ReporteBarreras` |
| `/nosotros` · `/aliados` · `/prensa` · `/inversionistas` | `Nosotros` · `Aliados` · `Prensa` · `Inversion` |
| `/contacto` · `/politica-de-datos` | `Contacto` · `Politica` |
| `POST /api/lead` | Formularios |

Redirecciones 301 (`next.config.js`): `/technology`, `/impact`, `/about`, `/ecosystem`, `/contact`, `/investors`,
`/store`, `/inversion`, `/empresas`, `/gobierno`, `/retail`, `/move`, `/privacy`.

## Variables de entorno (Vercel)

| Variable | Uso |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL base para canonical, sitemap y Open Graph. Por defecto `https://www.solyontechnologies.com`. |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` | Servidor SMTP para los formularios. Puerto 465 usa TLS directo; otros, STARTTLS. Con Google Workspace, `SMTP_PASS` es una contraseña de aplicación. |
| `SMTP_FROM` | Remitente (opcional; por defecto `SMTP_USER`). |
| `LEAD_TO` | Destinatario de todos los formularios (opcional; por defecto `sergio@solyontechnologies.com`). |
| `LEAD_TO_<AUDIENCIA>` | Destinatario por audiencia (opcional): `CONTACTO`, `GOBIERNO`, `EMPRESAS`, `RETAIL`, `INSURANCE`, `ALIADOS`, `INVERSION`, `PUBLICACIONES`, `REPORTE`. |
| `DOC_FICHA_GOBIERNO_URL` | URL del PDF de la ficha técnica que recibe la entidad al enviar el formulario de Gobierno. |
| `DOC_MEMO_URL` | URL del memo de inversión que recibe quien lo solicita en `/inversionistas`. |
| `DOC_REPORTE_URL` | URL del dataset anonimizado del reporte de barreras. |
| `NEXT_PUBLIC_GA_ID` | ID de GA4 (`G-XXXXXXX`). Sin ella no se carga analítica ni el aviso de cookies. Es de build. |

Los mensajes de confirmación del sitio prometen la ficha, el memo y el reporte "en los próximos minutos". Si una
variable `DOC_*` falta, la confirmación por correo sale sin el enlace y con un texto que promete el envío manual,
pero **el build de producción falla** para que esa promesa no quede incumplida.

## Formularios

Diez formularios (contacto de la home, gobierno, empresas, retail, insurance, aliados, inversionistas, reporte,
publicaciones y los cuatro perfiles de contacto) usan `src/lib/submitLead.js` y envían a `POST /api/lead`:

- Validación nativa en el cliente (campos con `*` obligatorios) y validación autoritativa en el servidor.
- Casilla de autorización de datos obligatoria (Ley 1581 de 2012) con enlace a `/politica-de-datos`.
- Honeypot, tiempo mínimo de llenado y límite de 5 envíos por IP cada 10 minutos.
- Correo al equipo y confirmación automática a quien escribe, con el documento prometido si está configurado.
- Si el envío falla, el formulario muestra el error con un enlace a WhatsApp; si sale bien, el mensaje de confirmación del canvas.

El límite de envíos vive en memoria de cada instancia serverless: frena abuso básico, no es global.

## SEO y motores de IA

- `src/app/**/page.jsx`: título, descripción y canonical por ruta; JSON-LD de FAQ (desde las preguntas visibles),
  migas, `SoftwareApplication` (SOLYON Move y EL-VÍA), `VideoObject`, `Service` y `Dataset`.
- `src/app/layout.jsx`: `Organization` (con NIT y GrupLAC en `sameAs`) y `WebSite`.
- `robots.txt` permite explícitamente a los rastreadores de buscadores y de IA; `public/llms.txt` resume la empresa
  con fuentes; `sitemap.xml` usa la fecha real de actualización (`UPDATED` en `src/app/sitemap.js`).

## Analítica (GA4)

Solo se carga si el visitante acepta las cookies. Eventos: `lead_contacto`, `lead_gobierno`, `lead_empresas`,
`lead_retail`, `lead_insurance`, `lead_aliado`, `lead_inversion`, `descarga_reporte`, `suscripcion`,
`click_whatsapp`, `click_google_play`, `click_video`. Los enlaces a Google Play llevan `referrer` con UTM.

## Pendientes antes de producción

| Pendiente | Dónde |
|---|---|
| PDF de la ficha técnica, memo de inversión y dataset del reporte | Variables `DOC_*` |
| Fotos del equipo con consentimiento (hoy se muestran iniciales) | Canvas `Nosotros` |
| URLs de los posts de LinkedIn de Ruta N y TMF (hoy sin enlace) | Canvas `Prensa`, `Move`, `Impacto` |
| Constancias de Google for Startups y Créame | Canvas `Aliados` |
| Migrar las apps de Google Play a la cuenta de SOLYON Technologies S.A.S. y quitar la mención a Brazo Amigo en la ficha de Move | Play Console |
| Verificar Search Console y Bing Webmaster con el dominio y enviar el sitemap | Fuera del código |
