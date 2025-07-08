
import { Card, CardContent } from "@/components/ui/card";
import { Package, ShoppingBag, Monitor, Gift } from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: Package,
      title: "Jewelry Boxes",
      description: "Elegant boxes for rings, necklaces, earrings, and more",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop"
    },
    {
      icon: Gift,
      title: "Premium Pouches",
      description: "Luxurious fabric and leather pouches for delicate pieces",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop"
    },
    {
      icon: Monitor,
      title: "Display Solutions",
      description: "Professional displays for showcasing your jewelry collections",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    {
      icon: ShoppingBag,
      title: "Custom Bags",
      description: "Branded shopping bags and gift bags for your business",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Product Range
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From elegant jewelry boxes to custom display solutions, we offer everything 
            you need to present your jewelry beautifully.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute top-4 left-4 w-12 h-12 bg-background/90 backdrop-blur rounded-full flex items-center justify-center">
                  <product.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {product.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
