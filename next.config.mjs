/** @type {import('next').NextConfig} */
const nextConfig = {
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
