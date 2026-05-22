import React, { useRef } from 'react';
import useClickOutside from '../../hooks/useClickOutside';

const Dropdown = ({ open, setOpen, trigger, children, className = '' }) => {
  const dropdownRef = useRef(null);

  useClickOutside(dropdownRef, () => setOpen(false));
  return (
    <div ref={dropdownRef} className="relative">
      {/* Trigger */}
      <div onClick={() => setOpen((p) => !p)}>{trigger}</div>

      {/* Menu */}
      <div
        className={`absolute right-0 top-12 rounded-xl border border-primary/15 bg-white shadow-xl transition-all duration-300  ${open ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 -translate-y-2'} ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
