import { FaFacebook, FaLinkedin, FaGithub, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Left: Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">Nawab Khan</h2>
          <p className="text-gray-300 max-w-xs">
            Google Ads Specialist & Full Stack Developer. Helping businesses grow with strategic marketing and modern web solutions.
          </p>
        </div>

        {/* Center: Contact */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">Contact</h3>
          <p className="flex items-center justify-center gap-2 text-gray-300">
            <FaPhoneAlt /> <a href="tel:+923028334266" className="hover:underline">+92 302 8334266</a>
          </p>
          <p className="flex items-center justify-center gap-2 text-gray-300 mt-1">
            <FaEnvelope /> <a href="mailto:zada86829@gmail.com" className="hover:underline">zada86829@gmail.com</a>
          </p>
        </div>

        {/* Right: Social Links */}
        <div className="text-center md:text-right">
          <h3 className="text-xl font-semibold mb-2">Follow Me</h3>
          <div className="flex justify-center md:justify-end space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <FaFacebook size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <FaLinkedin size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom: Copyright */}
      <div className="mt-8 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Nawab Khan. All rights reserved.
      </div>
    </footer>
  );
}
