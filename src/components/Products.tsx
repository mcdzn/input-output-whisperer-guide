
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Products = () => {
  const products = [
    {
      title: "Showcases and displays",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      description: "Professional display solutions for jewelry presentation"
    },
    {
      title: "Jewelry boxes",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop",
      description: "Elegant storage solutions for precious jewelry"
    },
    {
      title: "Luxury bags",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=400&fit=crop",
      description: "Premium shopping bags with custom branding"
    },
    {
      title: "Jewelry organization",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      description: "Efficient organization systems for jewelry storage"
    },
    {
      title: "Presentation trays & Mirrors",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop",
      description: "Professional presentation accessories"
    },
    {
      title: "Watch world",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop",
      description: "Specialized display solutions for timepieces"
    },
    {
      title: "Jewelry pouches",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      description: "Soft protective pouches for delicate items"
    },
    {
      title: "Jewelry rolls",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop",
      description: "Travel-friendly jewelry organization solutions"
    }
  ];

  return (
    <section className="py-20 bg-muted/30" id="products">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Our products
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {product.title}
                  </h3>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3">
            DISCOVER MORE
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
