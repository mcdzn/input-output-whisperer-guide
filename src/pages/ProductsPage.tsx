import { ArrowLeft, Package, Sparkles, Crown, Gift } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const ProductsPage = () => {
  const productCategories = [
    {
      icon: Crown,
      title: "Luxury Display Cases",
      description: "Premium display cases designed to showcase your finest jewelry pieces with elegance and security.",
      image: "/lovable-uploads/8517c22a-2ca5-453b-8a37-a6693469af3f.png",
      features: ["LED Lighting", "Security Lock", "Velvet Interior", "Custom Branding"]
    },
    {
      icon: Gift,
      title: "Gift Packaging",
      description: "Exquisite packaging solutions that enhance the unboxing experience for your customers.",
      image: "/lovable-uploads/6bd6da33-e9a9-40c5-a4e9-bad5c8a67bb0.png",
      features: ["Custom Design", "Premium Materials", "Branded Inserts", "Gift Cards"]
    },
    {
      icon: Package,
      title: "Storage Solutions",
      description: "Organized storage systems for jewelry collections, combining functionality with aesthetic appeal.",
      image: "/lovable-uploads/b2313dd8-99f0-4a7d-8a07-e74ec9830130.png",
      features: ["Modular Design", "Soft Compartments", "Stackable", "Moisture Control"]
    },
    {
      icon: Sparkles,
      title: "Custom Displays",
      description: "Bespoke display solutions tailored to your specific requirements and brand identity.",
      image: "/lovable-uploads/d448b59b-cd2c-4ea4-8b96-2603432aa507.png",
      features: ["3D Design", "Prototype Testing", "Brand Integration", "Flexible Sizing"]
    }
  ];

  const handleRequestQuote = () => {
    // Scroll to bottom for quote form or navigate to contact
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

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
            Jewelry <span className="text-primary">Products</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover our comprehensive range of luxury packaging and display solutions, 
            meticulously crafted for the jewelry industry.
          </p>
          <Button onClick={handleRequestQuote} size="lg" className="shadow-lg">
            Request Custom Quote
          </Button>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {productCategories.map((category, index) => (
              <Card key={index} className="border-border hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <category.icon className="w-8 h-8 text-primary" />
                    <h3 className="text-2xl font-semibold text-foreground">{category.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-foreground">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {category.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Jewelry Display?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let our experts create custom solutions that perfectly showcase your jewelry collection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleRequestQuote}>
              Get Custom Quote
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProductsPage;