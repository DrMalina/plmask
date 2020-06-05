import React from 'react';

import ProductName from '../ProductName';
import ProductDetails from '../ProductDetails';
import ProductAvailability from '../ProductAvailability';
import ProductDescription from '../ProductDescription';
import ProductCarousel from '../ProductCarousel';

const ProductInfo = ({ product }) => {
  return (
    <section className="grid grid-cols-2 gap-1 md:gap-12 mt-0 md:mt-8">
      <ProductCarousel productImages={product.images} type={product.type} />
      <div className="col-span-2 lg:col-span-1 flex flex-col items-start">
        <ProductName name={product.name} />
        <div className="w-full flex flex-col items-center lg:flex-row mt-4 xs:mt-8">
          <ProductDetails product={product} />
          <ProductAvailability
            available={product.available}
            buyURL={product.buyURL}
          />
        </div>
        <ProductDescription description={product.description} />
      </div>
    </section>
  );
};

export default ProductInfo;
