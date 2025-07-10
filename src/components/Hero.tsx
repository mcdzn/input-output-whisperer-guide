
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
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
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 p-4 md:p-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex justify-start">
            <img 
              src="/lovable-uploads/0ea2c340-388a-41ab-acff-2a1e34ad0d50.png" 
              alt="Global Systems" 
              className="h-20 md:h-32 w-auto filter brightness-0 invert"
            />
          </div>
          <div className="hidden lg:flex space-x-8 text-white">
            <a href="#about" className="hover:text-white/80 transition-colors text-sm md:text-base">ABOUT US</a>
            <a href="#products" className="hover:text-white/80 transition-colors text-sm md:text-base">PRODUCTS</a>
            <a href="#quote" className="hover:text-white/80 transition-colors text-sm md:text-base">GET QUOTE</a>
          </div>
        </div>
      </nav>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight">
            LUXURY PACKAGING AND DISPLAY
            <br />
            <span className="text-2xl md:text-4xl lg:text-5xl">FOR JEWELRY</span>
          </h1>
          
          <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-6 md:mb-8 rotate-45 border-2 border-white/30"></div>
          
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 font-light">
            We have the capability to turn your ideas into reality.
          </p>
          
          <div className="flex justify-center">
            <button 
              onClick={handleRequestQuote}
              className="text-black px-8 md:px-12 py-4 md:py-6 rounded text-base md:text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-2xl flex items-center gap-2 bg-white hover:bg-gray-100"
            >
              Request Quote
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
