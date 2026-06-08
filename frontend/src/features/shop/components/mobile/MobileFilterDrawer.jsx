import React from 'react';
import { X } from 'lucide-react';
import useBodyScrollLock from '../../../../hooks/useBodyScrollLock';
import useEscapeKey from '../../../../hooks/useEscapeKey';

const MobileFilterDrawer = ({ isOpen, onClose, children }) => {
  useBodyScrollLock(isOpen);
  useEscapeKey(() => {
    if (isOpen) {
      onClose();
    }
  });
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 lg:hidden ${
          isOpen
            ? 'opacity-100 backdrop-blur-sm'
            : 'pointer-events-none opacity-0'
        }`}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="filter-drawer-title"
        className={`fixed top-0 left-0 z-50 h-full w-[320px] max-w-[85vw] overflow-y-auto bg-white shadow-xl transition-transform duration-300 lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
          <h2 id="filter-drawer-title" className="text-lg font-semibold">
            Filters
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close filters"
            className="rounded-md p-2 transition hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6">{children}</div>
      </aside>
    </>
  );
};

export default MobileFilterDrawer;
