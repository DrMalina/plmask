import React from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const { register, errors, watch, handleSubmit } = useForm({
    mode: 'onBlur',
  });
  const onSubmit = (data, e) => {
    e.target.reset();
    alert(JSON.stringify(data));
  };

  const regEx_Email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  const regEx_Phone = /^[0-9]{9,15}$/g;

  const purchase = watch('purchase');

  return (
    <form
      className="w-full flex flex-col flex-wrap mt-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full lg:w-1/2">
        <label htmlFor="email" className="block">
          Email{' '}
          <span aria-hidden="true" className="text-red-main text-xl">
            *
          </span>
        </label>
        <input
          name="email"
          id="email"
          type="text"
          className={`font-sans w-full shadow border-1 ${
            errors.email ? 'border-red-main' : 'border-gray-500'
          }  rounded py-3 px-4 text-gray-700 leading-tight`}
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby="emailErrorRequired emailErrorPattern"
          ref={register({
            required: true,
            pattern: {
              value: regEx_Email,
            },
          })}
        />
        <span
          role="alert"
          id="emailErrorRequired"
          className={`text-red-main italic mt-2 ${
            errors.email && errors.email.type === 'required'
              ? 'block'
              : 'hidden'
          }`}
        >
          To pole jest wymagane
        </span>
        <span
          role="alert"
          id="emailErrorPattern"
          className={`text-red-main italic mt-2 ${
            errors.email && errors.email.type === 'pattern' ? 'block' : 'hidden'
          }`}
        >
          Nieprawidłowy adres email
        </span>
      </div>
      <div className="w-full lg:w-1/2 mt-4 lg:mt-6">
        <label htmlFor="phone" className="block">
          Numer telefonu{' '}
          <span aria-hidden="true" className="text-red-main text-xl">
            *
          </span>
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          className={`font-sans w-full appearance-none shadow border-1 ${
            errors.phone ? 'border-red-main' : 'border-gray-500'
          } rounded py-2 px-3 text-gray-700`}
          aria-invalid={errors.phone ? 'true' : 'false'}
          aria-describedby="phoneErrorRequired phoneErrorPattern"
          ref={register({
            required: true,
            pattern: { value: regEx_Phone },
            maxLength: 15,
          })}
        />
        <span
          role="alert"
          id="phoneErrorRequired"
          className={`text-red-main italic mt-2 ${
            errors.phone && errors.phone.type === 'required'
              ? 'block'
              : 'hidden'
          }`}
        >
          To pole jest wymagane
        </span>
        <span
          role="alert"
          id="phoneErrorPattern"
          className={`text-red-main italic mt-2 ${
            errors.phone && errors.phone.type === 'pattern' ? 'block' : 'hidden'
          }`}
        >
          Nieprawidłowy numer
        </span>
      </div>
      <div className="mt-6 flex flex-col lg:flex-row lg:flex-wrap">
        <div>
          <input
            type="radio"
            id="individual"
            name="purchase"
            value="individual"
            className="mr-2"
            defaultChecked
            ref={register}
          />
          <label htmlFor="individual" className="mr-4">
            Zakup indywidualny
          </label>
        </div>
        <div className="mt-2 lg:mt-0">
          <input
            type="radio"
            id="wholesale"
            name="purchase"
            value="wholesale"
            className="mr-2"
            ref={register}
          />
          <label htmlFor="wholesale" className="mr-4">
            Zakup hurtowy
          </label>
        </div>
        <div className="mt-2 lg:mt-0">
          <input
            type="radio"
            id="hospitals"
            name="purchase"
            value="hospitals"
            className="mr-2"
            ref={register}
          />
          <label id="hospitals-label" htmlFor="hospitals" className="mr-4">
            Maseczki dla szpitali
          </label>
        </div>
        <p
          aria-labelledby="hospitals-label"
          className={`mt-2 w-3/4 text-sm italic w-full lg:w-3/4 ${
            purchase && purchase === 'hospitals' ? 'block' : 'hidden'
          }`}
        >
          Za naszym pośrednictwem możesz kupić dowolną ilość maseczek dla
          szpitali. Otrzymasz od nas fakturę VAT. My przekażemy w Twoim imieniu
          maseczki do szpitali zakaźnych z którymi współpracujemy. Jako
          potwierdzenie otrzymasz protokół przekazania maseczek potwierdzony
          przez szpital. Taka procedura pozwala na zastosowanie stawki VAT 0%
        </p>
      </div>
      <div className="mt-4">
        <label htmlFor="msg" className="block w-full">
          Wiadomość
        </label>
        <textarea
          name="msg"
          id="msg"
          rows="3"
          className="w-full lg:w-3/4 shadow border-1 border-gray-500 rounded py-2 px-3 text-gray-700 text-sm"
          ref={register}
        ></textarea>
      </div>
      <div className="mt-4">
        <input
          type="checkbox"
          name="gdpr"
          id="gdpr"
          className="mr-2"
          ref={register({ required: true })}
        />
        <label htmlFor="gdpr" className="text-xs">
          <span aria-hidden="true" className="text-red-main text-xl">
            *
          </span>{' '}
          Wyrażam zgodę na przetwarzanie moich danych osobowych przez
          Administratora: DABO CONSULTING zgodnie z Rozporządzeniem Parlamentu
          Europejskiego I Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w
          sprawie ochrony osób fizycznych w związku z przetwarzaniem danych
          osobowych i w sprawie swobodnego przepływu takich danych oraz
          uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych)
          w związku z obsługą formularza zgłoszeniowego, kontaktu i udzieleniem
          informacji przez Administratora na temat sprawy określonej w
          kwestionariuszu kontaktowym. Podanie danych jest dobrowolne, ale
          niezbędne do przetworzenia zapytania. Oświadczam, że podaję dane
          osobowe dobrowolnie i są zgodne z prawdą.
        </label>
        <span
          role="alert"
          id="gdpr"
          className={`text-red-main italic mt-2 ${
            errors.gdpr ? 'block' : 'hidden'
          }`}
        >
          Ta zgoda jest wymagana
        </span>
      </div>
      <button
        className="font-heading mx-auto lg:ml-0 text-lg w-40 mt-4 border-1 border-gray-700 py-2 px-4 rounded hover:bg-gray-200"
        type="submit"
      >
        Wyślij
      </button>
    </form>
  );
};

export default ContactForm;
