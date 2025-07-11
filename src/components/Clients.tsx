
const Clients = () => {
  const clients = [
    { name: "BAYCO", logo: "https://via.placeholder.com/120x60/1a1a1a/FFFFFF?text=BAYCO" },
    { name: "LUGANO", logo: "https://via.placeholder.com/120x60/2c3e50/FFFFFF?text=LUGANO" },
    { name: "PAUL MORELLI", logo: "https://via.placeholder.com/120x60/8b4513/FFFFFF?text=PAUL+M" },
    { name: "STEPHANIE GOTTLIEB", logo: "https://via.placeholder.com/120x60/800080/FFFFFF?text=SG" },
    { name: "MARIA AARON", logo: "https://via.placeholder.com/120x60/ff6b6b/FFFFFF?text=MA" },
    { name: "MERIDIAN", logo: "https://via.placeholder.com/120x60/4ecdc4/FFFFFF?text=MERIDIAN" },
    { name: "MATERIAL GOOD", logo: "https://via.placeholder.com/120x60/45b7d1/FFFFFF?text=MG" },
    { name: "PONIROS", logo: "https://via.placeholder.com/120x60/f39c12/FFFFFF?text=PONIROS" },
    { name: "RING CONCIERGE", logo: "https://via.placeholder.com/120x60/e74c3c/FFFFFF?text=RC" },
    { name: "SINGLE STONE", logo: "https://via.placeholder.com/120x60/27ae60/FFFFFF?text=SS" },
    { name: "THE ROYAL MINT", logo: "https://via.placeholder.com/120x60/9b59b6/FFFFFF?text=TRM" },
    { name: "ALFARDAN", logo: "https://via.placeholder.com/120x60/34495e/FFFFFF?text=ALFARDAN" },
    { name: "POLO", logo: "https://via.placeholder.com/120x60/16a085/FFFFFF?text=POLO" },
    { name: "KURZ", logo: "https://via.placeholder.com/120x60/d35400/FFFFFF?text=KURZ" },
    { name: "DOUY", logo: "https://via.placeholder.com/120x60/7f8c8d/FFFFFF?text=DOUY" }
  ];

  const testimonials = [
    {
      quote: "Global Systems transformed our brand presentation with their exquisite packaging solutions. The attention to detail is unmatched.",
      author: "Sarah Chen",
      company: "Luxury Jewelers Inc.",
      rating: 5
    },
    {
      quote: "Their sustainable approach to luxury packaging aligns perfectly with our brand values. Outstanding quality and service.",
      author: "Marco Rossi",
      company: "Milano Fine Jewelry",
      rating: 5
    },
    {
      quote: "Working with Global Systems elevated our customer experience. Their craftsmanship speaks volumes about our commitment to excellence.",
      author: "Elena Rodriguez",
      company: "Heritage Diamonds",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Our clients
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by the world's most prestigious jewelry brands and luxury retailers
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center mb-20">
          {clients.map((client, index) => (
            <div key={index} className="opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-105 text-center">
              <div className="mb-3">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`}
                  className="h-12 w-auto mx-auto rounded border border-border/20 shadow-sm"
                />
              </div>
              <div className="font-light text-foreground text-sm tracking-wider">
                {client.name}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            What Our Clients Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center group">
                <div className="mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <blockquote className="text-muted-foreground italic mb-6 text-lg leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-border/20 pt-6">
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
