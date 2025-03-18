import React from 'react';
import Hero from '@/components/hero';
import Services from '@/components/services';
import News from '@/components/news';

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <News />
    </div>
  );
}