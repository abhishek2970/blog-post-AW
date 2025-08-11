import Button from "@/components/Button";
import Image from "next/image";
import { items } from "./data";
import { notFound } from "next/navigation";

// Helper to fetch data from the static `items` object
const getData = (cat) => {
  const data = items[cat];
  if (data) return data;
  return notFound();
};

const Page = ({ params }) => {
  const data = getData(params.slug);

  return (
    <div className="bg-white text-gray-800 px-4 md:px-6 py-16 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-3 font-serif">Our Work</h1>
        <h3 className="text-xl text-gray-500 capitalize">{params.slug}</h3>
      </div>

      <div className="space-y-20">
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`group flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16 transition-all duration-500 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text Section */}
            <div className="flex-1 min-w-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {item.title}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-base md:text-lg">
                {item.desc}
              </p>
              <Button url={item.url || "#"} text="See more" />
            </div>

            {/* Image Container */}
            <div className="flex-1 w-full relative overflow-hidden rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105">
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-lg object-cover w-full h-auto"
                priority={index === 0} // prioritize the first image
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
