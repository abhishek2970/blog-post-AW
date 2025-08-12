export const dynamic = "force-dynamic";

import React from "react";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  // ✅ Use production URL on Vercel, local URL in dev
  const baseUrl =
    process.env.VERCEL_ENV === "production"
      ? "https://blog-post-aw-ib32.vercel.app"
      : "http://localhost:3000";

  try {
    const res = await fetch(`${baseUrl}/api/post`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch posts: ${res.status} ${res.statusText}`);
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
}

const Blog = async () => {
  let data;

  try {
    data = await getData();
  } catch {
    return (
      <div className="max-w-5xl mx-auto p-6 text-center text-red-600">
        ❌ Failed to load blog posts. Please try again later.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6 px-6 py-8">
      {data.map((item) => (
        <Link
          key={item._id}
          href={`/blog/${item._id}`}
          className="flex items-start gap-6 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          aria-label={`Read more about ${item.title}`}
        >
          <div className="w-48 h-40 relative flex-shrink-0">
            <Image
              src={
                item.img && item.img.startsWith("http")
                  ? item.img
                  : "/fallback-image.jpg"
              }
              alt={item.title || "Blog post image"}
              fill
              className="rounded-md object-cover"
              sizes="200px"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-1">{item.title}</h2>
            <p className="text-gray-600 line-clamp-3">{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
