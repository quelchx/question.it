module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    // if having an error remove the www. and test
    domains: ["www.gravatar.com", "localhost"],
  },
  reactStrictMode: true,
};
