import React from 'react';

import Crowdfunding from '../components/Crowdfunding';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => (
  <>
    <Navigation />
    <main className="container mx-auto">
      {children}
      <Crowdfunding />
    </main>
    <Footer />
  </>
);

export default MainLayout;
