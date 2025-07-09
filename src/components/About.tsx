
import { Card, CardContent } from "@/components/ui/card";
import { Award, Globe, Factory, Sparkles } from "lucide-react";

const About = () => {
  const features = [
    {
      number: "01",
      title: "One supplier",
      description: "Everything a jewelry store needs"
    },
    {
      number: "02", 
      title: "Customization",
      description: "Tailor-made solutions for your brand"
    },
    {
      number: "03",
      title: "Exclusive design", 
      description: "Unique packaging that sets you apart"
    },
    {
      number: "04",
      title: "Production in Italy",
      description: "Crafted with Italian excellence"
    }
  ];

  return (
    <section className="py-20 bg-background" id="about">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Features */}
          <div>
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">{feature.number}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right side - Main content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Everything a jewelry store needs
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                Why rely on so many different suppliers when you can have a <strong>single, reliable partner</strong> that covers all your 
                jewelry and luxury needs? With <strong>over 25 years</strong> of experience, Global Systems offers a wide range of 
                customized products and 360-degree solutions, ensuring efficiency, time savings and simplified management.
              </p>
              <p>
                We are a one of a kind wholesaler. <strong>We produce entirely in Italy</strong>, combining craftsmanship with 
                the most advanced technologies to offer customized solutions of the highest quality. Our 
                commitment extends to providing <strong>top-tier supplies for jewelry</strong>, ensuring our clients receive 
                unparalleled products tailored to their exact specifications.
              </p>
              <p>
                <strong>We ship worldwide</strong>, meeting the needs of sectors such as jewelry, fashion and cosmetics, with 
                a wide range of products available in our catalog.
              </p>
              <p>
                Furthermore, we specialize in the production of small quantities with <strong>high customization</strong>, and 
                are able to fulfill the most complex and unique requests, thanks to <strong>state-of-the-art technologies</strong> that allow us to innovate and meet every need with style and elegance.
              </p>
              <p>
                Choosing Global Systems means relying on a competent and dedicated partner, capable of 
                <strong> turning every idea into reality with quality and craftsmanship</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
