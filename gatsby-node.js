const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const productTemplate = path.resolve(`src/layouts/product.js`);

  const result = await graphql(`
    query queryProducts {
      allDatoCmsProduct {
        nodes {
          id
          slug
        }
      }
    }
  `);

  result.data.allDatoCmsProduct.nodes.forEach(product => {
    createPage({
      path: `produkty/${product.slug}`,
      component: productTemplate,
      context: { id: product.id },
    });
  });
};
