import React from 'react';

import Layout from '../layouts';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="Nie odnaleziono strony" />
    <section className="mx-auto text-center mt-12">
      <h1 className="font-heading text-4xl">Błąd 404</h1>
      <h2>Strona nie została odnaleziona</h2>
    </section>
  </Layout>
);

export default NotFoundPage;
