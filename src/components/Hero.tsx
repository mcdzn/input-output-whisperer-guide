
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
      <nav className="absolute top-0 left-0 right-0 z-20 p-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex justify-start">
            <img 
              src="/lovable-uploads/0ea2c340-388a-41ab-acff-2a1e34ad0d50.png" 
              alt="Global Systems - Where Vision Begins" 
              className="h-16 w-auto filter brightness-0 invert"
            />
          </div>
          <div className="hidden md:flex space-x-8 text-white">
            <a href="#about" className="hover:text-white/80 transition-colors">ABOUT US</a>
            <a href="#products" className="hover:text-white/80 transition-colors">PRODUCTS</a>
            <a href="#quote" className="hover:text-white/80 transition-colors">GET QUOTE</a>
            <a href="#contact" className="hover:text-white/80 transition-colors">CONTACT</a>
          </div>
        </div>
      </nav>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            LUXURY PACKAGING AND DISPLAY FOR
            <br />
            <span className="text-4xl md:text-6xl">JEWELRY, WHERE VISION BEGINS</span>
          </h1>
          
          <div className="w-16 h-16 mx-auto mb-8 rotate-45 border-2 border-white/30"></div>
          
          <p className="text-xl md:text-2xl text-white/90 mb-4 font-light">
            Tailor-made Elegance and Customization.
          </p>
          
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Customized Packaging Solutions and Luxury
            <br />
            Displays for Exclusive Brands.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-white text-black hover:bg-white/90 font-semibold">
              Request Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white/40 text-white hover:bg-white/10 hover:border-white/60">
              <Sparkles className="mr-2 w-5 h-5" />
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
