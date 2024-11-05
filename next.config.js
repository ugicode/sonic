const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
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

      }
    ],
  },
};

module.exports = withNextIntl(nextConfig);
