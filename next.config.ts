import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/OnlineImages/:path*',
        destination: 'http://localhost:3002/OnlineImages/:path*',
      },
    ];
  },
  reactStrictMode: false,
};

export default nextConfig;
