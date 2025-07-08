
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Lightbulb, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Years of Experience",
      description: "Decades of expertise in jewelry packaging design and manufacturing"
    },
    {
      icon: Users,
      title: "Professional Team",
      description: "Skilled professionals dedicated to bringing your vision to life"
    },
    {
      icon: Lightbulb,
      title: "Creative Solutions",
      description: "Innovative approaches to transform your ideas into reality"
    },
    {
      icon: Zap,
      title: "Efficient Process",
      description: "Streamlined workflow ensuring the most suitable and efficient solutions"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose Global Systems
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine expertise, innovation, and efficiency to deliver exceptional jewelry packaging solutions 
            that exceed your expectations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow bg-background/50 backdrop-blur">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
