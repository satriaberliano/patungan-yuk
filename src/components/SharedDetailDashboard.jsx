import React from 'react';
import { FaUsers, FaCoins } from 'react-icons/fa';
import PropTypes from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';

function SharedDetailDashboard({
  patunganTitle, numbersOfMember, balance, remainingBalance,
}) {
  const { locale } = React.useContext(LocaleContext);

  return (
    <div className="detail__dashboard-item">
      <div className="detail__dashboard-item__flex">
        <p className="detail__dashboard-item__name">{patunganTitle}</p>
      </div>
      <div className="detail__dashboard-item__info">
        <p className="detail__dashboard-item__user">
          <FaUsers />
          {' '}
          {numbersOfMember}
          {' '}
          {locale === 'id' ? 'Anggota' : 'Members'}
        </p>
        <p className="detail__dashboard-item__money">
          <FaCoins />
          {' '}
          Rp
          {' '}
          {balance}
        </p>
        <p className="detail__dashboard-item__leftover">
          {locale === 'id' ? 'Sisa patungan' : 'Current balance'}
          : Rp
          {' '}
          {remainingBalance}
        </p>
      </div>
    </div>
  );
}

SharedDetailDashboard.propTypes = {
  patunganTitle: PropTypes.string.isRequired,
  numbersOfMember: PropTypes.number.isRequired,
  balance: PropTypes.number.isRequired,
  remainingBalance: PropTypes.number.isRequired,
};

export default SharedDetailDashboard;
