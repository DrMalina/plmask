import React, { useState } from 'react';

import Layout from '../layouts';
import SEO from '../components/seo';

import FormWrapper from '../components/Form/FormWrapper';
import Message from '../components/Form/Message';

const Contact = () => {
  const [isFormSent, setIsFormSent] = useState(false);

  return (
    <Layout renderCrowdfunding={false}>
      <SEO title="Kontakt" />
      <div className="mx-auto mt-4 p-4 md:p-6 text-sm mb-4 lg:mt-6 lg:p-8 lg:text-base lg:mb-0 max-w-screen-lg">
        <h1 className="font-heading font-bold leading-tight text-3xl">
          Kontakt
        </h1>
        <FormWrapper isFormSent={isFormSent} setIsFormSent={setIsFormSent} />
        {isFormSent && <Message setIsFormSent={setIsFormSent} />}
      </div>
    </Layout>
  );
};

export default Contact;
