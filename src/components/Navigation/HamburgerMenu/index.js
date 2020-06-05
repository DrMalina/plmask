import React from 'react';

const HamburgerMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  const renderMenuSVG = () => {
    if (!isMenuOpen) {
      return (
        <svg
          className="fill-current h-10 w-8"
          aria-hidden={true}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Otwórz Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      );
    } else {
      return (
        <svg
          className="fill-current w-8 h-8"
          aria-hidden={true}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Zamknij menu</title>
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"></path>
        </svg>
      );
    }
  };

  return (
    <button
      aria-expanded={isMenuOpen}
      className="lg:hidden"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      <span className="sr-only">Otwórz / Zamknij menu</span>
      {renderMenuSVG()}
    </button>
  );
};

export default HamburgerMenu;
