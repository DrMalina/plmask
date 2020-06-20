import React from 'react';

const Message = ({ setIsFormSent }) => {
  const handleClick = () => setIsFormSent(false);

  return (
    <div className="mx-auto mt-12 mb-20">
      <p className="mt-6">
        Formularz został przesłany - wkrótce się do Ciebie odezwiemy!
      </p>
      <button
        className="font-heading mx-auto lg:ml-0 text-lg w-40 mt-10 border-1 border-gray-700 py-2 px-4 rounded hover:bg-gray-200"
        onClick={handleClick}
      >
        Powrót
      </button>
    </div>
  );
};

export default Message;
