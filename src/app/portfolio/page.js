import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import ill from "@/images/illustration.jpg";
import web from "@/images/website.jpg";
import app from "@/images/application.jpg";

const Portfolio = () => {
  return (
    <div className="py-12 px-6 bg-white text-gray-800">
      {/* Title */}
      <h1 className="text-5xl font-extrabold text-center mb-2 font-serif">Our Work!</h1>
      <h3 className="text-center text-lg mb-10 text-gray-600">Choose gallery</h3>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Illustrations */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <Image
            src={ill}
            alt="Illustrations"
            className="w-full h-64 object-cover filter grayscale-50 transition duration-300 ease-in-out group-hover:scale-105"
          />
          <Link href="/portfolio/illustrations">
            <span className="absolute bottom-3 left-3 text-white text-lg font-semibold bg-black/60 px-3 py-1 rounded cursor-pointer hover:bg-black">
              Illustrations
            </span>
          </Link>
        </div>

        {/* Websites */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <Image
            src={web}
            alt="Websites"
            className="w-full h-64 object-cover filter grayscale-50 transition duration-300 ease-in-out group-hover:scale-105"
          />
          <Link href="/portfolio/websites">
            <span className="absolute bottom-3 left-3 text-white text-lg font-semibold bg-black/60 px-3 py-1 rounded cursor-pointer hover:bg-black">
              Websites
            </span>
          </Link>
        </div>

        {/* Applications */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <Image
            src={app}
            alt="Applications"
            className="w-full h-64 object-cover filter grayscale-50 transition duration-300 ease-in-out group-hover:scale-105"
          />
          <Link href="/portfolio/applications">
            <span className="absolute bottom-3 left-3 text-white text-lg font-semibold bg-black/60 px-3 py-1 rounded cursor-pointer hover:bg-black">
              Applications
            </span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
