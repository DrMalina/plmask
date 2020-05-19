import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';

import Layout from '../layouts';
import SEO from '../components/seo';

const HomePage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Strona główna" />
      <div className="mx-auto p-4 md:p-0 mt-12 mb-20 max-w-xs md:max-w-md lg:max-w-xl flex items-center justify-center">
        <h1 className="w-1/2 block text-center font-heading leading-none text-5xl md:text-6xl lg:text-7xl">
          Maseczki
          <br /> ochronne
          <br />
          <span className="text-red-main">
            polskiej
            <br /> produkcji
          </span>
        </h1>
        <Image
          className="w-1/2 ml-4 lg:ml-0 lg:w-56"
          fluid={data.file.childImageSharp.fluid}
          alt=""
        />
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    file(name: { eq: "hero-mask" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default HomePage;
