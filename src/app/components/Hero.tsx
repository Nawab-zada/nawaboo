// HeroSection.js
// HeroSection.js
export default function HeroSection() {
    return (
      <section className="relative bg-white text-gray-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 pointer-events-none" />
  
        <div className="relative container mx-auto px-6 py-20 lg:py-28 flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            
            {/* Online Badge */}
            <div className="inline-block mb-4 px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium shadow-sm">
              💻 100% Online Learning – Learn from Anywhere
            </div>
  
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Learn <span className="text-blue-600">Web Development</span> <br /> 
              & Grow with <span className="text-yellow-500">Google Ads</span>
            </h1>
  
            <p className="mt-6 text-lg text-gray-600 max-w-2xl">
              Build modern, high-performing websites and scale your business with expert Google Ads strategies. 
              Get hands-on learning, real-world projects, and guidance from an experienced mentor — all from the comfort of your home.
            </p>
  
            {/* Trust/Stats Section */}
            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <span className="text-blue-600 text-xl">⭐</span> 4.9/5 Student Rating
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-500 text-xl">📈</span> 20+ Projects Delivered
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500 text-xl">👨‍🎓</span> 100+ Students Taught
              </div>
            </div>
  
            {/* Call-to-Action Buttons */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
              
            </div>
          </div>
  
          {/* Right Image */}
          
        </div>
      </section>
    );
  }
  
    
  