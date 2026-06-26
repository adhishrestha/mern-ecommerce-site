import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ image, title, slug }) => {
  return (
    <Link to={`/collections/${slug}`}>
      <article className="group cursor-pointer">
        <div className="aspect-square overflow-hidden bg-gray-100">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="mt-6 text-center">
          <h2 className="text-lg font-semibold tracking-wide text-[#3A3845] uppercase">
            {title}
          </h2>
        </div>
      </article>
    </Link>
  );
};

export default CategoryCard;
