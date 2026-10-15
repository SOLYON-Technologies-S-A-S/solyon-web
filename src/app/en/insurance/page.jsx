// Ruta /en/insurance: vista generada desde el canvas v3 (Insurance.dc.html). Metadatos y datos estructurados aquí.
import Insurance from "@/views/Insurance";
import JsonLd from "@/components/ui/JsonLd";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Insurance operations and DOT compliance | SOLYON",
  description: "Operational intelligence for commercial insurance and trucking in the US. Every account keeps its own memory. Apply as a design partner.",
  path: "/en/insurance",
  lang: "en",
});

const LD = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.solyontechnologies.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Companies",
        "item": "https://www.solyontechnologies.com/soluciones/empresas"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Insurance Operations",
        "item": "https://www.solyontechnologies.com/en/insurance"
      }
    ]
  }
];

export default function Page() {
  return (
    <>
      {LD.map((d, i) => <JsonLd key={i} data={d} />)}
      <div lang="en"><Insurance /></div>
    </>
  );
}
