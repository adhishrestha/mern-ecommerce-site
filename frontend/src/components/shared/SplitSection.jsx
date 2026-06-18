import React from 'react';
import Container from '../ui/Container';
import { Link } from 'react-router-dom';

const SplitSection = ({
  subtitle,
  title,
  description,
  buttonText,
  buttonLink,
  image,
  imageAlt,
  reverse = false,
  mobileContentFirst = true,
}) => {
  return (
    <>
      <div className={`flex flex-col overflow-hidden lg:flex-row`}>
        {/* CONTENT */}
        <div
          className={`flex min-w-0 flex-1 items-center justify-center bg-[#F7F6F5] py-14 ${mobileContentFirst ? 'order-1' : 'order-2'} ${reverse ? 'lg:order-2' : 'lg:order-1'} `}
        >
          <div className="max-w-md px-4 text-center sm:px-6 lg:px-0">
            {subtitle && (
              <p className="mb-6 text-lg leading-6 font-semibold tracking-[0.06em] text-[#5A5A5A] uppercase">
                {subtitle}
              </p>
            )}

            <h2 className="mb-6 font-serif text-2xl leading-8 font-bold tracking-[0.04em] text-[#3A3845] uppercase md:text-[28px]">
              {title}
            </h2>

            <p className="mb-8 text-base leading-6 text-[#595667]">
              {description}
            </p>

            {buttonText && buttonLink && (
              <Link
                to={buttonLink}
                aria-label={title}
                className="inline-block text-sm font-bold tracking-[0.06em] text-[#595667] uppercase underline underline-offset-4 transition hover:opacity-70"
              >
                {buttonText}
                <span className="sr-only">{title}</span>
              </Link>
            )}
          </div>
        </div>

        {/* IMAGE */}
        <div
          className={`relative flex-1 overflow-hidden ${mobileContentFirst ? 'order-2' : 'order-1'} ${reverse ? 'lg:order-1' : 'lg:order-2'} aspect-[4/3] lg:aspect-auto`}
        >
          <img
            src={image}
            alt={imageAlt || title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>
    </>
  );
};

export default SplitSection;
