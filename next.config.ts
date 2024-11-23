import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['farmerskonnect.org', 'static.wixstatic.com', 'firebasestorage.googleapis.com', 'canolainfo.org', 'www.capitalfm.co.ke', 'canadianfoodfocus.org', 'learncanola.com'], // Add all external image domains here
  },
};

export default nextConfig;
