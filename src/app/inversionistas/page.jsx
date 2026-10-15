// Ruta /inversionistas: vista generada desde el canvas v3 (Inversion.dc.html). Metadatos y datos estructurados aquí.
import Inversion from "@/views/Inversion";
import JsonLd from "@/components/ui/JsonLd";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Inversionistas | SOLYON Technologies",
  description: "Infraestructura de IA aplicada, probada en la calle. Tesis, tracción con fuente y memo de inversión de SOLYON Technologies.",
  path: "/inversionistas",
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
        "name": "Inversionistas",
        "item": "https://www.solyontechnologies.com/inversionistas"
      }
    ]
  }
];

export default function Page() {
  return (
    <>
      {LD.map((d, i) => <JsonLd key={i} data={d} />)}
      <Inversion />
    </>
  );
}
