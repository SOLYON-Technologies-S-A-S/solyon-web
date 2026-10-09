# Prompt para Claude Code · Rediseño 2026

Estás en la rama `rediseno-2026` del sitio de SOLYON Technologies (solyontechnologies.com, Next.js 14, desplegado en Vercel). Vas a reconstruir el sitio a partir de un diseño ya aprobado. No rediseñes: implementa fielmente.

## Fuentes de verdad

Léelas completas antes de escribir código:

1. `design/solyon-design/SPEC.md`: rutas, requisitos técnicos, SEO, formularios, accesibilidad, datos oficiales y qué no se publica.
2. `design/solyon-design/screens/*.dc.html`: las 19 pantallas aprobadas, con su contenido y copy exactos. La sección 1 del SPEC explica cómo leer este formato.
3. `design/solyon-design/styles/*.css`: los estilos exactos. Conserva colores, tipografía, espaciados, animaciones y breakpoints.

Las fotos reales ya existen en `public/visual/` con los nombres que usa el diseño.

## Cómo trabajar

Primero inspecciona el repositorio actual (stack, rutas existentes, componentes, Tailwind, variables de entorno) y dame un plan corto con:

- la estructura de carpetas;
- los componentes compartidos;
- cómo vas a migrar el CSS (convive con Tailwind o lo reemplaza);
- qué rutas viejas redirigir con 301;
- qué dependencias actuales se pueden retirar (por ejemplo, three o @react-three si ya no se usan);
- qué servicio propones para enviar los formularios.

Espera mi aprobación antes de construir.

Luego construye en este orden y muéstrame cada etapa:

1. Layout, Nav con menú móvil, Footer, fuentes y CSS base.
2. Home, Retail, Gobierno, SOLYON Move e Insurance (`/en/insurance`).
3. Las 12 páginas restantes.
4. Formularios, SEO técnico (canonical por página, hreflang, sitemap, robots, JSON-LD), GA4 y redirecciones 301.

Componentes interactivos: el menú móvil, las pestañas de la home, el acordeón de retail y el selector de audiencia de contacto. Usa roles ARIA correctos y navegación completa con teclado.

Copia el texto tal cual está en las pantallas. Si algo parece un error, pregúntame; no lo corrijas por tu cuenta.

## Reglas que no se negocian

- No inventes datos, cifras, testimonios, logos ni fotos. No uses imágenes de banco ni generadas.
- Los placeholders entre corchetes `[ ... ]` quedan visibles en desarrollo. Agrega un chequeo que haga fallar el build de producción si queda alguno y lístalos en el README.
- Los marcos de foto (`figure.media`) usan los archivos de `public/visual/` cuando existan y mantienen el marco con su etiqueta cuando no.
- Accesibilidad WCAG 2.2 AA y `prefers-reduced-motion`. Este sitio lo usan personas con discapacidad.
- Rendimiento en celular: LCP < 2,5 s y CLS < 0,1. El video de YouTube se carga en diferido (facade).
- Trabaja solo en la rama `rediseno-2026`. No hagas merge a `main`: abre un Pull Request para que yo lo revise con la vista previa de Vercel.

## Verificación antes de decir que terminaste

- Compara cada página construida con su pantalla `.dc.html`, a 1440 px y a 390 px, y corrige las diferencias visibles.
- Corre Lighthouse (o equivalente) en Home, Gobierno y SOLYON Move, y reporta Performance, Accessibility y SEO.
- Confirma que cada página tiene su propia canonical y que ninguna apunta a la home.
- Entrégame:
  - la lista de rutas;
  - los placeholders pendientes;
  - las variables de entorno que debo configurar en Vercel;
  - el enlace del Pull Request.
