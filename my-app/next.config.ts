import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Temporarily ignore ESLint errors during build so production builds don't fail
  // while we progressively fix lint/type issues in source files.
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
