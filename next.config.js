/** @type {import('next').NextConfig} */

// Redirecciones 301 desde las rutas del sitio anterior.
const OLD_ROUTES = {
  "/technology": "/tecnologia",
  "/impact": "/impacto",
  "/about": "/nosotros",
  "/ecosystem": "/tecnologia",
  "/contact": "/contacto",
  "/investors": "/inversionistas",
  "/inversion": "/inversionistas",
  "/empresas": "/soluciones/empresas",
  "/gobierno": "/soluciones/gobierno",
  "/retail": "/soluciones/retail",
  "/move": "/solyon-move",
  "/privacy": "/politica-de-datos",
  "/store": "/",
};

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return Object.entries(OLD_ROUTES).map(([source, destination]) => ({ source, destination, statusCode: 301 }));
  },
};
module.exports = nextConfig;
