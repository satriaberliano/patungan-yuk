import React from "react";
import useInput from "../hooks/useInput";
import { FiArrowRight } from "react-icons/fi";
import LocaleContext from "../contexts/LocaleContext";

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [confirmPassword, onConfirmPasswordChange] = useInput('');
  const { locale } = React.useContext(LocaleContext);

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
      alert(`${locale === 'id' ? 'Register Gagal, Password dan Confirm Password harus sama' : 'Registration Failed, Password and Confirm Password must be the same'}`);
    }
  }

  return (
    <div className='input-register'>
      <form onSubmit={onSubmitHandler} className='register-input'>
        <input className="input__action" type="text" placeholder={locale === 'id' ? 'Nama' : 'Name'} value={name} onChange={onNameChange} required/>
        <input className="input__action" type="email" placeholder="Email" value={email} onChange={onEmailChange} required/>
        <input className="input__action" type="password" placeholder="Password" value={password} onChange={onPasswordChange} required/>
        <input className="input__action" type="password" placeholder={locale === 'id' ? 'Konfirmasi Password' : 'Confirm Password'} value={confirmPassword} onChange={onConfirmPasswordChange} required/>
        <div className='register__action'>
          <button className='action-submit' type='submit' title='Simpan'>
            <p>{locale === 'id' ? 'Daftar' : 'Sign Up'}</p>
            <FiArrowRight />
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterInput;