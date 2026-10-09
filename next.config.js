/** @type {import('next').NextConfig} */

// Redirecciones 301 desde las rutas del sitio anterior.
const OLD_ROUTES = {
  "/technology": "/tecnologia",
  "/impact": "/impacto",
  "/about": "/nosotros",
  "/ecosystem": "/tecnologia",
  "/contact": "/contacto",
  "/investors": "/investigacion",
  "/store": "/",
};

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return Object.entries(OLD_ROUTES).map(([source, destination]) => ({ source, destination, statusCode: 301 }));
  },
};
module.exports = nextConfig;
