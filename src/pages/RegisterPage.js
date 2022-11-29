import React from "react";
import RegisterInput from "../components/RegisterInput";
import { Link } from "react-router-dom";
import { LoginPath } from "../routes";
import LocaleContext from "../contexts/LocaleContext";

function RegisterPage(){
  const { locale } = React.useContext(LocaleContext);

  return (
    <div className="register-page">
      <div className="register-page__header">
        <h2 tabindex="0">{locale === 'id' ? 'Daftar' : 'Sign Up'}</h2>
        <p tabindex="0">{locale === 'id' ? 'Silakan registrasi untuk membuat akun' : 'Please register to create an account'}</p>
      </div>
      <RegisterInput />
      <p tabindex="0" className='register__link'>{locale === 'id' ? 'Kembali ke ' : 'Back to '}
        <Link to={LoginPath}>{locale === 'id' ? 'Masuk' : 'Sign In'}</Link>
      </p>
    </div>
  );
}


export default RegisterPage;