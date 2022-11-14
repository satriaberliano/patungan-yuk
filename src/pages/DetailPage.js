import React from "react";
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { TambahPatunganPath } from '../routes';

function DetailPage(){
  return(
    <section className="detail-patungan">
      <section className="detail__dashboard">
        <h2>Halaman Patungan</h2>
        <div className="detail__dashboard-item">
          <section className="detail__dashboard-item-container">
            <div>
              <h3>Jalan - jalan ke Labuan Bajo</h3>
              <p>Mengisi waktu liburan tahun baru</p>
            </div>
            <div>
              <p>Saldo saat ini</p>
              <h3>Rp 12.000.000</h3>
            </div>
          </section>
        </div>
      </section>
      <section className="detail__list-user">
        <p className="detail__list-user-choice">Anggota</p>
        <div className="detail__list-user-item">
          <p className="detail__list-user-item__name">Hifki</p>
          <p className="detail__list-user-item__money">Rp 3.000.000</p>
        </div>
        <div className="detail__list-user-item">
          <p className="detail__list-user-item__name">Aldo</p>
          <p className="detail__list-user-item__money">Rp 3.000.000</p>
        </div>
        <div className="detail__list-user-item">
          <p className="detail__list-user-item__name">Satria</p>
          <p className="detail__list-user-item__money">Rp 3.000.000</p>
        </div>
        <div className="detail__list-user-item">
          <p className="detail__list-user-item__name">Bachtiar</p>
          <p className="detail__list-user-item__money">Rp 3.000.000</p>
        </div>
      </section>
      <section className="detail__action">
        <Link to={`${TambahPatunganPath}`}>
          <button className='action' type='button' title='Tambah'><FiPlus /></button>
        </Link>
      </section>
    </section>
  );
};

export default DetailPage;