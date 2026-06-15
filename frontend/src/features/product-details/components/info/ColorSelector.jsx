import React, { useEffect, useState } from 'react';

const ColorSelector = ({ colors = [] }) => {
  const [selectedColor, setSelectedColor] = useState(null);

  useEffect(() => {
    if (colors.length > 0) {
      setSelectedColor(colors[0]);
    }
  }, [colors]);

  if (!colors.length) return null;

  return (
    <div className="mt-8">
      <p className="mb-3 text-base font-semibold text-[#3A3845]">
        Color:
        <span className="ml-1 align-middle text-base font-semibold">
          {selectedColor?.name}
        </span>
      </p>

      <div className="flex flex-wrap gap-3">
        {colors.map((color) => {
          const isSelected = selectedColor?.name === color.name;

          return (
            <button
              key={color.name}
              type="button"
              onClick={() => setSelectedColor(color)}
              aria-label={`Select ${color.name}`}
              className={`flex h-12 w-12 items-center justify-center rounded-none border transition ${
                isSelected ? 'border-black' : 'border-gray-300'
              }`}
            >
              <span
                className="h-9 w-9 rounded-none"
                style={{
                  backgroundColor: color.value,
                }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ColorSelector;
