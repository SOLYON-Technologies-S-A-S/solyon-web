import { SITE_URL } from "@/lib/seo";

// Fecha real de la última actualización de contenido de cada ruta (actualizar al cambiar la página).
const UPDATED = "2026-10-15";
const ROUTES = [
  ["/", 1, "weekly"],
  ["/soluciones/gobierno", 0.9, "monthly"],
  ["/soluciones/empresas", 0.9, "monthly"],
  ["/soluciones/retail", 0.9, "monthly"],
  ["/solyon-move", 0.9, "monthly"],
  ["/reporte-barreras", 0.8, "monthly"],
  ["/en/insurance", 0.7, "monthly"],
  ["/tecnologia", 0.8, "monthly"],
  ["/tecnologia/arcanum", 0.7, "monthly"],
  ["/modelo", 0.6, "monthly"],
  ["/inversionistas", 0.7, "monthly"],
  ["/aliados", 0.6, "monthly"],
  ["/investigacion", 0.6, "monthly"],
  ["/investigacion/propiedad-intelectual", 0.5, "monthly"],
  ["/publicaciones", 0.6, "monthly"],
  ["/impacto", 0.7, "monthly"],
  ["/nosotros", 0.7, "monthly"],
  ["/prensa", 0.7, "monthly"],
  ["/contacto", 0.8, "monthly"],
  ["/politica-de-datos", 0.3, "yearly"],
];

export default function sitemap() {
  return ROUTES.map(([path, priority, changeFrequency]) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified: new Date(UPDATED),
    changeFrequency,
    priority,
  }));
}
