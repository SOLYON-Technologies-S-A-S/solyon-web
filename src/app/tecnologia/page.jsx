// Ruta /tecnologia: vista generada desde el canvas v3 (Tecnologia.dc.html). Metadatos y datos estructurados aquí.
import Tecnologia from "@/views/Tecnologia";
import JsonLd from "@/components/ui/JsonLd";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "SOLYON OS: infraestructura de inteligencia operacional",
  description: "Cuatro capas, conocimiento, datos, sistemas y agentes, con Arcanum como motor. Lo que construimos para un cliente se reutiliza en el siguiente.",
  path: "/tecnologia",
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
        "name": "Tecnología",
        "item": "https://www.solyontechnologies.com/tecnologia"
      }
    ]
  }
];

export default function Page() {
  return (
    <>
      {LD.map((d, i) => <JsonLd key={i} data={d} />)}
      <Tecnologia />
    </>
  );
}
