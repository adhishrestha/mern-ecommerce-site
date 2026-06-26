import React, { useEffect, useState } from 'react';
import ProductThumbnailList from './ProductThumbnailList';
import Image from '../ui/Image';

const ProductGallery = ({ product }) => {
  if (!product) return null;
  const { images, name } = product;
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (images?.length) {
      setSelectedImage(images[0]);
    }
  }, [images]);
  const handleSelectImage = (img) => {
    setSelectedImage(img);
  };
  return (
    <div className="w-full space-y-4">
      {/* Main Image */}
      <div className="aspect-auto w-full overflow-hidden">
        <Image
          src={selectedImage}
          alt={name ? `${name} product image` : 'Product image'}
          className="h-full w-full object-cover"
        />
      </div>
      {/* THumbnails */}
      <ProductThumbnailList
        images={images}
        name={name}
        selectedImage={selectedImage}
        onSelectImage={handleSelectImage}
      />
    </div>
  );
};

export default ProductGallery;
