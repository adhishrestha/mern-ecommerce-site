import React from 'react';
import { Link } from 'react-router-dom';

const footerLinkClass =
  'text-sm text-[#E5E5E5E5] transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm';
const FooterColumn = ({ title, links }) => {
  return (
    <div>
      {/* Section Title */}
      <h2 className="mb-8 text-base font-semibold text-white uppercase">
        {title}
      </h2>

      {/* Navigation Links */}
      <ul className="space-y-5">
        {links.map((link) => (
          <li key={link.name}>
            <Link to={link.path} className={footerLinkClass}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
