import React from 'react';

const FormTextArea = ({ label, name, maxLength, register }) => {
  return (
    <div className="mt-4">
      <label htmlFor="msg" className="block w-full">
        {label}
      </label>
      <textarea
        name={name}
        id={name}
        rows="3"
        maxLength={maxLength}
        className="w-full lg:w-3/4 shadow border-1 border-gray-500 rounded py-2 px-3 text-gray-700 text-sm"
        ref={register}
      ></textarea>
    </div>
  );
};

export default FormTextArea;
