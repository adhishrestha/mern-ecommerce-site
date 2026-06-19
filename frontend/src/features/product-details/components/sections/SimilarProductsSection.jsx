import React from 'react';
import SectionHeader from '../../../../components/shared/SectionHeader';
import CarouselSection from '../../../../components/shared/CarouselSection';
import ProductCard from '../../../../components/cards/ProductCard';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const SimilarProductSection = ({ products = [] }) => {
  if (!products.length) return null;
  return (
    <section className="py-20">
      <div className="mb-12 flex items-center justify-between">
        <SectionHeader title="Similar Items" className="mb-0 text-center" />

        <div className="flex items-center gap-3">
          <button
            className="custom-prev flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-400 transition hover:bg-gray-100"
            aria-label="Previous slide"
          >
            <ArrowLeft />
          </button>
          <button
            className="custom-next flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-400 transition hover:bg-gray-100"
            aria-label="Next slide"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
      <CarouselSection
        items={products}
        renderItem={(product) => <ProductCard product={product} />}
      />
    </section>
  );
};

export default SimilarProductSection;
