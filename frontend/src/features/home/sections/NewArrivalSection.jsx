import React from 'react';
import Container from '../../../components/ui/Container';
import SectionHeader from '../../../components/shared/SectionHeader';
import ProductGrid from '../../../components/product/ProductGrid';
import { getNewArrivals } from '../../../utils/productUtils';
import { products } from '../../../data/products';

const NewArrivalSection = () => {
  const newArrivals = getNewArrivals(products);
  return (
    <section className="w-full py-20">
      <Container>
        <div className="mb-12">
          <SectionHeader title="Discover new arrivals" />
        </div>
        <ProductGrid
          products={newArrivals}
          gridClass="grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        />
      </Container>
    </section>
  );
};

export default NewArrivalSection;
