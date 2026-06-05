import React from 'react';
import SplitSection from '../../../components/shared/SplitSection';
import { assets } from '../../../assets/data/assets';
import SectionHeader from '../../../components/shared/SectionHeader';

const BlogSection = () => {
  return (
    <>
      <SectionHeader title="Our blog" />
      <SplitSection
        subtitle="TableWare"
        title="The secrets to a kitchen room"
        description="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices"
        buttonLink="/blog"
        buttonText="Learn More"
        image={assets.blog_img1}
        imageAlt=""
      />
    </>
  );
};

export default BlogSection;
