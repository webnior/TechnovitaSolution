/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: [
      'blog.technovitasolution.com',
      'technovitasolution.com',
      'www.technovitasolution.com',
      'secure.gravatar.com'
    ],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: false
  },
  // Enable optimized images
  optimizeImages: true,
  // Enable image optimization
  optimizeImagesInDev: true
}

module.exports = nextConfig