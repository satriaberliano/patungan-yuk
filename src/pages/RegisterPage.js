import React from "react";
import RegisterInput from "../components/RegisterInput";
import { Link } from "react-router-dom";
import { LoginPath } from "../routes";

function RegisterPage(){
  // async function onRegisterHandler(user) {
  // const { error } = await register(user);
  // if (!error) {
  // alert('Register Berhasil');
  //}
  // }

  return (
    <div className="register-page">
      <div className="register-page__header">
        <h2>Buat Akun</h2>
        <p>Silakan registrasi untuk membuat akun</p>
      </div>
      <RegisterInput />
      <p className='register__link'>Kembali ke 
        <Link to={LoginPath}> Masuk</Link>
      </p>
    </div>
  );
}


export default RegisterPage;