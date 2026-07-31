import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Source photos top out around 1200-2600px wide; Next's default
    // deviceSizes go up to 3840 and use the largest as the fallback `src`
    // for fill-mode images, which is unnecessary weight for images that
    // never actually need to render that large.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
