import React from "react";
import { Link } from "react-router-dom";
import { AboutPath, LoginPath, RegisterPath } from '../routes';
import { FiArrowRight } from 'react-icons/fi';
import logo from '../assets/patungan-image.png';

function InfoPage() {
  return(
    <div className="info-page">
      <div className="info-page__image">
        <img src={logo} alt="Gambar patungan"/>
      </div>
      <div className="info-page__container">
        <div className="info-page__text">
          <h2>Selamat Datang di PAYU</h2>
          <p className="info-page__text-acronym">Patungan Yuk!</p>
          <p className="info-page__text-desc">Aplikasi pencatatan patungan yang dapat mempermudah Anda dalam mengumpulkan uang bersama dengan teman, keluarga, dan semua orang di dunia.</p>
        </div>
        <div className="info-page__link">
          <Link to={LoginPath} className='action-submit'>
            <p>Masuk</p>
            <FiArrowRight />
          </Link>
          <Link to={RegisterPath} className='action-submit'>
            <p>Buat Akun</p>
            <FiArrowRight />
          </Link>
          <Link to={AboutPath} className='action-submit action-about-page'>
            <p>Tentang PAYU</p>
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </div>
  )
};

export default InfoPage;