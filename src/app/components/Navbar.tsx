// Navbar.js
// Navbar.js
'use client'
// Navbar.js
// Navbar.js
// Navbar.js
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (extra = "") =>
    `relative transition group ${extra} ${
      isScrolled ? "text-gray-800" : "text-white"
    } hover:text-blue-600`;

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="/"
          className={`text-2xl font-bold ${
            isScrolled ? "text-blue-600" : "text-yellow-400"
          }`}
        >
          DevGrow
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          {["Courses", "Services", "About", "Contact"].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className={linkClass("pb-1")}>
              {link}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Enroll Button - Opens WhatsApp */}
        <a
          href="https://wa.me/923028334266"
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden md:block px-5 py-2 rounded-lg font-semibold transition ${
            isScrolled
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-yellow-400 text-black hover:bg-yellow-500"
          }`}
        >
          Enroll Now
        </a>

        {/* Mobile Menu Icon */}
        <button
          className={`md:hidden text-2xl ${
            isScrolled ? "text-gray-800" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full py-4">
          {["Courses", "Services", "About", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block px-6 py-2 text-gray-800 hover:bg-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="https://wa.me/923028334266"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-6 py-2 bg-blue-600 text-white hover:bg-blue-700 text-center rounded-md mx-4 mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Enroll Now
          </a>
        </div>
      )}
    </header>
  );
}





