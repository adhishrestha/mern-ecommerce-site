import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { assets } from '../../../assets/data/assets';
import { navLinks } from './navLinks';
import {
  ChevronDown,
  ChevronRight,
  CircleUserRound,
  Heart,
  Search,
  ShoppingCart,
} from 'lucide-react';
import IconButton from '../../ui/IconButton';
import Dropdown from '../../ui/Dropdown';
import { getNavClass } from '../../../utils/navClass';

const DesktopNav = ({ showUserMenu, setShowUserMenu }) => {
  return (
    <div className="hidden items-center justify-between py-4 lg:flex">
      {/* Logo */}
      <Link to="/" aria-label="Homepage">
        <img src={assets.logo} alt="Brand Logo" className="h-9 w-auto" />
      </Link>

      {/* Nav */}
      <ul className="flex gap-10">
        {navLinks.map((link) => (
          <li key={link.name}>
            <NavLink to={link.path} className={getNavClass}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Icons */}
      <div className="flex items-center gap-6">
        <IconButton ariaLabel="Search">
          <Search className="h-5 w-5" />
        </IconButton>
        <Dropdown
          open={showUserMenu}
          setOpen={setShowUserMenu}
          className="w-44 p-2"
          trigger={
            <IconButton
              ariaLabel="User Menu"
              ariaExpand={showUserMenu}
              className="flex items-center gap-1"
            >
              <CircleUserRound className="h-5 w-5" />
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${showUserMenu ? 'rotate-180' : ''}`}
              />
            </IconButton>
          }
        >
          <ul className="flex flex-col gap-1">
            <li>
              <Link
                to="/profile"
                className="block rounded-md px-3 py-2 text-sm hover:bg-gray-100"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="block rounded-md px-3 py-2 text-sm hover:bg-gray-100"
              >
                Order
              </Link>
            </li>
            <li>
              <button
                to="/profile"
                className="w-full rounded-md px-3 py-2 text-left text-sm hover:bg-gray-100"
              >
                Logout
              </button>
            </li>
          </ul>
        </Dropdown>
        <IconButton ariaLabel="Wish List">
          <Heart className="h-5 w-5" />
        </IconButton>
        <IconButton ariaLabel="Cart">
          <ShoppingCart className="h-5 w-5" />
        </IconButton>
      </div>
    </div>
  );
};

export default DesktopNav;
