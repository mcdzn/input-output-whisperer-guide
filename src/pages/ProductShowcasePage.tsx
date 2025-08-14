import { useState } from "react";
import { ArrowLeft, Package } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import QuoteSidebar from "@/components/QuoteSidebar";

// Import professional jewelry display images
import ledJewelryShowcase from "@/assets/led-jewelry-showcase.jpg";
import rotatingDisplayCase from "@/assets/rotating-display-case.jpg";
import wallMountedDisplay from "@/assets/wall-mounted-display.jpg";
import counterDisplayUnit from "@/assets/counter-display-unit.jpg";

// Import series images
import silkRingBox from "@/assets/silk-ring-box.jpg";
import silkNecklaceBox from "@/assets/silk-necklace-box.jpg";
import silkEarringBox from "@/assets/silk-earring-box.jpg";
import silkBraceletBox from "@/assets/silk-bracelet-box.jpg";
import silkPaperBag from "@/assets/silk-paper-bag.jpg";
import silkFabricPouch from "@/assets/silk-fabric-pouch.jpg";
import silkGiftSet from "@/assets/silk-gift-set.jpg";

import satinRingBox from "@/assets/satin-ring-box.jpg";
import satinNecklaceBox from "@/assets/satin-necklace-box.jpg";
import satinEarringBox from "@/assets/satin-earring-box.jpg";
import satinBraceletBox from "@/assets/satin-bracelet-box.jpg";
import satinPaperBag from "@/assets/satin-paper-bag.jpg";
import satinFabricPouch from "@/assets/satin-fabric-pouch.jpg";
import satinGiftSet from "@/assets/satin-gift-set.jpg";

import leatheretteRingBox from "@/assets/leatherette-ring-box.jpg";
import leatheretteNecklaceBox from "@/assets/leatherette-necklace-box.jpg";
import leatheretteEarringBox from "@/assets/leatherette-earring-box.jpg";
import leatheretteBraceletBox from "@/assets/leatherette-bracelet-box.jpg";
import leatherettePaperBag from "@/assets/leatherette-paper-bag.jpg";
import leatheretteFabricPouch from "@/assets/leatherette-fabric-pouch.jpg";
import leatheretteGiftSet from "@/assets/leatherette-gift-set.jpg";

import fabricRingBox from "@/assets/fabric-ring-box.jpg";
import fabricNecklaceBox from "@/assets/fabric-necklace-box.jpg";
import fabricEarringBox from "@/assets/fabric-earring-box.jpg";
import fabricBraceletBox from "@/assets/fabric-bracelet-box.jpg";
import fabricPaperBag from "@/assets/fabric-paper-bag.jpg";
import fabricFabricPouch from "@/assets/fabric-fabric-pouch.jpg";
import fabricGiftSet from "@/assets/fabric-gift-set.jpg";

import ivoryRingBox from "@/assets/ivory-ring-box.jpg";
import ivoryNecklaceBox from "@/assets/ivory-necklace-box.jpg";
import ivoryEarringBox from "@/assets/ivory-earring-box.jpg";
import ivoryBraceletBox from "@/assets/ivory-bracelet-box.jpg";
import ivoryPaperBag from "@/assets/ivory-paper-bag.jpg";
import ivoryFabricPouch from "@/assets/ivory-fabric-pouch.jpg";
import ivoryGiftSet from "@/assets/ivory-gift-set.jpg";
import jewelryTrayInsert from "@/assets/jewelry-tray-insert.jpg";
import storageCabinet from "@/assets/storage-cabinet.jpg";
import travelOrganizer from "@/assets/travel-organizer.jpg";
import modularSystem from "@/assets/modular-system.jpg";
import ringDisplayStand from "@/assets/ring-display-stand.jpg";
import multiRingDisplay from "@/assets/multi-ring-display.jpg";
import fingerFormDisplay from "@/assets/finger-form-display.jpg";
import rotatingRingDisplay from "@/assets/rotating-ring-display.jpg";
import earringDisplayCards from "@/assets/earring-display-cards.jpg";
import earringTreeStand from "@/assets/earring-tree-stand.jpg";
import rotatingEarringDisplay from "@/assets/rotating-earring-display.jpg";
import wallMountedEarringDisplay from "@/assets/wall-mounted-earring-display.jpg";
import braceletDisplayRamp from "@/assets/bracelet-display-ramp.jpg";
import braceletTBar from "@/assets/bracelet-t-bar.jpg";
import braceletRollDisplay from "@/assets/bracelet-roll-display.jpg";
import braceletTower from "@/assets/bracelet-tower.jpg";
import necklaceDisplayBust from "@/assets/necklace-display-bust.jpg";
import necklaceStand from "@/assets/necklace-stand.jpg";
import necklaceDisplayPad from "@/assets/necklace-display-pad.jpg";
import easelNecklaceDisplay from "@/assets/easel-necklace-display.jpg";
import watchDisplayPillow from "@/assets/watch-display-pillow.jpg";
import watchDisplayCase from "@/assets/watch-display-case.jpg";
import watchStand from "@/assets/watch-stand.jpg";
import watchCollectionBox from "@/assets/watch-collection-box.jpg";

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
          image: ledJewelryShowcase,
          description: "Premium LED-lit showcase with tempered glass and security locks"
        },
        {
          name: "Rotating Display Case",
          image: rotatingDisplayCase,
          description: "360-degree rotating display case for maximum visibility"
        },
        {
          name: "Wall-Mounted Display",
          image: wallMountedDisplay,
          description: "Space-saving wall-mounted display solutions"
        },
        {
          name: "Counter Display Unit",
          image: counterDisplayUnit,
          description: "Elegant counter-top display units for high-traffic areas"
        }
      ]
    },
    "jewelry-boxes": {
      title: "Jewelry Box Collections",
      description: "Discover our premium jewelry packaging collections, each carefully curated with coordinated designs and materials for a complete brand experience.",
      series: [
        {
          name: "The Silk Series",
          description: "Luxurious silk-finished packaging in elegant champagne tones",
          products: [
            { name: "Silk Ring Box", image: silkRingBox, description: "Premium silk-finished ring box with soft interior" },
            { name: "Silk Necklace Box", image: silkNecklaceBox, description: "Elegant necklace presentation box" },
            { name: "Silk Earring Box", image: silkEarringBox, description: "Delicate earring display box" },
            { name: "Silk Bracelet Box", image: silkBraceletBox, description: "Sophisticated bracelet storage box" },
            { name: "Silk Paper Bag", image: silkPaperBag, description: "Coordinated luxury shopping bag" },
            { name: "Silk Fabric Pouch", image: silkFabricPouch, description: "Soft drawstring jewelry pouch" },
            { name: "Silk Gift Set", image: silkGiftSet, description: "Complete gift presentation set" }
          ]
        },
        {
          name: "The Satin Series",
          description: "Smooth satin-finish collection in pearl white elegance",
          products: [
            { name: "Satin Ring Box", image: satinRingBox, description: "Lustrous satin ring presentation box" },
            { name: "Satin Necklace Box", image: satinNecklaceBox, description: "Pearl white necklace display box" },
            { name: "Satin Earring Box", image: satinEarringBox, description: "Refined earring storage solution" },
            { name: "Satin Bracelet Box", image: satinBraceletBox, description: "Elegant bracelet presentation box" },
            { name: "Satin Paper Bag", image: satinPaperBag, description: "Luxury satin-finish shopping bag" },
            { name: "Satin Fabric Pouch", image: satinFabricPouch, description: "Silky smooth jewelry pouch" },
            { name: "Satin Gift Set", image: satinGiftSet, description: "Complete satin gift collection" }
          ]
        },
        {
          name: "The Leatherette Series",
          description: "Sophisticated leatherette collection in classic black",
          products: [
            { name: "Leatherette Ring Box", image: leatheretteRingBox, description: "Professional leatherette ring box" },
            { name: "Leatherette Necklace Box", image: leatheretteNecklaceBox, description: "Sleek necklace presentation box" },
            { name: "Leatherette Earring Box", image: leatheretteEarringBox, description: "Contemporary earring display box" },
            { name: "Leatherette Bracelet Box", image: leatheretteBraceletBox, description: "Modern bracelet storage box" },
            { name: "Leatherette Paper Bag", image: leatherettePaperBag, description: "Sophisticated shopping bag" },
            { name: "Leatherette Fabric Pouch", image: leatheretteFabricPouch, description: "Durable jewelry storage pouch" },
            { name: "Leatherette Gift Set", image: leatheretteGiftSet, description: "Professional gift presentation set" }
          ]
        },
        {
          name: "The Fabric Series",
          description: "Premium fabric collection in rich navy blue",
          products: [
            { name: "Fabric Ring Box", image: fabricRingBox, description: "Textured fabric ring presentation box" },
            { name: "Fabric Necklace Box", image: fabricNecklaceBox, description: "Rich fabric necklace display box" },
            { name: "Fabric Earring Box", image: fabricEarringBox, description: "Sophisticated earring storage box" },
            { name: "Fabric Bracelet Box", image: fabricBraceletBox, description: "Premium fabric bracelet box" },
            { name: "Fabric Paper Bag", image: fabricPaperBag, description: "Luxury fabric-finish shopping bag" },
            { name: "Fabric Pouch", image: fabricFabricPouch, description: "Premium fabric jewelry pouch" },
            { name: "Fabric Gift Set", image: fabricGiftSet, description: "Complete fabric gift collection" }
          ]
        },
        {
          name: "The Ivory Series",
          description: "Classic ivory collection in timeless cream white",
          products: [
            { name: "Ivory Ring Box", image: ivoryRingBox, description: "Classic ivory ring presentation box" },
            { name: "Ivory Necklace Box", image: ivoryNecklaceBox, description: "Timeless necklace display box" },
            { name: "Ivory Earring Box", image: ivoryEarringBox, description: "Elegant earring storage box" },
            { name: "Ivory Bracelet Box", image: ivoryBraceletBox, description: "Refined bracelet presentation box" },
            { name: "Ivory Paper Bag", image: ivoryPaperBag, description: "Classic ivory shopping bag" },
            { name: "Ivory Fabric Pouch", image: ivoryFabricPouch, description: "Traditional jewelry storage pouch" },
            { name: "Ivory Gift Set", image: ivoryGiftSet, description: "Complete ivory gift collection" }
          ]
        }
      ]
    },
    "jewelry-organization": {
      title: "Jewelry Organization",
      description: "Comprehensive organizational solutions for efficient jewelry storage, inventory management and display.",
      products: [
        {
          name: "Jewelry Tray Insert",
          image: jewelryTrayInsert,
          description: "Stackable tray inserts with individual compartments"
        },
        {
          name: "Storage Cabinet",
          image: storageCabinet,
          description: "Multi-drawer storage cabinets for large inventories"
        },
        {
          name: "Travel Organizer",
          image: travelOrganizer,
          description: "Portable jewelry organizers for trade shows"
        },
        {
          name: "Modular System",
          image: modularSystem,
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
          image: ringDisplayStand,
          description: "Individual ring stands in various materials and heights"
        },
        {
          name: "Multi-Ring Display",
          image: multiRingDisplay,
          description: "Multi-tier displays for ring collections"
        },
        {
          name: "Finger Form Display",
          image: fingerFormDisplay,
          description: "Realistic finger forms for ring presentation"
        },
        {
          name: "Rotating Ring Display",
          image: rotatingRingDisplay,
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
          image: earringDisplayCards,
          description: "Professional display cards for stud and drop earrings"
        },
        {
          name: "Earring Tree Stand",
          image: earringTreeStand,
          description: "Elegant tree-style stands for multiple pairs"
        },
        {
          name: "Rotating Earring Display",
          image: rotatingEarringDisplay,
          description: "Spinning displays for maximum browsing convenience"
        },
        {
          name: "Wall-Mounted Earring Display",
          image: wallMountedEarringDisplay,
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
          image: braceletDisplayRamp,
          description: "Sloped display ramps for bracelet presentation"
        },
        {
          name: "Bracelet T-Bar",
          image: braceletTBar,
          description: "Classic T-bar stands in various materials"
        },
        {
          name: "Bracelet Roll Display",
          image: braceletRollDisplay,
          description: "Curved roll displays for multiple bracelets"
        },
        {
          name: "Bracelet Tower",
          image: braceletTower,
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
          image: necklaceDisplayBust,
          description: "Elegant busts for necklace and pendant display"
        },
        {
          name: "Necklace Stand",
          image: necklaceStand,
          description: "Adjustable height stands for various necklace lengths"
        },
        {
          name: "Necklace Display Pad",
          image: necklaceDisplayPad,
          description: "Soft velvet pads for delicate necklace presentation"
        },
        {
          name: "Easel Necklace Display",
          image: easelNecklaceDisplay,
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
          image: watchDisplayPillow,
          description: "Curved pillows for elegant watch presentation"
        },
        {
          name: "Watch Display Case",
          image: watchDisplayCase,
          description: "Locked display cases for luxury timepieces"
        },
        {
          name: "Watch Stand",
          image: watchStand,
          description: "Individual watch stands in premium materials"
        },
        {
          name: "Watch Collection Box",
          image: watchCollectionBox,
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
          {/* Check if category has series (jewelry-boxes) */}
          {currentCategory.series ? (
            <div className="space-y-16">
              {currentCategory.series.map((series, seriesIndex) => (
                <div key={seriesIndex} className="space-y-8">
                  {/* Series Header */}
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-foreground mb-4">{series.name}</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{series.description}</p>
                  </div>
                  
                  {/* Series Products Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6">
                    {series.products.map((product, productIndex) => (
                      <Card key={productIndex} className="border-border hover:shadow-lg transition-all duration-300 overflow-hidden bg-white group">
                        <div className="aspect-square overflow-hidden">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <CardContent className="p-4">
                          <h4 className="text-sm font-medium text-foreground mb-2">{product.name}</h4>
                          <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                            {product.description}
                          </p>
                          <Button 
                            size="sm"
                            variant="outline" 
                            className="w-full text-xs"
                            onClick={() => openQuoteSidebar(product.name, `${currentCategory.title} - ${series.name}`)}
                          >
                            Request Quote
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Regular Product Grid for other categories */
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
          )}
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