// Ruta /soluciones/empresas: vista generada desde el canvas v3 (Empresas.dc.html). Metadatos y datos estructurados aquí.
import Empresas from "@/views/Empresas";
import JsonLd from "@/components/ui/JsonLd";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "SOLYON OS: inteligencia operacional para empresas",
  description: "Convierte el criterio de tu equipo en datos, sistemas y agentes de IA supervisados. Diagnóstico sin costo y piloto pagado contra entregables.",
  path: "/soluciones/empresas",
});

const LD = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SOLYON OS para empresas",
    "description": "Infraestructura de inteligencia operacional: conocimiento, datos, sistemas y agentes de IA supervisados, con diagnóstico sin costo, piloto pagado y licencia.",
    "provider": {
      "@id": "https://www.solyontechnologies.com/#organization"
    },
    "areaServed": "CO",
    "url": "https://www.solyontechnologies.com/soluciones/empresas"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Qué es SOLYON OS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Es infraestructura de inteligencia operacional. Une cuatro capas: conocimiento operacional, datos, sistemas y agentes de IA con supervisión humana, con Arcanum como motor. Lo que se construye para un cliente se reutiliza en el siguiente."
        }
      },
      {
        "@type": "Question",
        "name": "¿Reemplaza el software que ya uso?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No necesariamente. Empezamos por un flujo concreto y lo conectamos con tus herramientas actuales. Reemplazamos solo lo que el diagnóstico muestre que conviene."
        }
      },
      {
        "@type": "Question",
        "name": "¿La IA puede inventar respuestas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Arcanum es determinista: con los mismos datos da la misma respuesta, y consulta solo el nivel de memoria que necesita cada pregunta. Las decisiones con consecuencias las toma una persona."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto cuesta?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El diagnóstico no tiene costo. El piloto se cotiza por alcance, con entregables, plazo y SLA. La licencia de SOLYON OS es mensual o anual y llega cuando los resultados la justifican."
        }
      },
      {
        "@type": "Question",
        "name": "¿De quién son los datos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tuyos. Puedes exportarlos cuando quieras y, si terminas el servicio, te los entregamos y los borramos de nuestros sistemas en 30 días. SOLYON conserva la tecnología."
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
        "name": "Empresas",
        "item": "https://www.solyontechnologies.com/soluciones/empresas"
      }
    ]
  }
];

export default function Page() {
  return (
    <>
      {LD.map((d, i) => <JsonLd key={i} data={d} />)}
      <Empresas />
    </>
  );
}
