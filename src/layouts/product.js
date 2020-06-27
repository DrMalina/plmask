import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from './index';
import SEO from '../components/seo';
import ProductWrapper from '../components/Product/ProductWrapper';

const ProductLayout = ({ data: { datoCmsProduct } }) => {
  return (
    <Layout>
      <SEO title={datoCmsProduct.title} />
      <div className="mx-auto p-4 mt-4 md:p-8 mb-10 text-sm lg:text-base lg:mb-4 max-w-screen-lg">
        <h1 className="font-heading font-bold text-3xl">Produkty</h1>
        <Link to="/produkty" className="italic inline-block mt-2 p-2">
          <span aria-hidden={true}>&#8592;</span> Powrót do wszystkich produktów
        </Link>
        <ProductWrapper product={datoCmsProduct} />
        <div className="mt-12 lg:mt-24 lg:mb-6 mx-auto text-center font-heading text-2xl">
          <p>
            Pamiętaj, że kupując od nas wspierasz{' '}
            <span className="text-red-600">
              polskie firmy i polskie szpitale.
            </span>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query querySingleProduct($id: String!) {
    datoCmsProduct(id: { eq: $id }) {
      id
      productType
      buyUrl
      title
      available
      details
      description
      images {
        fluid {
          src
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
`;

export default ProductLayout;
