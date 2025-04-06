import React from 'react';
import HeroSection from './HeroSection';
import DiscountList from './DiscountList';

export default function MainContent() {
    return (
      <main className='flex flex-col h-screen mx-8 text-green'>
        <HeroSection />
        <DiscountList />
      </main>
    );
  }