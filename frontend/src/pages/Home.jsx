import React from 'react';
import Container from '../components/ui/Container';
import HeroSection from '../sections/home/HeroSection';
import CategorySection from '../sections/home/CategorySection';
import PromoSection from '../sections/home/PromoSection';
import BestSellerSection from '../sections/home/BestSellerSection';
import AboutSection from '../sections/home/AboutSection';
import NewArrivalSection from '../sections/home/NewArrivalSection';
import BlogSection from '../sections/home/BlogSection';
import NewsLetterSection from '../sections/home/NewsLetterSection';

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
