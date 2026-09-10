import type { NextConfig } from "next";
import { siteUrl } from "./app/lib/site-url";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "notagency.io" }],
        destination: `${siteUrl}/:path*`,
        permanent: true,
      },
    ];
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
