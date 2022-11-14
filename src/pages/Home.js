import React from "react";
import { Link } from "react-router-dom";
import { DetailPatunganPath } from "../routes";

function Home(){
  return(
    <section className="home">
      <section className="payu__dashboard">
        <h2>Dashboard</h2>
        <div className="payu__dashboard-item">
          <section className="payu__dashboard-item-container">
            <div>
              <h3>Halo, Pengguna!</h3>
            </div>
            <div>
              <p>Kamu  memiliki</p>
              <h3>3 Patungan</h3>
            </div>
          </section>
        </div>
      </section>
      <section className="payu__list-patungan">
        <h2>Daftar Patungan Kamu</h2>
        <div className="payu__list-patungan-item">
          <p className="payu__list-patungan-item__description">
            <Link to={`${DetailPatunganPath}`}>Jalan - jalan ke Labuan Bajo</Link>
          </p>
          <section className="payu__list-patungan-item__text">
            <p>4 anggota</p>
            <p>Rp 12.000.000</p>
          </section>
        </div>
        <div className="payu__list-patungan-item">
          <p className="payu__list-patungan-item__description">
            <Link to={`${DetailPatunganPath}`}>Belanja ke Paris Van Java</Link>
          </p>
          <section className="payu__list-patungan-item__text">
            <p>2 anggota</p>
            <p>Rp 4.000.000</p>
          </section>
        </div>
        <div className="payu__list-patungan-item">
          <p className="payu__list-patungan-item__description">
            <Link to={`${DetailPatunganPath}`}>Hangout</Link>
          </p>
          <section className="payu__list-patungan-item__text">
            <p>3 anggota</p>
            <p>Rp 600.000</p>
          </section>
        </div>
      </section>
    </section>
  )
};

export default Home;