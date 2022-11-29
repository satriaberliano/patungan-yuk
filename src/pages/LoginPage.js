import React from "react";
import { Link } from "react-router-dom";
import { RegisterPath } from '../routes';
import LoginInput from "../components/LoginInput";
import LocaleContext from "../contexts/LocaleContext";

function LoginPage(){
  const { locale } = React.useContext(LocaleContext);

  return(
    <div className='login-page'>
      <div className='login-page__header'>
        <h2 tabindex="0">{locale === 'id' ? 'Masuk' : 'Sign In'}</h2>
        <p tabindex="0">{locale === 'id' ? 'Masukkan email dan password untuk melanjutkan' : 'Enter your email and password to continue'}</p>
      </div>
      <LoginInput />
      <p tabindex="0" className='login__link'>{locale === 'id' ? 'Belum memiliki akun? ' : 'Don\'t have an account yet? '}
        <Link to={RegisterPath}> {locale === 'id' ? 'Daftar' : 'Sign Up'}</Link>
      </p>
    </div>
  );
}

export default LoginPage;