import React from 'react';
import SplitSection from '../../../components/shared/SplitSection';
import { assets } from '../../../assets/data/assets';
import Container from '../../../components/ui/Container';

const AboutSection = () => {
  return (
    <section>
      <Container>
        <SplitSection
          title="Made in viet Nam since 1450"
          description="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices."
          buttonLink="/about"
          buttonText="Learn More"
          image={assets.about_img1}
          imageAlt=""
        />
        <SplitSection
          title="Our History"
          description="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit "
          buttonLink="/about"
          buttonText="Learn More"
          image={assets.about_img2}
          imageAlt=""
          reverse={true}
        />
      </Container>
    </section>
  );
};

export default AboutSection;
