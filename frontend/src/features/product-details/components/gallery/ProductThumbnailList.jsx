import React from 'react';

const ProductThumbnailList = ({
  images = [],
  name,
  selectedImage,
  onSelectImage,
}) => {
  if (!images.length) return null;
  return (
    <div className="flex gap-3 overflow-x-auto pb-2">
      {images.map((img, index) => {
        const isActive = img === selectedImage;
        return (
          <button
            key={index}
            onClick={() => onSelectImage(img)}
            className={`relative h-16 w-16 flex-shrink-0 overflow-hidden border transition-all duration-200 ${
              isActive
                ? 'border-black/40 ring-1 ring-black'
                : 'border-gray-200 hover:border-gray-400'
            }`}
            aria-label={`Select ${name} image ${index + 1}`}
          >
            <img
              src={img}
              alt={`Thumbnail of ${name} ${index + 1}`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </button>
        );
      })}
    </div>
  );
};

export default ProductThumbnailList;
