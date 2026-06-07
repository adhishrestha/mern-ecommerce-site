import React from 'react';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';
import ColorFilter from './ColorFilter';
import TagFilter from './TagFilter';

const FilterSidebar = () => {
  return (
    <aside aria-label="Product filters" className="w-full lg:w-58 lg:shrink-0">
      <CategoryFilter />

      <PriceFilter />

      <ColorFilter />

      <TagFilter />
    </aside>
  );
};

export default FilterSidebar;
