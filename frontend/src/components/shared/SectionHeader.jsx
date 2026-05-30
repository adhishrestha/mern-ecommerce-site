import React from 'react';

const SectionHeader = ({ title }) => {
  return (
    <h2 className="mb-12 text-center font-serif text-2xl leading-9 font-bold text-[#3A3845] uppercase md:text-3xl">
      {title}
    </h2>
  );
};

export default SectionHeader;
