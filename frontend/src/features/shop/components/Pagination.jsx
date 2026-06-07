import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  className = '',
}) => {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav
      aria-label="Pagination"
      className={`mt-8 mb-15 flex justify-center ${className}`}
    >
      <ul className="flex items-center gap-2">
        <li>
          <button
            type="button"
            aria-label="Previous page"
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
            className="flex h-9 w-9 items-center justify-center border-gray-300 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <ChevronLeft size={18} />
          </button>
        </li>

        {pages.map((page) => (
          <li key={page}>
            <button
              type="button"
              aria-current={currentPage === page ? 'page' : undefined}
              onClick={() => onPageChange(page)}
              className={`flex h-9 w-9 items-center justify-center border transition ${
                currentPage === page
                  ? 'border-[#3A3845] bg-[#3A3845] text-white'
                  : 'border-gray-300 hover:bg-gray-100'
              }`}
            >
              {page}
            </button>
          </li>
        ))}

        <li>
          <button
            type="button"
            aria-label="Next page"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
            className="flex h-9 w-9 items-center justify-center transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <ChevronRight size={18} />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
