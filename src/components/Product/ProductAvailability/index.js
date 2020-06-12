import React from 'react';
import { Link } from 'gatsby';

const ProductAvailability = ({ available, buyUrl }) => {
  if (available) {
    return (
      <div className="w-full mt-10 lg:mt-0 lg:w-1/2 pr-0 lg:pr-4">
        <div className="text-green-500 flex items-center justify-center">
          <svg
            className="w-4 h-4 fill-current"
            viewBox="0 0 515.556 515.556"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden={true}
          >
            <path d="M0 274.226l176.549 176.886L515.556 112.44l-48.67-47.997-290.337 290L47.996 225.891z" />
          </svg>
          <span className="ml-4 font-heading text-lg">Produkt dostępny</span>
        </div>
        <a
          href={buyUrl}
          rel="noopener"
          className="w-4/5 mx-auto md:w-1/2 lg:w-full border border-1 border-orange-allegro rounded py-2 mt-6 flex items-center justify-center"
        >
          <span className="font-heading text-lg mr-4 text-orange-allegro">
            Kup przez
          </span>
          <svg
            className="w-20"
            viewBox="0 0 145 50"
            fill="#ff5a00"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden={true}
          >
            <path d="M141.72 16.69a13.1 13.1 0 00-20.7 0 13.59 13.59 0 00-2.46 8 13.59 13.59 0 002.46 8 13.1 13.1 0 0020.7 0 13.6 13.6 0 002.46-8 13.6 13.6 0 00-2.46-8zm-4.1 11c-.94 2.81-3.17 5-6.26 5.07s-5.32-2.26-6.25-5.07a9.27 9.27 0 010-6c.94-2.81 3.17-5 6.25-5.07s5.32 2.26 6.26 5.07a9.28 9.28 0 010 5.99zm-94.25 9.4a.74.74 0 01-.74.74h-4.3a.74.74 0 01-.74-.74V1.74a.74.74 0 01.74-.74h4.3a.74.74 0 01.74.74v35.35zm-10.1 0a.74.74 0 01-.74.74h-4.3a.74.74 0 01-.74-.74V1.74a.74.74 0 01.73-.74h4.3a.74.74 0 01.74.74v35.35zm84.32-24v3a.78.78 0 01-1 .85c-4.86-1-7.85 1.16-7.85 5.65v14.5a.74.74 0 01-.74.74h-4.3a.74.74 0 01-.74-.74V22.28a10 10 0 013.17-7.49 11.16 11.16 0 017.87-3.18 16.69 16.69 0 013 .28c.51.17.59.47.59 1.24zM99.18 24.68a13.41 13.41 0 00-2.46-8 13.1 13.1 0 00-20.7 0 14.07 14.07 0 000 16 12.73 12.73 0 0010.35 5.07 13.2 13.2 0 007.37-2.22v3.16c0 4.29-3.75 5.07-6.15 5.22a28.26 28.26 0 01-4.94-.27c-.66-.1-1.12 0-1.12.71v3.8a.65.65 0 00.68.62c5.57.48 9.32.38 12.14-1.23a9.18 9.18 0 004.11-5.23 17.49 17.49 0 00.71-5.22V24.68zm-12.81 8.06c-3.09 0-5.32-2.26-6.26-5.07a9.27 9.27 0 010-6c.94-2.81 3.17-5.07 6.26-5.07 6.91 0 7.14 7.05 7.14 8.07s-.23 8.07-7.14 8.07zM23.55 22.09c0-3.41-.76-6-2.4-7.79s-4.94-2.68-8-2.68a17.34 17.34 0 00-8.75 2.33.55.55 0 00-.27.48l.23 3.76a.67.67 0 001.1.39C9.21 16.27 13.71 15.84 16 17a4 4 0 012 3.61v.55h-6.25c-2.69 0-10.93 1-10.93 8.57v.08a7.34 7.34 0 002.67 6.08 10.56 10.56 0 006.68 1.91h12.65a.74.74 0 00.74-.74v-15zM18 33.18h-7.47a4.62 4.62 0 01-2.65-.93 2.94 2.94 0 01-1.25-2.46c0-1.35.91-4.05 5.46-4.05H18v7.44zm41.2-21.56c-7.65 0-11 5.13-12.07 9.47a14.58 14.58 0 00-.44 3.58 13.6 13.6 0 002.46 8 13.13 13.13 0 0010.35 5.07c4.13.15 6.89-.55 9-1.75a1.17 1.17 0 00.5-1.27v-3.33c0-.68-.41-1-1-.59a13.05 13.05 0 01-8.32 2A6.81 6.81 0 0153 26.73h17a.7.7 0 00.7-.69c.3-4.65-1.05-14.42-11.5-14.42zm-6.11 10.51a5.78 5.78 0 016.12-5.51 5.14 5.14 0 015.44 5.51H53.09z" />
          </svg>
        </a>
      </div>
    );
  } else {
    return (
      <div className="w-full mt-10 lg:mt-0 lg:w-1/2">
        <div className="text-red-500 flex items-center justify-center">
          <svg
            className="fill-current w-4 h-4"
            aria-hidden={true}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"></path>
          </svg>
          <span className="ml-4 font-heading text-lg">
            Produkt chwilowo niedostępny
          </span>
        </div>
        <Link
          to="/kontakt"
          className="font-heading text-lg w-4/5 mx-auto md:w-1/2 lg:w-full border border-1 border-gray-600 hover:bg-gray-200 text-gray-600 hover:text-gray-700 rounded py-2 mt-6 flex items-center justify-center"
        >
          Zapytaj o dostępność
        </Link>
      </div>
    );
  }
};

export default ProductAvailability;
