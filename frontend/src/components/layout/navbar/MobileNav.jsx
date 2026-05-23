import React from 'react';
import IconButton from '../../ui/IconButton';
import { Menu, Search, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { assets } from '../../../assets/data/assets';

const MobileNav = ({ setOpenMenu }) => {
  return (
    <div className="flex items-center justify-between py-4 lg:hidden">
      <IconButton ariaLabel="Open menu" onClick={() => setOpenMenu(true)}>
        <Menu className="h-6 w-6" />
      </IconButton>

      <Link to="/">
        <img src={assets.logo} alt="Brand Logo" className="h-8 w-auto" />
      </Link>

      <div className="flex items-center gap-4">
        <IconButton ariaLabel="Search">
          <Search className="h-5 w-5" />
        </IconButton>
        <IconButton ariaLabel="Cart">
          <ShoppingCart className="h-5 w-5" />
        </IconButton>
      </div>
    </div>
  );
};

export default MobileNav;
