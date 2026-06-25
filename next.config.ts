import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a fully static site to `out/` for Cloudflare Pages.
  output: "export",
};

export default nextConfig;
