import React from 'react';

import Layout from '../layouts';
import SEO from '../components/seo';

const About = () => (
  <Layout>
    <SEO title="O nas" />
    <div className="mx-auto mt-4 p-4 md:p-8 mb-2 text-sm lg:text-base lg:mb-4 max-w-screen-lg">
      <h1 className="font-heading font-bold text-3xl">Nasza misja</h1>
      <p>Wspierać polskie firmy, chronić Polaków i polskich lekarzy</p>
      <h2 className="font-heading font-bold text-3xl mt-6 lg:mt-8">
        Dlaczego istniejemy
      </h2>
      <p>
        Pomysł naszej firmy narodził się z konieczności. Kilkoro naszych
        znajomych poprosiło o pomoc w przebranżowieniu swoich działalności ze
        względu na załamanie popytu na ich produkty. Dlatego postanowiliśmy
        stworzyć firmę, która pomoże polskim producentom ochronić miejsca pracy,
        będzie wspierać ochronę zdrowia Polaków oraz przyczyni się do ochrony
        lekarzy w polskich szpitalach. Brzmi to pompatycznie? Być może tak, ale
        wierzymy, że wiele zawdzięczamy Polsce i Europie i musimy je wspierać.
        Zaczynamy teraz. W czasie kiedy wirus zatrząsnął globalną ekonomią. Ale
        to dopiero początek! Pandemia zwróciła uwagę całego świata na jeszcze
        większą konieczność dbania o zdrowie i higienę. Docelowo doprowadzi to z
        pewnością do zmian nawyków w naszym codziennym życiu. Czy muszą być one
        uciążliwe, męczące i nudne? Postaramy się sprawić aby tak się nie stało,
        dostarczając rozwiązania które będą chronić, pomagać, dawać wygodę i
        komfort… a przy okazji dobrze wyglądać.
      </p>
      <h2 className="font-heading font-bold text-3xl mt-6 lg:mt-8">
        Co robimy
      </h2>
      <p>
        Szyjemy maseczki ochronne z certyfikowanych materiałów, maseczki
        sportowe, maseczki dekoracyjne… Każde 10 sprzedanych przez nas maseczek
        finansuje produkcję gratisowej maseczki dla szpitali zakaźnych w Zgierzu
        oraz w Poznaniu. Jeśli Ty lub Twoja firma chcecie dołączyć do pomocy
        szpitalom, możecie za naszym pośrednictwem ufundować każdą dowolną ilość
        maseczek do jednego ze szpitali zakaźnych, które wspieramy (darowizna
        VAT 0%). My zajmiemy się ich dostarczeniem oraz formalnościami
        finansowymi.
      </p>
    </div>
  </Layout>
);

export default About;
