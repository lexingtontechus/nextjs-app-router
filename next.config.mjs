/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
  ],
  experimental: {
    webpackMemoryOptimizations: true,
    optimizePackageImports: [
    ],
  },
};

//const withBundleAnalyzer = require("@next/bundle-analyzer")({
//  enabled: process.env.ANALYZE === "true",
//});

//module.exports = withBundleAnalyzer(nextConfig);

export default nextConfig;
