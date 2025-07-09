
const Clients = () => {
  const clients = [
    { name: "BAYCO", logo: "https://via.placeholder.com/120x60/000000/FFFFFF?text=BAYCO" },
    { name: "LUGANO", logo: "https://via.placeholder.com/120x60/000000/FFFFFF?text=LUGANO" },
    { name: "PAUL MORELLI", logo: "https://via.placeholder.com/120x60/000000/FFFFFF?text=PAUL+MORELLI" },
    { name: "STEPHANIE GOTTLIEB", logo: "https://via.placeholder.com/120x60/000000/FFFFFF?text=STEPHANIE" },
    { name: "MARIA AARON", logo: "https://via.placeholder.com/120x60/000000/FFFFFF?text=MARIA+AARON" },
    { name: "MERIDIAN", logo: "https://via.placeholder.com/120x60/000000/FFFFFF?text=MERIDIAN" },
    { name: "MATERIAL GOOD", logo: "https://via.placeholder.com/120x60/000000/FFFFFF?text=MATERIAL" },
    { name: "PONIROS", logo: "https://via.placeholder.com/120x60/000000/FFFFFF?text=PONIROS" },
    { name: "RING CONCIERGE", logo: "https://via.placeholder.com/120x60/000000/FFFFFF?text=RING" },
    { name: "SINGLE STONE", logo: "https://via.placeholder.com/120x60/000000/FFFFFF?text=SINGLE+STONE" },
    { name: "THE ROYAL MINT", logo: "https://via.placeholder.com/120x60/000000/FFFFFF?text=ROYAL+MINT" },
    { name: "ALFARDAN", logo: "https://via.placeholder.com/120x60/000000/FFFFFF?text=ALFARDAN" },
    { name: "POLO", logo: "https://via.placeholder.com/120x60/000000/FFFFFF?text=POLO" },
    { name: "KURZ", logo: "https://via.placeholder.com/120x60/000000/FFFFFF?text=KURZ" },
    { name: "DOUY", logo: "https://via.placeholder.com/120x60/000000/FFFFFF?text=DOUY" }
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
            <div key={index} className="opacity-60 hover:opacity-100 transition-opacity duration-300">
              <div className="text-center font-light text-foreground text-sm tracking-wider">
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
