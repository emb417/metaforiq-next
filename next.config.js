export default {
  output: "standalone",
  // Expose the version number to the client-side bundle.
  env: {
    APP_VERSION: process.env.npm_package_version,
  },
};
