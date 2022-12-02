import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { ref, set } from 'firebase/database';
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import LocaleContext from '../contexts/LocaleContext';
import { auth, userDatabase } from '../config/firebase-config';
import useInput from '../hooks/useInput';

function RegisterInput() {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [confirmPassword, onConfirmPasswordChange] = useInput('');
  const { locale } = React.useContext(LocaleContext);
  const navigate = useNavigate();

  const onRegisterHandler = async ({ email, name, password }) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const { user } = userCredential;
          set(ref(userDatabase, `users/${user.uid}`), {
            name,
            email,
            password,
          });
          swal({
            icon: 'success',
            title: `${locale === 'id' ? 'Registrasi berhasil' : 'Registration success'}`,
            buttons: false,
            timer: 1000,
          })
            .then(() => {
              navigate('/login');
            });
        })
        .catch((error) => {
          swal({
            icon: 'error',
            title: error.message,
          });
        });
      await sendEmailVerification(auth.currentUser).catch((error) => console.log(error.message));
      await updateProfile(auth.currentUser, { displayName: name }).catch((error) => console.log(error.message));
    } catch (error) {
      console.log(error.message);
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (password === confirmPassword) {
      onRegisterHandler({ email, name, password });
    } else {
      swal({
        icon: 'error',
        title: `${locale === 'id' ? 'Pendaftaran Gagal' : 'Registration Failed'}`,
        text: `${locale === 'id' ? 'Password dan Confirm Password harus sama' : 'Password and Confirm Password must be the same'}`,
      });
    }
  };

  return (
    <div className="input-register">
      <form onSubmit={onSubmitHandler} className="register-input">
        <input className="input__action" type="text" placeholder={locale === 'id' ? 'Nama' : 'Name'} value={name} onChange={onNameChange} required />
        <input className="input__action" type="email" placeholder="Email" value={email} onChange={onEmailChange} required />
        <input className="input__action" type="password" placeholder="Password" value={password} onChange={onPasswordChange} required />
        <input className="input__action" type="password" placeholder={locale === 'id' ? 'Konfirmasi Password' : 'Confirm Password'} value={confirmPassword} onChange={onConfirmPasswordChange} required />
        <div className="register__action">
          <button className="action-submit" type="submit" title="Simpan">
            <p>{locale === 'id' ? 'Daftar' : 'Sign Up'}</p>
            <FiArrowRight />
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterInput;
