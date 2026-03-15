/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // basePath, assetPrefix 다 지우세요!
  trailingSlash: true,
};
export default nextConfig;