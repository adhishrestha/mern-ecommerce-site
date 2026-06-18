import React from 'react';
import SplitSection from '../../../components/shared/SplitSection';
import { assets } from '../../../assets/data/assets';
import SectionHeader from '../../../components/shared/SectionHeader';
import Container from '../../../components/ui/Container';

const BlogSection = () => {
  return (
    <section>
      <Container>
        <div className="mb-12">
          <SectionHeader title="Our blog" />
        </div>
        <SplitSection
          subtitle="TableWare"
          title="The secrets to a kitchen room"
          description="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices"
          buttonLink="/blog"
          buttonText="Learn More"
          image={assets.blog_img1}
          imageAlt=""
        />
      </Container>
    </section>
  );
};

export default BlogSection;
