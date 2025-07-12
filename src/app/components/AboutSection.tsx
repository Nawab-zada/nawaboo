import { FaUserTie } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section id="about" className="w-full max-w-3xl mx-auto py-16 text-center mb-8">
      <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-blue-100 animate-fade-in-up relative" style={{background: 'linear-gradient(120deg, #e0e7ffcc 0%, #f5e8ffcc 100%)'}}>
        <div className="flex flex-col items-center mb-6">
          <div className="bg-blue-100 text-blue-700 rounded-full p-4 shadow-lg mb-2">
            <FaUserTie size={32} />
          </div>
          <h2 className="text-3xl font-bold text-blue-700">About Me</h2>
        </div>
        <hr className="border-blue-100 mb-8" />
        <p className="text-lg text-gray-700 mb-4">
          I am a passionate web developer with experience in building high-quality websites and applications. My focus is on creating user-friendly, visually appealing, and performant digital products.
        </p>
        <p className="text-lg text-gray-700">
          I love working with modern technologies and am always eager to learn and take on new challenges.
        </p>
      </div>
    </section>
  );
} 