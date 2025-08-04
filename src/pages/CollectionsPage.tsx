import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import QuoteSidebar from "@/components/QuoteSidebar";

// Import images - we'll generate these
import rubyRingBox from "@/assets/ruby-ring-box.jpg";
import rubyNecklaceBox from "@/assets/ruby-necklace-box.jpg";
import rubyEarringBox from "@/assets/ruby-earring-box.jpg";
import rubyBraceletBox from "@/assets/ruby-bracelet-box.jpg";
import rubyPaperBag from "@/assets/ruby-paper-bag.jpg";
import rubyFabricPouch from "@/assets/ruby-fabric-pouch.jpg";
import rubyGiftSet from "@/assets/ruby-gift-set.jpg";

const CollectionsPage = () => {
  const [quoteSidebarOpen, setQuoteSidebarOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{name: string, category: string} | null>(null);

  const collectionProducts = [
    {
      id: 1,
      name: "Ruby Ring Box",
      image: rubyRingBox,
      description: "Elegant velvet-lined ring box with ruby accent"
    },
    {
      id: 2,
      name: "Ruby Necklace Box",
      image: rubyNecklaceBox,
      description: "Premium hinged necklace presentation box"
    },
    {
      id: 3,
      name: "Ruby Earring Box",
      image: rubyEarringBox,
      description: "Compact earring storage with secure closure"
    },
    {
      id: 4,
      name: "Ruby Bracelet Box",
      image: rubyBraceletBox,
      description: "Spacious bracelet box with cushioned interior"
    },
    {
      id: 5,
      name: "Ruby Paper Bag",
      image: rubyPaperBag,
      description: "Luxury paper shopping bag with handles"
    },
    {
      id: 6,
      name: "Ruby Fabric Pouch",
      image: rubyFabricPouch,
      description: "Soft drawstring pouch for jewelry protection"
    },
    {
      id: 7,
      name: "Ruby Gift Set",
      image: rubyGiftSet,
      description: "Complete gift packaging ensemble"
    }
  ];

  const handleRequestQuote = (productName: string) => {
    setSelectedProduct({
      name: productName,
      category: "The Ruby Series Collection"
    });
    setQuoteSidebarOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/30 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4 text-sm">
              Premium Collection
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              The Ruby Series
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Bộ sưu tập hộp đựng trang sức cao cấp với màu hồng ngọc sang trọng. 
              Thiết kế đồng bộ tạo nên một hệ thống bao bì hoàn chỉnh cho cửa hàng trang sức.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline">Premium Materials</Badge>
              <Badge variant="outline">Coordinated Design</Badge>
              <Badge variant="outline">Professional Finish</Badge>
              <Badge variant="outline">Complete Set</Badge>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-0" />

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Bộ Sưu Tập Hoàn Chỉnh
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              7 sản phẩm bao bì được thiết kế đồng bộ, tạo nên một hệ thống nhận diện thương hiệu nhất quán cho cửa hàng trang sức của bạn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {collectionProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-border/50">
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden rounded-t-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {product.description}
                    </p>
                    <Button 
                      onClick={() => handleRequestQuote(product.name)}
                      className="w-full"
                      variant="default"
                    >
                      Request Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Collection Features */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Đặc Điểm Nổi Bật
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Thiết Kế Đồng Bộ</h3>
              <p className="text-muted-foreground">
                Tất cả sản phẩm được thiết kế theo cùng một ngôn ngữ thị giác, tạo sự nhất quán cho thương hiệu.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Chất Liệu Cao Cấp</h3>
              <p className="text-muted-foreground">
                Sử dụng vật liệu premium với bề mặt hoàn thiện chuyên nghiệp, đảm bảo độ bền cao.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Bộ Sưu Tập Hoàn Chỉnh</h3>
              <p className="text-muted-foreground">
                Từ hộp đựng nhỏ đến túi mua sắm, có đầy đủ các loại bao bì cần thiết cho cửa hàng.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Quan Tâm Đến Bộ Sưu Tập Này?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Liên hệ với chúng tôi để được tư vấn chi tiết về bộ sưu tập Ruby Series và nhận báo giá ưu đãi cho đơn hàng số lượng lớn.
            </p>
            <Button 
              size="lg" 
              onClick={() => {
                setSelectedProduct({
                  name: "The Ruby Series - Complete Collection",
                  category: "Complete Collection"
                });
                setQuoteSidebarOpen(true);
              }}
            >
              Request Collection Quote
            </Button>
          </div>
        </div>
      </section>

      <QuoteSidebar
        isOpen={quoteSidebarOpen}
        onClose={() => {
          setQuoteSidebarOpen(false);
          setSelectedProduct(null);
        }}
        productName={selectedProduct?.name}
        productCategory={selectedProduct?.category}
      />
    </div>
  );
};

export default CollectionsPage;