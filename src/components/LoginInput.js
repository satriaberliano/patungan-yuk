import React from "react";
import useInput from "../hooks/useInput";
import { FiArrowRight } from 'react-icons/fi'

function LoginInput({ login }){
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const onSubmitHandler = (event) => {
    event.preventDefault();

    login({
      email,
      password,
    });
  }

  return (
    <div className='input-login'>
      <form onSubmit={onSubmitHandler} className='login-input'>
        <input className="input__action" type="email" id='email' placeholder="Email" value={email} onChange={onEmailChange} required/>
        <input className="input__action" type="password" id='password' placeholder="Password" value={password} onChange={onPasswordChange} required/>
        <div className='login__action'>
          <button className='action-submit' type='submit' title='Simpan'>
            <p>Masuk</p>
            <FiArrowRight />
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginInput;