import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    localPatterns: [
      { pathname: "/images/**" },
      { pathname: "/projects/**" },
      { pathname: "/certificates/**" },
      { pathname: "/Activities/**" },
    ],
  },
};

export default nextConfig;
