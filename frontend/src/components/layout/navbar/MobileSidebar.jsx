import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { assets } from '../../../assets/data/assets';
import IconButton from '../../ui/IconButton';
import { X } from 'lucide-react';
import { navLinks } from './navLinks';
import { getNavClass } from '../../../utils/navClass';

const MobileSidebar = ({ openMenu, setOpenMenu }) => {
  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${openMenu ? 'bg-black/40 opacity-100 backdrop-blur-sm' : 'pointer-events-none opacity-0'}`}
      onClick={() => setOpenMenu(false)}
    >
      {/* panel */}
      <aside
        className={`h-full w-[70%] bg-white p-5 shadow-xl transition-transform duration-300 sm:w-[50%] md:w-[320px] ${openMenu ? 'translate-x-0' : '-translate-x-full'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sidebar Header */}
        <div className="mb-6 flex items-center justify-between border-b pb-4">
          <Link to="/" onClick={() => setOpenMenu(false)}>
            <img src={assets.logo} alt="Brand Logo" className="h-8 w-auto" />
          </Link>

          <IconButton ariaLabel="Close menu" onClick={() => setOpenMenu(false)}>
            <X className="h-6 w-6" />
          </IconButton>
        </div>

        {/* Mobile Links */}
        <ul className="space-y-2 p-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                onClick={() => setOpenMenu(false)}
                className={getNavClass}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default MobileSidebar;
