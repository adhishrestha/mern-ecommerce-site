import React from 'react';
import Container from '../../ui/Container';

const HeroLayout = ({ image, imageAlt, overlay = true, children }) => {
  return (
    <section className="w-full">
      <div className="relative overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <img
          src={image}
          alt={imageAlt}
          className="h-[320px] w-full object-cover sm:h-[398px] lg:h-[640px]"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          width="1440"
          height="642"
        />

        {/* OVERLAY */}
        {overlay && <div className="absolute inset-0 bg-black/20" />}

        {/* MOBILE + TABLET */}
        <div className="relative z-10 lg:hidden">{children}</div>

        {/* DESKTOP */}
        <div className="absolute inset-0 hidden lg:block">
          <Container className="flex h-full items-center">{children}</Container>
        </div>
      </div>
    </section>
  );
};

export default HeroLayout;
