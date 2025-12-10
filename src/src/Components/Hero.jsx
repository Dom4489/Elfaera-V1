import { useState, useEffect, useRef } from 'react';
import { Button } from 'antd';

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const intervalRef = useRef(null); // Store interval ID
  
  const slides = [
    { 
      title: "ELFAERA Eyelids — Preorders Open", 
      text: "Hand-made by Earlf. Perfect fitment. Limited quantity.", 
      cta: "Buy Now", 
      align: "left",
      image: "/src/assets/IMG_2793.PNG"
    },
    { 
      title: "ELFAERA Eyelids — Preorders Open", 
      text: "Hand-made by Earlf. Perfect fitment. Limited quantity.", 
      cta: "Buy Now", 
      align: "center",
      image: "/src/assets/IMG_2795.PNG"
    },
    // { 
    //   title: "ELFAERA Eyelids — Preorders Open", 
    //   text: "Hand-made by Earlf. Perfect fitment. Limited quantity.", 
    //   cta: "Buy Now", 
    //   align: "right",
    //   image: "/src/assets/IMG_2809.PNG"
    // }
  ];

  // Function to reset the timer
  const resetTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 7000);
  };

  // Start timer on mount
  useEffect(() => {
    resetTimer(); // Start initial timer
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [slides.length]);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    const threshold = 70;
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        setActiveIndex((prev) => (prev + 1) % slides.length);
      } else {
        setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
      }
      resetTimer(); // Reset timer after swipe
    }
    
    setTouchStartX(null);
  };

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
    resetTimer();
  };

  return (
    <div 
      className="relative w-full overflow-hidden select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Carousel slides */}
      <div className="relative h-[95vh] w-[100vw]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            {/* Background image */}
            <img
             src={slide.image}
             alt={slide.title}
             className="absolute inset-0 w-full h-full object-cover md:object-cover"
             aria-hidden="true"
            />
            
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className={`max-w-2xl ${
                  slide.align === 'left' ? 'text-left' : 
                  slide.align === 'right' ? 'text-right' : 'text-center'
                }`}>
                  <h1 className="text-4xl font-bold text-white">{slide.title}</h1>
                  <p className="mt-4 text-lg text-gray-200">{slide.text}</p>
                  <div className="mt-6">
                    <Button type="primary" size="large" href="#">{slide.cta}</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === activeIndex ? 'bg-white w-4' : 'bg-white/50'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}