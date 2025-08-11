import Link from 'next/link';
import React from 'react';

const Button = ({ url, text, className = "", ...props }) => {
  if (!url) {
    // If no url provided, render a disabled button or span
    return (
      <span
        className={`inline-block mt-4 px-6 py-2 bg-gray-400 text-white rounded-lg shadow-md ${className}`}
        aria-disabled="true"
        {...props}
      >
        {text}
      </span>
    );
  }

  const baseStyles =
    "inline-block mt-4 px-6 py-2 bg-purple-400 text-white rounded-lg shadow-md font-bold hover:bg-purple-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 transition-colors duration-300";

  return (
    <Link href={url} className={`${baseStyles} ${className}`} {...props}>
      {text}
    </Link>
  );
};

export default Button;
