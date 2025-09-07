/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
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
  rewrites: async () => {
    if (process.env.NEXT_PUBLIC_BUILD_ENV) {
      return {
        fallback: [
          {
            source: "/api/:path*",
            destination: "http://localhost:8080",
          },
        ],
      };
    }
    return {
      fallback: [
        {
          source: "/api/:path*",
          destination: "http://metaforiq-node:8008/:path*",
        },
      ],
    };
  },
};

export default nextConfig;
