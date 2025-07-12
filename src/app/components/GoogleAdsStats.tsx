import { FaGoogle } from "react-icons/fa";

export default function GoogleAdsStats() {
  return (
    <section className="w-full max-w-3xl mx-auto py-16 text-center mb-8">
      <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-yellow-100 animate-fade-in-up relative" style={{background: 'linear-gradient(120deg, #fffbe6cc 0%, #e0e7ffcc 100%)'}}>
        <div className="flex flex-col items-center mb-6">
          <div className="bg-yellow-100 text-yellow-700 rounded-full p-4 shadow-lg mb-2">
            <FaGoogle size={32} />
          </div>
          <h2 className="text-3xl font-bold text-yellow-700">Google Ads Expertise</h2>
        </div>
        <hr className="border-yellow-100 mb-8" />
        <div className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-4">
          ₹2,00,000+ Google Ads Managed
        </div>
        <div className="text-lg text-gray-700 max-w-xl mx-auto">
          I have successfully managed and optimized Google Ads campaigns totaling over <span className="font-semibold text-blue-800">₹2 lakhs</span> for a diverse range of clients, helping them achieve real business growth and ROI.
        </div>
      </div>
    </section>
  );
} 