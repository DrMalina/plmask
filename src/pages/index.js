import React from 'react';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';

import Layout from '../layouts';
import SEO from '../components/seo';

const HomePage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Strona główna" />
      <Image
        className="mx-auto max-w-2xl"
        fluid={data.file.childImageSharp.fluid}
        alt="Baner z logiem strony i napisem: Maseczki ochronne polskiej produkcji"
      />
    </Layout>
  );
};

export const query = graphql`
  {
    file(name: { eq: "hero" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default HomePage;
