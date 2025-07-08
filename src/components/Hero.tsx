
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.15)_1px,_transparent_0)] bg-[size:20px_20px] opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Company Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/b2313dd8-99f0-4a7d-8a07-e74ec9830130.png" 
              alt="Global Systems - Where Vision Begins" 
              className="h-32 w-auto"
            />
          </div>
          
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
