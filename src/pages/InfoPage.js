import React from "react";
import { Link } from "react-router-dom";
import { LoginPath, RegisterPath, AboutPath } from '../routes';
import { FiArrowRight } from 'react-icons/fi';

function InfoPage() {
  return(
    <div className="info-page">
      <div className="info-page__text">
        <h2>Selamat Datang di PAYU</h2>
        <p>"Patungan Yuk"</p>
        <p>Aplikasi pencatatan patungan yang dapat mempermudah Anda dalam mengumpulkan uang bersama dengan teman, keluarga, dan semua orang di dunia.</p>
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
        <Link to={AboutPath} className='action-submit'>
          <p>Tentang PAYU</p>
          <FiArrowRight />
        </Link>
      </div>
    </div>
  )
};

export default InfoPage;