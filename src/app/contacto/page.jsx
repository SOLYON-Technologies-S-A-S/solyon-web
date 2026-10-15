// Ruta /contacto: vista generada desde el canvas v3 (Contacto.dc.html). Metadatos y datos estructurados aquí.
import Contacto from "@/views/Contacto";
import JsonLd from "@/components/ui/JsonLd";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Contacto | SOLYON Technologies",
  description: "Elige tu perfil, entidad pública, empresa, boutique o prensa, y recibe lo que necesitas para decidir. Respondemos en 3 días hábiles.",
  path: "/contacto",
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
        "name": "Contacto",
        "item": "https://www.solyontechnologies.com/contacto"
      }
    ]
  }
];

export default function Page() {
  return (
    <>
      {LD.map((d, i) => <JsonLd key={i} data={d} />)}
      <Contacto />
    </>
  );
}
