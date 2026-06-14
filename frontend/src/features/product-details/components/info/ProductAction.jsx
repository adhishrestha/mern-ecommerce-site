import React from 'react';
import { Heart } from 'lucide-react';
import Button from '../../../../components/ui/Button';
import QuantitySelector from './QuantitySelector';

const ProductActions = ({ onAddToCart, onBuyNow, onWishlist }) => {
  return (
    <div className="mt-6 space-y-3">
      <div className="flex gap-3">
        <QuantitySelector />
        {/* Add To Cart */}
        <Button
          type="button"
          variant="dark"
          size="lg"
          className="w-full"
          onClick={onAddToCart}
        >
          Add To Cart
        </Button>
      </div>

      {/* Buy Now + Wishlist */}
      <div className="flex gap-3">
        <Button
          type="button"
          variant="outlineDark"
          size="lg"
          className="flex-1"
          onClick={onBuyNow}
        >
          Buy Now
        </Button>

        <button
          type="button"
          aria-label="Add to wishlist"
          onClick={onWishlist}
          className="flex h-12 w-12 items-center justify-center border border-[#3A3845] transition hover:bg-gray-200"
        >
          <Heart size={18} />
        </button>
      </div>
    </div>
  );
};

export default ProductActions;
