import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import swal from 'sweetalert';
import { auth } from '../globals/firebase-config';
import { putAccessToken, getUserLogged } from '../utils/helper';
import LocaleContext from '../contexts/LocaleContext';
import useInput from '../hooks/useInput';

function LoginInput() {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const { locale } = React.useContext(LocaleContext);

  const navigate = useNavigate();

  const onLoginHandler = ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      // Signed in
        const user = userCredential.user.accessToken;
        swal({
          icon: 'success',
          title: `${locale === 'id' ? 'Login berhasil' : 'Login success'}`,
          buttons: false,
          timer: 1000,
        })
          .then(() => {
            putAccessToken(user);
            getUserLogged();
            navigate('/');
          });
      })
      .catch((error) => {
        swal({
          icon: 'error',
          title: `${locale === 'id' ? 'Login gagal' : 'Login failed'}`,
          text: `${locale === 'id' ? 'Periksa kembali email dan password anda' : 'Check your email and password again'}`,
        });
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    onLoginHandler({ email, password });
  };

  return (
    <div className="input-login">
      <form onSubmit={onSubmitHandler} className="login-input">
        <input className="input__action" type="email" id="email" placeholder="Email" value={email} onChange={onEmailChange} required />
        <input className="input__action" type="password" id="password" placeholder="Password" value={password} onChange={onPasswordChange} required />
        <div className="login__action">
          <button className="action-submit" type="submit" title="Simpan">
            {locale === 'id' ? 'Masuk' : 'Sign In'}
            <FiArrowRight />
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginInput;
