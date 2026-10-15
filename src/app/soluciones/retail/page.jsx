// Ruta /soluciones/retail: vista generada desde el canvas v3 (Retail.dc.html). Metadatos y datos estructurados aquí.
import Retail from "@/views/Retail";
import JsonLd from "@/components/ui/JsonLd";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Ventas sin sobreventa para boutiques | SOLYON",
  description: "Avisa primero al cliente correcto, reserva el par y cobra con Wompi. En vivo en 21 días. Activación desde COP 8,6 millones. Postula tu boutique.",
  path: "/soluciones/retail",
});

const LD = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SOLYON para boutiques de alto ticket",
    "description": "Clientes, lanzamientos privados, reservas y cobros en un solo sistema, en vivo en 21 días.",
    "provider": {
      "@id": "https://www.solyontechnologies.com/#organization"
    },
    "areaServed": "CO",
    "url": "https://www.solyontechnologies.com/soluciones/retail",
    "offers": [
      {
        "@type": "Offer",
        "name": "Activación",
        "price": "8600000",
        "priceCurrency": "COP"
      },
      {
        "@type": "Offer",
        "name": "Suscripción mensual desde el mes 2",
        "price": "1200000",
        "priceCurrency": "COP"
      }
    ]
  },
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
        "name": "Retail de alto ticket",
        "item": "https://www.solyontechnologies.com/soluciones/retail"
      }
    ]
  }
];

export default function Page() {
  return (
    <>
      {LD.map((d, i) => <JsonLd key={i} data={d} />)}
      <Retail />
    </>
  );
}
