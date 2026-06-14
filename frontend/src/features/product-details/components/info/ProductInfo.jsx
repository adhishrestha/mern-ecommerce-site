import React from 'react';
import ProductHeader from './ProductHeader';
import ProductPrice from './ProductPrice';
import ColorSelector from './ColorSelector';
import QuantitySelector from './QuantitySelector';
import ProductAction from './ProductAction';
import SocialShare from './SocialShare';
import ProductAccordion from '../accordion/ProductAccordion';

const ProductInfo = ({ product }) => {
  return (
    <div>
      <ProductHeader product={product} />
      <ProductPrice
        price={Number(product.price)}
        comparePrice={Number(product.comparePrice)}
      />
      <ColorSelector />
      <QuantitySelector />
      <ProductAction />
      <SocialShare />
      <ProductAccordion />
    </div>
  );
};

export default ProductInfo;
