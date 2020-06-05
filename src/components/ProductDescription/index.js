import React from 'react';

const ProductDescription = ({ description }) => (
  <div className="px-4 mt-12">
    <h3 className="font-heading text-lg">Opis</h3>
    <p className="mt-4 text-sm md:text-justify">{description}</p>
  </div>
);

export default ProductDescription;
