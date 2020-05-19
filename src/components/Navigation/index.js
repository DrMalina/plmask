import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Image from 'gatsby-image';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "logo" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  const renderMenuSVG = () => {
    if (!isMenuOpen) {
      return (
        <svg
          className="fill-current h-10 w-8"
          aria-hidden="true"
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
          aria-hidden="true"
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
    <header className="border-b-1 border-black">
      <div className="max-w-screen-xl mx-auto lg:flex">
        <div className="flex justify-between items-center flex-wrap px-8 py-5">
          <Link to="#" className="sr-only">
            Przejdź do głównej treści
          </Link>
          <Link
            to="/"
            className="h-auto w-40 lg:w-64"
            aria-label="Przejdź do strony powitalnej"
          >
            <Image
              fluid={data.file.childImageSharp.fluid}
              alt="Logo PL-MASK.PL"
            />
          </Link>
          <button
            aria-expanded={isMenuOpen}
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Otwórz/Zamknij menu</span>
            {renderMenuSVG()}
          </button>
        </div>
        <nav
          className={`w-full block min-h-screen border-t-1 border-black bg-white lg:min-h-full lg:h-auto lg:relative lg:flex lg:border-none ${
            isMenuOpen ? null : 'hidden'
          } z-50`}
          aria-label="Menu główne"
        >
          <ul className="w-full font-heading text-xl lg:text-lg lg:flex lg:items-center lg:justify-around">
            <li className="border-b-1 border-gray-200 lg:border-none lg:hover:text-red-main">
              <Link
                to="/o-nas"
                className="inline-block w-full px-8 py-5 lg:p-0"
              >
                O nas
              </Link>
            </li>
            <li className="border-b-1 border-gray-200 lg:border-none lg:hover:text-red-main">
              <Link
                to="/produkty"
                className="inline-block w-full px-8 py-5 lg:p-0"
              >
                Produkty
              </Link>
            </li>
            <li className="border-b-1 border-gray-200 lg:border-none lg:hover:text-red-main">
              <Link
                to="/uzytkowanie"
                className="inline-block w-full px-8 py-5 lg:p-0"
              >
                Użytkowanie
              </Link>
            </li>
            <li className="border-b-1 border-gray-200 lg:border-none lg:hover:text-red-main">
              <Link
                to="/wspolpraca"
                className="inline-block w-full px-8 py-5 lg:p-0"
              >
                Współpraca
              </Link>
            </li>
            <li className="border-b-1 border-gray-200 lg:border-none lg:hover:text-red-main">
              <Link
                to="/kontakt"
                className="inline-block w-full px-8 py-5 lg:p-0"
              >
                Kontakt
              </Link>
            </li>
            <li className="border-b-1 border-gray-200 px-8 py-5 lg:p-0 lg:border-none">
              <ul
                className="flex items-center"
                aria-label="Zmiana języka strony i social media"
              >
                <li>
                  <Link
                    to="#"
                    aria-label="Zmień język strony na polski / Change language to Polish"
                  >
                    <svg
                      className="w-8 h-8 mr-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <title>Język polski</title>
                      <g fill="#f0f0f0">
                        <path d="M0 85.337h512v341.326H0z" />
                        <path d="M0 85.337h512V256H0z" />
                      </g>
                      <path fill="#d80027" d="M0 256h512v170.663H0z" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    aria-label="Zmień język strony na angielski / Change language to
                      English"
                  >
                    <svg
                      className="w-8 h-8 mr-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <title>Język angielski</title>
                      <path fill="#f0f0f0" d="M0 85.333h512V426.67H0z" />
                      <path
                        fill="#d80027"
                        d="M288 85.33h-64v138.666H0v64h224v138.666h64V287.996h224v-64H288z"
                      />
                      <g fill="#0052b4">
                        <path d="M393.785 315.358L512 381.034v-65.676zM311.652 315.358L512 426.662v-31.474l-143.693-79.83zM458.634 426.662l-146.982-81.664v81.664z" />
                      </g>
                      <path
                        fill="#f0f0f0"
                        d="M311.652 315.358L512 426.662v-31.474l-143.693-79.83z"
                      />
                      <path
                        fill="#d80027"
                        d="M311.652 315.358L512 426.662v-31.474l-143.693-79.83z"
                      />
                      <g fill="#0052b4">
                        <path d="M90.341 315.356L0 365.546v-50.19zM200.348 329.51v97.151H25.491z" />
                      </g>
                      <path
                        fill="#d80027"
                        d="M143.693 315.358L0 395.188v31.474l200.348-111.304z"
                      />
                      <g fill="#0052b4">
                        <path d="M118.215 196.634L0 130.958v65.676zM200.348 196.634L0 85.33v31.474l143.693 79.83zM53.366 85.33l146.982 81.664V85.33z" />
                      </g>
                      <path
                        fill="#f0f0f0"
                        d="M200.348 196.634L0 85.33v31.474l143.693 79.83z"
                      />
                      <path
                        fill="#d80027"
                        d="M200.348 196.634L0 85.33v31.474l143.693 79.83z"
                      />
                      <g fill="#0052b4">
                        <path d="M421.659 196.636L512 146.446v50.19zM311.652 182.482V85.331h174.857z" />
                      </g>
                      <path
                        fill="#d80027"
                        d="M368.307 196.634L512 116.804V85.33L311.652 196.634z"
                      />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link to="#" aria-label="Zobacz nas na Facebooku">
                    <svg
                      className="w-6 h-6 mr-4"
                      aria-hidden="true"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      strokeLinejoin="round"
                      strokeMiterlimit="2"
                    >
                      <title>Facebook</title>
                      <path
                        d="M449.446 0C483.971 0 512 28.03 512 62.554v386.892C512 483.97 483.97 512 449.446 512H342.978V319.085h66.6l12.672-82.621h-79.272v-53.617c0-22.603 11.073-44.636 46.58-44.636H425.6v-70.34s-32.71-5.582-63.982-5.582c-65.288 0-107.96 39.569-107.96 111.204v62.971h-72.573v82.621h72.573V512H62.554C28.03 512 0 483.97 0 449.446V62.554C0 28.03 28.029 0 62.554 0h386.892z"
                        fill="#1777f2"
                      />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link to="#" aria-label="Zobacz nas na instagramie">
                    <svg
                      className="w-6 h-6"
                      aria-hidden="true"
                      height="512"
                      viewBox="0 0 24 24"
                      width="512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Instagram</title>
                      <linearGradient
                        id="a"
                        gradientTransform="matrix(0 -1.982 -1.844 0 -132.522 -51.077)"
                        gradientUnits="userSpaceOnUse"
                        x1="-37.106"
                        x2="-26.555"
                        y1="-72.705"
                        y2="-84.047"
                      >
                        <stop offset="0" stopColor="#fd5" />
                        <stop offset=".5" stopColor="#ff543e" />
                        <stop offset="1" stopColor="#c837ab" />
                      </linearGradient>
                      <path
                        d="M1.5 1.633C-.386 3.592 0 5.673 0 11.995c0 5.25-.916 10.513 3.878 11.752 1.497.385 14.761.385 16.256-.002 1.996-.515 3.62-2.134 3.842-4.957.031-.394.031-13.185-.001-13.587-.236-3.007-2.087-4.74-4.526-5.091C18.89.029 18.778.005 15.91 0 5.737.005 3.507-.448 1.5 1.633z"
                        fill="url(#a)"
                      />
                      <path
                        d="M11.998 3.139c-3.631 0-7.079-.323-8.396 3.057-.544 1.396-.465 3.209-.465 5.805 0 2.278-.073 4.419.465 5.804 1.314 3.382 4.79 3.058 8.394 3.058 3.477 0 7.062.362 8.395-3.058.545-1.41.465-3.196.465-5.804 0-3.462.191-5.697-1.488-7.375-1.7-1.7-3.999-1.487-7.374-1.487zm-.794 1.597c7.574-.012 8.538-.854 8.006 10.843-.189 4.137-3.339 3.683-7.211 3.683-7.06 0-7.263-.202-7.263-7.265 0-7.145.56-7.257 6.468-7.263zm5.524 1.471a1.063 1.063 0 100 2.126 1.063 1.063 0 000-2.126zm-4.73 1.243a4.55 4.55 0 10.001 9.101 4.55 4.55 0 00-.001-9.101zm0 1.597c3.905 0 3.91 5.908 0 5.908-3.904 0-3.91-5.908 0-5.908z"
                        fill="#fff"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
