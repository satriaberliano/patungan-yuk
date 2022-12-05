import React from 'react';
import { TfiFaceSad } from 'react-icons/tfi';
import LocaleContext from '../contexts/LocaleContext';

function PageNotFound() {
  const { locale } = React.useContext(LocaleContext);

  return (
    <div className="page__not__found">
      <TfiFaceSad className="sad" />
      <h1>404</h1>
      <p>{locale === 'id' ? 'Oops, halaman tidak ditemukan' : 'Oops, page not found'}</p>
    </div>
  );
}

export default PageNotFound;
