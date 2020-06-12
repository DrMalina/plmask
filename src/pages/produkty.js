import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layouts';
import SEO from '../components/seo';
import ProductCard from '../components/Product/ProductCard';

const Products = ({ data }) => {
  const renderError = () => {
    if (!data) {
      return (
        <h2 className="col-span-1 md:col-span-2 lg:col-span-3 text-center font-bold text-lg">
          Coś poszło nie tak...
        </h2>
      );
    }
  };

  return (
    <Layout>
      <SEO title="Produkty" />
      <div className="mx-auto mt-4 p-4 md:p-8 mb-10 text-sm lg:text-base lg:mb-8 max-w-screen-lg">
        <h1 className="font-heading font-bold text-3xl">Produkty</h1>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 row-gap-10 text-center mt-4 mb-6 lg:mb-0 px-2 md:px-0">
          {renderError()}
          {data.products.nodes.map(product => (
            <ProductCard
              key={product.id}
              type={product.productType}
              title={product.title}
              slug={product.slug}
              fluid={product.featuredImage.fluid}
            />
          ))}
        </section>
      </div>
    </Layout>
  );
};

export default Products;

export const query = graphql`
  {
    products: allDatoCmsProduct(sort: { fields: title }) {
      nodes {
        id
        productType
        title
        slug
        featuredImage {
          fluid(maxWidth: 600) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
  }
`;
