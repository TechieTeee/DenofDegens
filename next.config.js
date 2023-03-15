/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["www.cdn3d.iconscout.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn3d.iconscout.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;

