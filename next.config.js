const withNextIntl = require("next-intl/plugin")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.aricioglu.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "djagkyjgxnsxmtowtczk.supabase.co",
        port: "",
      },
    ],
  },
};

module.exports = withNextIntl(nextConfig);
