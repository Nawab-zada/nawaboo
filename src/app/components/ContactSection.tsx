'use client'
import { useRef } from "react";

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
    <section id="contact" className="w-full max-w-3xl mx-auto py-12 text-center mb-8">
      <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-blue-100 animate-fade-in-up" style={{background: 'linear-gradient(120deg, #e0e7ff80 0%, #f5e8ff80 100%)'}}>
        <h2 className="text-3xl font-bold mb-4 text-blue-700">Contact</h2>
        <p className="text-lg text-gray-700 mb-8">
          Interested in working together or have a question? Fill out the form below and contact me instantly on WhatsApp!
        </p>
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4 items-center max-w-md mx-auto mt-6 animate-fade-in-up">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={4}
            className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80"
          />
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-8 rounded-full shadow-lg text-lg transition-all duration-200 border-2 border-blue-800 hover:scale-105"
          >
            Send Me
          </button>
        </form>
      </div>
    </section>
  );
} 