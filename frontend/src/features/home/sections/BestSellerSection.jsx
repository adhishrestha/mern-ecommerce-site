import React from 'react';
import Container from '../../../components/ui/Container';
import SectionHeader from '../../../components/shared/SectionHeader';
import { products } from '../../../data/productData';
import ProductGrid from '../../../components/product/ProductGrid';
import { getBestSeller } from '../../../utils/productUtils';
const BestSellerSection = () => {
  const bestSeller = getBestSeller(products);
  return (
    <>
      <section className="w-full py-20">
        <Container>
          <SectionHeader title="Best sellers" />
          <ProductGrid
            products={bestSeller}
            gridClass="grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          />
        </Container>
      </section>
    </>
  );
};

export default BestSellerSection;
