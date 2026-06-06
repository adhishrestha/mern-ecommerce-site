import React from 'react';
import { ListFilter } from 'lucide-react';

import Button from '../../../components/ui/Button';

const SORT_OPTIONS = [
  { value: 'default', label: 'Default' },
  { value: 'new-arrival', label: 'New Arrivals' },
  { value: 'best-seller', label: 'Best Sellers' },
  { value: 'price-low-high', label: 'Price: Low to High' },
  { value: 'price-high-low', label: 'Price: High to Low' },
  { value: 'name-a-z', label: 'Alphabetically: A-Z' },
];

const SortSelect = ({ id, value, onChange }) => (
  <select
    id={id}
    value={value}
    onChange={onChange}
    className="min-w-[180px] rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none"
  >
    {SORT_OPTIONS.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

const ShopToolbar = ({
  startItem,
  endItem,
  totalProducts,
  sortBy,
  onSortChange,
  onFilterClick,
}) => {
  return (
    <section aria-label="Shop controls" className="mt-10 pb-8">
      {/* Mobile Layout */}
      <div className="flex items-center justify-between gap-4 md:hidden">
        <Button
          icon={ListFilter}
          iconPosition="left"
          onClick={onFilterClick}
          className="text-brand-dark text-sm font-semibold"
        >
          Filter
        </Button>

        <div className="flex items-center gap-2">
          <label htmlFor="sort-mobile" className="text-sm">
            Sort By:
          </label>

          <SortSelect id="sort-mobile" value={sortBy} onChange={onSortChange} />
        </div>
      </div>

      {/* Mobile Item Count */}
      <p className="text-brand-dark mt-4 text-sm font-semibold md:hidden">
        Showing {startItem}-{endItem} of {totalProducts} results
      </p>

      {/* Desktop Layout */}
      <div className="hidden items-center justify-between md:flex">
        <p className="text-brand-dark text-sm font-semibold">
          Showing {startItem}-{endItem} of {totalProducts} results
        </p>

        <div className="flex items-center gap-3">
          <label htmlFor="sort-desktop" className="text-sm font-medium">
            Sort By:
          </label>

          <SortSelect
            id="sort-desktop"
            value={sortBy}
            onChange={onSortChange}
          />
        </div>
      </div>
    </section>
  );
};

export default ShopToolbar;
