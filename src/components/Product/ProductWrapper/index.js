import React from 'react';

import ProductName from '../ProductName';
import ProductDetails from '../ProductDetails';
import ProductAvailability from '../ProductAvailability';
import ProductDescription from '../ProductDescription';
import ProductCarousel from '../ProductCarousel';

const ProductWrapper = ({ product }) => {
  return (
    <section className="grid grid-cols-2 gap-1 md:gap-12 mt-0 md:mt-8">
      <ProductCarousel
        title={product.title}
        productImages={product.images}
        type={product.productType}
      />
      <div className="col-span-2 lg:col-span-1 flex flex-col items-start">
        <ProductName title={product.title} />
        <div className="w-full flex flex-col items-center lg:flex-row mt-4 xs:mt-8">
          <ProductDetails details={product.details} />
          <ProductAvailability
            available={product.available}
            buyUrl={product.buyUrl}
          />
        </div>
        <ProductDescription description={product.description} />
      </div>
    </section>
  );
};

export default ProductWrapper;
