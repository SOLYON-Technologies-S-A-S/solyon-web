// src/app/layout.jsx

import { Archivo, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "@/styles/design/01-base.css";
import "@/styles/design/02-media.css";
import "@/styles/design/03-motion-components.css";
import "@/styles/design/04-footer.css";
import "@/styles/design/05-consent.css";
import Analytics from "@/components/analytics/Analytics";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"], display: "swap", variable: "--font-archivo" });
const plexSans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], display: "swap", variable: "--font-plex-sans" });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], display: "swap", variable: "--font-plex-mono" });

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://www.solyontechnologies.com";

const SITE_NAME = "SOLYON Technologies";

export const metadata = {
  metadataBase: new URL(SITE_URL),

  applicationName: SITE_NAME,

  title: {
    default:
      "SOLYON Technologies | DeepTech & Applied AI from Medellín",
    template:
      "%s | SOLYON Technologies",
  },

  description:
    "Laboratorio DeepTech desde Medellín que construye infraestructura tecnológica con inteligencia artificial aplicada, datos, software, automatización y sistemas de inteligencia operacional.",

  keywords: [
    "SOLYON Technologies",
    "SOLYON",
    "DeepTech",
    "Applied AI",
    "Inteligencia Artificial",
    "Operational Intelligence",
    "SOLYON OS",
    "Arcanum",
    "AI Agents",
    "Data Infrastructure",
    "Workflow Automation",
    "Operational Systems",
    "Institutional Software",
    "SOLYON Move",
    "Technology Medellín",
    "DeepTech Colombia",
    "Artificial Intelligence Colombia",
    "Medellín Innovation",
  ],

  authors: [
    {
      name: "SOLYON Technologies",
      url: SITE_URL,
    },
  ],

  creator:
    "SOLYON Technologies",

  publisher:
    "SOLYON Technologies",

  category:
    "Technology",

  openGraph: {
    type: "website",


    siteName:
      "SOLYON Technologies",

    title:
      "SOLYON Technologies | DeepTech & Applied AI from Medellín",

    description:
      "We build technology infrastructure with applied AI. Software, data and automation that turn real-world operations into intelligent systems.",

    locale:
      "es_CO",

    alternateLocale: [
      "en_US",
    ],

    images: [
      {
        url: "/og-cover.jpg",
        width: 1200,
        height: 630,
        alt:
          "SOLYON Technologies — DeepTech and Applied AI from Medellín",
      },
    ],
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "SOLYON Technologies | DeepTech & Applied AI",

    description:
      "Technology infrastructure, operational intelligence, data systems and applied AI built from Medellín.",

    images: [
      "/og-cover.jpg",
    ],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview":
        "large",
      "max-snippet":
        -1,
      "max-video-preview":
        -1,
    },
  },
};

export default function RootLayout({
  children,
}) {
  const organizationJsonLd = {
    "@context":
      "https://schema.org",

    "@type":
      "Organization",

    "@id":
      `${SITE_URL}/#organization`,

    name:
      "SOLYON Technologies",

    legalName:
      "SOLYON Technologies S.A.S. BIC",

    url:
      SITE_URL,

    logo:
      `${SITE_URL}/visual/solyon-symbol.png`,

    description:
      "DeepTech laboratory from Medellín building operational intelligence infrastructure through applied AI, data systems, software and automation.",

    foundingLocation: {
      "@type":
        "Place",

      name:
        "Medellín, Colombia",
    },

    address: {
      "@type":
        "PostalAddress",

      addressLocality:
        "Medellín",

      addressRegion:
        "Antioquia",

      addressCountry:
        "CO",
    },

    sameAs: [
      "https://www.linkedin.com/company/solyon-technologies/",
      "https://www.instagram.com/solyontechnologies/",
      "https://www.facebook.com/profile.php?id=61584609184819",
      "https://www.youtube.com/watch?v=0SyayXeU42g",
    ],

    knowsAbout: [
      "DeepTech",
      "Applied Artificial Intelligence",
      "Operational Intelligence",
      "Data Infrastructure",
      "Workflow Automation",
      "AI Agents",
      "Operational Systems",
      "Mobility Technology",
    ],
  };

  const websiteJsonLd = {
    "@context":
      "https://schema.org",

    "@type":
      "WebSite",

    "@id":
      `${SITE_URL}/#website`,

    url:
      SITE_URL,

    name:
      "SOLYON Technologies",

    publisher: {
      "@id":
        `${SITE_URL}/#organization`,
    },

    inLanguage: [
      "es-CO",
      "en-US",
    ],
  };

  return (
    <html
      lang="es"
      className={`${archivo.variable} ${plexSans.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              JSON.stringify(
                organizationJsonLd
              ),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              JSON.stringify(
                websiteJsonLd
              ),
          }}
        />
      </head>

      <body>
        <a className="skip" href="#contenido">Saltar al contenido</a>
        <Nav />
        <main id="contenido">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
