import React from 'react';
import { FaCoins } from 'react-icons/fa';
import PropTypes from 'prop-types';

function SharedKegiatanList({ patunganActivity, searchTerm }) {
  const formatRupiah = (changeFormat) => new Intl.NumberFormat('de-ID', { style: 'decimal', currency: 'IDR' }).format(changeFormat);

  return (
    <div className="detail__list-activity-container">
      {patunganActivity.filter((val) => {
        if (searchTerm == '') {
          return val;
        } if (val.Name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val;
        }
      }).map((activity) => (
        <div className="detail__list-activity__wrapper" key={activity.id}>
          <div className="detail__list-activity-item">
            <p className="detail__list-activity-item__name">{activity.Name}</p>
            <p className="detail__list-activity-item__money">
              <FaCoins />
              {' '}
              Rp
              {' '}
              {formatRupiah(activity.Spend)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

SharedKegiatanList.propTypes = {
  patunganActivity: PropTypes.array.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export default SharedKegiatanList;
