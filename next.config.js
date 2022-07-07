const basePath = process.env.NODE_ENV === "production" ? "/blogpost" : "";

module.exports = {
  basePath: basePath,
  assetPrefix: `${basePath}/`,
  env: {
    basePath,
  },
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};
