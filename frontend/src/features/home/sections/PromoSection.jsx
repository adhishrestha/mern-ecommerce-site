import React from 'react';
import SplitSection from '../../../components/shared/SplitSection';
import { assets } from '../../../assets/data/assets';

const PromoSection = () => {
  return (
    <SplitSection
      title="Up To 40% Off Our Christmas Collection"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit mattis sit phasellus mollis sit aliquam sit nullam neque ultrices."
      buttonLink="/shop"
      buttonText="Shop Now"
      image={assets.promo_img}
      imageAlt="Christmas collection plates"
      mobileContentFirst={true}
    />
  );
};

export default PromoSection;
