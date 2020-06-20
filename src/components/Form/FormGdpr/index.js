import React from 'react';

const FormGdpr = ({ register, error }) => {
  return (
    <>
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
          className={`text-red-main italic mt-2 ${error ? 'block' : 'hidden'}`}
        >
          Ta zgoda jest wymagana
        </span>
      </div>
    </>
  );
};

export default FormGdpr;
