import React from 'react';
import { FaCoins } from 'react-icons/fa';
import { HiOutlineTrash } from 'react-icons/hi';
import PropTypes from 'prop-types';

function NewAnggotaItem({
  Name, Total, id, onDelete,
}) {
  return (
    <div className="new-anggota__item">
      <div className="new-anggota__content">
        <p className="new-anggota__name">{Name}</p>
        <p className="new-anggota__money">
          <FaCoins />
          {' '}
          Rp
          {' '}
          {Total}
        </p>
      </div>
      <div className="new-anggota__delete">
        <button className="action-delete__anggota" aria-label="delete button" onClick={() => onDelete(id)}><HiOutlineTrash /></button>
      </div>
    </div>
  );
}

NewAnggotaItem.propTypes = {
  Name: PropTypes.string.isRequired,
  Total: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NewAnggotaItem;
