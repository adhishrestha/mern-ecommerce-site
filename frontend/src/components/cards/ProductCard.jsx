import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const ProductCard = ({ product }) => {
  if (!product) return null;

  return (
    <article className="group flex h-full flex-col">
      {/* PRODUCT IMAGE */}
      <Link
        to={`/products/${product.id}/${product.slug}`}
        className="aspect-4/5 overflow-hidden bg-[#FFFFFF]"
      >
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      {/* PRODUCT CONTENT */}
      <div className="flex flex-1 flex-col pt-6">
        <Link to={`/products/${product.id}/${product.slug}`}>
          <h3 className="line-clamp-2 h-10 text-sm font-semibold tracking-[0.06em] text-[#3D3D4E] uppercase transition-colors duration-300 hover:text-[#000]">
            {product.name}
          </h3>
        </Link>

        <p className="mt-2 text-sm leading-5 font-semibold text-[#3A3845]">
          ${product.price}
        </p>

        <p className="mt-2 line-clamp-1 h-7 text-sm leading-7 font-normal text-[#5A5A5A]">
          {product.description}
        </p>
        <div className="mt-auto pt-6">
          <Button variant="outlineDark" size="md" className="w-full">
            Add To Cart
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
