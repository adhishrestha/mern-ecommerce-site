import React from 'react';
import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

const SectionHeader = ({ title, as: Component = 'h2', className = '' }) => {
  return (
    <Component
      className={twMerge(
        'text-center font-serif text-2xl leading-9 font-bold text-[#3A3845] uppercase md:text-3xl',
        className,
      )}
    >
      {title}
    </Component>
  );
};

export default SectionHeader;
