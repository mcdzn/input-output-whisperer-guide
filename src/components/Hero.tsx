
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.15)_1px,_transparent_0)] bg-[size:20px_20px] opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo placeholder - will be replaced with actual logo */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary/20">
              <Package className="w-12 h-12 text-primary" />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6">
            Global Systems
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
            WHERE VISION BEGINS
          </p>
          
          <div className="w-32 h-[1px] bg-primary mx-auto mb-8" />
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Transforming your jewelry packaging ideas into reality with years of expertise, 
            professional craftsmanship, and the most suitable, efficient solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
              Request Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary/20 hover:bg-primary/10">
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
