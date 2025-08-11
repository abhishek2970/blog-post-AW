import Image from "next/image";
import mainimage from "@/images/mainimage.jpg";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex items-center justify-center px-6 py-10 bg-white">
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl w-full mx-auto">
        {/* Text Section */}
        <div className="text-left max-w-md">
          <h1 className="text-4xl font-bold mb-4 leading-tight bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Our Main Page, use our website for better designs
          </h1>

          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Turning ideas into reality — wonderful thoughts brought to life with clean code and great design.
          </p>

          <Button url="/portfolio" text="Our work" />
        </div>

        {/* Image Section */}
        <div className="relative w-full max-w-[500px] aspect-square">
          <Image
            src={mainimage}
            alt="Illustration of creative designs"
            width={600}
            height={300}
            
            className="rounded-s shadow-xl filter grayscale-50 animate-float-x object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
