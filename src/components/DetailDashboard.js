import React from "react";
import { FaUsers, FaCoins } from 'react-icons/fa';
import { HiOutlineTrash } from 'react-icons/hi';
import { Link } from "react-router-dom";
import { AddAnggotaPatunganPath, AddKegiatanPatunganPath } from "../routes";

function DetailDashboard({ deletePatungan, patunganTitle, numbersOfMember, balance, remainingBalance, idPatungan }){
  return(
    <div className="detail__dashboard-item">
      <div className="detail__dashboard-item__flex">
        <p className="detail__dashboard-item__name">{patunganTitle}</p>
        <button type="button" onClick={deletePatungan}><HiOutlineTrash /></button>
      </div>
      <div className="detail__dashboard-item__info">
        <p className="detail__dashboard-item__user"><FaUsers /> {numbersOfMember} anggota</p>
        <p className="detail__dashboard-item__money"><FaCoins /> Rp {balance}</p>
        <p className="detail__dashboard-item__leftover">Sisa patungan: Rp {remainingBalance}</p>
      </div>
      <div className="detail__dashboard-item-button">
        <button type="button"><Link to={`/detail-patungan/${idPatungan}/add/anggota`}>Tambah Anggota</Link></button>
        <button type="button"><Link to={`/detail-patungan/${idPatungan}/add/kegiatan`}>Tambah Kegiatan</Link></button>
      </div>
    </div>
  );
};

export default DetailDashboard;