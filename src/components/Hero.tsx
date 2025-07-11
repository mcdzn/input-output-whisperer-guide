
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Start the animation cycle after 1 second, then repeat every 3 seconds
    const initialDelay = setTimeout(() => {
      setIsAnimating(true);
      
      const interval = setInterval(() => {
        setIsAnimating(false);
        setTimeout(() => setIsAnimating(true), 100);
      }, 3000);

      return () => clearInterval(interval);
    }, 1000);

    return () => clearTimeout(initialDelay);
  }, []);

  const handleRequestQuote = () => {
    const quoteSection = document.getElementById('quote');
    if (quoteSection) {
      quoteSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with modern overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      />
      
      {/* Modern gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      
      {/* Animated background elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 p-4 md:p-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex justify-start">
            <img 
              src="/lovable-uploads/0ea2c340-388a-41ab-acff-2a1e34ad0d50.png" 
              alt="Global Systems" 
              className="h-20 md:h-32 w-auto filter brightness-0 invert hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="hidden lg:flex space-x-8 text-white">
            <a href="#about" className="hover:text-blue-200 transition-all duration-300 text-sm md:text-base relative group">
              ABOUT US
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#products" className="hover:text-blue-200 transition-all duration-300 text-sm md:text-base relative group">
              PRODUCTS
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#quote" className="hover:text-blue-200 transition-all duration-300 text-sm md:text-base relative group">
              GET QUOTE
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        </div>
      </nav>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight animate-fade-in">
            LUXURY PACKAGING AND DISPLAY
            <br />
            <span className="text-2xl md:text-4xl lg:text-5xl bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">FOR JEWELRY</span>
          </h1>
          
          <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-12 md:mb-16 rotate-45 border-2 border-white/30 hover:border-white/60 transition-all duration-500 hover:rotate-90 hover:scale-110"></div>
          
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-16 md:mb-20 font-light animate-fade-in delay-500">
            We transform your visionary ideas into exquisite, tangible realities.
          </p>
          
          <div className="flex justify-center">
            <button 
              onClick={handleRequestQuote}
              className={`text-black px-8 md:px-12 py-4 md:py-6 rounded-lg text-base md:text-lg font-semibold transition-all duration-500 shadow-2xl flex items-center gap-2 bg-white hover:bg-gray-100 hover:shadow-3xl relative overflow-hidden group ${
                isAnimating ? 'animate-pulse scale-110' : 'hover:scale-105'
              }`}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10">Request Quote</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Modern scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
