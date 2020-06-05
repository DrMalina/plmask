import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';

import Layout from '../layouts';
import SEO from '../components/seo';

const Cooperation = ({ data }) => (
  <Layout>
    <SEO title="Współpraca" />
    <div className="mx-auto mt-4 p-4 md:p-8 text-sm mb-10 lg:mt-6 lg:p-8 lg:text-base lg:mb-12 max-w-screen-lg">
      <h1 className="font-heading font-bold leading-tight text-3xl">
        Z kim współpracujemy
      </h1>
      <figure className="mt-10">
        <Image fixed={data.dart.childImageSharp.fixed} alt="Logo firmy DART" />
        <figcaption className="mt-4">
          Agencja reklamowa, która kompletnie za darmo przygotowała nam
          wszystkie materiały do komunkacji ze światem. Skorzystajcie z ich
          usług – prawdziwi fachowcy!
        </figcaption>
      </figure>
      <figure className="mt-10">
        <Image
          className="max-w-xs"
          fluid={data.academies.childImageSharp.fluid}
          alt="Loga kolejno od lewej: Akademia Piłkarska Reissa, Akademia Piłkarska Stal Gorzów Wielkopolski, Akademia Piłkarska Falubaz"
        />
        <figcaption className="mt-4">
          Pomogli nam testować nasze produkty i jako pierwsi kupili sporą partię
          materiału w trosce o swoich zawodników. Nasze produkty są dostępne w
          sklepie internetowym{' '}
          <a
            className="text-blue-link"
            href="https://footballpro.pl/"
            rel="noreferrer noopener"
          >
            footballpro.pl
          </a>
          <br />
          Dziękujemy!
        </figcaption>
      </figure>
    </div>
  </Layout>
);

export default Cooperation;

export const query = graphql`
  {
    dart: file(name: { eq: "dart" }) {
      childImageSharp {
        fixed(width: 151, height: 45, quality: 100) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    academies: file(name: { eq: "akademie" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;
