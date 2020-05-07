import React from 'react';
import { Link } from 'gatsby';

const Crowdfunding = () => (
  <div className="font-heading mt-20 flex justify-evenly lg:justify-center">
    <div className="flex flex-col items-center leading-none lg:mr-6">
      <div className="flex flex-col items-center text-xl">
        <p className="text-center">
          przekazaliśmy <br />
          <span className="text-6xl">7000</span> <br />
          maseczek <br />
          szpitalom
        </p>
      </div>
    </div>
    <Link
      to="#"
      aria-labelledby="crowdfund"
      className="block flex flex-col items-center justify-between"
    >
      <svg
        className="w-16 h-16"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 480 480"
      >
        <path d="M368 208v48h64v-48h-64zm48 32h-32v-16h32v16zM368 272v48h64v-48h-64zm48 32h-32v-16h32v16zM368 336v48h64v-48h-64zm48 32h-32v-16h32v16zM368 400v48h64v-48h-64zm48 32h-32v-16h32v16zM272 80V32h-64v48h-48v64h48v48h64v-48h48V80h-48zm32 48h-48v48h-32v-48h-48V96h48V48h32v48h48v32z" />
        <path d="M352 176V0H128v176H16v304h448V176H352zM128 464H32V192h96v272zm104 0h-40V320h40v144zm56 0h-40V320h40v144zm48 0h-32V304H176v160h-32V16h192v448zm112 0h-96V192h96v272z" />
        <path d="M48 208v48h64v-48H48zm48 32H64v-16h32v16zM48 272v48h64v-48H48zm48 32H64v-16h32v16zM48 336v48h64v-48H48zm48 32H64v-16h32v16zM48 400v48h64v-48H48zm48 32H64v-16h32v16z" />
      </svg>
      <p
        id="crowdfund"
        className="text-xl text-red-main text-center leading-none"
      >
        Ufunduj maseczki <br />
        razem z nami
      </p>
    </Link>
  </div>
);

export default Crowdfunding;
