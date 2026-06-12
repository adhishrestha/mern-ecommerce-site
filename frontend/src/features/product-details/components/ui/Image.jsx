import React, { lazy } from 'react';

const Image = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  width,
  height,
  ...props
}) => {
  return (
    <div>
      <img
        src={src}
        alt={alt}
        loading={loading}
        width={width}
        height={height}
        className={className}
        {...props}
      />
    </div>
  );
};

export default Image;
