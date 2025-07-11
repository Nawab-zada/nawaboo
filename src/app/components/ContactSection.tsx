export default function ContactSection() {
  return (
    <section id="contact" className="w-full max-w-3xl mx-auto py-12 text-center mb-8">
      <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-blue-100 animate-fade-in-up" style={{background: 'linear-gradient(120deg, #e0e7ff80 0%, #f5e8ff80 100%)'}}>
        <h2 className="text-3xl font-bold mb-4 text-blue-700">Contact</h2>
        <p className="text-lg text-gray-700 mb-6">
          Interested in working together or have a question? Reach out to me!
        </p>
        <a
          href="mailto:your.zada86829@gmail.com"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-10 rounded-full shadow-lg text-lg transition-all duration-200 border-2 border-blue-700 hover:scale-105 animate-pulse hover:animate-none"
        >
          Email Me
        </a>
      </div>
    </section>
  );
} 