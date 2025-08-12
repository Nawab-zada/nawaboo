import React from "react";

export default function OurServices() {
  const services = [
    {
      title: "Frontend Development",
      description:
        "Build responsive, modern, and interactive websites using HTML, CSS, JavaScript, and React.",
    },
    {
      title: "Backend Development",
      description:
        "Create secure, scalable, and high-performance server-side applications with Node.js & Express.",
    },
    {
      title: "Full Stack Projects",
      description:
        "Complete end-to-end solutions from database to frontend, tailored to your needs.",
    },
    {
      title: "Google Ads Management",
      description:
        "Boost your business with targeted Google Ads campaigns that deliver real results.",
    },
  ];

  return (
    <section className="bg-gray-50 ">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Services
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center rounded-full text-white text-xl font-bold mb-4">
                {service.title.charAt(0)}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
