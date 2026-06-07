import React from 'react';
import FilterSection from './FilterSection';
import { categories } from '../../data/filterOptions';

const CategoryFilter = () => {
  return (
    <FilterSection title="Category">
      <fieldset className="space-y-3">
        <legend className="sr-only">Filter products by category</legend>

        {categories.map((category) => (
          <label
            key={category}
            className="flex cursor-pointer items-center gap-3"
          >
            <input
              type="checkbox"
              value={category}
              className="h-4 w-4 rounded-none border-[#3A3845] accent-[#374151]"
            />

            <span className="text-sm text-[#374151]">{category}</span>
          </label>
        ))}
      </fieldset>
    </FilterSection>
  );
};

export default CategoryFilter;
