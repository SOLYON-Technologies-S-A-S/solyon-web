// Ruta /: vista generada desde el canvas v3 (Main.dc.html). Metadatos y datos estructurados aquí.
import Main from "@/views/Main";
import JsonLd from "@/components/ui/JsonLd";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "SOLYON Technologies: IA determinista desde Medellín",
  description: "Infraestructura de inteligencia operacional. Probada en la calle con SOLYON Move y en empresas con SOLYON OS. Laboratorio DeepTech en Medellín.",
  path: "/",
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
    "@type": "SoftwareApplication",
    "name": "EL-VÍA DOT Express",
    "operatingSystem": "Android",
    "applicationCategory": "EducationalApplication",
    "url": "https://play.google.com/store/apps/details?id=com.solyon.elvia",
    "description": "Entrenamiento con IA para que conductores latinos en EE. UU. se preparen para las inspecciones del DOT.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Modo gratuito; plan PRO dentro de la app"
    },
    "publisher": {
      "@id": "https://www.solyontechnologies.com/#organization"
    }
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
          "text": "Es la infraestructura de inteligencia operacional de SOLYON. Une cuatro capas: conocimiento operacional, datos, sistemas y agentes de IA con supervisión humana, con Arcanum como motor. Lo que se construye para un cliente se reutiliza en el siguiente, por eso cada implementación es más rápida que la anterior. Ver la tecnología"
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué es Arcanum y en qué se diferencia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Arcanum es el motor de IA propio y determinista de SOLYON: con los mismos datos da la misma respuesta. Organiza la memoria en tres niveles (general, operación y caso) para responder desde el contexto correcto. En SOLYON Move calcula el coste total de esfuerzo de cada ruta con las barreras reportadas y elige la de mínimo esfuerzo. Conocer Arcanum"
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué productos tiene publicados?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dos apps en Google Play. SOLYON Move, gratis, es un asistente de movilidad con IA para personas con movilidad reducida: traza rutas que evitan pendientes, escaleras y obstáculos y permite reportar barreras en vías y buses. EL-VÍA, freemium, entrena con IA a conductores latinos en EE. UU. para las inspecciones del DOT. A empresas, SOLYON licencia SOLYON OS."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué validó el piloto de Medellín?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Entre febrero y agosto de 2026, dentro del programa Movilidad para Todos de Ruta N y Toyota Mobility Foundation, 150 personas con movilidad reducida de Manrique y Aranjuez validaron SOLYON Move, según Ruta N. El registro interno del piloto cerró con 184 usuarios activos y 378 barreras georreferenciadas con foto. Ver el caso"
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo se contrata a SOLYON?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Entidades públicas: ficha técnica para el estudio de mercado, software registrado y grupo de investigación; la modalidad la define la entidad. Empresas: diagnóstico sin costo, piloto pagado con entregables y licencia de SOLYON OS. Boutiques: diagnóstico de 30 minutos e implementación en 21 días. Hablar con el equipo"
        }
      }
    ]
  }
];

export default function Page() {
  return (
    <>
      {LD.map((d, i) => <JsonLd key={i} data={d} />)}
      <Main />
    </>
  );
}
