import React from "react";
import useInput from "../hooks/useInput";
import { FiArrowRight } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { putAccessToken, getUserLogged } from "../utils/helper";
import LocaleContext from "../contexts/LocaleContext";

function LoginInput({ login }){
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const { locale } = React.useContext(LocaleContext);

  const navigate = useNavigate();

  const onLoginHandler = ({email, password}) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user.accessToken;
      alert('Login Berhasil')
      putAccessToken(user);
      getUserLogged();
      navigate('/');
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    onLoginHandler({email, password});
  }

  return (
    <div className='input-login'>
      <form onSubmit={onSubmitHandler} className='login-input'>
        <input className="input__action" type="email" id='email' placeholder="Email" value={email} onChange={onEmailChange} required/>
        <input className="input__action" type="password" id='password' placeholder="Password" value={password} onChange={onPasswordChange} required/>
        <div className='login__action'>
          <button className='action-submit' type='submit' title='Simpan'>
            <p>{locale === 'id' ? 'Masuk' : 'Sign In'}</p>
            <FiArrowRight />
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginInput;