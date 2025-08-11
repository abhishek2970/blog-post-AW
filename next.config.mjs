/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.pexels.com', 'images.unsplash.com'],
  },
  env: {
    MONGO: process.env.MONGO,
  },
};

export default nextConfig;
