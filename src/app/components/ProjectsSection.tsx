import Image from "next/image";
import { FaFolderOpen } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    image: "/download.jpg",
    link: "https://demo.vercel.store/", // Vercel's e-commerce demo
  },
  {
    id: 2,
    title: "Food Delivery App",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    link: "https://food-delivery-app-demo.vercel.app/", // Example food delivery demo
  },
  {
    id: 3,
    title: "landing pages",
    image: "/download (1).jpg", // Placeholder
    link: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full max-w-5xl mx-auto py-16 mb-8 text-center">
      <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-blue-100 animate-fade-in-up relative" style={{background: 'linear-gradient(120deg, #e0e7ffcc 0%, #f5e8ffcc 100%)'}}>
        <div className="flex flex-col items-center mb-6">
          <div className="bg-blue-100 text-blue-700 rounded-full p-4 shadow-lg mb-2">
            <FaFolderOpen size={32} />
          </div>
          <h2 className="text-3xl font-bold text-blue-700">Projects</h2>
        </div>
        <hr className="border-blue-100 mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-white/70 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-blue-100 group animate-fade-in-up block transition-transform hover:scale-105 relative`}
              style={{ background: 'linear-gradient(120deg, #e0e7ff80 0%, #f5e8ff80 100%)', animationDelay: `${idx * 120}ms` }}
            >
              <div className="relative w-full h-56 group-hover:scale-105 transition-transform duration-300 animate-float">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={idx === 0}
                  unoptimized={project.image.startsWith('http')}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 px-4 py-1 rounded-full shadow text-blue-800 font-semibold text-sm backdrop-blur-md border border-blue-200">
                {project.title}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
} 