import React from 'react';
import ProductHeader from './ProductHeader';
import ProductPrice from './ProductPrice';
import ColorSelector from './ColorSelector';
import ProductAction from './ProductAction';
import SocialShare from './SocialShare';
import ProductAccordion from '../accordion/ProductAccordion';

const ProductInfo = ({ product }) => {
  if (!product) return null;

  const accordionItems = [
    {
      title: 'Description',
      content: product.description,
    },
    {
      title: 'Dimensions',
      content: (
        <ul className="space-y-1">
          <li>Height: 10 cm</li>
          <li>Width: 20 cm</li>
          <li>Weight: 500 g</li>
        </ul>
      ),
    },
    {
      title: 'Reviews',
      content: 'No reviews yet.',
    },
  ];
  return (
    <div>
      <ProductHeader product={product} />
      <ProductPrice
        price={Number(product.price)}
        comparePrice={Number(product.comparePrice)}
      />
      <ColorSelector colors={product.colors} />
      <ProductAction />
      <SocialShare />
      <ProductAccordion items={accordionItems} />
    </div>
  );
};

export default ProductInfo;
