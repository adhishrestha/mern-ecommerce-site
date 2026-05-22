import React from 'react';

const IconButton = ({
  children,
  onClick,
  ariaLabel,
  ariaExpand,
  className = '',
}) => {
  return (
    <button
      aria-label={ariaLabel}
      aria-expanded={ariaExpand}
      onClick={onClick}
      className={`transition hover:scale-110 active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
};

export default IconButton;
