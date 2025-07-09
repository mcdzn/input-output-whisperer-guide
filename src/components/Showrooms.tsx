
const Showrooms = () => {
  const showrooms = [
    {
      title: "Vietnam",
      image: "/lovable-uploads/f6c128bd-e193-444a-aac3-9dc693db38af.png",
      hoverImage: "/lovable-uploads/fd2af68e-cdd0-4df7-a246-cbae1a1ef825.png",
      factoryImage: "/lovable-uploads/6bd6da33-e9a9-40c5-a4e9-bad5c8a67bb0.png",
      description: "Visit our state-of-the-art manufacturing facility"
    },
    {
      title: "China", 
      image: "/lovable-uploads/db1af003-700f-44a9-8c6b-286592b1c856.png",
      hoverImage: "/lovable-uploads/d448b59b-cd2c-4ea4-8b96-2603432aa507.png",
      factoryImage: "/lovable-uploads/8517c22a-2ca5-453b-8a37-a6693469af3f.png",
      description: "Experience excellence in our flagship production center"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Our showrooms
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {showrooms.map((showroom, index) => (
            <div key={index} className="group">
              <div className="aspect-[4/5] relative overflow-hidden rounded-lg mb-6 shadow-lg">
                <img 
                  src={showroom.image} 
                  alt={showroom.title}
                  className="w-full h-full object-cover absolute inset-0 transition-all duration-700 ease-in-out group-hover:opacity-0"
                />
                <img 
                  src={showroom.hoverImage} 
                  alt={`${showroom.title} facility`}
                  className="w-full h-full object-cover absolute inset-0 opacity-0 transition-all duration-700 ease-in-out group-hover:opacity-100"
                />
                <img 
                  src={showroom.factoryImage} 
                  alt={`${showroom.title} workers`}
                  className="w-full h-full object-cover absolute inset-0 opacity-0 transition-all duration-1000 ease-in-out delay-700 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {showroom.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-sm">
                  {showroom.description}
                </p>
                <button 
                  className="text-white px-6 py-3 rounded text-sm font-medium transition-all duration-300 hover:scale-105 shadow-lg"
                  style={{ backgroundColor: '#24354F' }}
                >
                  SCHEDULE YOUR VISIT TO OUR SHOWROOM IN {showroom.title.toUpperCase()}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showrooms;
