import React, { useCallback, useMemo } from 'react';
import couch from '../../assets/couch.png';

export default function HeroSection() {
  const interactivePoints = useMemo(() => [
    { top: '12%', left: '31%', info: 'Premium fabric upholstery made from sustainable materials' },
    { top: '44%', left: '27%', info: 'Ergonomic design with memory foam cushioning for maximum comfort' },
    { top: '73.5%', left: '59.5%', info: 'Solid wood frame built to last for years of enjoyment' }
  ], []);

  const handleInfoToggle = useCallback((index) => {
    const element = document.getElementById(`info-${index}`);
    if (element) {
      element.classList.toggle('opacity-0');
    }
  }, []);

  return (
    <div id='landing-chair' className='min-h-[600px] w-full flex flex-col md:flex-row items-center justify-center bg-custom-landing relative overflow-hidden'>
      {/* circle */}
      <div className='circle'></div>
      <div className='text-center md:text-start z-10 p-4 md:p-0 md:w-1/2 md:ml-4'>
        <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4'>Best Quality Products</h1>
        <h2 className='text-xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4'>
          Discover our amazing collection
        </h2>
        <p className='text-base sm:text-xl md:text-2xl mb-4 sm:mb-8 max-w-[90%] mx-auto md:mx-0'>
          We offer a wide range of products to suit your needs.
        </p>
        <button className='font-medium bg-green text-white py-2 px-4 rounded hover:bg-opacity-90 transition-colors duration-200'>
          Shop Now
        </button>
      </div>
      <div className='w-full md:w-1/2 h-[250px] sm:h-[300px] md:h-full flex items-center justify-center z-0 relative'>
        <img 
          src={couch} 
          className='h-full w-auto object-contain relative z-10' 
          alt='Couch'
          loading="lazy"
        />
        {/* Interactive points */}
        {interactivePoints.map((point, index) => (
          <React.Fragment key={index}>
            <button 
              className="absolute w-6 h-6 bg-green rounded-full flex items-center justify-center hover:animate-none z-20 transition-transform duration-200 hover:scale-110"
              style={{ top: point.top, left: point.left }}
              onClick={() => handleInfoToggle(index)}
            >
              <span className="text-white text-xs">+</span>
            </button>
            <div 
              id={`info-${index}`}
              className="absolute bg-white p-3 rounded-md shadow-lg opacity-0 transition-all duration-300 z-30 max-w-xs transform translate-y-2"
              style={{ top: `calc(${point.top} + 1.5rem)`, left: point.left }}
            >
              {point.info}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}