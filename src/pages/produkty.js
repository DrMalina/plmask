import React from 'react';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image/withIEPolyfill';

import Layout from '../layouts';
import SEO from '../components/seo';

const Products = ({ data }) => (
  <Layout>
    <SEO title="Produkty" />
    <div className="mx-auto mt-4 p-4 md:p-8 mb-10 text-sm lg:text-base lg:mb-8 max-w-screen-lg">
      <h1 className="font-heading font-bold text-3xl">Produkty</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 row-gap-10 text-center mt-4 mb-6 lg:mb-0 px-2 md:px-0">
        {data.products.edges.map(product => (
          <div
            className="flex flex-col border-1 border-gray-300 pb-6"
            key={product.node.id}
          >
            <Link to={`/produkty/${product.node.slug}`} className="w-full h-72">
              <Image
                fluid={product.node.featuredImage.childImageSharp.fluid}
                alt={product.node.name}
                objectFit={product.node.type === 'mask' ? 'cover' : 'contain'}
                className="mx-auto w-4/5 lg:w-full h-72"
              />
            </Link>
            <h2 className="px-2 font-heading text-2xl lg:text-lg mt-2 mb-2">
              {product.node.name}
            </h2>
            <div className="flex-grow flex flex-col justify-end">
              <Link
                className="block mt-4 mx-auto text-gray-800 flex items-center py-2 px-8"
                to={`/produkty/${product.node.slug}`}
              >
                <span className="font-heading">Zobacz szczegóły</span>
                <svg
                  className="w-6 h-4"
                  aria-hidden={true}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M506.134 241.843l-.018-.019-104.504-104c-7.829-7.791-20.492-7.762-28.285.068-7.792 7.829-7.762 20.492.067 28.284L443.558 236H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h423.557l-70.162 69.824c-7.829 7.792-7.859 20.455-.067 28.284 7.793 7.831 20.457 7.858 28.285.068l104.504-104 .018-.019c7.833-7.818 7.808-20.522-.001-28.314z" />
                </svg>
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
