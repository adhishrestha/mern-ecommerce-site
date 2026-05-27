import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products = [], gridClass = '' }) => {
  return (
    <div className={`grid gap-x-8 gap-y-10 ${gridClass}`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
