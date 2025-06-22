/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',             // ⬅️ 导出静态页面
  trailingSlash: true,          // ⬅️ 所有路径都带 /
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,          // ⬅️ 静态导出时禁用 Image 优化
  },
}

export default nextConfig
