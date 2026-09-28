import type { NextConfig } from "next";

// Empty for username.github.io; /repository-name for a project site.
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
};
export default nextConfig;
