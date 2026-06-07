import React from 'react';
import FilterSection from './FilterSection';
import { tags } from '../../data/filterOptions';

const TagFilter = () => {
  return (
    <FilterSection title="Tags">
      <fieldset className="space-y-3">
        <legend className="sr-only">Filter products by tags</legend>

        {tags.map((tag) => (
          <label key={tag} className="flex cursor-pointer items-center gap-3">
            <input
              type="checkbox"
              value={tag}
              className="h-4 w-4 rounded-none border-[#3A3845] accent-[#374151]"
            />

            <span className="text-sm text-[#374151]">{tag}</span>
          </label>
        ))}
      </fieldset>
    </FilterSection>
  );
};

export default TagFilter;
