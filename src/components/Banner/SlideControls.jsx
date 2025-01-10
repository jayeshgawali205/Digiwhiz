import React from 'react';

const SlideControls = ({ onPrev, onNext, currentSlide, totalSlides }) => {
  return (
    <>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            onClick={() => onNext(index)}
            className={`w-3 h-3 border-2 rounded-full transition-colors border-accent ${index === currentSlide ? 'bg-accent' : ''
              }`}
          />
        ))}
      </div>
    </>
  );
};

export default SlideControls;