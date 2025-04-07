import React from 'react';
import couch from '../../assets/couch.png';

export default function HeroSection() {
    return (
      <div id='landing-chair' className='h-2/3 w-full flex flex-row items-center justify-center bg-custom-landing relative'>
      {/* circle */}
      <div className='circle'></div>
      <div className='text-start z-10'>
        <h1 className='text-5xl font-bold mb-4'>Best Quality Products</h1>
        <h2 className='text-5xl font-bold mb-4'>
        Discover our amazing collection
        </h2>
        <p className='text-2xl mb-8'>
        We offer a wide range of products to suit your needs.
        </p>
        <button className='font-medium bg-green text-white py-2 px-4 rounded'>
        Shop Now
        </button>
      </div>
      <div className='w-1/2 h-full flex items-center justify-center z-0 relative'>
        <img src={couch} className='h-full relative z-10' alt='Couch' />
        {/* Interactive points */}
        {[
        { top: '12%', left: '31%', info: 'Premium fabric upholstery made from sustainable materials' },
        { top: '44%', left: '27%', info: 'Ergonomic design with memory foam cushioning for maximum comfort' },
        { top: '73.5%', left: '59.5%', info: 'Solid wood frame built to last for years of enjoyment' }
        ].map((point, index) => (
        <React.Fragment key={index}>
          <button 
          className="absolute w-6 h-6 bg-green rounded-full flex items-center justify-center animate-pulse hover:animate-none z-20"
          style={{ top: point.top, left: point.left }}
          onClick={() => document.getElementById(`info-${index}`).classList.toggle('opacity-0')}
          >
          <span className="text-white text-xs">+</span>
          </button>
          <div 
          id={`info-${index}`}
          className="absolute bg-white p-3 rounded-md shadow-lg opacity-0 transition-opacity duration-300 z-30 max-w-xs"
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