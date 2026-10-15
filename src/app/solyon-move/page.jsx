// Ruta /solyon-move: vista generada desde el canvas v3 (Move.dc.html). Metadatos y datos estructurados aquí.
import Move from "@/views/Move";
import JsonLd from "@/components/ui/JsonLd";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "SOLYON Move: rutas accesibles para movilidad reducida",
  description: "App gratuita para Android que calcula la ruta de menor esfuerzo y convierte cada reporte de barreras en datos para la ciudad. Validada con Ruta N.",
  path: "/solyon-move",
});

const LD = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SOLYON Move",
    "operatingSystem": "Android",
    "applicationCategory": "TravelApplication",
    "url": "https://play.google.com/store/apps/details?id=com.solyon.move",
    "description": "Asistente de movilidad con IA para personas con movilidad reducida: rutas de menor esfuerzo que evitan pendientes, escaleras y obstáculos, y reportes ciudadanos de barreras.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "COP"
    },
    "publisher": {
      "@id": "https://www.solyontechnologies.com/#organization"
    },
    "inLanguage": "es"
  },
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "SOLYON Move en el programa de Ruta N",
    "description": "Pieza de Ruta N sobre SOLYON Move: la app, el tablero institucional en tiempo real y el piloto con personas con movilidad reducida en Medellín. Con subtítulos.",
    "thumbnailUrl": "https://www.solyontechnologies.com/media/rutan-solyon-move-poster.jpg",
    "contentUrl": "https://www.solyontechnologies.com/media/rutan-solyon-move.mp4",
    "uploadDate": "2026-08-07T00:00:00-05:00",
    "duration": "PT1M8S",
    "publisher": {
      "@id": "https://www.solyontechnologies.com/#organization"
    },
    "inLanguage": "es"
  },
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "SOLYON Move, agosto de 2026",
    "description": "Una persona en silla de ruedas usa SOLYON Move para planificar su ruta en Medellín.",
    "thumbnailUrl": "https://www.solyontechnologies.com/media/move-agosto-poster.jpg",
    "contentUrl": "https://www.solyontechnologies.com/media/move-agosto.mp4",
    "uploadDate": "2026-08-06T00:00:00-05:00",
    "duration": "PT10S",
    "publisher": {
      "@id": "https://www.solyontechnologies.com/#organization"
    },
    "inLanguage": "es"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿SOLYON Move es gratis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí. La app es gratuita en Google Play."
        }
      },
      {
        "@type": "Question",
        "name": "¿Funciona en iPhone?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Por ahora está disponible solo para Android, en Google Play."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo calcula la ruta?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Arcanum, nuestro motor de IA determinista, suma pendientes, escaleras y barreras reportadas para medir el esfuerzo de cada camino según tu perfil, y elige el de menor esfuerzo."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué pasa con lo que reporto?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tu reporte llega en menos de un minuto al tablero de la entidad y ayuda a que otras personas eviten esa barrera."
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
        "name": "SOLYON Move",
        "item": "https://www.solyontechnologies.com/solyon-move"
      }
    ]
  }
];

export default function Page() {
  return (
    <>
      {LD.map((d, i) => <JsonLd key={i} data={d} />)}
      <Move />
    </>
  );
}
