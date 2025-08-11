import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/post/${id}`);
  if (!res.ok) {
    throw new Error("Post not found");
  }
  return await res.json();
}

const BlogPost = async ({ params }) => {
  let data;
  try {
    data = await getData(params.id);
  } catch (error) {
    notFound();
  }

  return (
    <div className="p-6 space-y-6 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className="flex-1 space-y-3">
          <h1 className="text-3xl font-bold">{data.title}</h1>
          <p className="text-gray-700 mb-4">{data.desc}</p>
          <p className="text-sm text-gray-500 italic">By {data.username}</p>
        </div>
        <div className="relative w-full md:w-1/3 h-48 md:h-64 rounded-lg overflow-hidden">
          <Image
            src={data.img || "/fallback-image.jpg"}
            alt={data.title || "Blog post image"}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      <article className="text-gray-800 leading-relaxed prose max-w-none">
        {/* Sample static content replaced by your actual post content */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec consectetur interdum,
          nisl nisi aliquet nisl, eget aliquam nisl nisi euismod nisl.
        </p>
      </article>
    </div>
  );
};

export default BlogPost;
