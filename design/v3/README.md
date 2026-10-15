# Diseño v3 «Tres anillos»: del canvas al código

El diseño vive en el canvas de Claude Design **«SOLYON Technologies — Sitio web 2026»**. Esta carpeta guarda una
copia exacta de sus artboards y las herramientas que los convierten en código.

| Ruta | Contenido |
|---|---|
| `canvas/*.dc.html` | Un archivo por página o componente, tal como está en el canvas. |
| `canvas/canvas.json` | Distribución de los artboards en el canvas. |
| `solyon-v3-final.css` | Hoja de estilos única del canvas. Se copia a `src/styles/v3.css`. |
| `blobs.json` | Mapa de los recursos del canvas (`/_blob/<id>`) a sus archivos en `public/media/`. |
| `tools/convert.py` | Convierte cada artboard en un componente React (`src/views/`, `src/components/v3/`). |
| `tools/gen_routes.py` | Crea `src/app/**/page.jsx` con metadatos, JSON-LD y la vista. |
| `convert-report.json` | Resultado de la última conversión: título y formularios de cada artboard. |

## Flujo de trabajo

1. Cambia el diseño en el canvas.
2. Copia los artboards modificados a `canvas/` (o descárgalos con la herramienta de artefactos).
3. Si añadiste imágenes o videos, súmalos a `public/media/` y a `blobs.json`.
4. Ejecuta `python3 design/v3/tools/convert.py design/v3 .` y `python3 design/v3/tools/gen_routes.py design/v3 .`.
5. `npm run build` y revisa las páginas cambiadas.

No edites a mano `src/views/`, `src/components/v3/` ni `src/styles/v3.css`: se sobrescriben al regenerar.
Los ajustes propios del sitio van en `src/styles/site.css`, `src/lib/` y `gen_routes.py` (títulos, descripciones y datos estructurados).

## Qué hace el convertidor

- `sc-if` y `sc-for` se vuelven condicionales y `map` de React; la clase `Component` del artboard se conserva tal
  cual como lógica de estado.
- `dc-import` monta el componente compartido (`Nav`, `Footer`, `Explorer`, `Productos`, `Reportes`, `Ciclo`); sus
  atributos llegan como props (por ejemplo, el botón contextual del menú: `cta-label` y `cta-href`).
- Los enlaces `X.dc.html` pasan a la ruta real; `/_blob/<id>`, a `/media/<archivo>`.
- Las migas pasan a ser un `nav` con un enlace por nivel.
- Los formularios se conectan a `/api/lead` según su `aria-label` (mapa `FORM_AUDIENCE`).
- Los videos con autoplay usan `AutoVideo`, que respeta `prefers-reduced-motion`.
- Los marcadores `[FOTO: retrato de …]` se muestran como iniciales hasta que lleguen las fotos.
- Los enlaces a Google Play reciben un `referrer` con UTM.
