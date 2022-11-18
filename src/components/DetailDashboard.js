import React from "react";
import { FaUsers, FaCoins } from 'react-icons/fa';
import { HiOutlineTrash } from 'react-icons/hi';
import { Link } from "react-router-dom";
import { AddAnggotaPatunganPath, AddKegiatanPatunganPath } from "../routes";

function DetailDashboard(){
  return(
    <div className="detail__dashboard-item">
      <div className="detail__dashboard-item__flex">
        <p className="detail__dashboard-item__name">Jalan - jalan ke Labuan Bajo</p>
        <button type="button"><HiOutlineTrash /></button>
      </div>
      <div className="detail__dashboard-item__info">
        <p className="detail__dashboard-item__user"><FaUsers /> 4 anggota</p>
        <p className="detail__dashboard-item__money"><FaCoins /> Rp 12.000.000</p>
        <p className="detail__dashboard-item__leftover">Sisa patungan: Rp 5.000.000</p>
      </div>
      <div className="detail__dashboard-item-button">
        <button type="button"><Link to={AddAnggotaPatunganPath}>Tambah Anggota</Link></button>
        <button type="button"><Link to={AddKegiatanPatunganPath}>Tambah Kegiatan</Link></button>
      </div>
    </div>
  );
};

export default DetailDashboard;