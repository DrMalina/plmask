const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const productTemplate = path.resolve(`src/layouts/product.js`);
  const result = await graphql(`
    query queryProducts {
      allProductsJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  result.data.allProductsJson.edges.forEach(product => {
    createPage({
      path: `produkty/${product.node.slug}`,
      component: productTemplate,
      context: { slug: product.node.slug },
    });
  });
};
