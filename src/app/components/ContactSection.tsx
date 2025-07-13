'use client'

import React, { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setStatus(data.error || 'Something went wrong.');
      }
    } catch (err) {
      setStatus('Error sending message.');
    }

    setLoading(false);
  };

  return (
    <section id="contact">
      <div className="max-w-lg mx-auto p-8 bg-white shadow-2xl rounded-xl mt-12">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
          Contact Me for Full Stack Development
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={formData.company}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button
            type="submit"
            className="w-full flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold py-3 rounded-md hover:from-purple-700 hover:to-pink-600 transition disabled:opacity-70"
            disabled={loading}
          >
            {loading ? (
              <FaSpinner className="animate-spin mr-2" />
            ) : (
              'Contact Me'
            )}
            {loading && ' Sending...'}
          </button>
        </form>

        {status && (
          <p className={`mt-4 text-center font-medium ${
            status.includes('success') ? 'text-green-600' : 'text-red-600'
          }`}>
            {status}
          </p>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
