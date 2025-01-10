import { useState, useEffect } from 'react';

export const useAutoSlide = (totalSlides, interval = 5000) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [interval, totalSlides]);

  return {
    currentSlide,
    nextSlide,
    prevSlide,
    goToSlide,
  };
};