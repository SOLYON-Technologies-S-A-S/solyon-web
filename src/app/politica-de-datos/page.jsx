// Ruta /politica-de-datos: vista generada desde el canvas v3 (Politica.dc.html). Metadatos y datos estructurados aquí.
import Politica from "@/views/Politica";
import JsonLd from "@/components/ui/JsonLd";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Política de tratamiento de datos | SOLYON Technologies",
  description: "Cómo SOLYON Technologies S.A.S. BIC recoge, usa y protege los datos personales según la Ley 1581 de 2012, y cómo ejercer sus derechos.",
  path: "/politica-de-datos",
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
        "name": "Política de tratamiento de datos",
        "item": "https://www.solyontechnologies.com/politica-de-datos"
      }
    ]
  }
];

export default function Page() {
  return (
    <>
      {LD.map((d, i) => <JsonLd key={i} data={d} />)}
      <Politica />
    </>
  );
}
