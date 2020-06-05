import React from 'react';

const Footer = () => (
  <footer className="flex justify-center items-center h-32 absolute left-0 right-0 bottom-0">
    © {new Date().getFullYear()}
  </footer>
);

export default Footer;
