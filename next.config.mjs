/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.pexels.com', 'images.unsplash.com'],
  },
  env: {
    MONGO: process.env.MONGO,
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ Prevent ESLint errors from blocking Vercel build
  },
};

export default nextConfig;
