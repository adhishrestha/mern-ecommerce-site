import React from 'react';
import ProductRating from './ProductRating';

const ProductHeader = ({ product }) => {
  if (!product) return null;

  const { name, rating, reviewCount, isInStock } = product;

  return (
    <header className="space-y-4">
      <h1 className="align-middle font-sans text-xl/7 font-semibold tracking-[0.06em] text-[#3A3845] uppercase [leading-trim:cap-height]">
        {name}
      </h1>

      <div className="flex gap-10">
        {/* Rating Component */}
        <ProductRating rating={rating} reviewCount={reviewCount} />
        <span className={isInStock ? 'text-green-600' : 'text-red-700'}>
          {isInStock ? 'In Stock' : 'Out of Stock'}
        </span>
      </div>
    </header>
  );
};

export default ProductHeader;
