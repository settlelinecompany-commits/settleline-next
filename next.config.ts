import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/services/residency-tax-investment-planning',
        destination: '/services/return-to-india-financial-planning',
        permanent: true, // 301 redirect for SEO
      },
      {
        source: '/services/residency-tax-investment-planning/',
        destination: '/services/return-to-india-financial-planning/',
        permanent: true, // 301 redirect for SEO
      },
    ];
  },
};

export default nextConfig;
