import { ArrowLeft, Search, Filter, Package, Crown, Gift, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Products", icon: Package },
    { id: "display", name: "Display Cases", icon: Crown },
    { id: "packaging", name: "Gift Packaging", icon: Gift },
    { id: "custom", name: "Custom Solutions", icon: Sparkles }
  ];

  const products = [
    {
      id: 1,
      name: "Premium LED Display Case",
      category: "display",
      description: "Luxury display case with LED lighting and security features",
      image: "/lovable-uploads/8517c22a-2ca5-453b-8a37-a6693469af3f.png",
      tags: ["LED", "Security", "Premium", "Display"]
    },
    {
      id: 2,
      name: "Velvet Gift Box Set",
      category: "packaging",
      description: "Elegant velvet-lined gift boxes for special occasions",
      image: "/lovable-uploads/6bd6da33-e9a9-40c5-a4e9-bad5c8a67bb0.png",
      tags: ["Velvet", "Gift", "Luxury", "Set"]
    },
    {
      id: 3,
      name: "Modular Storage System",
      category: "display",
      description: "Flexible storage solution with customizable compartments",
      image: "/lovable-uploads/b2313dd8-99f0-4a7d-8a07-e74ec9830130.png",
      tags: ["Modular", "Storage", "Flexible", "Organization"]
    },
    {
      id: 4,
      name: "Custom Brand Display",
      category: "custom",
      description: "Bespoke display solution with integrated branding",
      image: "/lovable-uploads/d448b59b-cd2c-4ea4-8b96-2603432aa507.png",
      tags: ["Custom", "Branding", "Bespoke", "Display"]
    },
    {
      id: 5,
      name: "Jewelry Presentation Tray",
      category: "display",
      description: "Professional presentation trays for showroom display",
      image: "/lovable-uploads/db1af003-700f-44a9-8c6b-286592b1c856.png",
      tags: ["Presentation", "Tray", "Showroom", "Professional"]
    },
    {
      id: 6,
      name: "Travel Jewelry Case",
      category: "packaging",
      description: "Compact and secure travel case for jewelry collections",
      image: "/lovable-uploads/f6c128bd-e193-444a-aac3-9dc693db38af.png",
      tags: ["Travel", "Compact", "Secure", "Portable"]
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

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

      {/* Search Header */}
      <section className="pt-24 pb-8 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              <span className="text-primary">Search</span> Our Products
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Find the perfect packaging and display solutions for your jewelry collection
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search products, features, or categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-lg"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center gap-2"
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Search Results */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* Results Count */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <span className="text-muted-foreground">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
              </span>
            </div>
            {searchQuery && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Searching for:</span>
                <Badge variant="secondary">"{searchQuery}"</Badge>
              </div>
            )}
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="border-border hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{product.name}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-foreground mb-2">No products found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search terms or browse different categories
              </p>
              <Button onClick={() => {setSearchQuery(""); setSelectedCategory("all");}}>
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Popular Searches */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">
            Popular Searches
          </h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {["LED Display", "Gift Boxes", "Custom Design", "Velvet Interior", "Security Lock", "Travel Case", "Presentation", "Luxury"].map((term) => (
              <Button 
                key={term}
                variant="ghost" 
                size="sm"
                onClick={() => setSearchQuery(term)}
                className="text-muted-foreground hover:text-primary"
              >
                {term}
              </Button>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default SearchPage;