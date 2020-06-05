import React from 'react';
import { Link } from 'gatsby';

const Tabs = () => (
  <>
    <li className="border-b-1 border-gray-200 lg:border-none lg:hover:text-red-main">
      <Link
        to="/o-nas"
        className="inline-block w-full px-8 py-5 lg:py-2 lg:px-2"
      >
        O nas
      </Link>
    </li>
    <li className="border-b-1 border-gray-200 lg:border-none lg:hover:text-red-main">
      <Link
        to="/produkty"
        className="inline-block w-full px-8 py-5 lg:py-2 lg:px-2"
      >
        Produkty
      </Link>
    </li>
    <li className="border-b-1 border-gray-200 lg:border-none lg:hover:text-red-main">
      <Link
        to="/uzytkowanie"
        className="inline-block w-full px-8 py-5 lg:py-2 lg:px-2"
      >
        Użytkowanie
      </Link>
    </li>
    <li className="border-b-1 border-gray-200 lg:border-none lg:hover:text-red-main">
      <Link
        to="/wspolpraca"
        className="inline-block w-full px-8 py-5 lg:py-2 lg:px-2"
      >
        Współpraca
      </Link>
    </li>
    <li className="border-b-1 border-gray-200 lg:border-none lg:hover:text-red-main">
      <Link
        to="/kontakt"
        className="inline-block w-full px-8 py-5 lg:py-2 lg:px-2"
      >
        Kontakt
      </Link>
    </li>
  </>
);

export default Tabs;
