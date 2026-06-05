import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../../assets/data/assets';
import Button from '../../../components/ui/Button';
import HeroLayout from '../../../components/layout/Hero/HeroLayout';
import HeroCard from '../../../components/layout/Hero/HeroCard';

const Hero = () => {
  return (
    <HeroLayout
      image={assets.banner_image}
      imageAlt="Bat Trang handcrafted ceramic dinner set"
    >
      <HeroCard icon={assets.banner_icon}>
        <p className="mb-5 text-base tracking-wide">
          Handcrafted in Viet Nam since 1650
        </p>
        {/* HEADING */}
        <h1 className="mb-10 font-serif text-3xl leading-tight font-bold tracking-[0.04em] uppercase sm:text-4xl">
          Bat Trang
          <br />
          Dinner Set
        </h1>
        <Link to="/shop">
          <Button variant="lightPrimary" size="hero">
            Shop Now
          </Button>
        </Link>
      </HeroCard>
    </HeroLayout>
  );
};

export default Hero;
