import React from 'react';
import FilterSection from './FilterSection';
import { priceRanges } from '../../data/filterOptions';

const PriceFilter = () => {
  return (
    <FilterSection title="Price Range">
      <fieldset className="space-y-3">
        <legend className="sr-only">Filter products by range</legend>

        {priceRanges.map((range) => (
          <label key={range} className="flex cursor-pointer items-center gap-3">
            <input
              type="checkbox"
              value={range}
              className="h-4 w-4 rounded-none border-[#3A3845] accent-[#374151]"
            />

            <span className="text-sm text-[#374151]">{range}</span>
          </label>
        ))}
      </fieldset>
    </FilterSection>
  );
};

export default PriceFilter;
