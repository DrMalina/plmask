import React from 'react';

const RadioInput = ({
  field,
  option,
  label,
  defaultChecked = false,
  register,
  selectedPurchaseOption,
}) => {
  return (
    <>
      <div className="mb-4 lg:mb-0">
        <input
          type="radio"
          id={option}
          name={field}
          value={option}
          className="mr-2"
          defaultChecked={defaultChecked}
          ref={register}
        />
        <label id={`${option}-label`} htmlFor={option} className="mr-4">
          {label}
        </label>
      </div>
      {option === 'hospitals' ? (
        <p
          aria-labelledby="hospitals-label"
          className={`mt-2 w-3/4 text-sm italic w-full lg:w-3/4 ${
            selectedPurchaseOption && selectedPurchaseOption === 'hospitals'
              ? 'block'
              : 'hidden'
          }`}
        >
          Za naszym pośrednictwem możesz kupić dowolną ilość maseczek dla
          szpitali. Otrzymasz od nas fakturę VAT. My przekażemy w Twoim imieniu
          maseczki do szpitali zakaźnych z którymi współpracujemy. Jako
          potwierdzenie otrzymasz protokół przekazania maseczek potwierdzony
          przez szpital. Taka procedura pozwala na zastosowanie stawki VAT 0%
        </p>
      ) : null}
    </>
  );
};

export default RadioInput;
