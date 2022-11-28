import React from "react";
import { Link } from "react-router-dom";
import { AboutPath, LoginPath, RegisterPath } from '../routes';
import { FiArrowRight } from 'react-icons/fi';
import logo from '../assets/patungan-image.png';
import LocaleContext from "../contexts/LocaleContext";

function InfoPage() {
  const { locale } = React.useContext(LocaleContext);

  return(
    <div className="info-page">
      <div className="info-page__image">
        <img src={logo} alt="Gambar patungan"/>
      </div>
      <div className="info-page__container">
        <div className="info-page__text">
          <h2>{locale === 'id' ? 'Selamat Datang di PAYU' : 'Welcome to PAYU'}</h2>
          <p className="info-page__text-acronym">Patungan Yuk!</p>
          <p className="info-page__text-desc">
          {locale === 'id' ? 'Aplikasi pencatatan patungan yang dapat mempermudah Anda dalam mengumpulkan uang bersama dengan teman, keluarga, dan semua orang di dunia' : 'A joint record-keeping application that can make it easier for you to collect money together with friends, family, and everyone in the world'}.
          </p>
        </div>
        <div className="info-page__link">
          <Link to={LoginPath} className='action-submit'>
            <p>{locale === 'id' ? 'Masuk' : 'Sign In'}</p>
            <FiArrowRight />
          </Link>
          <Link to={RegisterPath} className='action-submit'>
            <p>{locale === 'id' ? 'Daftar' : 'Sign Up'}</p>
            <FiArrowRight />
          </Link>
          <Link to={AboutPath} className='action-submit action-about-page'>
            <p>{locale === 'id' ? 'Tentang PAYU' : 'About PAYU'}</p>
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </div>
  )
};

export default InfoPage;