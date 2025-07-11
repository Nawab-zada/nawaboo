export default function AboutSection() {
  return (
    <section id="about" className="w-full max-w-3xl mx-auto py-12 text-center mb-8">
      <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-blue-100 animate-fade-in-up" style={{background: 'linear-gradient(120deg, #e0e7ff80 0%, #f5e8ff80 100%)'}}>
        <h2 className="text-3xl font-bold mb-4 text-blue-700">About Me</h2>
        <p className="text-lg text-gray-700 mb-2">
          I am a passionate web developer with experience in building high-quality websites and applications. My focus is on creating user-friendly, visually appealing, and performant digital products.
        </p>
        <p className="text-lg text-gray-700">
          I love working with modern technologies and am always eager to learn and take on new challenges.
        </p>
      </div>
    </section>
  );
} 