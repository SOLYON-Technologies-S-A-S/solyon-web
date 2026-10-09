export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.solyontechnologies.com").replace(/\/$/, "");

const LANGUAGE_PAIRS = {
  "/": { es: "/", en: "/en/insurance" },
  "/en/insurance": { es: "/", en: "/en/insurance" },
};

const abs = (path) => `${SITE_URL}${path === "/" ? "" : path}`;

// Metadatos por página: título propio, descripción, canonical absoluto a sí misma y Open Graph.
export function pageMeta({ title, description, path, lang = "es", image = "/og-cover.jpg" }) {
  const pair = LANGUAGE_PAIRS[path];
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: abs(path) || SITE_URL,
      ...(pair && { languages: { "es-CO": abs(pair.es) || SITE_URL, "en-US": abs(pair.en) } }),
    },
    openGraph: {
      type: "website",
      url: abs(path) || SITE_URL,
      siteName: "SOLYON Technologies",
      title,
      description,
      locale: lang === "en" ? "en_US" : "es_CO",
      images: [image === "/og-cover.jpg" ? { url: image, width: 1200, height: 630, alt: title } : { url: image, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
