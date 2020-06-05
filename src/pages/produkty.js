import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layouts';
import SEO from '../components/seo';
import ProductCard from '../components/Product/ProductCard';

const Products = ({ data }) => (
  <Layout>
    <SEO title="Produkty" />
    <div className="mx-auto mt-4 p-4 md:p-8 mb-10 text-sm lg:text-base lg:mb-8 max-w-screen-lg">
      <h1 className="font-heading font-bold text-3xl">Produkty</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 row-gap-10 text-center mt-4 mb-6 lg:mb-0 px-2 md:px-0">
        {data.products.edges.map(product => (
          <ProductCard
            name={product.node.name}
            slug={product.node.slug}
            fluid={product.node.featuredImage.childImageSharp.fluid}
            type={product.node.type}
            key={product.node.id}
          />
        ))}
      </section>
    </div>
  </Layout>
);

export default Products;

export const query = graphql`
  {
    products: allProductsJson {
      edges {
        node {
          id
          type
          name
          slug
          featuredImage {
            childImageSharp {
              fluid(quality: 80) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`;
