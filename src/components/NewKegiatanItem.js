import React from "react";
import { FaCoins } from 'react-icons/fa';
import { HiOutlineTrash } from 'react-icons/hi';

function NewKegiatanItem({ Name, Spend, id, onDelete }) {
  return (
    <div className='new-kegiatan__item'>
      <div className='new-kegiatan__content'>
        <p className='new-kegiatan__title'>{Name}</p>
        <p className='new-kegiatan__money'><FaCoins /> Rp {Spend}</p>
      </div>
      <div className='new-kegiatan__delete'>
        <button className='action-delete__kegiatan' aria-label='delete button' onClick={() => onDelete(id)}><HiOutlineTrash /></button>
      </div>
    </div>
  );
}

export default NewKegiatanItem;
