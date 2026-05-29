import React from 'react';
import Container from '../components/ui/Container';
import HeroSection from '../sections/home/HeroSection';
import CategorySection from '../sections/home/CategorySection';
import PromoSection from '../sections/home/PromoSection';
import BestSellerSection from '../sections/home/BestSellerSection';
import AboutSection from '../sections/home/AboutSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <PromoSection />
      <BestSellerSection />
      <AboutSection />
    </>
  );
};

export default Home;
