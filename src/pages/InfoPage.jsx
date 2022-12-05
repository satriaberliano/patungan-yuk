import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { AboutPath, LoginPath, RegisterPath } from '../routes';
import logo from '../assets/patungan-image.png';
import LocaleContext from '../contexts/LocaleContext';

function InfoPage() {
  const { locale } = React.useContext(LocaleContext);

  return (
    <div className="info-page">
      <div className="info-page__image">
        <img src={logo} alt="Gambar patungan" />
      </div>
      <div className="info-page__container">
        <div className="info-page__text">
          <h2 tabIndex="0">{locale === 'id' ? 'Selamat Datang di PAYU' : 'Welcome to PAYU'}</h2>
          <p tabIndex="0" className="info-page__text-acronym">Patungan Yuk!</p>
          <p tabIndex="0" className="info-page__text-desc">
            {locale === 'id' ? 'Aplikasi pencatatan patungan yang dapat mempermudah Anda dalam mengumpulkan uang bersama dengan teman, keluarga, dan semua orang di dunia' : 'A joint record-keeping application that can make it easier for you to collect money together with friends, family, and everyone in the world'}
            .
          </p>
        </div>
        <div className="info-page__link">
          <Link to={LoginPath} className="action-submit">
            {locale === 'id' ? 'Masuk' : 'Sign In'}
            <FiArrowRight />
          </Link>
          <Link to={RegisterPath} className="action-submit">
            {locale === 'id' ? 'Daftar' : 'Sign Up'}
            <FiArrowRight />
          </Link>
          <Link to={AboutPath} className="action-submit action-about-page">
            {locale === 'id' ? 'Tentang PAYU' : 'About PAYU'}
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default InfoPage;
