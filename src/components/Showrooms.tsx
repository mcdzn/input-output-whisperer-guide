
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
      description: "Visit our state-of-the-art manufacturing facility"
    },
    {
      title: "China", 
      images: [
        "/lovable-uploads/db1af003-700f-44a9-8c6b-286592b1c856.png",
        "/lovable-uploads/d448b59b-cd2c-4ea4-8b96-2603432aa507.png",
        "/lovable-uploads/8517c22a-2ca5-453b-8a37-a6693469af3f.png"
      ],
      description: "Experience excellence in our flagship production center"
    }
  ];

  const [currentImages, setCurrentImages] = useState([0, 0]); // Track current image for each showroom
  const [isHovered, setIsHovered] = useState([false, false]); // Track hover state for each showroom
  const intervalRefs = useRef<(NodeJS.Timeout | null)[]>([null, null]);

  const startImageCycle = (showroomIndex: number) => {
    if (intervalRefs.current[showroomIndex]) {
      clearInterval(intervalRefs.current[showroomIndex]!);
    }
    
    intervalRefs.current[showroomIndex] = setInterval(() => {
      setCurrentImages(prev => {
        const newImages = [...prev];
        newImages[showroomIndex] = (newImages[showroomIndex] + 1) % showrooms[showroomIndex].images.length;
        return newImages;
      });
    }, 2500);
  };

  const stopImageCycle = (showroomIndex: number) => {
    if (intervalRefs.current[showroomIndex]) {
      clearInterval(intervalRefs.current[showroomIndex]!);
      intervalRefs.current[showroomIndex] = null;
    }
  };

  const handleMouseEnter = (showroomIndex: number) => {
    setIsHovered(prev => {
      const newHovered = [...prev];
      newHovered[showroomIndex] = true;
      return newHovered;
    });
    startImageCycle(showroomIndex);
  };

  const handleMouseLeave = (showroomIndex: number) => {
    setIsHovered(prev => {
      const newHovered = [...prev];
      newHovered[showroomIndex] = false;
      return newHovered;
    });
    stopImageCycle(showroomIndex);
  };

  useEffect(() => {
    return () => {
      intervalRefs.current.forEach(interval => {
        if (interval) clearInterval(interval);
      });
    };
  }, []);

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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Our showrooms
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {showrooms.map((showroom, index) => (
            <div 
              key={index} 
              className="group"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div className="aspect-[4/5] relative overflow-hidden rounded-lg mb-6 shadow-lg">
                {showroom.images.map((image, imageIndex) => (
                  <img 
                    key={imageIndex}
                    src={image} 
                    alt={`${showroom.title} ${imageIndex + 1}`}
                    className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-500 ease-in-out ${
                      currentImages[index] === imageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/40 to-transparent transition-opacity duration-500 ${
                  isHovered[index] ? 'opacity-100' : 'opacity-0'
                }`} />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {showroom.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-sm">
                  {showroom.description}
                </p>
                <button 
                  onClick={handleScheduleVisit}
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
