import React from 'react';

const ProductDetails = ({ details }) => {
  // Convert Data from CMS to list items
  // Output: [['exampleProperty1'],[value1]...]
  const listItems = details
    .replace(/\n/g, '')
    .split('* ')
    .slice(1)
    .map(el => el.split(':'));

  return (
    <ul className="w-full text-center text-lg lg:text-left lg:w-1/2 pl-0 lg:pl-4 font-heading list-none list-inside">
      {listItems.map((property, idx) => (
        <li key={idx}>
          <span className="text-gray-700">{property[0]}: </span>
          <span className="font-semibold">{property[1]}</span>
        </li>
      ))}
    </ul>
  );
};

export default ProductDetails;
