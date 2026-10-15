// Ruta /reporte-barreras: vista generada desde el canvas v3 (ReporteBarreras.dc.html). Metadatos y datos estructurados aquí.
import ReporteBarreras from "@/views/ReporteBarreras";
import JsonLd from "@/components/ui/JsonLd";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Reporte abierto de barreras de accesibilidad | SOLYON",
  description: "Resumen público del piloto SOLYON Move: barreras por tipo, metodología y dataset anonimizado para entidades, academia y medios.",
  path: "/reporte-barreras",
});

const LD = [
  {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "name": "Reporte de barreras de accesibilidad del piloto SOLYON Move",
    "description": "Barreras urbanas georreferenciadas con foto, tipo y fecha, reportadas por la ciudadanía y levantadas en campo en las comunas 3 Manrique y 4 Aranjuez de Medellín durante el piloto SOLYON Move. Datos personales anonimizados.",
    "url": "https://www.solyontechnologies.com/reporte-barreras",
    "creator": {
      "@id": "https://www.solyontechnologies.com/#organization"
    },
    "spatialCoverage": "Medellín, Colombia",
    "temporalCoverage": "2026-02/2026-08",
    "variableMeasured": [
      "Tipo de barrera",
      "Ubicación",
      "Fecha",
      "Estado"
    ],
    "isAccessibleForFree": true,
    "inLanguage": "es"
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://www.solyontechnologies.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Investigación",
        "item": "https://www.solyontechnologies.com/investigacion"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Reporte de barreras",
        "item": "https://www.solyontechnologies.com/reporte-barreras"
      }
    ]
  }
];

export default function Page() {
  return (
    <>
      {LD.map((d, i) => <JsonLd key={i} data={d} />)}
      <ReporteBarreras />
    </>
  );
}
