import { FaGoogle } from "react-icons/fa";

export default function GoogleAdsStats() {
  return (
    <section className="w-full max-w-3xl mx-auto py-10 text-center mb-8 animate-fade-in-up">
      <div className="bg-gradient-to-br from-yellow-50 via-white to-blue-50 rounded-2xl shadow-xl p-8 border border-yellow-100 flex flex-col items-center gap-4">
        <div className="flex items-center justify-center mb-2">
          <span className="bg-yellow-100 text-yellow-700 rounded-full p-3 shadow-lg">
            <FaGoogle size={36} />
          </span>
        </div>
        <div className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-2">
          ₹2,00,000+ Google Ads Managed
        </div>
        <div className="text-lg text-gray-700 max-w-xl">
          I have successfully managed and optimized Google Ads campaigns totaling over <span className="font-semibold text-blue-800">₹2 lakhs</span> for a diverse range of clients, helping them achieve real business growth and ROI.
        </div>
      </div>
    </section>
  );
} 