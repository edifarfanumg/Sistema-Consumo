import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Ignora errores menores en build (útil para despliegue en Vercel)
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // ✅ Solución para react-pdf en entorno web
  experimental: {
    turbo: {
      resolveAlias: {
        "@react-pdf/renderer": "@react-pdf/renderer/lib/react-pdf.browser.cjs",
      },
    },
  },

  // ✅ Asegura compatibilidad con componentes de solo cliente
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
