import Image from "next/image";
import React from "react";
import aboutus from "@/images/aboutus.jpg";
import Button from "@/components/Button";

const About = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section with Image and Glassmorphism Overlay Text */}
      <div className="relative w-full h-[400px] filter grayscale-75">
        <Image
          src={aboutus}
          alt="About us image"
          width={600}
          height={300}
          quality={80}
          placeholder="blur"
          className="object-cover"
          priority
        />
        <div className="absolute top-10 left-5 bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-xl max-w-[90vw] sm:max-w-md">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#74bdcb] drop-shadow">
            Digital storyteller
          </h1>
          <h3 className="text-lg sm:text-xl text-gray-800 mt-1">
            Perfectly designing your great ideas
          </h3>
        </div>
      </div>

      {/* About Content in 2 columns */}
      <div className="max-w-4xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-10 items-start">
        {/* Left - Who are we? */}
        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 text-[#399fd2] tracking-wide">
            Who are we?
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
        </section>

        {/* Right - What we do + Button */}
        <section className="flex flex-col h-full">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-3 text-[#399fd2] tracking-wide">
              What we do?
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
          </div>

          {/* Contact Us Button */}
          <div className="mt-auto w-full sm:w-auto">
            <Button url="/contact" text="Contact us" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
