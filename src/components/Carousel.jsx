import React, { useState, useEffect } from 'react';

const slides = [
  {
  image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80',
  tag: 'Premium Real Estate',
  title: 'Find Your Dream Home Today',
  description: 'Explore premium properties, apartments, and villas in the best locations with expert guidance.',
  cta: 'View Properties',
  },
  {
  image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80',
  tag: 'Agricultural Lands',
  title: 'Own Fertile Farmland In Prime Locations',
  description: 'Explore verified agricultural lands with excellent water resources, road access, and long-term investment value.',
  cta: 'View Lands'
  },
  {
  image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80',
  tag: 'Commercial Spaces',
  title: 'Perfect Locations For Your Business',
  description: 'Browse premium office spaces, retail outlets, and commercial properties in prime areas.',
  cta: 'View Listings',
 },
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const autoPlay = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(autoPlay);
  }, []);

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden group bg-slate-950">
      
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/60 to-orange-950/30" />


          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 md:px-20">
            
            <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 border border-orange-500/20 backdrop-blur-md px-4 py-1.5 rounded-full mb-4">
              {slide.tag}
            </span>

            <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-wide max-w-4xl text-slate-100">
              {slide.title}
            </h1>
            <p className="text-sm md:text-lg max-w-2xl mb-8 text-slate-300">
              {slide.description}
            </p>
            
            <button className="bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30">
              {slide.cta}
            </button>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-5 z-20 rounded-full p-2 bg-black/30 hover:bg-orange-500/80 text-white cursor-pointer transition-all duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-5 z-20 rounded-full p-2 bg-black/30 hover:bg-orange-500/80 text-white cursor-pointer transition-all duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
              currentIndex === index ? 'bg-orange-500 w-8' : 'bg-white/40 hover:bg-white/60 w-3'
            }`}
          />
        ))}
      </div>

    </div>
  );
}

export default Carousel;