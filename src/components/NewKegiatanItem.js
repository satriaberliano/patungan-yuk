import React from "react";
import { FaCoins } from 'react-icons/fa';
import { RiDeleteBinLine } from 'react-icons/ri';

function NewKegiatanItem({ Name, Spend }) {
  return (
    <div className='new-kegiatan__item'>
      <div className='new-kegiatan__content'>
        <p className='new-kegiatan__title'>{Name}</p>
        <p className='new-kegiatan__money'><FaCoins /> Rp {Spend}</p>
      </div>
      <div className='new-kegiatan__delete'>
        <button className='action-delete__kegiatan' aria-label='delete button'><RiDeleteBinLine /></button>
      </div>
    </div>
  );
}

export default NewKegiatanItem;
