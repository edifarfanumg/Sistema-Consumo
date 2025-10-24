import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    turbo: {
      resolveAlias: {
        "@react-pdf/renderer": "@react-pdf/renderer/lib/react-pdf.browser.cjs",
      },
    },
  },
};

export default nextConfig;
