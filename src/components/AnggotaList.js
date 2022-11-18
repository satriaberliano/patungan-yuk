import React from "react";
import { FaCoins } from 'react-icons/fa';

function AnggotaList() {
  return(
  <div className="detail__list-user-container">
    <div className="detail__list-user-item">
      <p className="detail__list-user-item__name">Hifki</p>
      <p className="detail__list-user-item__money"><FaCoins /> Rp 3.000.000</p>
    </div>
    <div className="detail__list-user-item">
      <p className="detail__list-user-item__name">Aldo</p>
      <p className="detail__list-user-item__money"><FaCoins /> Rp 3.000.000</p>
    </div>
    <div className="detail__list-user-item">
      <p className="detail__list-user-item__name">Satria</p>
      <p className="detail__list-user-item__money"><FaCoins /> Rp 3.000.000</p>
    </div>
    <div className="detail__list-user-item">
      <p className="detail__list-user-item__name">Bachtiar</p>
      <p className="detail__list-user-item__money"><FaCoins /> Rp 3.000.000</p>
    </div>
  </div>
  );
};

export default AnggotaList;