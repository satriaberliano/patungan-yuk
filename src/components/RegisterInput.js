import React from "react";
import useInput from "../hooks/useInput";
import { FiArrowRight } from "react-icons/fi";

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [confirmPassword, onConfirmPasswordChange] = useInput('');

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if(password === confirmPassword){
      register({
        name: name,
        email: email,
        password: password,
      });
    }
    else{
      alert('Register Gagal, Password dan Confirm Password harus sama')
    }
  }

  return (
    <div className='input-register'>
      <form onSubmit={onSubmitHandler} className='register-input'>
        <h2>Register</h2>
        <input className="input__action" type="text" placeholder="Nama" value={name} onChange={onNameChange} required/>
        <input className="input__action" type="email" placeholder="Email" value={email} onChange={onEmailChange} required/>
        <input className="input__action" type="password" placeholder="Password" value={password} onChange={onPasswordChange} required/>
        <input className="input__action" type="password" placeholder="Konfirmasi Password" value={confirmPassword} onChange={onConfirmPasswordChange} required/>
        <div className='register__action'>
          <button className='action-submit' type='submit' title='Simpan'>
            <p>Buat Akun</p>
            <FiArrowRight />
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterInput;