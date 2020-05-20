import React from 'react';

import Layout from './index';

const ProductLayout = ({ pageContext: { product } }) => (
  <Layout>
    <h1>{product.node.name}</h1>
    <span>image</span>
    <h2>{product.node.protection}</h2>
    <h3>variants</h3>
  </Layout>
);

export default ProductLayout;
