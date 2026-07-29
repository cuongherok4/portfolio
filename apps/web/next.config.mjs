/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NEXT_DIST_DIR ?? ".next",
  typedRoutes: true,
  experimental: {
    devtoolSegmentExplorer: false
  }
};

export default nextConfig;
