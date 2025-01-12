/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.discordapp.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "virtualpinballspreadsheet.github.io",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "contentcafe2.btol.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
