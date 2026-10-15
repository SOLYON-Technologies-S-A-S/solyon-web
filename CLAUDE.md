# CLAUDE.md · reglas del sitio de SOLYON Technologies

Sitio Next.js 14 generado desde el canvas v3. Lee `README.md` y `design/v3/README.md` antes de cambiar algo.

## Cómo se cambia una página

- El diseño manda: cambia el artboard en `design/v3/canvas/` (y en el canvas de Claude Design) y regenera con
  `design/v3/tools/convert.py` y `gen_routes.py`. No edites `src/views/`, `src/components/v3/` ni `src/styles/v3.css`.
- Títulos, descripciones y JSON-LD de cada ruta se editan en `design/v3/tools/gen_routes.py`.
- Antes de entregar: `npm run build` sin errores, sin desbordes horizontales a 320 px y sin violaciones WCAG 2.1 AA.

## Reglas de contenido (no negociables)

- No inventar cifras, testimonios, clientes, logos ni alianzas. Cada cifra lleva su sello: `stamp` para fuente
  externa y `stamp int` para registro interno. Los benchmarks de Arcanum siempre dicen "benchmark interno, no auditado".
- La latencia de menos de 1 minuto es "medición interna repetida, no auditada".
- 378 barreras = cierre del piloto (agosto de 2026); 383 = conteo del CRM a octubre de 2026. No mezclarlos sin decirlo.
- No escribir "Patent Pending" ni números de patente.
- El único registro DNDA es el de SOLYON Move: 13-110-56 del 16 de julio de 2026. SOLYON OS y Arcanum no tienen registro propio.
- Logos de terceros solo como texto, salvo permiso escrito (ElevenLabs Grants exige su logo en el pie, ya incluido).
- No nombrar a Sovereign TruckGuard ni a clientes de EE. UU. SOLYON y Sovereign son entidades separadas.
- La alianza con Brazo Amigo no es pública.
- No publicar costos del piloto, pagos de hitos ni precios privados. El único precio público es retail:
  COP 8.600.000 de activación y COP 1.200.000 al mes desde el mes 2. El precio de EL-VÍA PRO no se publica.
- Los nombres de quienes reportan barreras se anonimizan siempre (Ley 1581 de 2012). Fotos de personas solo con
  consentimiento escrito. Nunca usar el recurso `183238b1aefd87bc7f6a0330b900d899` (muestra un nombre).
- El entregable a gobiernos es un tablero georreferenciado en vivo, con un usuario por secretaría contratante que
  solo ve lo suyo. No presentar exportaciones (GeoJSON) como entregable.
- Tono: usted en Gobierno, Inversionistas y textos institucionales; tú en Move, Retail y Empresas.
