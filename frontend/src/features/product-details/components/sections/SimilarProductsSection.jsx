import React from 'react';
import SectionHeader from '../../../../components/shared/SectionHeader';
import CarouselSection from '../../../../components/shared/CarouselSection';
import ProductCard from '../../../../components/cards/ProductCard';

const SimilarProductSection = ({ products = [] }) => {
  if (!products.length) return null;
  return (
    <section className="py-20">
      <SectionHeader title="Similar Items" />
      <CarouselSection
        items={products}
        renderItem={(product) => <ProductCard product={product} />}
        autoplay
      />
    </section>
  );
};

export default SimilarProductSection;
// console.log(products);
