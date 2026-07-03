import React from 'react';
import HeroLayout from '../../../components/layout/hero/HeroLayout';
import HeroCard from '../../../components/layout/hero/HeroCard';

import { SOCIAL_LINKS } from '../../../data/socials';
import { assets } from '../../../assets/data/assets';

const ContactHero = () => {
  return (
    <HeroLayout
      image={assets.contact_page_banner_img}
      imageAlt="Moon Brand luxury home ceramics banner"
    >
      <HeroCard icon={assets.contact_page_banner_icon} className="bg-[#3A3845]">
        {/* HEADING */}
        <h1 className="mb-10 font-serif text-3xl leading-tight font-bold tracking-[0.04em] uppercase sm:text-4xl">
          CONTACT US
        </h1>
        <div className="border-t px-10 py-7.5 lg:p-7.5">
          <p className="mb-5 text-base tracking-wide">
            Follow us on social media
          </p>
          <div className="flex justify-center space-x-4">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${social.name} page`}
                  className="flex h-8 w-8 items-center justify-center bg-[#C69B7B] text-[#FFFFFF] transition-all duration-200 hover:bg-white hover:text-[#2D2F3E]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </HeroCard>
    </HeroLayout>
  );
};

export default ContactHero;
