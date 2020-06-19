import React from 'react';

const Social = () => (
  <li className="border-b-1 border-gray-200 px-8 py-5 lg:p-0 lg:border-none">
    <ul className="flex items-center" aria-label="Nasze social media">
      <li>
        <button aria-label="Nasz Facebook - zapraszamy wkrótce">
          <svg
            className="w-6 h-6 mr-4"
            aria-hidden={true}
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
          >
            <title>Facebook - zapraszamy wkrótce</title>
            <path
              d="M449.446 0C483.971 0 512 28.03 512 62.554v386.892C512 483.97 483.97 512 449.446 512H342.978V319.085h66.6l12.672-82.621h-79.272v-53.617c0-22.603 11.073-44.636 46.58-44.636H425.6v-70.34s-32.71-5.582-63.982-5.582c-65.288 0-107.96 39.569-107.96 111.204v62.971h-72.573v82.621h72.573V512H62.554C28.03 512 0 483.97 0 449.446V62.554C0 28.03 28.029 0 62.554 0h386.892z"
              fill="#1777f2"
            />
          </svg>
        </button>
      </li>
      <li>
        <button aria-label="Nasz Instagram - zapraszamy wkrótce">
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            height="512"
            viewBox="0 0 24 24"
            width="512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Instagram - zapraszamy wkrótce</title>
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
        </button>
      </li>
    </ul>
  </li>
);

export default Social;
