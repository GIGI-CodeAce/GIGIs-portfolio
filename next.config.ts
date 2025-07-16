import type { NextConfig } from "next";
import { NextConfig as Config } from "next";

const nextConfig: Config = {
  output: "export",
  images: {
    domains: [
      "raw.githubusercontent.com",
      "mfkjjxderhqbsfsmtzql.supabase.co",
    ],
  },
};

export default nextConfig;

