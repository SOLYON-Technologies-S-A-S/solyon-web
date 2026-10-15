// Layout raíz. Cada página trae su propia navegación y pie (componentes v3 generados desde el canvas),
// porque el botón principal del menú cambia según la página.
import "@/styles/v3.css";
import "@/styles/site.css";
import Analytics from "@/components/analytics/Analytics";
import JsonLd from "@/components/ui/JsonLd";
import { SITE_URL } from "@/lib/seo";

const TITLE = "SOLYON Technologies: IA determinista desde Medellín";
const DESCRIPTION =
  "Infraestructura de inteligencia operacional. Probada en la calle con SOLYON Move y en empresas con SOLYON OS. Laboratorio DeepTech en Medellín.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "SOLYON Technologies",
  title: { default: TITLE, template: "%s" },
  description: DESCRIPTION,
  authors: [{ name: "SOLYON Technologies S.A.S. BIC", url: SITE_URL }],
  creator: "SOLYON Technologies",
  publisher: "SOLYON Technologies",
  openGraph: {
    type: "website",
    siteName: "SOLYON Technologies",
    title: TITLE,
    description: DESCRIPTION,
    locale: "es_CO",
    images: [{ url: "/og-cover.jpg", width: 1200, height: 630, alt: "SOLYON Technologies, laboratorio DeepTech en Medellín" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/og-cover.jpg"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  icons: { icon: "/favicon.ico", apple: "/media/simbolo.png" },
};

export const viewport = { themeColor: "#000000" };

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "SOLYON Technologies",
  legalName: "SOLYON Technologies S.A.S. BIC",
  taxID: "902028596-1",
  url: SITE_URL,
  logo: `${SITE_URL}/media/simbolo.png`,
  description:
    "Laboratorio DeepTech de Medellín que aplica inteligencia artificial a problemas físicos: calles, operaciones y riesgos reales. Creador de SOLYON OS, Arcanum y SOLYON Move.",
  email: "sergio@solyontechnologies.com",
  telephone: "+57 314 790 3517",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Carrera 65 # 1 sur 21",
    addressLocality: "Medellín",
    addressRegion: "Antioquia",
    addressCountry: "CO",
  },
  founder: { "@type": "Person", name: "Sergio Andrés Murillo Estrada", jobTitle: "Fundador y CEO" },
  knowsAbout: ["Inteligencia artificial determinista", "Inteligencia operacional", "Movilidad accesible", "Datos territoriales", "Agentes de IA con supervisión humana"],
  sameAs: [
    "https://www.linkedin.com/company/solyon-technologies/",
    "https://www.instagram.com/solyontechnologies/",
    "https://www.facebook.com/profile.php?id=61584609184819",
    "https://www.youtube.com/watch?v=0SyayXeU42g",
    "https://scienti.minciencias.gov.co/gruplac/jsp/visualiza/visualizagr.jsp?nro=00000000025028",
  ],
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "SOLYON Technologies",
  inLanguage: "es-CO",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-CO">
      <head>
        <link rel="preload" href="/fonts/sora-latin-wght-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <JsonLd data={organization} />
        <JsonLd data={website} />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
