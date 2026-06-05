import React from 'react';
import Container from '../components/ui/Container';
import HeroSection from '../features/home/sections/HeroSection';
import CategorySection from '../features/home/sections/CategorySection';
import PromoSection from '../features/home/sections/PromoSection';
import BestSellerSection from '../features/home/sections/BestSellerSection';
import AboutSection from '../features/home/sections/AboutSection';
import NewArrivalSection from '../features/home/sections/NewArrivalSection';
import BlogSection from '../features/home/sections/BlogSection';
import NewsLetterSection from '../features/home/sections/NewsLetterSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <PromoSection />
      <BestSellerSection />
      <AboutSection />
      <NewArrivalSection />
      <BlogSection />
      <NewsLetterSection />
    </>
  );
};

export default Home;
