import Image from "next/image";

export default function HeaderSection() {
  return (
    <header className="relative w-full flex flex-col items-center justify-center text-center min-h-[60vh] py-24 overflow-hidden bg-gradient-to-b from-blue-100 via-white to-white mb-8 animate-fade-in-up">
      {/* Animated Gradient Blobs Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-400 via-purple-300 to-pink-300 opacity-40 rounded-full blur-3xl animate-blob-move1" />
        <div className="absolute right-1/4 bottom-0 w-[400px] h-[400px] bg-gradient-to-br from-purple-300 via-blue-200 to-pink-200 opacity-30 rounded-full blur-3xl animate-blob-move2" />
      </div>
      <div className="relative z-10 flex flex-col items-center">
        <div className="flex items-center justify-center mb-8">
          <Image
            src="/favicon.ico"
            alt="Portfolio Logo"
            width={90}
            height={90}
            className="rounded-full border-4 border-blue-200 shadow-xl animate-fade-in"
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-500 to-blue-800 tracking-tight leading-tight drop-shadow-lg animate-fade-in">
          Grow Your Business & Build Modern Web Apps
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 mb-6 max-w-2xl font-medium animate-fade-in delay-100">
          I’m <span className="font-semibold text-blue-800">[Nawab zada]</span>, a Google Ads specialist and full stack developer. I help businesses succeed online with expert ad campaigns and cutting-edge web solutions using Next.js, React, and more.
        </p>
        <div className="flex flex-wrap gap-3 justify-center mb-8 animate-fade-in delay-200">
          <span className="inline-block bg-blue-100 text-blue-800 font-semibold px-4 py-1 rounded-full text-sm shadow">Google Ads</span>
          <span className="inline-block bg-blue-100 text-blue-800 font-semibold px-4 py-1 rounded-full text-sm shadow">Next.js</span>
          <span className="inline-block bg-blue-100 text-blue-800 font-semibold px-4 py-1 rounded-full text-sm shadow">React</span>
          <span className="inline-block bg-blue-100 text-blue-800 font-semibold px-4 py-1 rounded-full text-sm shadow">Full Stack</span>
          <span className="inline-block bg-blue-100 text-blue-800 font-semibold px-4 py-1 rounded-full text-sm shadow">SEO</span>
        </div>
        <a
          href="#projects"
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-12 rounded-full shadow-lg text-lg transition-all duration-200 border-2 border-blue-800 hover:scale-105 animate-pulse hover:animate-none"
        >
          See My Work
        </a>
      </div>
    </header>
  );
} 