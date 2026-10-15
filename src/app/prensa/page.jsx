// Ruta /prensa: vista generada desde el canvas v3 (Prensa.dc.html). Metadatos y datos estructurados aquí.
import Prensa from "@/views/Prensa";
import JsonLd from "@/components/ui/JsonLd";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Sala de prensa de SOLYON Technologies",
  description: "Notas oficiales de la Alcaldía de Medellín, Ruta N y Toyota Mobility Foundation, kit de marca y contacto directo para periodistas.",
  path: "/prensa",
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
        "name": "Prensa",
        "item": "https://www.solyontechnologies.com/prensa"
      }
    ]
  }
];

export default function Page() {
  return (
    <>
      {LD.map((d, i) => <JsonLd key={i} data={d} />)}
      <Prensa />
    </>
  );
}
