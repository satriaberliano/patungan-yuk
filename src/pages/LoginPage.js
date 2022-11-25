import React from "react";
import { Link } from "react-router-dom";
import { RegisterPath } from '../routes';
import LoginInput from "../components/LoginInput";

function LoginPage(){
  // async function onLogin({ email, password }) {
  //   const { error, data } = await login({ email, password });
  //   if(!error) {
  //     alert('Login Berhasil');
  //   }
  // }

  return(
    <div className='login-page'>
      <div className='login-page__header'>
        <h2>Masuk</h2>
        <p>Masukkan email dan password untuk melanjutkan</p>
      </div>
      <LoginInput />
      <p className='login__link'>Belum memiliki akun?
        <Link to={RegisterPath}> Buat akun</Link>
      </p>
    </div>
  );
}

export default LoginPage;