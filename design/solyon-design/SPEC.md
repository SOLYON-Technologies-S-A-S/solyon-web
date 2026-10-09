# SOLYON Technologies · Especificación para construir el sitio

Diseño aprobado por el fundador (Sergio Andrés Murillo), octubre de 2026. Dirección visual: **Cartografía Operacional**.

Este paquete contiene:

- `screens/*.dc.html`: las 19 pantallas aprobadas. Son la fuente de verdad del diseño, el contenido y el copy. El formato `.dc.html` es HTML con una capa de plantillas de la herramienta de diseño. Ver "Cómo leer las pantallas".
- `styles/01-base.css`, `styles/02-media.css` y `styles/03-motion-components.css`: los estilos exactos que usan las pantallas, con tokens, componentes y animaciones.

## 1. Cómo leer las pantallas

- El contenido visual está dentro de `<x-dc> … </x-dc>`. Ignora `<helmet>` (allí solo están Google Fonts y `body{margin:0}`) y el bloque `<script type="text/x-dc">`, salvo la lógica de estado.
- `<dc-import name="Nav">` y `<dc-import name="Footer">` incluyen los componentes `Nav.dc.html` y `Footer.dc.html`, que deben pasar a ser componentes compartidos del layout.
- `{{variable}}`, `<sc-for>` y `<sc-if>` son plantillas. La lógica está en `renderVals()` y se traduce a estado de React. Hay 4 componentes interactivos:
  - **Nav:** menú desplegable en celular.
  - **Main:** pestañas Retail / Gobierno / Insurance.
  - **Retail:** acordeón de preguntas frecuentes.
  - **Contacto:** selector de audiencia que cambia el formulario.
- Los enlaces entre pantallas (`href="Retail.dc.html"`) se traducen a las rutas de la sección 2.
- `figure.media` es el marco de una foto real. Lleva el nombre del archivo esperado o una etiqueta `[FOTO …]`. Al construir, renderiza la `<img>` real dentro del marco y conserva el pie de foto.
- Los textos entre corchetes `[ … ]` son datos pendientes. Ver la sección 7.

## 2. Rutas

| Pantalla | Ruta | Idioma |
|---|---|---|
| Main | `/` | es |
| Retail | `/soluciones/retail` | es |
| Gobierno | `/soluciones/gobierno` | es |
| Move | `/solyon-move` | es |
| Insurance | `/en/insurance` | en |
| Tecnologia | `/tecnologia` | es |
| Arcanum | `/tecnologia/arcanum` | es |
| Modelo | `/modelo` | es |
| Aliados | `/aliados` | es |
| Investigacion | `/investigacion` | es |
| PI | `/investigacion/propiedad-intelectual` | es |
| Publicaciones | `/publicaciones` | es |
| Impacto | `/impacto` | es |
| ReporteBarreras | `/reporte-barreras` | es |
| Nosotros | `/nosotros` | es |
| Prensa | `/prensa` | es |
| Contacto | `/contacto` | es |
| (nueva) | `/politica-de-datos` | es (texto legal pendiente, ver la sección 7) |

Redirecciones 301 desde las rutas del sitio anterior: `/technology` → `/tecnologia`, `/impact` → `/impacto`, `/about` → `/nosotros`, `/ecosystem` → `/tecnologia`. Antes de definirlas, revisa en el repositorio actual qué otras rutas existen.

## 3. Requisitos técnicos

- **Stack:** usa el del repositorio actual (Next.js con App Router, si eso es lo que hay). Las páginas deben generarse estáticas (SSG), salvo los formularios. Lleva el CSS de `styles/` a CSS global o módulos, conservando nombres y valores. No cambies los colores, la tipografía ni los espaciados.
- **Fuentes:** Archivo (con eje de ancho), IBM Plex Sans e IBM Plex Mono, auto-hospedadas con `next/font`.
- **SEO:**
  - Cada página lleva su propio `<title>`, su `meta description` y su canonical absoluto apuntando a sí misma. El bug actual es que todas apuntan a la home.
  - `hreflang` es/en entre `/` y `/en/insurance` (y donde aplique).
  - Genera `sitemap.xml` y `robots.txt`.
  - Open Graph con imagen por página.
- **Schema.org (JSON-LD):**
  - `Organization` en el layout, con nombre legal SOLYON Technologies S.A.S. BIC, Medellín, redes sociales y logo.
  - `SoftwareApplication` en `/solyon-move`.
  - `ResearchOrganization` en `/investigacion`.
  - `NewsArticle` o `ItemList` de menciones en `/prensa`.
- **Formularios:** hay 7 (retail, gobierno, insurance, aliados, publicaciones, reporte, contacto).
  - Validación en cliente y servidor.
  - Casilla de autorización de datos obligatoria (Ley 1581 de 2012).
  - Protección antispam con honeypot y límite de envíos.
  - Para enviarlos, usa una ruta de API que mande un correo a la dirección de cada audiencia (`ventas@`, `gobierno@`, `partners@`, `sergio@`). Pregunta al fundador qué servicio de correo usar antes de implementarlo.
- **Analítica (GA4):** un evento por cada formulario enviado (`lead_retail`, `lead_gobierno`, `lead_insurance`, `lead_aliado`, `descarga_reporte`, `suscripcion`), más clics en WhatsApp, Google Play y el video. Solo con consentimiento de cookies.
- **Accesibilidad (WCAG 2.2 AA):** es crítico, porque SOLYON trabaja con personas con discapacidad.
  - Contraste AA, foco visible y navegación completa con teclado.
  - `prefers-reduced-motion` desactiva todas las animaciones (ya está en el CSS).
  - Texto alternativo descriptivo en todas las fotos.
  - Pestañas y acordeón con roles ARIA correctos.
- **Rendimiento:** LCP < 2,5 s y CLS < 0,1 en celular. Imágenes con `next/image`, en formato AVIF/WebP y con tamaños responsivos. Sin JavaScript innecesario en páginas estáticas.
- **Video:** el enlace a YouTube (`0SyayXeU42g`) se mantiene como enlace o como embed con carga diferida (facade). No cargues el iframe de entrada.

## 4. Imágenes

Van en `/public/visual/`. Estos nombres ya están referenciados en el diseño:

| Archivo | Uso |
|---|---|
| `solyon-move-field-validation.jpeg` | Validación en territorio (Manrique) |
| `solyon-move-app-real.jpeg` | Captura real de la app |
| `solyon-move-barriers.png` | Barreras documentadas |
| `solyon-move-crm-historica.png` | CRM y mapa territorial |

Pendientes que entregará el fundador: taller con la comunidad, foto del equipo en el laboratorio, retratos de Sergio Andrés Murillo y Elizabeth Tamayo, mapa real de las 378 barreras y fotos de producto de retail.

Mientras no exista una foto, conserva el marco `figure.media` con su etiqueta. **No uses fotos de banco de imágenes ni imágenes generadas.**

## 5. Datos oficiales (no cambiar)

- **Piloto SOLYON Move** (Ruta N y Toyota Mobility Foundation, programa Medellín Mobility for All, febrero a agosto de 2026, Manrique y Aranjuez):
  - 184 usuarios activos al cierre, frente a una meta contractual de 150 (122,7%). Las notas de prensa citan 150 porque esa era la meta.
  - 378 barreras georreferenciadas.
  - −44% de incertidumbre antes del viaje.
  - +60% de salidas autónomas.
- **Retail:** activación de COP 8.600.000, suscripción de COP 1.200.000 al mes, go-live en 21 días, sin permanencia.
- **Arcanum:** 93% de coherencia contextual y −61% de alucinaciones. Siempre con la etiqueta "Benchmark interno, no auditado".
- **Prensa:**
  - Toyota Mobility Foundation, 16 de febrero de 2026.
  - Alcaldía de Medellín, 6 de agosto de 2026.
  - Ruta N, agosto de 2026.
  - Los enlaces exactos están en `Prensa.dc.html`.

## 6. Qué no publicar

- "Patent Pending" ni números de patente sin confirmación escrita del abogado.
- Logos gráficos de terceros (Ruta N, Toyota, Google, etc.) sin revisar sus guías de marca. Por ahora van en texto.
- Testimonios, casos de clientes, cifras de ventas, TAM/SOM o valoraciones.
- Fotos de personas sin autorización escrita de uso de imagen.

## 7. Datos pendientes del fundador

Los placeholders entre corchetes deben quedar visibles en staging y bloqueados en producción. Haz un chequeo de build que falle si queda alguno, o una lista en el README. Los principales:

- Números de registro DNDA y del expediente de marca ante la SIC.
- Cupos y beneficios del programa de clientes fundadores.
- Política de propiedad de los datos de clientes retail.
- Metodología de medición del piloto.
- Formatos GIS.
- Licencia abierta del reporte.
- Valores de licencia para gobierno e insurance.
- Términos del programa de design partners.
- Tiempos de respuesta.
- Correos `ventas@`, `gobierno@`, `partners@` y `prensa@`.
- Texto legal de la política de tratamiento de datos.
