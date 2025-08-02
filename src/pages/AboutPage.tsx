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
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              About Global Systems
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Leading Jewelry Packaging Innovation Since 2010
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Global Systems is a premier manufacturer and supplier of luxury jewelry packaging and display solutions. 
                  Founded with a passion for elevating the jewelry retail experience, we specialize in creating bespoke 
                  packaging that enhances brand identity and protects precious jewelry pieces.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our state-of-the-art manufacturing facilities in Vietnam and China employ cutting-edge technology 
                  combined with traditional craftsmanship. We serve over 500+ jewelry brands worldwide, from 
                  boutique artisans to international luxury houses.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  With expertise in materials like velvet, leather, wood, and premium metals, we create packaging 
                  solutions that tell your brand's story while ensuring the safety and presentation of your jewelry.
                </p>
                <div className="bg-primary/10 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Our Commitment</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      Sustainable manufacturing practices
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      100% customizable solutions
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      Fast global shipping & support
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
                  <video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    className="w-full h-full object-cover"
                  >
                    <source src="https://player.vimeo.com/external/373465330.sd.mp4?s=5bb2bc62b3e17d44b9b5e25d7e6e3e4e5c45f6e6&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">Jewelry Manufacturing Process</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</h3>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</h3>
              <p className="text-muted-foreground">Countries Served</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">13+</h3>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">10k+</h3>
              <p className="text-muted-foreground">Products Delivered</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;