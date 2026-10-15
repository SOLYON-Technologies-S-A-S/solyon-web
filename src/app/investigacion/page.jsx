// Ruta /investigacion: vista generada desde el canvas v3 (Investigacion.dc.html). Metadatos y datos estructurados aquí.
import Investigacion from "@/views/Investigacion";
import JsonLd from "@/components/ui/JsonLd";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Investigación aplicada en IA y movilidad | SOLYON Lab",
  description: "Laboratorio DeepTech con grupo en GrupLAC–MinCiencias (COL0248279). Investigamos para construir y publicamos lo que podemos demostrar.",
  path: "/investigacion",
});

const LD = [
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
      }
    ]
  }
];

export default function Page() {
  return (
    <>
      {LD.map((d, i) => <JsonLd key={i} data={d} />)}
      <Investigacion />
    </>
  );
}
