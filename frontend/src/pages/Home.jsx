import React from 'react';
import Container from '../components/ui/Container';
import HeroSection from '../sections/home/HeroSection';
import CategorySection from '../sections/home/CategorySection';
import PromoSection from '../sections/home/PromoSection';
import BestSellerSection from '../sections/home/BestSellerSection';
import AboutSection from '../sections/home/AboutSection';
import NewArrivalSection from '../sections/home/NewArrivalSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <PromoSection />
      <BestSellerSection />
      <AboutSection />
      <NewArrivalSection />
    </>
  );
};

export default Home;
