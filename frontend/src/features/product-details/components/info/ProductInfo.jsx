import React from 'react';
import ProductHeader from './ProductHeader';
import ProductPrice from './ProductPrice';
import ColorSelector from './ColorSelector';
import QuantitySelector from './QuantitySelector';
import ProductAction from './ProductAction';
import SocialShare from './SocialShare';
import ProductAccordion from '../accordion/ProductAccordion';

const ProductInfo = () => {
  return (
    <div>
      <ProductHeader />
      <ProductPrice />
      <ColorSelector />
      <QuantitySelector />
      <ProductAction />
      <SocialShare />
      <ProductAccordion />
    </div>
  );
};

export default ProductInfo;
