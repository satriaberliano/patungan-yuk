import React from "react";
import { FaUsers, FaCoins } from 'react-icons/fa';

function SharedDetailDashboard({ patunganTitle, numbersOfMember, balance, remainingBalance }){
  return(
    <div className="detail__dashboard-item">
      <div className="detail__dashboard-item__flex">
        <p className="detail__dashboard-item__name">{patunganTitle}</p>
      </div>
      <div className="detail__dashboard-item__info">
        <p className="detail__dashboard-item__user"><FaUsers /> {numbersOfMember} anggota</p>
        <p className="detail__dashboard-item__money"><FaCoins /> Rp {balance}</p>
        <p className="detail__dashboard-item__leftover">Sisa patungan: Rp {remainingBalance}</p>
      </div>
    </div>
  );
};

export default SharedDetailDashboard;