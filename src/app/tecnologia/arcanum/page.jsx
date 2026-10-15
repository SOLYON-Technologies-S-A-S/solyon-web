// Ruta /tecnologia/arcanum: vista generada desde el canvas v3 (Arcanum.dc.html). Metadatos y datos estructurados aquí.
import Arcanum from "@/views/Arcanum";
import JsonLd from "@/components/ui/JsonLd";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Arcanum: motor de IA determinista | SOLYON",
  description: "Arcanum no adivina: calcula. Memoria jerárquica en tres niveles y reglas verificables para decisiones operativas. Benchmark interno, no auditado.",
  path: "/tecnologia/arcanum",
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
        "name": "Arcanum",
        "item": "https://www.solyontechnologies.com/tecnologia/arcanum"
      }
    ]
  }
];

export default function Page() {
  return (
    <>
      {LD.map((d, i) => <JsonLd key={i} data={d} />)}
      <Arcanum />
    </>
  );
}
