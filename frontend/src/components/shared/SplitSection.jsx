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
  reverse = false, // desktop control
  mobileContentFirst = true, // mobile control
}) => {
  return (
    <section>
      <Container>
        <div className="grid grid-cols-1 bg-[#f5f5f5] lg:grid-cols-2">
          {/* CONTENT */}
          <div
            className={`flex justify-center px-6 py-14 lg:px-16 lg:py-20 ${mobileContentFirst ? 'order-1' : 'order-2'} ${reverse ? 'lg:order-2' : 'lg:order-1'} `}
          >
            <div className="max-w-md text-center">
              {subtitle && (
                <p className="mb-6 text-lg font-semibold tracking-[3px] text-[#807F86] uppercase">
                  {subtitle}
                </p>
              )}
              <h2 className="mb-6 font-serif text-2xl leading-8 font-bold tracking-[0.04em] text-[#3A3845] uppercase md:text-[28px]">
                {title}
              </h2>
              <p className="mb-8 text-base leading-6 font-normal text-[#595667]">
                {description}
              </p>
              {buttonText && buttonLink && (
                <Link
                  to={buttonLink}
                  className="inline-block text-sm leading-5 font-bold tracking-wide uppercase underline underline-offset-4 transition hover:opacity-70"
                >
                  {buttonText}
                </Link>
              )}
            </div>
          </div>

          {/* IMAGE */}
          <div
            className={`aspect-square sm:aspect-16/10 md:aspect-5/4 lg:aspect-4/3 ${mobileContentFirst ? 'order-2' : 'order-1'} ${reverse ? 'lg:order-1' : 'lg:order-2'} `}
          >
            <img
              src={image}
              alt={imageAlt || title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SplitSection;
