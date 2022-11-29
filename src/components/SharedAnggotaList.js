import React from "react";
import { FaCoins } from 'react-icons/fa';


function SharedAnggotaList({ patunganMembers, searchTerm }) {
  
  return(
  <div className="detail__list-user-container">
    {patunganMembers.filter((val) =>{
      if (searchTerm == "") {
        return val
      } else if (val.Name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val
      }
    }).map((member) => {
      return <div className="detail__list-user__wrapper" key={member.id}>
                <div className="detail__list-user-item">
                  <p className="detail__list-user-item__name">{member.Name}</p>
                  <p className="detail__list-user-item__money"><FaCoins /> Rp {member.Total}</p>
                </div>
              </div>
    })}
  </div>
  );
};

export default SharedAnggotaList;