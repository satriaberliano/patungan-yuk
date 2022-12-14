import React from 'react';
import { Link } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { LoginPath } from '../routes';
import LocaleContext from '../contexts/LocaleContext';
import logo from '../assets/signup-patungan.png';

function RegisterPage() {
  const { locale } = React.useContext(LocaleContext);

  return (
    <div className="register-page">
      <div className="register-page__image">
        <img src={logo} alt="Gambar daftar aplikasi patungan" />
      </div>
      <div className="register-page__container">
        <div className="register-page__header">
          <h2 tabIndex="0">{locale === 'id' ? 'Daftar' : 'Sign Up'}</h2>
          <p tabIndex="0">{locale === 'id' ? 'Silakan registrasi untuk membuat akun' : 'Please register to create an account'}</p>
        </div>
        <RegisterInput />
        <p tabIndex="0" className="register__link">
          {locale === 'id' ? 'Kembali ke ' : 'Back to '}
          <Link to={LoginPath}>{locale === 'id' ? 'Masuk' : 'Sign In'}</Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
