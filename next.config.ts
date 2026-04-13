import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 80, 85, 90, 92, 95],
    deviceSizes: [640, 750, 828, 1080, 1200, 1280, 1536, 1920, 2048, 2560, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 640, 768],
  },
};

export default nextConfig;
