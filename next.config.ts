import type { NextConfig } from "next";
import { NextConfig as Config } from "next";

const nextConfig: Config = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "mfkjjxderhqbsfsmtzql.supabase.co",
      },
    ],
  },
};

export default nextConfig;
