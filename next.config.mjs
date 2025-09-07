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
    // Check for the LIBOWSKI_API_URL which is set as a build argument
    // in the Dockerfile. If it's a placeholder, we are in the build phase.
    if (process.env.LIBOWSKI_API_URL === "http://localhost:8080") {
      return {
        fallback: [
          {
            source: "/api/:path*",
            destination: "http://localhost:8080",
          },
        ],
      };
    }
    // At runtime, use the correct API service name.
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
