
const Showrooms = () => {
  const showrooms = [
    {
      title: "Milan",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      description: "Visit our flagship showroom in the fashion capital"
    },
    {
      title: "New York", 
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop",
      description: "Experience luxury in our Manhattan location"
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
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {showrooms.map((showroom, index) => (
            <div key={index} className="group">
              <div className="aspect-[4/3] relative overflow-hidden rounded-lg mb-6">
                <img 
                  src={showroom.image} 
                  alt={showroom.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {showroom.title}
                </h3>
                <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded text-sm font-medium transition-colors">
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
