/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
import React from "react";
import { FaCoins } from 'react-icons/fa';

function KegiatanList({ patunganActivity, searchTerm }) {

  return(
  <div className="detail__list-activity-container">
    {patunganActivity.filter((val) => {
      if (searchTerm == "") {
        return val
      } else if (val.Name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val
      }
    }).map((activity) => {
      return <div className="detail__list-activity__wrapper" key={activity.id}>
                <div className="detail__list-activity-item">
                  <p className="detail__list-activity-item__name">{activity.Name}</p>
                  <p className="detail__list-activity-item__money"><FaCoins /> Rp {activity.Spend}</p>
                </div>
              </div>
    })}
  </div>
  );
};

export default KegiatanList;