import React from 'react';

const FormInput = ({
  name,
  label,
  error,
  register,
  required,
  pattern,
  ariaDescribedby,
  errorMessage,
}) => {
  return (
    <div className="w-full lg:w-1/2 mb-4 lg:mb-6">
      <label htmlFor={name} className="block">
        {label}
        <span aria-hidden="true" className="text-red-main text-xl">
          {' '}
          *
        </span>
      </label>
      <input
        name={name}
        id={name}
        type="text"
        className={`font-sans w-full shadow border-1 ${
          error ? 'border-red-main' : 'border-gray-500'
        }  rounded py-3 px-4 text-gray-700 leading-tight`}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={ariaDescribedby.join(' ')}
        ref={register({
          required: required,
          pattern: {
            value: pattern,
          },
        })}
      />
      <span
        role="alert"
        id={ariaDescribedby[0]}
        className={`text-red-main italic mt-2 ${
          error && error.type === 'required' ? 'block' : 'hidden'
        }`}
      >
        To pole jest wymagane
      </span>
      <span
        role="alert"
        id={ariaDescribedby[1]}
        className={`text-red-main italic mt-2 ${
          error && error.type === 'pattern' ? 'block' : 'hidden'
        }`}
      >
        {errorMessage}
      </span>
    </div>
  );
};

export default FormInput;
