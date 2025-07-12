'use client'
import { useRef } from "react";
import { FaRegPaperPlane } from "react-icons/fa";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const whatsappNumber = "923028334266";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLInputElement).value;
    const text = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  }

  return (
    <section id="contact" className="w-full max-w-3xl mx-auto py-16 text-center mb-8">
      <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-blue-100 animate-fade-in-up relative" style={{background: 'linear-gradient(120deg, #e0e7ffcc 0%, #f5e8ffcc 100%)'}}>
        <div className="flex flex-col items-center mb-6">
          <div className="bg-blue-100 text-blue-700 rounded-full p-4 shadow-lg mb-2">
            <FaRegPaperPlane size={32} />
          </div>
          <h2 className="text-3xl font-bold text-blue-700">Contact</h2>
        </div>
        <hr className="border-blue-100 mb-8" />
        <p className="text-lg text-gray-700 mb-10">
          Interested in working together or have a question? Fill out the form below and contact me instantly on WhatsApp!
        </p>
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6 items-center max-w-md mx-auto animate-fade-in-up">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/90 placeholder-black shadow-sm transition-all duration-200"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/90 placeholder-black shadow-sm transition-all duration-200"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/90 placeholder-black shadow-sm transition-all duration-200"
          />
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-10 rounded-full shadow-lg text-lg transition-all duration-200 border-2 border-blue-800 hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <FaRegPaperPlane className="mb-0.5" />
            Send Me
          </button>
        </form>
      </div>
    </section>
  );
} 