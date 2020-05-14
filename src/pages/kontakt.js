import React from 'react';

import Layout from '../layouts';
import SEO from '../components/seo';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <Layout>
      <SEO title="Kontakt" />
      <div className="mx-auto w-full mt-4 mb-6 p-4 md:p-6 text-sm lg:mb-4 lg:p-0 lg:mt-6 lg:text-base max-w-4xl">
        <h1 className="font-heading font-bold leading-tight text-3xl">
          Kontakt
        </h1>
        <ContactForm />
      </div>
    </Layout>
  );
};

export default Contact;
