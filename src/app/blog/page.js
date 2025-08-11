import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

async function getData() {
  const res = await fetch('http://localhost:3000/api/post');
  if (!res.ok) {
    throw new Error('Cannot fetch posts');
  }
  return res.json();
}

const Blog = async () => {
  const data = await getData();

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
              src={item.img}
              alt={item.title}
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
