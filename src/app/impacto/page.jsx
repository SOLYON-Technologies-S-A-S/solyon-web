// Ruta /impacto: vista generada desde el canvas v3 (Impacto.dc.html). Metadatos y datos estructurados aquí.
import Impacto from "@/views/Impacto";
import JsonLd from "@/components/ui/JsonLd";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Impacto medible del piloto SOLYON Move | SOLYON",
  description: "Lo que cambió en Manrique y Aranjuez con el piloto SOLYON Move: 150 personas validaron la app y 378 barreras quedaron mapeadas con foto.",
  path: "/impacto",
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
        "name": "Impacto",
        "item": "https://www.solyontechnologies.com/impacto"
      }
    ]
  }
];

export default function Page() {
  return (
    <>
      {LD.map((d, i) => <JsonLd key={i} data={d} />)}
      <Impacto />
    </>
  );
}
