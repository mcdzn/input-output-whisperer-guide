import { ArrowLeft, Target, Users, Award, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";

const AboutPage = () => {
  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To transform visionary ideas into exquisite, tangible realities through innovative packaging and display solutions."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our skilled craftsmen and designers bring decades of experience in luxury jewelry packaging and display."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We maintain the highest standards of quality and craftsmanship in every product we create."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients worldwide with showrooms in Vietnam and China, delivering excellence across borders."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Home</span>
              </Link>
            </div>
            <img 
              src="/lovable-uploads/0ea2c340-388a-41ab-acff-2a1e34ad0d50.png" 
              alt="Global Systems" 
              className="h-12 w-auto"
            />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            About <span className="text-primary">Global Systems</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading the industry in luxury packaging and display solutions for jewelry, 
            with a commitment to excellence and innovation.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <feature.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-semibold text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Our Story
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Crafting Excellence Since Day One
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Global Systems has been at the forefront of luxury packaging and display solutions, 
                  specializing in creating stunning presentations for jewelry collections worldwide.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our journey began with a simple vision: to transform the way luxury products are 
                  presented and experienced. Today, we serve clients across the globe, maintaining 
                  the highest standards of quality and innovation.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With showrooms in Vietnam and China, we combine traditional craftsmanship with 
                  modern design principles to deliver exceptional results that exceed expectations.
                </p>
              </div>
              <div className="bg-primary/10 rounded-lg p-8">
                <h4 className="text-xl font-semibold text-foreground mb-4">Why Choose Us?</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    Decades of industry experience
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    Custom solutions tailored to your needs
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    International presence and support
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    Commitment to sustainable practices
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;