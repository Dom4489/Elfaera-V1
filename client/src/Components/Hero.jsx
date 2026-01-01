import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 735);
  const intervalRef = useRef(null);
  const navigate = useNavigate();
  
  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 735);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slides = [
    { 
      title: "ELFAERA Eyelids — Preorders Open", 
      text:  "Batch 01 — now available.", 
      cta: "Buy Now", 
      align: "left",
      desktopImage: "/src/assets/IMG_2793.PNG",
      mobileImage: "/src/assets/first_half_dom.png"
    },
    { 
      title: "ELFAERA Eyelids — Preorders Open", 
      text: "Batch 01 — now available.", 
      cta: "Buy Now", 
      align: "center",
      desktopImage: "/src/assets/IMG_2795.PNG",
      mobileImage: "/src/assets/second_half_dom.png"
    },
  ];

  const resetTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 7000);
  };

  useEffect(() => {
    resetTimer();
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
      resetTimer();
    }
    
    setTouchStartX(null);
  };

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
    resetTimer();
  };

  const handleBuyNowClick = () => {
   navigate('/product');
  }

  return (
    <div 
      className="relative w-full overflow-hidden select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Carousel slides */}
      <div className="relative h-[96vh] w-[100vw]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeIndex 
                ? 'opacity-100 pointer-events-auto' 
                : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
             src={isMobile ? slide.mobileImage : slide.desktopImage}
             alt={slide.title}
             className="absolute inset-0 w-full h-full object-cover md:object-cover"
             aria-hidden="true"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className={`max-w-2xl ${
                  slide.align === 'left' ? 'text-left' : 
                  slide.align === 'right' ? 'text-right' : 'text-center'
                }`}>
                  <h1 className="text-4xl font-bold text-white">{slide.title}</h1>
                  <p className="mt-4 text-lg text-gray-200">{slide.text}</p>
                  <div className="mt-6">
                    <Button type="primary" size="large" onClick={handleBuyNowClick}>
                      {slide.cta}
                    </Button>
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