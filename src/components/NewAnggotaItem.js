import React from "react";
import { FaCoins } from 'react-icons/fa';
import { RiDeleteBinLine } from 'react-icons/ri';

function NewAnggotaItem({ Name, Total, id, onDelete }) {
  return (
    <>
      <div className='new-anggota__item'>
        <div className='new-anggota__content'>
          <p className='new-anggota__name'>{Name}</p>
          <p className='new-anggota__money'><FaCoins /> Rp {Total}</p>
        </div>
        <div className='new-anggota__delete'>
          <button className='action-delete__anggota'aria-label='delete button' onClick={() => onDelete(id)}><RiDeleteBinLine /></button>
        </div>
      </div>
    </>
  );
}

export default NewAnggotaItem;