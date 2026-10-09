import { SITE_URL } from "@/lib/seo";

const ROUTES = [
  ["/", 1, "weekly"],
  ["/soluciones/retail", 0.9, "monthly"],
  ["/soluciones/gobierno", 0.9, "monthly"],
  ["/solyon-move", 0.9, "monthly"],
  ["/en/insurance", 0.8, "monthly"],
  ["/tecnologia", 0.8, "monthly"],
  ["/tecnologia/arcanum", 0.7, "monthly"],
  ["/modelo", 0.7, "monthly"],
  ["/aliados", 0.7, "monthly"],
  ["/investigacion", 0.7, "monthly"],
  ["/investigacion/propiedad-intelectual", 0.6, "monthly"],
  ["/publicaciones", 0.6, "monthly"],
  ["/impacto", 0.7, "monthly"],
  ["/reporte-barreras", 0.7, "monthly"],
  ["/nosotros", 0.7, "monthly"],
  ["/prensa", 0.7, "weekly"],
  ["/contacto", 0.8, "monthly"],
  ["/politica-de-datos", 0.3, "yearly"],
];

export default function sitemap() {
  return ROUTES.map(([path, priority, changeFrequency]) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
