import React from "react";
import { FaCoins } from 'react-icons/fa';
import { HiOutlineTrash, HiOutlinePencil } from 'react-icons/hi';
import { Link } from "react-router-dom";
import { ChangeKegiatanPath } from "../routes";

function KegiatanList({ deleteKegiatan }) {
  return(
  <div className="detail__list-activity-container">
    <div className="detail__list-activity__wrapper">
      <div className="detail__list-activity-item">
        <p className="detail__list-activity-item__name">Biaya hotel 5 hari</p>
        <p className="detail__list-activity-item__money"><FaCoins /> Rp 3.000.000</p>
      </div>
      <div className="detail__list-activity-button">
        <button onClick={deleteKegiatan}><HiOutlineTrash /></button>
        <button><Link to={ChangeKegiatanPath}><HiOutlinePencil /></Link></button>
      </div>
    </div>
    <div className="detail__list-activity__wrapper">
      <div className="detail__list-activity-item">
        <p className="detail__list-activity-item__name">Sewa mobil</p>
        <p className="detail__list-activity-item__money"><FaCoins /> Rp 3.000.000</p>
      </div>
      <div className="detail__list-activity-button">
        <button onClick={deleteKegiatan}><HiOutlineTrash /></button>
        <button><Link to={ChangeKegiatanPath}><HiOutlinePencil /></Link></button>
      </div>
    </div>
    <div className="detail__list-activity__wrapper">
      <div className="detail__list-activity-item">
        <p className="detail__list-activity-item__name">Makan malam</p>
        <p className="detail__list-activity-item__money"><FaCoins /> Rp 3.000.000</p>
      </div>
      <div className="detail__list-activity-button">
        <button onClick={deleteKegiatan}><HiOutlineTrash /></button>
        <button><Link to={ChangeKegiatanPath}><HiOutlinePencil /></Link></button>
      </div>
    </div>
    <div className="detail__list-activity__wrapper">
      <div className="detail__list-activity-item">
        <p className="detail__list-activity-item__name">Biaya masuk wisata</p>
        <p className="detail__list-activity-item__money"><FaCoins /> Rp 3.000.000</p>
      </div>
      <div className="detail__list-activity-button">
        <button onClick={deleteKegiatan}><HiOutlineTrash /></button>
        <button><Link to={ChangeKegiatanPath}><HiOutlinePencil /></Link></button>
      </div>
    </div>
  </div>
  );
};

export default KegiatanList;