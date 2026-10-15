// Ruta /soluciones/gobierno: vista generada desde el canvas v3 (Gobierno.dc.html). Metadatos y datos estructurados aquí.
import Gobierno from "@/views/Gobierno";
import JsonLd from "@/components/ui/JsonLd";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Tablero de control de barreras para municipios | SOLYON",
  description: "Un tablero georreferenciado en vivo para controlar las barreras de su territorio, con un usuario por secretaría. Solicite la ficha técnica.",
  path: "/soluciones/gobierno",
});

const LD = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Tablero de control de barreras de accesibilidad",
    "description": "Tablero georreferenciado en vivo para que las secretarías de un municipio gestionen en tiempo real las barreras reportadas por la ciudadanía, con un usuario por secretaría.",
    "provider": {
      "@id": "https://www.solyontechnologies.com/#organization"
    },
    "areaServed": "CO",
    "url": "https://www.solyontechnologies.com/soluciones/gobierno",
    "audience": {
      "@type": "Audience",
      "audienceType": "Entidades públicas"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cómo puede contratarnos una alcaldía?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La modalidad la define la entidad. Entregamos la ficha técnica para el estudio de mercado, el registro del software y la certificación del grupo de investigación para el componente de ciencia, tecnología e innovación."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué recibe la entidad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Un tablero georreferenciado en vivo para controlar las barreras de su territorio: cada reporte con foto, tipo, fecha y estado, y su gestión de Pendiente a Solucionado en tiempo real. Los datos personales se anonimizan según la Ley 1581 de 2012."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cada secretaría ve todo el tablero?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Cada secretaría contratante tiene su propio usuario y ve solo los reportes que le corresponden, por ejemplo Infraestructura los huecos y andenes, y Movilidad los vehículos sobre el andén."
        }
      },
      {
        "@type": "Question",
        "name": "¿Sirve para un municipio distinto a Medellín?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí. El motor de esfuerzo de Arcanum se calibra con la topografía de cada territorio y el levantamiento se hace con la comunidad local, incluidas zonas rurales y descentralizadas."
        }
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
        "name": "Gobierno y territorio",
        "item": "https://www.solyontechnologies.com/soluciones/gobierno"
      }
    ]
  }
];

export default function Page() {
  return (
    <>
      {LD.map((d, i) => <JsonLd key={i} data={d} />)}
      <Gobierno />
    </>
  );
}
