import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

const QuantitySelector = ({
  min = 1,
  max = 99,
  defaultValue = 1,
  onChange,
}) => {
  const [quantity, setQuantity] = useState(defaultValue);

  const updateQuantity = (newQuantity) => {
    if (newQuantity < min || newQuantity > max) return;

    setQuantity(newQuantity);

    if (onChange) {
      onChange(newQuantity);
    }
  };

  const handleDecrease = () => {
    updateQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    updateQuantity(quantity + 1);
  };

  return (
    <div className="inline-flex items-center border border-[#3A3845]">
      <button
        type="button"
        onClick={handleDecrease}
        disabled={quantity <= min}
        aria-label="Decrease quantity"
        className="flex h-12 w-12 items-center justify-center transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <Minus size={18} />
      </button>

      <span
        className="flex h-12 min-w-15 items-center justify-center border-x border-[#3A3845] text-sm font-medium"
        aria-live="polite"
      >
        {quantity}
      </span>

      <button
        type="button"
        onClick={handleIncrease}
        disabled={quantity >= max}
        aria-label="Increase quantity"
        className="flex h-12 w-12 items-center justify-center transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <Plus size={18} />
      </button>
    </div>
  );
};

export default QuantitySelector;
