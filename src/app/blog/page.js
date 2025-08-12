import React from "react";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  // ✅ Use relative URL — works in local & production (Vercel)
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ""}/api/post`, {
    cache: "no-store", // Always get fresh data
  });

  if (!res.ok) {
    throw new Error("Cannot fetch posts");
  }

  return res.json();
}

const Blog = async () => {
  let data;

  try {
    data = await getData();
  } catch (err) {
    // Optionally show a friendly error state
    return (
      <div className="max-w-5xl mx-auto p-6 text-center text-red-600">
        Failed to load blog posts.
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
              src={item.img || "/fallback-image.jpg"} // ✅ fallback image
              alt={item.title || "Blog post image"}
              fill
              className="rounded-md object-cover"
              sizes="200px"
              priority={false}
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
