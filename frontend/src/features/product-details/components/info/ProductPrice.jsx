import React from 'react';

const ProductPrice = ({ price, comparePrice }) => {
  if (!price) return null;

  const hasDiscount = comparePrice && Number(comparePrice) > Number(price);

  const discountPercent = hasDiscount
    ? Math.round(((comparePrice - price) / comparePrice) * 100)
    : 0;

  return (
    <div className="mt-4 space-y-1">
      {/* PRICE ROW */}
      <div className="flex items-center gap-3">
        <span className="align-middle text-2xl/8 font-normal tracking-[0.06em] uppercase">
          ${Number(price).toFixed(2)}
        </span>

        {hasDiscount && (
          <span className="align-middle text-2xl/8 font-normal tracking-[0.06em] text-[#9CA3AF] uppercase not-italic line-through [leading-trim:cap-height]">
            ${Number(comparePrice).toFixed(2)}
          </span>
        )}

        {hasDiscount && (
          <span className="text-md font-semibold text-red-500">
            -{discountPercent}%
          </span>
        )}
      </div>

      {/* OPTIONAL NOTE */}
      <p className="text-xs text-gray-500">Inclusive of all taxes</p>
    </div>
  );
};

export default ProductPrice;
