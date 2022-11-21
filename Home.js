import React from "react";
import { Link } from "react-router-dom";
import { DetailPatunganPath, AddNewPatunganPath } from "../routes";
import { FiPlusSquare, FiLogOut } from 'react-icons/fi';
import { FaUsers, FaCoins } from 'react-icons/fa';

function Home(){
  return(
    <section className="home">
      <section className="payu__dashboard">
        <div className="payu__dashboard-item">
          <div className="payu__dashboard-item__text">
            <h2>Hai, Pengguna!</h2>
            <p>Kamu  memiliki 3 Patungan</p>
          </div>
          <div className="payu__dashboard-item__button">
            <button type='button'><Link to={`${AddNewPatunganPath}`}><FiPlusSquare /></Link></button>
            <button type='button'><FiLogOut /></button>
          </div>
        </div>
      </section>
      <section className="payu__list-patungan">
        <div className="payu__list-patungan-item">
          <p className="payu__list-patungan-item__description">
            <Link to={`${DetailPatunganPath}`}>Jalan - jalan ke Labuan Bajo</Link>
          </p>
          <section className="payu__list-patungan-item__text">
            <p><FaUsers /> 4 anggota</p>
            <p><FaCoins /> Rp 12.000.000</p>
          </section>
        </div>
        <div className="payu__list-patungan-item">
          <p className="payu__list-patungan-item__description">
            <Link to={`${DetailPatunganPath}`}>Belanja ke Paris Van Java</Link>
          </p>
          <section className="payu__list-patungan-item__text">
            <p><FaUsers /> 2 anggota</p>
            <p><FaCoins /> Rp 4.000.000</p>
          </section>
        </div>
        <div className="payu__list-patungan-item">
          <p className="payu__list-patungan-item__description">
            <Link to={`${DetailPatunganPath}`}>Hangout</Link>
          </p>
          <section className="payu__list-patungan-item__text">
            <p><FaUsers /> 3 anggota</p>
            <p><FaCoins /> Rp 600.000</p>
          </section>
        </div>
      </section>
    </section>
  )
};

export default Home;