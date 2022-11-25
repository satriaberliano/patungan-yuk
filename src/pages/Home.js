import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DetailPatunganPath, AddNewPatunganPath } from "../routes";
import { FiPlusSquare, FiLogOut } from 'react-icons/fi';
import { FaUsers, FaCoins } from 'react-icons/fa';
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { getUserName, putAccessToken } from "../utils/helper";

function Home(){
  const [currentUser, setCurrentUser] = useState();
  const navigate = useNavigate();

  const onLogoutHandler = () => {
    signOut(auth)
    .then(() => {
      alert('Logout Berhasil');
      putAccessToken('');
      navigate('/info');
    })
  }

  useEffect(() => {
    getUserName(setCurrentUser);
  }, []);

  return(
    <section className="home">
      <section className="payu__dashboard">
        <div className="payu__dashboard-item">
          <div className='payu__dashboard-item__title'>
            {currentUser && <h2>Hai, {currentUser}!</h2>}
            <p>Kamu memiliki 3 patungan</p>
          </div>
          <div className="payu__dashboard-item__patungan">
            <div className="payu__dashboard-item__button">
              <button type='button'><Link to={`${AddNewPatunganPath}`}><FiPlusSquare /></Link></button>
              <button type='button' onClick={onLogoutHandler}><FiLogOut /></button>
            </div>
          </div>
        </div>
      </section>
      <section className="payu__list-patungan">
        <Link to={`${DetailPatunganPath}`}>
          <div className="payu__list-patungan-item">
            <h3 className="payu__list-patungan-item__description">Jalan - jalan ke Labuan Bajo</h3>
            <section className="payu__list-patungan-item__text">
              <p><FaUsers /> 4 anggota</p>
              <p><FaCoins /> Rp 12.000.000</p>
            </section>
          </div>
        </Link>
        <Link to={`${DetailPatunganPath}`}>
          <div className="payu__list-patungan-item">
            <p className="payu__list-patungan-item__description">Belanja ke Paris Van Java</p>
            <section className="payu__list-patungan-item__text">
              <p><FaUsers /> 2 anggota</p>
              <p><FaCoins /> Rp 4.000.000</p>
            </section>
          </div>
        </Link>
        <Link to={`${DetailPatunganPath}`}>
          <div className="payu__list-patungan-item">
            <p className="payu__list-patungan-item__description">Hangout</p>
            <section className="payu__list-patungan-item__text">
              <p><FaUsers /> 3 anggota</p>
              <p><FaCoins /> Rp 600.000</p>
            </section>
          </div>
        </Link>
      </section>
    </section>
  )
};

export default Home;