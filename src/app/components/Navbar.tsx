import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-blue-100 shadow-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-2xl font-bold text-blue-700 tracking-tight flex items-center gap-2 group">
          <span className="inline-block animate-bounce">🌐</span>
          <span className="transition-colors duration-300 group-hover:text-blue-900">MyPortfolio</span>
        </Link>
        <div className="space-x-6 text-lg font-medium">
          <a href="#about" className="relative text-gray-700 hover:text-blue-600 transition-colors duration-200 after:content-[''] after:block after:h-0.5 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">About</a>
          <a href="#projects" className="relative text-gray-700 hover:text-blue-600 transition-colors duration-200 after:content-[''] after:block after:h-0.5 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">Projects</a>
          <a href="#contact" className="relative text-gray-700 hover:text-blue-600 transition-colors duration-200 after:content-[''] after:block after:h-0.5 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">Contact</a>
        </div>
      </div>
    </nav>
  );
} 