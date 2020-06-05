import React from 'react';

const ProductDetails = ({ product }) => {
  let packages = '';

  if (product.packaging.length > 1) {
    packages = product.packaging.map(el => el).join(' / ');
  } else {
    packages = product.packaging;
  }

  if (product.type === 'mask') {
    return (
      <ul className="w-full text-center text-lg lg:text-left md:text-base lg:w-1/2 pl-0 lg:pl-4 font-heading list-none list-inside">
        <li>
          <span className="text-gray-700">Certyfikat: </span>
          <span className="font-semibold">{product.protection}</span>
        </li>
        <li>
          <span className="text-gray-700">Rodzaj: </span>
          <span className="font-semibold">{product.usage}</span>
        </li>
        <li>
          <span className="text-gray-700">Skład: </span>
          <span className="font-semibold">{product.composition}</span>
        </li>
        <li>
          <span className="text-gray-700">Warstwy: </span>
          <span className="font-semibold">{product.layers}</span>
        </li>
        <li>
          <span className="text-gray-700">Wymiary: </span>
          <span className="font-semibold">{product.size}</span>
        </li>
        <li>
          <span className="text-gray-700">Płeć: </span>
          <span className="font-semibold">Produkt {product.sex}</span>
        </li>
        <li>
          <span className="text-gray-700">Opakowanie: </span>
          <span className="font-semibold">{packages} szt.</span>
        </li>
        <li>
          <span className="text-gray-700">VAT: </span>
          <span className="font-semibold">{product.vat}%</span>
        </li>
        <li>
          <span className="text-gray-700">Kraj pochodzenia: </span>
          <span className="font-semibold">{product.originCountry}</span>
        </li>
      </ul>
    );
  } else if (product.type === 'gloves') {
    return (
      <ul className="w-full text-center text-lg lg:text-left md:text-base lg:w-1/2 pl-0 lg:pl-4 font-heading list-none list-inside">
        <li>
          <span className="text-gray-700">Typ: </span>
          <span className="font-semibold">{product.protection}</span>
        </li>
        <li>
          <span className="text-gray-700">Rodzaj: </span>
          <span className="font-semibold">{product.usage}</span>
        </li>
        <li>
          <span className="text-gray-700">Surowiec: </span>
          <span className="font-semibold">{product.composition}</span>
        </li>
        <li>
          <span className="text-gray-700">Pudrowanie: </span>
          <span className="font-semibold">{!product.powder && 'Brak'}</span>
        </li>
        <li>
          <span className="text-gray-700">Rozmiar: </span>
          <span className="font-semibold">{product.size}</span>
        </li>
        <li>
          <span className="text-gray-700">Płeć: </span>
          <span className="font-semibold">Produkt {product.sex}</span>
        </li>
        <li>
          <span className="text-gray-700">Opakowanie: </span>
          <span className="font-semibold">{packages} szt.</span>
        </li>
        <li>
          <span className="text-gray-700">VAT: </span>
          <span className="font-semibold">{product.vat}%</span>
        </li>
        <li>
          <span className="text-gray-700">Dystrybutor: </span>
          <span className="font-semibold">{product.distribution}</span>
        </li>
        <li>
          <span className="text-gray-700">Kraj pochodzenia: </span>
          <span className="font-semibold">{product.originCountry}</span>
        </li>
      </ul>
    );
  } else if (product.type === 'spray') {
    return (
      <ul className="w-full text-center text-lg lg:text-left md:text-base lg:w-1/2 pl-0 lg:pl-4 font-heading list-none list-inside">
        <li>
          <span className="text-gray-700">Rodzaj: </span>
          <span className="font-semibold">{product.usage}</span>
        </li>
        <li>
          <span className="text-gray-700">Pojemność: </span>
          <span className="font-semibold">
            {product.variants.map(el => el).join(' / ')} ml
          </span>
        </li>
        <li>
          <span className="text-gray-700">Zawiera: </span>
          <span className="font-semibold">{product.composition}</span>
        </li>
        <li>
          <span className="text-gray-700">Opakowanie: </span>
          <span className="font-semibold">{packages} szt.</span>
        </li>
        <li>
          <span className="text-gray-700">VAT: </span>
          <span className="font-semibold">{product.vat}%</span>
        </li>
        <li>
          <span className="text-gray-700">Kraj pochodzenia: </span>
          <span className="font-semibold">{product.originCountry}</span>
        </li>
      </ul>
    );
  }
};

export default ProductDetails;
