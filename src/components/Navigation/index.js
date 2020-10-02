import React, { useState } from 'react';
import { Link } from 'gatsby';

import HamburgerMenu from './HamburgerMenu';
import Tabs from './Tabs';
import Social from './Social';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <a href="#main" className="sr-only">
        Przejdź do głównej treści
      </a>
      <header className="border-b-1 border-black">
        <div className="max-w-screen-xl mx-auto lg:flex">
          <div className="flex justify-between items-center flex-wrap px-8 py-5">
            <Link
              to="/"
              aria-label="Home page"
              className="flex py-1 px-3 text-4xl md:text-4xl font-heading"
            >
              <span className="inline-block text-red-main">PL</span>-MASK.PL
            </Link>
            <HamburgerMenu
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
            />
          </div>
          <nav
            className={`w-full block min-h-screen border-t-1 border-black bg-white lg:min-h-full lg:h-auto lg:relative lg:flex lg:border-none ${
              isMenuOpen ? null : 'hidden'
            } z-50`}
            aria-label="Menu główne"
          >
            <ul className="w-full font-heading text-xl lg:text-lg lg:flex lg:items-center lg:justify-around">
              <Tabs />
              <Social />
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navigation;
