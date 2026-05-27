import React from 'react';

const SectionHeader = ({ title, subtitle, description }) => {
  return (
    <div className="mb-12 text-center">
      {subtitle && (
        <p className="mb-8 text-sm font-normal tracking-[0.3em] text-[#807F86]">
          {subtitle}
        </p>
      )}

      <h2 className="font-serif text-2xl font-bold text-[#3A3845] uppercase md:text-3xl">
        {title}
      </h2>

      {description && (
        <p className="text-base font-normal text-[#595667]">{description}</p>
      )}
    </div>
  );
};

export default SectionHeader;
