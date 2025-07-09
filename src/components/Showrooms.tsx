
const Showrooms = () => {
  const showrooms = [
    {
      title: "Vietnam",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=750&fit=crop",
      hoverImage: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=750&fit=crop",
      factoryImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=750&fit=crop",
      description: "Visit our state-of-the-art manufacturing facility"
    },
    {
      title: "China", 
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=750&fit=crop",
      hoverImage: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=750&fit=crop",
      factoryImage: "https://images.unsplash.com/photo-1565843708714-2c1e0490e5c0?w=600&h=750&fit=crop",
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
                  className="w-full h-full object-cover absolute inset-0 opacity-0 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:translate-x-0 translate-x-full"
                />
                <img 
                  src={showroom.factoryImage} 
                  alt={`${showroom.title} workers`}
                  className="w-full h-full object-cover absolute inset-0 opacity-0 transition-all duration-1000 ease-in-out delay-1500 group-hover:opacity-100 group-hover:translate-x-0 translate-x-full"
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
                <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded text-sm font-medium transition-all duration-300 hover:scale-105 shadow-lg">
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
