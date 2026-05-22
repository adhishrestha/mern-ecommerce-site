import React, { Children } from 'react';

const Container = ({ children, className = '' }) => {
  return (
    <div
      className={`w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-41.25 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
