import { ArrowLeft, Package, Sparkles, Crown, Gift } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

// Import jewelry display images
import showcasesDisplaysImg from "@/assets/showcases-displays.jpg";
import jewelryBoxesImg from "@/assets/jewelry-boxes.jpg";
import jewelryOrganizationImg from "@/assets/jewelry-organization.jpg";
import ringDisplaysImg from "@/assets/ring-displays.jpg";
import earringDisplaysImg from "@/assets/earring-displays.jpg";
import braceletDisplaysImg from "@/assets/bracelet-displays.jpg";
import necklaceDisplaysImg from "@/assets/necklace-displays.jpg";
import watchDisplaysImg from "@/assets/watch-displays.jpg";

const ProductsPage = () => {
  const productCategories = [
    {
      icon: Package,
      title: "Showcases & Displays",
      description: "Premium showcases and display solutions for professional jewelry presentation",
      image: showcasesDisplaysImg,
      route: "showcases-displays"
    },
    {
      icon: Gift,
      title: "Jewelry Boxes",
      description: "Elegant jewelry boxes in various materials and finishes",
      image: jewelryBoxesImg,
      route: "jewelry-boxes"
    },
    {
      icon: Crown,
      title: "Jewelry Organization",
      description: "Organizational solutions for efficient jewelry storage and display",
      image: jewelryOrganizationImg,
      route: "jewelry-organization"
    },
    {
      icon: Sparkles,
      title: "Ring Displays",
      description: "Specialized display stands and holders for rings",
      image: ringDisplaysImg,
      route: "ring-displays"
    },
    {
      icon: Crown,
      title: "Earring Displays",
      description: "Professional earring display solutions and stands",
      image: earringDisplaysImg,
      route: "earring-displays"
    },
    {
      icon: Package,
      title: "Bracelet Displays",
      description: "Elegant bracelet display stands and organizers",
      image: braceletDisplaysImg,
      route: "bracelet-displays"
    },
    {
      icon: Sparkles,
      title: "Necklace Displays",
      description: "Professional necklace display busts and stands",
      image: necklaceDisplaysImg,
      route: "necklace-displays"
    },
    {
      icon: Gift,
      title: "Watch Displays",
      description: "Luxury watch display cases and presentation boxes",
      image: watchDisplaysImg,
      route: "watch-displays"
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
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            PRODUCTS FOR JEWELRY STORES
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/80 text-sm">
            <Link to="/" className="hover:text-white transition-colors">Homepage</Link>
            <span>›</span>
            <span>Jewelry products</span>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {productCategories.map((category, index) => (
              <Link 
                key={index} 
                to={`/products/${category.route}`}
                className="group block"
              >
                <Card className="border-border hover:shadow-lg transition-all duration-300 overflow-hidden bg-white">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4 text-center">
                    <h3 className="text-lg font-medium text-foreground mb-2">{category.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
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