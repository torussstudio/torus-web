import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build checks can use a separate directory while the dev server is open.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  turbopack: { root: __dirname },
  outputFileTracingRoot: __dirname,
  allowedDevOrigins: ["192.168.29.146", "localhost", "127.0.0.1"],
  async headers() {
    return [{
      source: "/optimized/:path*",
      headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
    }];
  },
};

export default nextConfig;
