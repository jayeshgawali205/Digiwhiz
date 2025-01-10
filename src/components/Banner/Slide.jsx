import React from 'react';

const Slide = ({ slide, isActive }) => (
  <div
    className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0'
      }`}
  >
    <img
      src={slide.imageUrl}
      alt={slide.title}
      className="absolute w-full h-full object-cover"
    />
    <div className='w-full absolute inset-0 bg-black bg-opacity-65 flex items-center justify-center px-4 py-2'>
      <div className="h-full w-full min-w-lg max-w-5xl flex items-center">
        <div className="h-full flex items-center justify-start">
          <div className="flex items-start sm:space-y-5 space-y-3 flex-col text-white max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold leading-10">{slide.title}</h2>
            <p className="text-sm md:text-md">{slide.description}</p>
            <button className="bg-accent text-white px-8 py-3 text-md font-semibold transition-colors">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Slide;