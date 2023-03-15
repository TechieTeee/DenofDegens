/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
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
