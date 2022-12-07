import React from 'react';
import { FaCoins } from 'react-icons/fa';
import PropTypes from 'prop-types';

function SharedAnggotaList({ patunganMembers, searchTerm }) {
  const formatRupiah = (changeFormat) => new Intl.NumberFormat('de-ID', { style: 'decimal', currency: 'IDR' }).format(changeFormat);

  return (
    <div className="detail__list-user-container">
      {patunganMembers.filter((val) => {
        if (searchTerm == '') {
          return val;
        } if (val.Name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val;
        }
      }).map((member) => (
        <div className="detail__list-user__wrapper" key={member.id}>
          <div className="detail__list-user-item">
            <p className="detail__list-user-item__name">{member.Name}</p>
            <p className="detail__list-user-item__money">
              <FaCoins />
              {' '}
              Rp
              {' '}
              {formatRupiah(member.Total)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

SharedAnggotaList.propTypes = {
  patunganMembers: PropTypes.array.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export default SharedAnggotaList;
