// import React from "react";
// import { Star } from "lucide-react";

// const ProductRating = ({ rating = 0, reviewCount = 0 }) => {
//   const stars = Array.from({ length: 5 }, (_, i) => {
//     const value = i + 1;

//     if (rating >= value) return "full";
//     if (rating >= value - 0.5) return "half";
//     return "empty";
//   });

//   return (
//     <div className="flex items-center gap-2">
//       {/* Stars */}
//       <div className="flex items-center gap-1">
//         {stars.map((type, i) => (
//           <Star
//             key={i}
//             size={16}
//             className={
//               type === "full"
//                 ? "fill-[#C69B7B] text-[#C69B7B]"
//                 : type === "half"
//                   ? "fill-[#C69B7B]/50 text-[#C69B7B]"
//                   : "text-gray-300"
//             }
//           />
//         ))}
//       </div>

//       {/* Text */}
//       <span className="text-sm text-gray-600">
//         {rating.toFixed(1)} ({reviewCount})
//       </span>
//     </div>
//   );
// };

// export default ProductRating;
import React from 'react';
import { Star } from 'lucide-react';

const ProductRating = React.memo(({ rating = 0, reviewCount = 0 }) => {
  const stars = Array.from({ length: 5 }, (_, i) => {
    const value = i + 1;

    if (rating >= value) return 'full';
    if (rating >= value - 0.5) return 'half';
    return 'empty';
  });

  return (
    <div className="flex items-center gap-2" aria-label="Product rating">
      <div className="flex items-center gap-1">
        {stars.map((type, i) => (
          <Star
            key={i}
            size={18}
            className={
              type === 'full'
                ? 'fill-[#C69B7B] text-[#C69B7B]'
                : type === 'half'
                  ? 'fill-[#C69B7B]/50 text-[#C69B7B]'
                  : 'text-gray-300'
            }
          />
        ))}
      </div>

      <span className="text-sm text-gray-600">
        {rating.toFixed(1)} ({reviewCount})
      </span>
    </div>
  );
});

export default ProductRating;
