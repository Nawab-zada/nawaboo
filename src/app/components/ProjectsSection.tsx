import Image from "next/image";

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
    title: "landing page",
    image: "/download (1).jpg", // aceholder
    link: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full max-w-5xl mx-auto py-12 mb-8">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-700 animate-fade-in">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-white/70 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-blue-100 group animate-fade-in-up block transition-transform hover:scale-105`}
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
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/80 px-4 py-1 rounded-full shadow text-blue-800 font-semibold text-sm backdrop-blur-md">
              {project.title}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
} 