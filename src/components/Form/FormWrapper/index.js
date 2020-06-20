import React from 'react';
import { useForm } from 'react-hook-form';

import FormInput from '../FormInput';
import FormTextArea from '../FormTextarea';
import FormGdpr from '../FormGdpr';
import FormSubmit from '../FormSubmit';
import RadioGroup from '../RadioGroup';

const regEx_Email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const regEx_Phone = /(^|\W)(\(?(\+|00)?48\)?)?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}(?!\w)/;

const FormWrapper = ({ isFormSent, setIsFormSent }) => {
  const { register, errors, watch, handleSubmit } = useForm({
    mode: 'onBlur',
  });

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const onSubmit = ({ email, phone, purchase, message }, e) => {
    const formQuery = { email, phone, purchase, message };

    e.preventDefault();
    setIsFormSent(true);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formQuery }),
    })
      .then(() => setIsFormSent(true))
      .catch(error => alert(error));
  };

  const selectedPurchaseOption = watch('purchase');

  if (!isFormSent) {
    return (
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="w-full flex flex-col flex-wrap mt-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input type="hidden" name="form-name" value="contact" />
        <FormInput
          name="email"
          label="Email"
          error={errors.email}
          register={register}
          required={true}
          pattern={regEx_Email}
          ariaDescribedby={['emailErrorRequired', 'emailErrorPattern']}
          errorMessage="Nieprawidłowy adres email"
        />
        <FormInput
          name="phone"
          label="Numer telefonu"
          error={errors.phone}
          register={register}
          required={true}
          pattern={regEx_Phone}
          ariaDescribedby={['phoneErrorRequired', 'phoneErrorPattern']}
          errorMessage="Nieprawidłowy numer"
        />
        <RadioGroup
          register={register}
          selectedPurchaseOption={selectedPurchaseOption}
        />
        <FormTextArea
          label="Wiadomość"
          name="message"
          maxLength={1500}
          register={register}
        />
        <FormGdpr register={register} error={errors.gdpr} />
        <FormSubmit />
      </form>
    );
  } else {
    return null;
  }
};

export default FormWrapper;
