import React, { Children } from 'react';

const Container = ({ children, className = '' }) => {
  return (
    <div
      className={`mx-auto w-full max-w-360 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-41.25 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
