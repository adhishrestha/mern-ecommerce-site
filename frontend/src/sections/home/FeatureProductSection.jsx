import React from 'react';
import Container from '../../components/ui/Container';
import SectionHeader from '../../components/shared/SectionHeader';
import { products } from '../../components/product/productData';
import ProductGrid from '../../components/product/ProductGrid';
const FeatureProductSection = () => {
  return (
    <>
      <section className="w-full py-20">
        <Container>
          <SectionHeader title="Best sellers" />
          <ProductGrid
            products={products}
            gridClass="grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          />
        </Container>
      </section>
    </>
  );
};

export default FeatureProductSection;
