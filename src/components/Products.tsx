
import { Card, CardContent } from "@/components/ui/card";

const Products = () => {
  const products = [
    {
      title: "Luxury Jewelry Boxes",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop",
      hoverImage: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop",
      description: "Elegant storage solutions for precious jewelry"
    },
    {
      title: "Velvet Jewelry Cases",
      image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&h=400&fit=crop",
      hoverImage: "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=600&h=400&fit=crop",
      description: "Soft velvet-lined cases for delicate pieces"
    },
    {
      title: "Wooden Jewelry Chests",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      hoverImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      description: "Handcrafted wooden chests with multiple compartments"
    },
    {
      title: "Travel Jewelry Cases",
      image: "https://images.unsplash.com/photo-1544441892-794166f1e3be?w=600&h=400&fit=crop",
      hoverImage: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=400&fit=crop",
      description: "Compact cases perfect for travel and storage"
    },
    {
      title: "Ring Display Boxes",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=400&fit=crop",
      hoverImage: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop",
      description: "Specialized boxes for ring presentation"
    },
    {
      title: "Necklace Storage Boxes",
      image: "https://images.unsplash.com/photo-1603028825252-4e5854c6b94d?w=600&h=400&fit=crop",
      hoverImage: "https://images.unsplash.com/photo-1588444650700-6c3c2a46ede9?w=600&h=400&fit=crop",
      description: "Anti-tangle solutions for necklace storage"
    },
    {
      title: "Earring Organizers",
      image: "https://images.unsplash.com/photo-1631214540242-214ad5a8c53d?w=600&h=400&fit=crop",
      hoverImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      description: "Organized display for earring collections"
    },
    {
      title: "Custom Jewelry Boxes",
      image: "https://images.unsplash.com/photo-1594736797933-d0200283d636?w=600&h=400&fit=crop",
      hoverImage: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop",
      description: "Bespoke solutions tailored to your needs"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-muted/30" id="products">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 md:mb-8">
            Our products
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:opacity-0 absolute inset-0"
                />
                <img 
                  src={product.hoverImage} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100 absolute inset-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white font-semibold text-base md:text-lg mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    {product.title}
                  </h3>
                  <p className="text-white/80 text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                    {product.description}
                  </p>
                </div>
              </div>
              <CardContent className="p-3 md:p-4">
                <h3 className="font-semibold text-base md:text-lg text-foreground group-hover:text-teal-600 transition-colors duration-300">
                  {product.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8 md:mt-12">
          <button 
            className="text-white px-6 md:px-8 py-3 md:py-4 rounded text-sm md:text-base font-medium transition-all duration-300 hover:scale-105 shadow-lg"
            style={{ backgroundColor: '#24354F' }}
          >
            DISCOVER MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
