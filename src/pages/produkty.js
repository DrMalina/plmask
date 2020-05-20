import React from 'react';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';

import Layout from '../layouts';
import SEO from '../components/seo';

const Products = ({ data }) => (
  <Layout>
    <SEO title="Produkty" />
    <div className="mx-auto p-4 md:p-8 mb-2 text-sm lg:text-base lg:mb-4 max-w-4xl">
      <h1 className="font-heading font-bold text-3xl">Produkty</h1>
      <section className="grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center mt-4 mb-6 lg:mb-0">
        {data.products.edges.map(product => (
          <div className="flex flex-col" key={product.node.id}>
            <Link to={`/produkty/${product.node.slug}`}>
              <Image
                fluid={product.node.featuredImage.childImageSharp.fluid}
                alt={product.node.name}
                className="w-4/5 lg:h-72 mx-auto lg:w-full"
              />
            </Link>
            <h2 className="font-bold text-gray-900 mt-2 mb-2">
              {product.node.name}
            </h2>
            <p className="italic text-sm mb-4">{product.node.protection}</p>
            <div className="flex-grow flex flex-col justify-end">
              <Link
                className="block mx-auto w-1/2 text-gray-800 font-bold py-2 px-4 border border-1 border-gray-900 rounded hover:bg-gray-200"
                to={`/produkty/${product.node.slug}`}
                aria-label="Przejdź do szczegółów tego produktu"
              >
                Szczegóły
              </Link>
            </div>
          </div>
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
          name
          slug
          protection
          featuredImage {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`;
