/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["www.dropbox.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dropbox.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;

