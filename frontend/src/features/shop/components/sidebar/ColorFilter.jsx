import React from 'react';
import FilterSection from './FilterSection';
import { colors } from '../../../../data/filterOptions';

const ColorFilter = () => {
  return (
    <FilterSection title="Color">
      <fieldset>
        <legend className="sr-only">Filter products by color</legend>

        <div className="flex flex-wrap gap-3">
          {colors.map((color) => (
            <label key={color} className="cursor-pointer">
              <input
                type="checkbox"
                value={color}
                className="sr-only"
                aria-label={`Filter by color ${color}`}
              />

              <span
                className="block h-7 w-7 rounded-none border border-gray-300 transition-transform hover:scale-110"
                style={{ backgroundColor: color }}
                aria-hidden="true"
              />
            </label>
          ))}
        </div>
      </fieldset>
    </FilterSection>
  );
};

export default ColorFilter;
