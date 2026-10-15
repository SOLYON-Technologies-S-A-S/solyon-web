// Ruta /nosotros: vista generada desde el canvas v3 (Nosotros.dc.html). Metadatos y datos estructurados aquí.
import Nosotros from "@/views/Nosotros";
import JsonLd from "@/components/ui/JsonLd";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Nosotros: laboratorio DeepTech en Medellín | SOLYON",
  description: "Aplicamos inteligencia artificial a problemas físicos: calles, operaciones y riesgos reales. Conoce al equipo y los hitos verificables.",
  path: "/nosotros",
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
        "name": "Nosotros",
        "item": "https://www.solyontechnologies.com/nosotros"
      }
    ]
  }
];

export default function Page() {
  return (
    <>
      {LD.map((d, i) => <JsonLd key={i} data={d} />)}
      <Nosotros />
    </>
  );
}
