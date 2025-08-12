/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "images.pexels.com",
      "blog-post-aw-ib32.vercel.app" // ✅ your production domain
    ],
  },
  env: {
    MONGO: process.env.MONGO,
    NEXT_PUBLIC_SITE_URL:
      process.env.NEXT_PUBLIC_SITE_URL || "https://blog-post-aw-ib32.vercel.app",
  },
};

export default nextConfig; // ✅ ESM export
