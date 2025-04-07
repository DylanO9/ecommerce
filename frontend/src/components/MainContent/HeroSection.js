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
        <img src={couch} className='h-full' alt='Couch' />
      </div>
    );
  }