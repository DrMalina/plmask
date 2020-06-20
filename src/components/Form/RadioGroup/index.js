import React from 'react';

import RadioInput from '../RadioInput';

const RadioGroup = ({ register, selectedPurchaseOption }) => {
  return (
    <div className="mt-2 lg:mt-0 flex flex-col lg:flex-row lg:flex-wrap">
      <RadioInput
        field="purchase"
        option="individual"
        label="Zakup indywidualny"
        defaultChecked={true}
        register={register}
      />
      <RadioInput
        field="purchase"
        option="wholesale"
        label="Zakup hurtowy"
        register={register}
      />
      <RadioInput
        field="purchase"
        option="hospitals"
        label="Maseczki dla szpitali"
        register={register}
        selectedPurchaseOption={selectedPurchaseOption}
      />
    </div>
  );
};

export default RadioGroup;
