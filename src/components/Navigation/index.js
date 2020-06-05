import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Image from 'gatsby-image';

import HamburgerMenu from './HamburgerMenu';
import Tabs from './Tabs';
import Social from './Social';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "logo" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <header className="border-b-1 border-black">
      <div className="max-w-screen-xl mx-auto lg:flex">
        <div className="flex justify-between items-center flex-wrap px-8 py-5">
          <a href="#main" className="sr-only">
            Przejdź do głównej treści
          </a>
          <Link to="/" className="h-auto w-40 lg:w-64">
            <Image fluid={data.file.childImageSharp.fluid} alt="PL-MASK.PL" />
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
  );
};

export default Navigation;
