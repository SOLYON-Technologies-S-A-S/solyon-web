// Ruta /publicaciones: vista generada desde el canvas v3 (Publicaciones.dc.html). Metadatos y datos estructurados aquí.
import Publicaciones from "@/views/Publicaciones";
import JsonLd from "@/components/ui/JsonLd";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Publicaciones y datos del laboratorio | SOLYON",
  description: "Notas técnicas, reportes y comunicados oficiales sobre SOLYON Move y Arcanum. Marcamos qué está publicado y qué está en preparación.",
  path: "/publicaciones",
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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Publicaciones",
        "item": "https://www.solyontechnologies.com/publicaciones"
      }
    ]
  }
];

export default function Page() {
  return (
    <>
      {LD.map((d, i) => <JsonLd key={i} data={d} />)}
      <Publicaciones />
    </>
  );
}
