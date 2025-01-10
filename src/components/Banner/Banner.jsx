import React, { useState, useEffect } from 'react';
import { BANNER_SLIDES } from '../../constants/slides';
import Slide from './Slide';
import SlideControls from './SlideControls';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % BANNER_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + BANNER_SLIDES.length) % BANNER_SLIDES.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen" id={'home'}>
      {BANNER_SLIDES.map((slide, index) => (
        <Slide
          key={slide.id}
          slide={slide}
          isActive={index === currentSlide}
        />
      ))}

      <SlideControls
        onPrev={prevSlide}
        onNext={nextSlide}
        currentSlide={currentSlide}
        totalSlides={BANNER_SLIDES.length}
      />
    </div>
  );
};

export default Banner;