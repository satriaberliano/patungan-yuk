import React from "react";
import { FaCoins } from 'react-icons/fa';
import { HiOutlineTrash } from 'react-icons/hi';
import { FiPlusSquare } from 'react-icons/fi';
import { Link } from "react-router-dom";
import { AddUangPatunganPath } from "../routes";

function AnggotaList({ deleteAnggota }) {
  return(
  <div className="detail__list-user-container">
    <div className="detail__list-user__wrapper">
      <div className="detail__list-user-item">
        <p className="detail__list-user-item__name">Hifki</p>
        <p className="detail__list-user-item__money"><FaCoins /> Rp 3.000.000</p>
      </div>
      <div className="detail__list-user-button">
        <button onClick={deleteAnggota}><HiOutlineTrash /></button>
        <button><Link to={AddUangPatunganPath}><FiPlusSquare /></Link></button>
      </div>
    </div>
    <div className="detail__list-user__wrapper">
      <div className="detail__list-user-item">
        <p className="detail__list-user-item__name">Aldo</p>
        <p className="detail__list-user-item__money"><FaCoins /> Rp 3.000.000</p>
      </div>
      <div className="detail__list-user-button">
        <button onClick={deleteAnggota}><HiOutlineTrash /></button>
        <button><Link to={AddUangPatunganPath}><FiPlusSquare /></Link></button>
      </div>
    </div>  
    <div className="detail__list-user__wrapper">
      <div className="detail__list-user-item">
        <p className="detail__list-user-item__name">Satria</p>
        <p className="detail__list-user-item__money"><FaCoins /> Rp 3.000.000</p>
      </div>
      <div className="detail__list-user-button">
        <button onClick={deleteAnggota}><HiOutlineTrash /></button>
        <button><Link to={AddUangPatunganPath}><FiPlusSquare /></Link></button>
      </div>
    </div>
    <div className="detail__list-user__wrapper">
      <div className="detail__list-user-item">
        <p className="detail__list-user-item__name">Bachtiar</p>
        <p className="detail__list-user-item__money"><FaCoins /> Rp 3.000.000</p>
      </div>
      <div className="detail__list-user-button">
        <button onClick={deleteAnggota}><HiOutlineTrash /></button>
        <button><Link to={AddUangPatunganPath}><FiPlusSquare /></Link></button>
      </div>
    </div>
  </div>
  );
};

export default AnggotaList;