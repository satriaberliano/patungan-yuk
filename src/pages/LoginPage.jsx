import React from 'react';
import { Link } from 'react-router-dom';
import { RegisterPath } from '../routes';
import LoginInput from '../components/LoginInput';
import LocaleContext from '../contexts/LocaleContext';
import logo from '../assets/login-patungan.png';

function LoginPage() {
  const { locale } = React.useContext(LocaleContext);

  return (
    <div className="login-page">
      <div className="login-page__container">
        <div className="login-page__header">
          <h2 tabIndex="0">{locale === 'id' ? 'Masuk' : 'Sign In'}</h2>
          <p tabIndex="0">{locale === 'id' ? 'Masukkan email dan password untuk melanjutkan' : 'Enter your email and password to continue'}</p>
        </div>
        <LoginInput />
        <p tabIndex="0" className="login__link">
          {locale === 'id' ? 'Belum memiliki akun? ' : 'Don\'t have an account yet? '}
          <Link to={RegisterPath}>
            {' '}
            {locale === 'id' ? 'Daftar' : 'Sign Up'}
          </Link>
        </p>
      </div>
      <div className="login-page__image">
        <img src={logo} alt="Gambar masuk aplikasi patungan" />
      </div>
    </div>
  );
}

export default LoginPage;
