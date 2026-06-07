import React from 'react';

const FilterSection = ({ title, children }) => {
  return (
    <section
      aria-labelledby={`${title.toLowerCase().replace(/\s+/g, '-')}-filter`}
      className="border-t border-[#595667] py-7"
    >
      <h2
        id={`${title.toLowerCase().replace(/\s+/g, '-')}-filter`}
        className="mb-5 text-sm font-semibold text-[#3A3845]"
      >
        {title}
      </h2>

      {children}
    </section>
  );
};

export default FilterSection;
