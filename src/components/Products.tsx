
import { ArrowRight } from "lucide-react";

const Products = () => {
  const handleDiscoverMore = () => {
    const quoteSection = document.getElementById('quote');
    if (quoteSection) {
      quoteSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden" id="products">
      {/* Modern background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-blue-100/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-purple-100/20 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent leading-tight">
              Luxury Packaging Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Elevate your jewelry brand with our premium packaging and display solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="group">
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    Premium Jewelry Boxes
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Crafted with precision and attention to detail, our jewelry boxes combine functionality with luxury aesthetics to protect and showcase your precious pieces.
                  </p>
                </div>
                
                <div className="group">
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    Display Solutions
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Transform your retail space with our elegant display systems that highlight the beauty of your jewelry collection and enhance customer experience.
                  </p>
                </div>
                
                <div className="group">
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    Custom Packaging
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Create a unique brand experience with our bespoke packaging solutions tailored to reflect your brand identity and values.
                  </p>
                </div>
              </div>
              
              <div className="pt-6">
                <button 
                  onClick={handleDiscoverMore}
                  className="text-white px-8 py-4 rounded-lg text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg bg-gradient-to-r from-[#24354F] to-[#1a2a3f] hover:from-[#1a2a3f] hover:to-[#24354F] flex items-center gap-2 group"
                >
                  Discover More
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                alt="Luxury jewelry packaging and display" 
                className="w-full h-96 object-cover rounded-2xl shadow-2xl relative z-10 group-hover:scale-[1.02] transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl z-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
