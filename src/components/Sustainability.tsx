
import { Leaf, Recycle, Shield } from "lucide-react";

const Sustainability = () => {
  const benefits = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Eco-Friendly Materials",
      description: "Crafted from recyclable papers and biodegradable options, reducing environmental footprint while maintaining luxury quality."
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: "Sustainable Production",
      description: "Our manufacturing processes minimize waste and energy consumption, contributing to a cleaner, greener future."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Brand Responsibility",
      description: "Partner with luxury brands that value environmental consciousness and social responsibility in their packaging choices."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-100/20 to-emerald-100/20"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-green-200/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-emerald-200/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 bg-gradient-to-r from-green-800 to-emerald-700 bg-clip-text text-transparent">
            Sustainability & Innovation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We believe luxury and environmental responsibility go hand in hand. Our commitment to sustainable practices ensures your brand values align with conscious consumers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-green-100/50"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-green-700 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full font-medium shadow-lg">
            <Leaf className="w-5 h-5" />
            <span>Certified Eco-Friendly Packaging Solutions</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
