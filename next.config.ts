import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build checks can use a separate directory while the dev server is open.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  // Use build-generated static responsive variants instead of Vercel's on-demand
  // image optimizer. This avoids the monthly cache-write limit and serves the
  // correct image dimensions directly from the CDN.
  images: {
    loader: "custom",
    loaderFile: "./lib/imageLoader.ts",
    deviceSizes: [480, 640, 960, 1280, 1920],
    imageSizes: [256],
  },
  turbopack: { root: __dirname },
  outputFileTracingRoot: __dirname,
  allowedDevOrigins: ["192.168.29.146", "localhost", "127.0.0.1"],
  async headers() {
    const imageCacheHeaders = [
      { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
    ];
    return [
      { source: "/optimized/:path*", headers: imageCacheHeaders },
      { source: "/responsive/:path*", headers: imageCacheHeaders },
    ];
  },
};

export default nextConfig;
