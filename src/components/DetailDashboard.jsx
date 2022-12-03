import React from 'react';
import { FaUsers, FaCoins } from 'react-icons/fa';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { HiOutlineTrash } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import PropTypes from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';
import CONFIG from '../globals/config';

function DetailDashboard({
  deletePatungan,
  patunganTitle,
  numbersOfMember,
  balance,
  remainingBalance,
  idPatungan,
  patuganIdShare,
}) {
  const urlShared = `${CONFIG.sharedUrl}${patuganIdShare}`;
  const { locale } = React.useContext(LocaleContext);

  return (
    <div className="detail__dashboard-item">
      <div className="detail__dashboard-item__flex">
        <p tabIndex="0" className="detail__dashboard-item__name">{patunganTitle}</p>
        <div className="detail__dashboard-item__flex-button">
          <button type="button" onClick={deletePatungan} aria-label="delete button"><HiOutlineTrash /></button>
          <button
            title="Bagikan patungan"
            onClick={() => navigator.clipboard.writeText(urlShared)}
            onMouseUp={() => {
              swal({
                icon: 'success',
                title: `${locale === 'id' ? 'Link patungan berhasil dicopy' : 'The link was successfully copied'}`,
              });
            }}
          >
            <AiOutlineShareAlt />
          </button>
        </div>
      </div>
      <div className="detail__dashboard-item__info">
        <p tabIndex="0" className="detail__dashboard-item__user">
          <FaUsers />
          {' '}
          {numbersOfMember}
          {' '}
          {locale === 'id' ? 'Anggota' : 'Members'}
        </p>
        <p tabIndex="0" className="detail__dashboard-item__money">
          <FaCoins />
          {' '}
          Rp
          {' '}
          {balance}
        </p>
        {remainingBalance < 0 ? (
          <p tabIndex="0" className="detail__dashboard-item__leftover remaining-balance-red">
            {locale === 'id' ? 'Sisa patungan' : 'Current balance'}
            : Rp
            {' '}
            {remainingBalance}
          </p>
        ) : (
          <p tabIndex="0" className="detail__dashboard-item__leftover">
            {locale === 'id' ? 'Sisa patungan' : 'Current balance'}
            : Rp
            {' '}
            {remainingBalance}
          </p>
        )}
      </div>
      <div className="detail__dashboard-item-button">
        <button type="button"><Link to={`/detail-patungan/${idPatungan}/add/anggota`}>{locale === 'id' ? 'Tambah Anggota' : 'Add Member'}</Link></button>
        <button type="button"><Link to={`/detail-patungan/${idPatungan}/add/kegiatan`}>{locale === 'id' ? 'Tambah Kegiatan' : 'Add Activity'}</Link></button>
      </div>
    </div>
  );
}

DetailDashboard.propTypes = {
  deletePatungan: PropTypes.func.isRequired,
  patunganTitle: PropTypes.string.isRequired,
  numbersOfMember: PropTypes.number.isRequired,
  balance: PropTypes.number.isRequired,
  remainingBalance: PropTypes.number.isRequired,
  idPatungan: PropTypes.string.isRequired,
  patuganIdShare: PropTypes.string.isRequired,
};

export default DetailDashboard;
