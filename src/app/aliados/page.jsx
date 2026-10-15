// Ruta /aliados: vista generada desde el canvas v3 (Aliados.dc.html). Metadatos y datos estructurados aquí.
import Aliados from "@/views/Aliados";
import JsonLd from "@/components/ui/JsonLd";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Aliados de SOLYON Technologies",
  description: "Ruta N, Toyota Mobility Foundation, Alcaldía de Medellín, academia y tecnología. Cada relación, con su fuente. Proponga una alianza.",
  path: "/aliados",
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
        "name": "Aliados",
        "item": "https://www.solyontechnologies.com/aliados"
      }
    ]
  }
];

export default function Page() {
  return (
    <>
      {LD.map((d, i) => <JsonLd key={i} data={d} />)}
      <Aliados />
    </>
  );
}
