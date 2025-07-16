
import { useState, useEffect } from 'react';

const Showrooms = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const showrooms = [
    {
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      title: "Vietnam",
      description: "Visit our state-of-the-art manufacturing facility where precision meets artistry",
      buttonText: "SCHEDULE YOUR VISIT TO OUR SHOWROOM IN VIETNAM"
    },
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      title: "China",
      description: "Experience excellence in our flagship production center dedicated to luxury craftsmanship",
      buttonText: "SCHEDULE YOUR VISIT TO OUR SHOWROOM IN CHINA"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % showrooms.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [showrooms.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden" id="showrooms">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-100/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-l from-purple-100/20 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Our Showrooms
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visit our world-class facilities and experience luxury packaging excellence firsthand
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Carousel container */}
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            {showrooms.map((showroom, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
                  index === currentSlide ? 'translate-x-0' : 
                  index < currentSlide ? '-translate-x-full' : 'translate-x-full'
                }`}
              >
                <img 
                  src={showroom.image}
                  alt={showroom.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-center">
                  <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">
                    {showroom.title}
                  </h3>
                  <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
                    {showroom.description}
                  </p>
                  <button className="bg-gradient-to-r from-[#24354F] to-[#1a2a3f] hover:from-[#1a2a3f] hover:to-[#24354F] text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-xl shadow-lg text-sm md:text-base">
                    {showroom.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {showrooms.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-[#24354F] scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Additional content section */}
        <div className="mt-16 text-center space-y-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Global Manufacturing Excellence
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg max-w-3xl mx-auto">
                Our state-of-the-art facilities across Asia ensure the highest quality standards and sustainable manufacturing practices.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-foreground mb-3">
                Why Visit Our Showrooms?
              </h4>
              <ul className="space-y-2 text-muted-foreground max-w-2xl mx-auto">
                <li className="flex items-start justify-center">
                  <span className="text-blue-600 mr-2">•</span>
                  Experience our luxury packaging solutions firsthand
                </li>
                <li className="flex items-start justify-center">
                  <span className="text-blue-600 mr-2">•</span>
                  Meet our expert design and manufacturing teams
                </li>
                <li className="flex items-start justify-center">
                  <span className="text-blue-600 mr-2">•</span>
                  Explore customization options for your brand
                </li>
                <li className="flex items-start justify-center">
                  <span className="text-blue-600 mr-2">•</span>
                  Witness our commitment to sustainable practices
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showrooms;
