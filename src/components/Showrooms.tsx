import { useState, useEffect, useRef } from 'react';

const Showrooms = () => {
  const showrooms = [
    {
      title: "Vietnam",
      images: [
        "/lovable-uploads/f6c128bd-e193-444a-aac3-9dc693db38af.png",
        "/lovable-uploads/fd2af68e-cdd0-4df7-a246-cbae1a1ef825.png",
        "/lovable-uploads/6bd6da33-e9a9-40c5-a4e9-bad5c8a67bb0.png"
      ],
      description: "Visit our state-of-the-art manufacturing facility where precision meets artistry"
    },
    {
      title: "China", 
      images: [
        "/lovable-uploads/db1af003-700f-44a9-8c6b-286592b1c856.png",
        "/lovable-uploads/d448b59b-cd2c-4ea4-8b96-2603432aa507.png",
        "/lovable-uploads/8517c22a-2ca5-453b-8a37-a6693469af3f.png"
      ],
      description: "Experience excellence in our flagship production center dedicated to luxury craftsmanship"
    }
  ];

  const [currentImages, setCurrentImages] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState([false, false]);
  const intervalRefs = useRef<(NodeJS.Timeout | null)[]>([null, null]);

  const startImageCycle = (showroomIndex: number) => {
    if (intervalRefs.current[showroomIndex]) {
      clearInterval(intervalRefs.current[showroomIndex]!);
    }
    
    if (!isPaused[showroomIndex]) {
      intervalRefs.current[showroomIndex] = setInterval(() => {
        setCurrentImages(prev => {
          const newImages = [...prev];
          newImages[showroomIndex] = (newImages[showroomIndex] + 1) % showrooms[showroomIndex].images.length;
          return newImages;
        });
      }, 3000); // Changed from 5000 to 3000 (3 seconds auto-cycle)
    }
  };

  const stopImageCycle = (showroomIndex: number) => {
    if (intervalRefs.current[showroomIndex]) {
      clearInterval(intervalRefs.current[showroomIndex]!);
      intervalRefs.current[showroomIndex] = null;
    }
  };

  const handleMouseEnter = (showroomIndex: number) => {
    setIsPaused(prev => {
      const newPaused = [...prev];
      newPaused[showroomIndex] = true;
      return newPaused;
    });
    stopImageCycle(showroomIndex);
  };

  const handleMouseLeave = (showroomIndex: number) => {
    setIsPaused(prev => {
      const newPaused = [...prev];
      newPaused[showroomIndex] = false;
      return newPaused;
    });
    startImageCycle(showroomIndex);
  };

  useEffect(() => {
    // Start auto-cycling for both showrooms
    showrooms.forEach((_, index) => {
      startImageCycle(index);
    });

    return () => {
      intervalRefs.current.forEach(interval => {
        if (interval) clearInterval(interval);
      });
    };
  }, [isPaused]);

  const handleScheduleVisit = () => {
    const quoteSection = document.getElementById('quote');
    if (quoteSection) {
      quoteSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-blue-100/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-purple-100/20 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Our showrooms
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our world-class facilities where innovation meets traditional craftsmanship
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {showrooms.map((showroom, index) => (
            <div 
              key={index} 
              className="group transform hover:scale-[1.02] transition-all duration-300"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div className="aspect-[4/5] relative overflow-hidden rounded-2xl mb-6 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-br from-gray-100 to-gray-200">
                {showroom.images.map((image, imageIndex) => (
                  <img 
                    key={imageIndex}
                    src={image} 
                    alt={`${showroom.title} ${imageIndex + 1}`}
                    className={`w-full h-full object-cover absolute inset-0 transition-all duration-500 ease-in-out ${
                      currentImages[index] === imageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                    }`}
                  />
                ))}
                
                {/* Overlay with animated text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h4 className="text-white font-semibold text-lg mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    {showroom.title} Facility
                  </h4>
                  <p className="text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300">
                    State-of-the-art manufacturing excellence
                  </p>
                </div>
                
                {/* Dots indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {showroom.images.map((_, dotIndex) => (
                    <div
                      key={dotIndex}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentImages[index] === dotIndex 
                          ? 'bg-white shadow-lg scale-125' 
                          : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  {showroom.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-sm md:text-base leading-relaxed">
                  {showroom.description}
                </p>
                <button 
                  onClick={handleScheduleVisit}
                  className="text-white px-6 py-4 md:px-8 md:py-4 rounded-lg text-sm md:text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg bg-gradient-to-r from-[#24354F] to-[#1a2a3f] hover:from-[#1a2a3f] hover:to-[#24354F] transform active:scale-95 w-full md:w-auto"
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
