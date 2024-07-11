/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "panel.theglobalproperty.co.uk",
        port: "",
        pathname: "/uploads/**",
      },
    ],
  },
};
export default nextConfig;
