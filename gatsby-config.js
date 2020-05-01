module.exports = {
  siteMetadata: {
    title: `PL-MASK.PL`,
    description: `Maseczki ochronne polskiej produkcji. Szyjemy maseczki ochronne z certyfikowanych materiałów, maseczki sportowe, maseczki dekoracyjne… Każde 10 sprzedanych przez nas maseczek finansuje produkcję gratisowej maseczki dla szpitali zakaźnych w Zgierzu oraz w Poznaniu.`,
    author: `Maciej Malinowski`,
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
        icon: `src/assets/images/cropped-logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Raleway`,
            variants: [`400`, `700`],
          },
          {
            family: `Bebas Neue`,
            subsets: [`latin-ext`],
            variants: [`400`, `700`],
          },
        ],
      },
    },
    // // this (optional) plugin enables Progressive Web App + Offline functionality
    // // To learn more, visit: https://gatsby.dev/offline
    // // `gatsby-plugin-offline`,
  ],
};
