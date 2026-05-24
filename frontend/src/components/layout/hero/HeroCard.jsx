import React from 'react';

const HeroCard = ({ icon, children, className = '' }) => {
  return (
    <>
      {/* MOBILE + TABLET CARD */}
      <div className="w-full bg-[#826F66] px-6 py-10 text-center text-[#FFFDFB] sm:px-10 lg:hidden">
        {icon && (
          <img
            src={icon}
            alt=""
            aria-hidden="true"
            className="mx-auto mb-10 h-20 w-20 object-contain"
          />
        )}

        {children}
      </div>

      {/* DESKTOP CARD */}
      <div
        className={`hidden h-full max-w-[420px] flex-col items-center justify-center bg-[#826F66] px-10 text-center text-[#FFFDFB] lg:flex ${className} `}
      >
        {icon && (
          <img
            src={icon}
            alt=""
            aria-hidden="true"
            className="mx-auto mb-10 h-20 w-20 object-contain"
          />
        )}

        {children}
      </div>
    </>
  );
};

export default HeroCard;
