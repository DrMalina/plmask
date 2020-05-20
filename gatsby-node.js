const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const productTemplate = path.resolve(`src/layouts/product.js`);
  const result = await graphql(`
    query queryProducts {
      allProductsJson {
        edges {
          node {
            id
            name
            slug
            protection
            featuredImage {
              childImageSharp {
                fluid(quality: 100) {
                  src
                }
              }
            }
          }
        }
      }
    }
  `);

  result.data.allProductsJson.edges.forEach(product => {
    createPage({
      path: `produkty/${product.node.slug}`,
      component: productTemplate,
      context: { product },
    });
  });
};
