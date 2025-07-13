import Image from "next/image";
import { FaBullhorn } from "react-icons/fa";

export default function HeaderSection() {
  return (
    <header className="relative w-full flex flex-col items-center justify-center text-center min-h-[60vh] py-24 overflow-hidden bg-gradient-to-b from-blue-100 via-white to-white mb-8 animate-fade-in-up">
      {/* Animated Gradient Blobs Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-400 via-purple-300 to-pink-300 opacity-40 rounded-full blur-3xl animate-blob-move1" />
        <div className="absolute right-1/4 bottom-0 w-[400px] h-[400px] bg-gradient-to-br from-purple-300 via-blue-200 to-pink-200 opacity-30 rounded-full blur-3xl animate-blob-move2" />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-3xl mx-auto">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-blue-100 text-blue-700 rounded-full p-4 shadow-lg mb-2">
            <FaBullhorn size={32} />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-500 to-blue-800 tracking-tight leading-tight drop-shadow-lg animate-fade-in">
            Boost Your Business with Ads & Modern Web Solutions
          </h1>
        </div>

        <hr className="border-blue-100 mb-8" />

        <p className="text-lg md:text-2xl text-gray-700 mb-10 max-w-2xl font-medium animate-fade-in delay-100">
          I’m <span className="font-semibold text-blue-800">Nawab Khan</span>, a certified Google Ads specialist and full stack developer. I help businesses grow with strategic ad campaigns and high-converting websites built with Next.js and React.
        </p>

        <div className="flex flex-wrap gap-3 justify-center mb-8 animate-fade-in delay-200">
          <span className="inline-block bg-blue-100 text-blue-800 font-semibold px-4 py-1 rounded-full text-sm shadow">Google Ads</span>
          <span className="inline-block bg-blue-100 text-blue-800 font-semibold px-4 py-1 rounded-full text-sm shadow">Next.js</span>
          <span className="inline-block bg-blue-100 text-blue-800 font-semibold px-4 py-1 rounded-full text-sm shadow">React</span>
          <span className="inline-block bg-blue-100 text-blue-800 font-semibold px-4 py-1 rounded-full text-sm shadow">Full Stack</span>
          <span className="inline-block bg-blue-100 text-blue-800 font-semibold px-4 py-1 rounded-full text-sm shadow">SEO</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-10 rounded-full shadow-lg text-lg transition-all duration-200 border-2 border-green-800 hover:scale-105"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-10 rounded-full shadow-lg text-lg transition-all duration-200 border-2 border-blue-800 hover:scale-105"
          >
            See My Work
          </a>
        </div>
      </div>
    </header>
  );
}
