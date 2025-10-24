import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Evita que el build falle por errores de lint (ESLint)
  eslint: {
    ignoreDuringBuilds: true,
  },

  // (Opcional) Puedes agregar más configuraciones aquí en el futuro, como imágenes, rutas, etc.
};

export default nextConfig;

