import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
  // Add more as needed
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        <nav aria-label="Footer Navigation" className="mb-2 flex flex-wrap gap-4 justify-center">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-400 hover:text-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors text-sm px-2 py-1 rounded"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <small className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} MySite. All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
