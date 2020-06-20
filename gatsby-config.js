require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `PL-MASK.PL`,
    description: `Maseczki ochronne polskiej produkcji. Każde 10 sprzedanych przez nas maseczek finansuje produkcję gratisowej maseczki dla szpitali zakaźnych w Polsce.`,
    keywords: ['maseczki', 'polska firma', 'covid'],
    author: `PL-Mask`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `PL-MASK.PL - Produkcja maseczek ochronnych`,
        short_name: `PL-MASK.PL`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Raleway\:400`, `Bebas Neue\:400,700`],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        tailwind: true, // Enable tailwindcss support
        ignore: ['react-image-lightbox/style.css'], // Ignore files/folders
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.API_DATO_CMS,
      },
    },
  ],
};
