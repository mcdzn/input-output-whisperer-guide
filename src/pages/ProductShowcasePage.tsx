import { useState } from "react";
import { ArrowLeft, Package } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import QuoteSidebar from "@/components/QuoteSidebar";

const ProductShowcasePage = () => {
  const { category } = useParams();
  const [isQuoteSidebarOpen, setIsQuoteSidebarOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{name: string, category: string} | null>(null);
  
  const openQuoteSidebar = (productName: string, categoryTitle: string) => {
    setSelectedProduct({ name: productName, category: categoryTitle });
    setIsQuoteSidebarOpen(true);
  };
  
  const closeQuoteSidebar = () => {
    setIsQuoteSidebarOpen(false);
    setSelectedProduct(null);
  };
  
  const showcaseData = {
    "showcases-displays": {
      title: "Showcases & Displays",
      description: "Premium showcases and display solutions for professional jewelry presentation in retail environments.",
      products: [
        {
          name: "LED Jewelry Showcase",
          image: "/lovable-uploads/8517c22a-2ca5-453b-8a37-a6693469af3f.png",
          description: "Premium LED-lit showcase with tempered glass and security locks"
        },
        {
          name: "Rotating Display Case",
          image: "/lovable-uploads/6bd6da33-e9a9-40c5-a4e9-bad5c8a67bb0.png",
          description: "360-degree rotating display case for maximum visibility"
        },
        {
          name: "Wall-Mounted Display",
          image: "/lovable-uploads/b2313dd8-99f0-4a7d-8a07-e74ec9830130.png",
          description: "Space-saving wall-mounted display solutions"
        },
        {
          name: "Counter Display Unit",
          image: "/lovable-uploads/d448b59b-cd2c-4ea4-8b96-2603432aa507.png",
          description: "Elegant counter-top display units for high-traffic areas"
        }
      ]
    },
    "jewelry-boxes": {
      title: "Jewelry Boxes",
      description: "Elegant jewelry boxes crafted from premium materials with luxurious finishes and custom branding options.",
      products: [
        {
          name: "Velvet Ring Box",
          image: "/lovable-uploads/db1af003-700f-44a9-8c6b-286592b1c856.png",
          description: "Soft velvet interior ring boxes in various colors"
        },
        {
          name: "Wooden Jewelry Box",
          image: "/lovable-uploads/f6c128bd-e193-444a-aac3-9dc693db38af.png",
          description: "Handcrafted wooden boxes with multiple compartments"
        },
        {
          name: "Leather Gift Box",
          image: "/lovable-uploads/fd2af68e-cdd0-4df7-a246-cbae1a1ef825.png",
          description: "Premium leather boxes with magnetic closure"
        },
        {
          name: "Custom Branded Box",
          image: "/lovable-uploads/db4f9a27-1291-49dd-a8f0-863d3301853b.png",
          description: "Fully customizable boxes with your brand logo and colors"
        }
      ]
    },
    "jewelry-organization": {
      title: "Jewelry Organization",
      description: "Comprehensive organizational solutions for efficient jewelry storage, inventory management and display.",
      products: [
        {
          name: "Jewelry Tray Insert",
          image: "/lovable-uploads/8517c22a-2ca5-453b-8a37-a6693469af3f.png",
          description: "Stackable tray inserts with individual compartments"
        },
        {
          name: "Storage Cabinet",
          image: "/lovable-uploads/6bd6da33-e9a9-40c5-a4e9-bad5c8a67bb0.png",
          description: "Multi-drawer storage cabinets for large inventories"
        },
        {
          name: "Travel Organizer",
          image: "/lovable-uploads/b2313dd8-99f0-4a7d-8a07-e74ec9830130.png",
          description: "Portable jewelry organizers for trade shows"
        },
        {
          name: "Modular System",
          image: "/lovable-uploads/d448b59b-cd2c-4ea4-8b96-2603432aa507.png",
          description: "Flexible modular organization systems"
        }
      ]
    },
    "ring-displays": {
      title: "Ring Displays",
      description: "Specialized display stands and holders designed specifically for showcasing rings with maximum visual impact.",
      products: [
        {
          name: "Ring Display Stand",
          image: "/lovable-uploads/db1af003-700f-44a9-8c6b-286592b1c856.png",
          description: "Individual ring stands in various materials and heights"
        },
        {
          name: "Multi-Ring Display",
          image: "/lovable-uploads/f6c128bd-e193-444a-aac3-9dc693db38af.png",
          description: "Multi-tier displays for ring collections"
        },
        {
          name: "Finger Form Display",
          image: "/lovable-uploads/fd2af68e-cdd0-4df7-a246-cbae1a1ef825.png",
          description: "Realistic finger forms for ring presentation"
        },
        {
          name: "Rotating Ring Display",
          image: "/lovable-uploads/db4f9a27-1291-49dd-a8f0-863d3301853b.png",
          description: "Motorized rotating displays for enhanced visibility"
        }
      ]
    },
    "earring-displays": {
      title: "Earring Displays",
      description: "Professional earring display solutions including stands, cards, and presentation systems for all earring types.",
      products: [
        {
          name: "Earring Display Cards",
          image: "/lovable-uploads/8517c22a-2ca5-453b-8a37-a6693469af3f.png",
          description: "Professional display cards for stud and drop earrings"
        },
        {
          name: "Earring Tree Stand",
          image: "/lovable-uploads/6bd6da33-e9a9-40c5-a4e9-bad5c8a67bb0.png",
          description: "Elegant tree-style stands for multiple pairs"
        },
        {
          name: "Rotating Earring Display",
          image: "/lovable-uploads/b2313dd8-99f0-4a7d-8a07-e74ec9830130.png",
          description: "Spinning displays for maximum browsing convenience"
        },
        {
          name: "Wall-Mounted Earring Display",
          image: "/lovable-uploads/d448b59b-cd2c-4ea4-8b96-2603432aa507.png",
          description: "Space-efficient wall-mounted earring displays"
        }
      ]
    },
    "bracelet-displays": {
      title: "Bracelet Displays",
      description: "Elegant bracelet display stands and organizers designed to showcase bracelets and bangles beautifully.",
      products: [
        {
          name: "Bracelet Display Ramp",
          image: "/lovable-uploads/db1af003-700f-44a9-8c6b-286592b1c856.png",
          description: "Sloped display ramps for bracelet presentation"
        },
        {
          name: "Bracelet T-Bar",
          image: "/lovable-uploads/f6c128bd-e193-444a-aac3-9dc693db38af.png",
          description: "Classic T-bar stands in various materials"
        },
        {
          name: "Bracelet Roll Display",
          image: "/lovable-uploads/fd2af68e-cdd0-4df7-a246-cbae1a1ef825.png",
          description: "Curved roll displays for multiple bracelets"
        },
        {
          name: "Bracelet Tower",
          image: "/lovable-uploads/db4f9a27-1291-49dd-a8f0-863d3301853b.png",
          description: "Multi-level tower displays for bracelet collections"
        }
      ]
    },
    "necklace-displays": {
      title: "Necklace Displays",
      description: "Professional necklace display busts, stands and presentation systems for all necklace styles and lengths.",
      products: [
        {
          name: "Necklace Display Bust",
          image: "/lovable-uploads/8517c22a-2ca5-453b-8a37-a6693469af3f.png",
          description: "Elegant busts for necklace and pendant display"
        },
        {
          name: "Necklace Stand",
          image: "/lovable-uploads/6bd6da33-e9a9-40c5-a4e9-bad5c8a67bb0.png",
          description: "Adjustable height stands for various necklace lengths"
        },
        {
          name: "Necklace Display Pad",
          image: "/lovable-uploads/b2313dd8-99f0-4a7d-8a07-e74ec9830130.png",
          description: "Soft velvet pads for delicate necklace presentation"
        },
        {
          name: "Easel Necklace Display",
          image: "/lovable-uploads/d448b59b-cd2c-4ea4-8b96-2603432aa507.png",
          description: "Easel-style displays for countertop presentation"
        }
      ]
    },
    "watch-displays": {
      title: "Watch Displays",
      description: "Luxury watch display cases, presentation boxes and stands designed specifically for timepiece collections.",
      products: [
        {
          name: "Watch Display Pillow",
          image: "/lovable-uploads/db1af003-700f-44a9-8c6b-286592b1c856.png",
          description: "Curved pillows for elegant watch presentation"
        },
        {
          name: "Watch Display Case",
          image: "/lovable-uploads/f6c128bd-e193-444a-aac3-9dc693db38af.png",
          description: "Locked display cases for luxury timepieces"
        },
        {
          name: "Watch Stand",
          image: "/lovable-uploads/fd2af68e-cdd0-4df7-a246-cbae1a1ef825.png",
          description: "Individual watch stands in premium materials"
        },
        {
          name: "Watch Collection Box",
          image: "/lovable-uploads/db4f9a27-1291-49dd-a8f0-863d3301853b.png",
          description: "Multi-watch storage and display boxes"
        }
      ]
    }
  };

  const currentCategory = showcaseData[category] || showcaseData["showcases-displays"];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/products" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Products</span>
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
            {currentCategory.title}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {currentCategory.description}
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentCategory.products.map((product, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 overflow-hidden bg-white group">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{product.name}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => openQuoteSidebar(product.name, currentCategory.title)}
                  >
                    Request Quote
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
            Need Custom Solutions?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our design team can create bespoke {currentCategory.title.toLowerCase()} tailored to your specific requirements and brand identity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => openQuoteSidebar("Custom Solution", currentCategory.title)}
            >
              Get Custom Quote
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
      
      {/* Quote Sidebar */}
      <QuoteSidebar 
        isOpen={isQuoteSidebarOpen}
        onClose={closeQuoteSidebar}
        productName={selectedProduct?.name}
        productCategory={selectedProduct?.category}
      />
    </div>
  );
};

export default ProductShowcasePage;