import React from 'react';

import Crowdfunding from '../components/Crowdfunding';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MainLayout = ({ renderCrowdfunding = true, children }) => {
  return (
    <>
      <Navigation />
      <main id="main" className="container mx-auto">
        {children}
        {renderCrowdfunding && <Crowdfunding />}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
