'use client'

"use client";
import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello, my name is ${name}. My WhatsApp is ${whatsapp} and my email is ${email}. I would like to know more details and pricing.`;
    const whatsappNumber = "9203028334266"; // Replace with your WhatsApp number (without +)
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-lg font-semibold text-center text-green-700 mb-4">
        💬 For details and pricing, contact us directly on WhatsApp!
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500"
        />

        <input
          type="text"
          placeholder="Your WhatsApp Number"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500"
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500"
        />

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
        >
          Contact on WhatsApp
        </button>
      </form>
    </div>
  );
}





