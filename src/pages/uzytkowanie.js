import React from 'react';

import Layout from '../layouts';
import SEO from '../components/seo';

const Usage = () => (
  <Layout>
    <SEO title="Użytkowanie" />
    <div className="mx-auto mt-4 p-4 md:p-6 text-sm mb-12 lg:mt-6 lg:p-8 lg:text-base lg:mb-12 max-w-screen-lg">
      <h1 className="font-heading font-bold leading-tight text-3xl">
        Właściwe użytkowanie jednorazowej maseczki ochronnej
      </h1>
      <ol className="list-decimal pl-4">
        <li className="mt-4">Dokładnie umyj i zdezynfekuj ręce</li>
        <li className="mt-4">Otwórz opakowanie z maseczkami</li>
        <li className="mt-4">
          Wyjmij maseczkę i załóż ją na usta i nos, nakładając gumki za uszy
        </li>
        <li className="mt-4">
          Po około godzinie użytkowania maseczki należy wymienić ją na nową w
          celu zachowania jej właściwości chroniących
        </li>
        <li className="mt-4">
          Zdejmij ostrożnie maseczkę za gumki, nie dotykając zewnętrznej części
          maseczki i wrzuć do kosza na odpady z pokrywą
        </li>
        <li className="mt-4 mb-8">
          Po użyciu maski dokładnie umyj i zdezynfekuj ręce
        </li>
      </ol>
      <section>
        <h2 className="font-heading font-bold leading-tight text-3xl">
          Przeczytaj też:
        </h2>
        <ul className="list-disc pl-4">
          <li className="mt-4">
            <a
              className="text-blue-link"
              rel="noopener"
              href="https://www.medonet.pl/koronawirus-pytania-i-odpowiedzi/jak-sie-chronic,rodzaje-maseczek-ochronnych--jaka-maseczke-na-koronawirusa-zaleca-cdc-,artykul,19635775.html"
            >
              Artykuł o rodzajach maseczek ochronnych
            </a>
          </li>
          <li className="mt-4">
            <a
              className="text-blue-link"
              rel="noopener"
              href="https://pl-mask.pl/wp-content/uploads/2020/04/pismo-konsultant.jpg"
            >
              Wytyczne konsultanta krajowego ds. chorób zakaźnych dla maseczek
              ochronnych
            </a>
          </li>
        </ul>
      </section>
    </div>
  </Layout>
);

export default Usage;
