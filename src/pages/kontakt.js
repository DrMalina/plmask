import React from 'react';

import Layout from '../layouts';
import SEO from '../components/seo';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <Layout renderCrowdfunding={false}>
      <SEO title="Kontakt" />
      <div className="mx-auto mt-4 p-4 md:p-6 text-sm mb-4 lg:mt-2 lg:p-8 lg:text-base lg:mb-12 max-w-4xl">
        <h1 className="font-heading font-bold leading-tight text-3xl">
          Kontakt
        </h1>
        <ContactForm />
      </div>
    </Layout>
  );
};

export default Contact;
