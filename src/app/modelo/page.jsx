// Ruta /modelo: vista generada desde el canvas v3 (Modelo.dc.html). Metadatos y datos estructurados aquí.
import Modelo from "@/views/Modelo";
import JsonLd from "@/components/ui/JsonLd";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Modelo de negocio: implementación y licencia | SOLYON",
  description: "Construimos componentes una vez y los licenciamos muchas veces. Así se contrata SOLYON según quién compra: entidades, empresas y boutiques.",
  path: "/modelo",
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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Modelo de negocio",
        "item": "https://www.solyontechnologies.com/modelo"
      }
    ]
  }
];

export default function Page() {
  return (
    <>
      {LD.map((d, i) => <JsonLd key={i} data={d} />)}
      <Modelo />
    </>
  );
}
