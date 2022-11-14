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
      <RegisterInput />
      <p className='register__link'>Kembali ke 
        <Link to={LoginPath}> Login</Link>
      </p>
    </div>
  );
}


export default RegisterPage;