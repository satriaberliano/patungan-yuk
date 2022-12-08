import React from 'react';
import { FaCoins } from 'react-icons/fa';
import { HiOutlineTrash } from 'react-icons/hi';
import PropTypes from 'prop-types';

function NewKegiatanItem({
  Name, Spend, id, onDelete,
}) {
  const formatRupiah = (changeFormat) => new Intl.NumberFormat('de-ID', { style: 'decimal', currency: 'IDR' }).format(changeFormat);

  return (
    <div className="new-kegiatan__item">
      <div className="new-kegiatan__content">
        <p tabIndex="0" className="new-kegiatan__title">{Name}</p>
        <p tabIndex="0" className="new-kegiatan__money">
          <FaCoins />
          {' '}
          Rp
          {' '}
          {formatRupiah(Spend)}
        </p>
      </div>
      <div className="new-kegiatan__delete">
        <button className="action-delete__kegiatan" aria-label="delete button" onClick={() => onDelete(id)}><HiOutlineTrash /></button>
      </div>
    </div>
  );
}

NewKegiatanItem.propTypes = {
  Name: PropTypes.string.isRequired,
  Spend: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NewKegiatanItem;
