import React from 'react';
import SplitSection from '../../../components/shared/SplitSection';
import { assets } from '../../../assets/data/assets';
import Container from '../../../components/ui/Container';

const PromoSection = () => {
  return (
    <section>
      <Container>
        <SplitSection
          title="Up To 40% Off Our Christmas Collection"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit mattis sit phasellus mollis sit aliquam sit nullam neque ultrices."
          buttonLink="/shop"
          buttonText="Shop Now"
          image={assets.promo_img}
          imageAlt="Christmas collection plates"
          mobileContentFirst={true}
        />
      </Container>
    </section>
  );
};

export default PromoSection;
