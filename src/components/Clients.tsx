
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

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Our clients
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
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
      </div>
    </section>
  );
};

export default Clients;
