// Ruta /investigacion/propiedad-intelectual: vista generada desde el canvas v3 (PI.dc.html). Metadatos y datos estructurados aquí.
import PI from "@/views/PI";
import JsonLd from "@/components/ui/JsonLd";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Propiedad intelectual de SOLYON Technologies",
  description: "Tecnología propia, 100% de SOLYON. SOLYON Move registrado ante la DNDA (13-110-56). Cada cliente accede mediante licencia de uso.",
  path: "/investigacion/propiedad-intelectual",
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
        "name": "Propiedad intelectual",
        "item": "https://www.solyontechnologies.com/investigacion/propiedad-intelectual"
      }
    ]
  }
];

export default function Page() {
  return (
    <>
      {LD.map((d, i) => <JsonLd key={i} data={d} />)}
      <PI />
    </>
  );
}
