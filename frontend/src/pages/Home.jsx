import React from 'react';
import Container from '../components/ui/Container';
import HeroSection from '../sections/home/HeroSection';
import CategorySection from '../sections/home/CategorySection';
import PromoSection from '../sections/home/PromoSection';
import FeatureProductSection from '../sections/home/FeatureProductSection';
import AboutSection from '../sections/home/AboutSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <PromoSection />
      <FeatureProductSection />
      <AboutSection />
    </>
  );
};

export default Home;
